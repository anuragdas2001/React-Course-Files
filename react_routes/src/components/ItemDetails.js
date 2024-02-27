import { useParams } from "react-router-dom";
import { itemsData } from "../data/itemData";
export default function ItemDetails() {
  const { id } = useParams();
  const itemid = itemsData.id;
//   console.log(id);
  // const {itemId} = useParams();
  // console.log({itemId})
  const item = itemsData.find((item) => item.id === id);
//   console.log(item);
  return (<>
        <h1>Item Details</h1>
        <h2>Item Title:{item.title}</h2>
        <h3>Item Description:{item.description}</h3>
  </>);
}
