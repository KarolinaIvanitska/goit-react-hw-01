import FriendList from "./components/FriendList";
import Profile from "./components/Profile";
import userData from "./userData.json";
import friends from "./friends.json";
// import FriendListItem from "./components/FriendListItem";
import clsx from "clsx";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
    </>
  );
};

export default App;
