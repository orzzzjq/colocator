import Message from "./Message";
import ListGroup from "./ListGroup";
import { useState } from "react";

function App() {
  const [items, setArray] = useState(["China", "Singapore", "Austra"]);
  const handleDeleteItem = (index: number, item: string) => {
    console.log(index, item);
    const newItems = items.filter((it, i) => i != index);
    setArray(newItems);
  };
  return (
    <div>
      {Message("World")}
      <ListGroup items={items} onDeleteItem={handleDeleteItem}></ListGroup>
    </div>
  );
}

export default App;
