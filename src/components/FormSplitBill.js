import { useState } from "react";
import Button from "./Button";

export default function FormSplitBill({ selectedFriend }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("");
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
        onChange={(e) =>
          setPaidByUser(+e.target.value > bill ? paidByUser : +e.target.value)
        }
      ></input>

      <label>👬 {selectedFriend.name} Expenses:</label>
      <input type="text" disabled value={paidByFriend}></input>

      <label>😉 Who is paying?</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}
