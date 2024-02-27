import { Link } from "react-router-dom";
import { itemsData } from "../data/itemData";
export default function Items() {
  return (
    <>
      <h1>Items Page</h1>
      <Link to="/">Back</Link>
      <br></br>
      {/* <Link to="/items/item1">Items1</Link>
      <Link to="/items/item2">Items2</Link>
      <Link to="/items/item3">Items3</Link>
      <Link to="/items/item4">Items4</Link>
       */}
      <ul>
        {itemsData.map((item) => (
          <Link to={`/items/${item.id}`}><li>{item.id}</li></Link>
        ))}
      </ul>
    </>
  );
}
