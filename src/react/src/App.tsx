import Message from "./Message";
import ListGroup from "./ListGroup";
import Passcode from "./Passcode";
import { useState } from "react";
import { FormEvent } from "react";
import sha256 from "crypto-js/sha256";

function App() {
  const [items, setArray] = useState(["China", "Singapore", "Austra"]);
  const [passcode, setPasscode] = useState("");
  const [message, setMessage] = useState("World");
  const handleDeleteItem = (index: number, item: string) => {
    console.log(index, item);
    const newItems = items.filter((it, idx) => idx != index);
    setArray(newItems);
  };
  const handlePasscodeChange = (s: string) => {
    setPasscode(s);
  };
  const handlePasscodeSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage(passcode);
  };
  return (
    <div>
      {sha256(message).toString() ===
      "2894202abed11aeb99c3ed7be0ad7318f3257ec43edc8bd05cd512f1b64545cd"
        ? Message("Welcome")
        : Message("World")}
      <ListGroup items={items} onDeleteItem={handleDeleteItem}></ListGroup>
      <Passcode
        handleChange={handlePasscodeChange}
        handleSubmit={handlePasscodeSubmit}
      />
    </div>
  );
}

export default App;
