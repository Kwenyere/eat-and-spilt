import Button from "./Button";

export default function FormAddFriendList() {
  return (
    <form className="form-add-friend">
      <label>👬 Friend Name:</label>
      <input type="text"></input>

      <label>🖼 Image UrL:</label>
      <input type="text"></input>

      <Button>Add</Button>
    </form>
  );
}
