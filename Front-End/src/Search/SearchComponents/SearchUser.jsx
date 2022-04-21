import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import FlashOnRoundedIcon from '@mui/icons-material/FlashOnRounded';
// import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
// import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import RepeatRoundedIcon from '@mui/icons-material/RepeatRounded';
// import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import PropTypes from 'prop-types';
// import { Route, Link, BrowserRouter, withRouter } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import styles from './SearchUser.module.css';
// import ReactRoundedImage from "react-rounded-image";
// import MyPhoto from "./images/me.jpg";

/**
 * @param {Number} profileid      Id
 * @param {String} displayname      User display name (user first name).
 * @param {String} username      User display name (user first name).
 * @param {String} description       text.
 * @param {String} url
 *
 /**
 return notifications content inside feed insidd notifications component
 */

function SearchUser({
  profileid, displayname, username, description, url,
}) {
  const navigate = useNavigate();
  // const icon = null;
  // const statement1 = null;
  // const statement2 = null;
  // const statement3 = null;
  // console.log(content);

  const handleOpenProfile = () => {
    console.log(profileid);
    return navigate('/Profile', {
      state: {
        profileid,
      },
    });
  };

  const handlefollow = (e) => {
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();
    if (e.target.className === styles.tweetfollowbutton) {
      e.target.className = styles.tweetfollowingbutton;
      e.target.textContent = 'Following';
    } else {
      e.target.className = styles.tweetfollowbutton;
      e.target.textContent = 'Follow';
    }
  };

  const handleEnter = (e) => {
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();
    if (e.target.className === styles.tweetfollowingbutton) {
      e.target.textContent = 'Unfollow';
      e.target.className = styles.tweetfollowingbuttonhover;
    }
  };

  const handleLeave = (e) => {
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();
    if (e.target.className === styles.tweetfollowingbuttonhover) {
      e.target.textContent = 'Following';
      e.target.className = styles.tweetfollowingbutton;
    }
  };

  // const pp = <AccountCircleIcon />;

  return (
    <button className={styles.wrapper} type="button" onClick={handleOpenProfile}>
      <div className={styles.wrapper2}>
        <img
          alt=""
          src={url}
          style={{ width: 60, height: 60, borderRadius: 60 / 2 }}
        />

        {/* <AccountCircleIcon /> */}
        <div data-testid="noticontent-avatar-render-test" className={styles.postavatar}>
          <b>{displayname}</b>
        </div>

      </div>
      <div className={styles.username}>
        @
        {username}
        <button className={styles.tweetfollowbutton} type="button" id="followbutton" onClick={handlefollow} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
          Follow
        </button>
      </div>

      <div>
        <div className={styles.description}>
          {description}

        </div>

      </div>
      {' '}

      <div data-testid="content-render-test">
        <br />
      </div>
    </button>
  );
}

SearchUser.propTypes = {
  profileid: PropTypes.number.isRequired,
  displayname: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,

};

export default SearchUser;
