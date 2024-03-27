//Components
import FriendList from "./components/FriendList";
import Profile from "./components/Profile";
import TransactionHistory from "./components/TransactionHistory";
//json
import transactions from "./transactions.json";
import userData from "./userData.json";
import friends from "./friends.json";
//clsx
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
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
