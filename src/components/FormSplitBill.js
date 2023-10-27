import { useState } from "react";
import Button from "./Button";

export default function FormSplitBill({ selectedFriend }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  return (
    <form className="form-split-bill">
      <h2>Split Bill With {selectedFriend.name}</h2>
      <label>💰 Bill Value:</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(+e.target.value)}
      ></input>

      <label>👨 Your Expenses:</label>
      <input
        type="text"
        value={paidByUser}
        onChange={(e) => setPaidByUser(+e.target.value)}
      ></input>

      <label>👬 {selectedFriend.name} Expenses:</label>
      <input type="text" disabled></input>

      <label>😉 Who is paying?</label>
      <select>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}
