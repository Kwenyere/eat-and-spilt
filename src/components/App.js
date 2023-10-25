import FriendsList from "./FriendsList";
import FormAddFriendList from "./FormAddFriend";
import Button from "./Button";
import FormSplitBill from "./FormSplitBill";
import { useState } from "react";

export default function App() {
  const [addFriend, setAddFriend] = useState(false);
  function handleAddFriend() {
    setAddFriend((addFriend) => !addFriend);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        {addFriend && <FormAddFriendList />}
        <Button onClick={handleAddFriend}>
          {addFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      <FormSplitBill />
    </div>
  );
}
