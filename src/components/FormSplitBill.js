import Button from "./Button";

export default function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split Bill With Izuu</h2>
      <label>💰 Bill Value:</label>
      <input type="text"></input>

      <label>👨 Your Expenses:</label>
      <input type="text"></input>

      <label>👬 Izuu Expenses:</label>
      <input type="text" disabled></input>

      <label>😉 Who is paying?</label>
      <select>
        <option value="user">You</option>
        <option value="friend">Izuu</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}
