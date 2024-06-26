import css from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <div className={css.container_card}>
        <img src={avatar} alt="Avatar" width="48" />
        <p> {name}</p>
        <p
          className={
            isOnline
              ? css["friend-status-online"]
              : css["friend-status-offline"]
          }
        >
          {isOnline ? "Online" : "Offline"}
        </p>
      </div>
    </>
  );
};

export default FriendListItem;
