import css from "./Profile.module.css";

const Profile = (props) => {
  return (
    <div className={css.wrapper}>
      <div className={css.card}>
        <div className={css.portfolio_img}>
          <img src={props.image} alt="User avatar" />
        </div>
        <p className={css.text_p}>{props.name}</p>
        <p>@{props.tag}</p>
        <p>{props.location}</p>
      </div>

      <ul className={css.ul_portfolio}>
        <li>
          <span>Followers</span>
          <span className={css.text_p}>{props.stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span className={css.text_p}>{props.stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span className={css.text_p}>{props.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
