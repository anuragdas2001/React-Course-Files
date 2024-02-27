import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Items from "./components/Items.js";
import Navbar from "./components/Navbar.js";
import ItemDetails from "./components/ItemDetails.js";
import ErrorPage from "./components/ErrorPage.js";
function App() {
  // const routes = createRoutesFromElements(
  //     <>
  //       <Route path="/" element={<Home/>}/>
  //       <Route path="/about" element={<About/>}/>
  //       <Route path="/items" element={<Items/>}/>
  //     </>
  //   )

  //   const router = createBrowserRouter(routes);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      errorElement:<ErrorPage/>,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        {
          path: "/items",
          // element: <Items />,
          children: [
            {path:"/items",element:<Items/>},
            {
              path: "/items/:id",
              element:<ItemDetails/>
            },
          ],
        },
        // { path: "/items/:itemId", element: <ItemDetails />, },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
