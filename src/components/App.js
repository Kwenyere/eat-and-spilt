import FriendsList from "./FriendsList";
import FormAddFriendList from "./FormAddFriend";
import Button from "./Button";
import FormSplitBill from "./FormSplitBill";

export default function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        <FormAddFriendList />
        <Button>Add Friend</Button>
      </div>
      <FormSplitBill />
    </div>
  );
}
