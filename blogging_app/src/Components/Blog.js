import { useState, useRef, useEffect,useReducer } from "react";
function blogsReducer(state,action){
  switch(action.type){
    case "ADD":
      return [action.blog,...state]
    case "REMOVE": 
      return state.filter((blog,index)=>index!==action.index)

    default:
      return [];
  }
}
export default function Blog() {
  //   const [title, setTitle] = useState("");
  //   const [content, setContent] = useState("");
  const [formData, setformData] = useState({ title: "", content: "" });
  // const [blogs, setBlogs] = useState([]);
  const [blogs,dispatch] = useReducer(blogsReducer,[])
  const titleref = useRef(null);
  useEffect(()=>{
    if(blogs.length && blogs[0].title){
      document.title = blogs[0].title
    }
    else{
      document.title = "No Blogs"
    }
  },[blogs])
  function handleSubmit(e) {
    e.preventDefault();

    // setTitle(e.target.value);
    // console.log(e.target.value)
    // console.log(e)
    // console.log(title)
    // console.log(content)
    // setBlogs([{ title, content },...blogs]); //Rest Operator
    // setBlogs([{ title: formData.title, content: formData.content }, ...blogs]); //Rest Operator
    dispatch({type:"ADD",blog:{title: formData.title, content: formData.content }})
    // setTitle("")
    // setContent("")
    setformData({ title: "", content: "" });
    // console.log(blogs);
    titleref.current.focus();

    // document.title = titleref.current.value;
  }
  useEffect(() => {
    titleref.current.focus();
  }, []);
  function handleDelete(index) {
    console.log("Inside handleDelete");
    // setBlogs(blogs.filter((blog, i) => i !== index));
    dispatch({type:"REMOVE",index})
  }

  return (
    <>
      <h1>Write a Blog</h1>
      <div className="section">
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            placeholder="Title"
            value={formData.title}
            ref={titleref}
            onChange={(e) =>
              setformData({ title: e.target.value, content: formData.content })
            }
          ></input>
          <input
            placeholder="Content"
            value={formData.content}
            onChange={(e) =>
              setformData({ title: formData.title, content: e.target.value })
            }
          ></input>
          <button>Add</button>
        </form>
      </div>
      <div>
        <h2>Blogs</h2>
        <ul>
          {blogs.map((blog, index) => {
            return (
              <>
                <div key={index}>
                  <button onClick={() => handleDelete(index)}>X</button>
                  <h2>{blog.title}</h2>
                  <p>{blog.content}</p>
                </div>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
}
