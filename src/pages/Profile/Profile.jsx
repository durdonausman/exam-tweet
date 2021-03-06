import "../Feed/feed.css";
import { useParams } from "react-router-dom";
import users from "../../assets/data";
import { Link } from "react-router-dom";

import logo from "../../Images/twitter-logo.png";
import starIcon from "../../Images/star.png";
import userPic from "../../Images/user-pic.png";
import galleryIcon from "../../Images/gallery-icon.png";
import gifIcon from "../../Images/gif.icon.png";
import statisticsIcon from "../../Images/statistics-icon.png";
import smileIcon from "../../Images/smile-icon.png";
import calendarIcon from "../../Images/calendar-icon.png";
import userPicInner from "../../Images/user-pic-2.png";
import commentIcon from "../../Images/comment-icon.png";
import arrowIcon from "../../Images/arrows-icon.png";
import likeIcon from "../../Images/like-icon.png";
import downloadIcon from "../../Images/download-icon.png";
import statIcon from "../../Images/statistics-icon-2.png";
import userIconRaj from "../../Images/user-pic-3.png";
import arrowIconColorful from "../../Images/arrows-icon-green.png";
import likeIconColorful from "../../Images/like-icon-colorful.png";
import userPicCreative from "../../Images/user-pic-4.png";
import foodPic from "../../Images/food.png";
import settingsIcon from "../../Images/settings-icon.png";
import moreDotsIcon from "../../Images/more-dots-icon.png";
import mushtariyImg from "../../Images/mushtariy.png";
import shuhratbekImg from "../../Images/shuhratbek.png";

function Profile() {
  const { username } = useParams();
  const foundUser = users.find((user) => user.username === username);

  return (
    <section className="homes-page">
      <div className="homes">
        <div className="homes__menu">
          <img
            className="homes__menu-img"
            src={logo}
            width="40"
            height="33"
            alt=""
          />
          <Link className="homes__menu-link homes__home">Home</Link>
          <Link className="homes__menu-link homes__explore">Explore</Link>
          <Link className="homes__menu-link homes__notif">Notifications</Link>
          <Link className="homes__menu-link homes__message">Messages</Link>
          <Link className="homes__menu-link homes__save">Bookmarks</Link>
          <Link className="homes__menu-link homes__lists">Lists</Link>
          <Link
            to={`/profile/${username}`}
            className="homes__menu-link homes__profile"
          >
            Profile
          </Link>
          <Link className="homes__menu-link homes__more">More</Link>
          <Link className="homes__menu-tweet">Tweet</Link>
          <div className="homes__menu-link homes__menu-user">
            <div>
              <p className="homes__menu-user-name">{foundUser.username}</p>
              <p className="homes__menu-user-link">@{foundUser.usernick}</p>
            </div>
          </div>
        </div>
        <hr className="homes__menu-line" />
      </div>

      <div className="homes__main">
        <div className="homes__main-top">
          <h3 className="homes__main-heading">Profile</h3>
          <img src={starIcon} width="22" height="21" alt="" />
        </div>
        <hr className="homes__main-line" />
        <div className="homes__main-tweet">
          <img src={userPic} width="60" height="60" alt="" />
          <div className="homes__main-tweet-wrapper">
            <p className="homes__main-tweet-text">What???s happening</p> <br />
            <div className="homes__main-tweet-icons">
              <img
                className="homes__main-tweet-icons-img"
                src={galleryIcon}
                width="20"
                height="20"
                alt=""
              />
              <img
                className="homes__main-tweet-icons-img"
                src={gifIcon}
                width="21"
                height="20"
                alt=""
              />
              <img
                className="homes__main-tweet-icons-img"
                src={statisticsIcon}
                width="20"
                height="19"
                alt=""
              />
              <img
                className="homes__main-tweet-icons-img"
                src={smileIcon}
                width="21"
                height="21"
                alt=""
              />
              <img
                className="homes__main-tweet-icons-img"
                src={calendarIcon}
                width="24"
                height="24"
                alt=""
              />
              <Link className="tweet-link">Tweet</Link>
            </div>
          </div>
        </div>
        <hr className="homes__main-line" />

        <div className="homes__main-post-inner">
          <img src={userPicInner} width="60" height="60" alt="" />
          <div className="homes__main-post-inner-content">
            <span className="homes__main-post-inner-top">
              <h4 className="homes__main-post-inner-heading">Designsta</h4>
              <p className="homes__main-post-inner-text">@inner</p>
              <p className="homes__main-post-inner-min">25m</p>
            </span>
            <p className="homes__main-post-inner-comment">
              Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar
              zerikmadinglarmi?
            </p>
            <div className="homes__main-post-inner-icons">
              <span className="homes__main-post-inner-icons-group">
                <img src={commentIcon} width="20" height="20" alt="" />
                <p className="homes__main-post-number">10</p>
              </span>
              <span className="homes__main-post-inner-icons-group">
                <img
                  className="homes__main-post-inner-icon"
                  src={arrowIcon}
                  width="24"
                  height="17"
                  alt=""
                />
                <p className="homes__main-post-number">1</p>
              </span>
              <span className="homes__main-post-inner-icons-group">
                <img
                  className="homes__main-post-inner-icon"
                  src={likeIcon}
                  width="20"
                  height="19"
                  alt=""
                />
                <p className="homes__main-post-number">8</p>
              </span>
              <img
                className="homes__main-post-inner-icon"
                src={downloadIcon}
                width="20"
                height="20"
                alt=""
              />
              <img
                className="homes__main-post-inner-icon"
                src={statIcon}
                width="12"
                height="20"
                alt=""
              />
            </div>
          </div>
        </div>
        <hr className="homes__main-line" />

        <div className="homes__main-post-inner">
          <img src={userIconRaj} width="60" height="60" alt="" />
          <div className="homes__main-post-inner-content">
            <span className="homes__main-post-inner-top">
              <h4 className="homes__main-post-inner-heading">
                cloutexhibition
              </h4>
              <p className="homes__main-post-inner-text">@RajLahoti</p>
              <p className="homes__main-post-inner-min">22m</p>
            </span>
            <p className="homes__main-post-inner-comment">
              YPIP dasturining bu yilgi sezoni ham o???z nihoyasiga yetmoqda.
              Mentorlik davomida talaba va yangi bitiruvchilarni o???sayotganini
              ko???rib hursand bo???ladi odam.
            </p>
            <div className="homes__main-post-inner-icons">
              <img src={commentIcon} width="20" height="20" alt="" />
              <span className="homes__main-post-inner-icons-group">
                <img
                  className="homes__main-post-inner-icon"
                  src={arrowIconColorful}
                  width="24"
                  height="17"
                  alt=""
                />
                <p className="homes__main-post-number number-color-1">5</p>
              </span>
              <span className="homes__main-post-inner-icons-group">
                <img
                  className="homes__main-post-inner-icon"
                  src={likeIconColorful}
                  width="20"
                  height="19"
                  alt=""
                />
                <p className="homes__main-post-number number-color-2">9</p>
              </span>
              <img
                className="homes__main-post-inner-icon"
                src={downloadIcon}
                width="20"
                height="20"
                alt=""
              />
              <img
                className="homes__main-post-inner-icon"
                src={statIcon}
                width="12"
                height="20"
                alt=""
              />
            </div>
          </div>
        </div>
        <hr className="homes__main-line" />

        <div className="homes__main-post-inner">
          <img src={userPicCreative} width="60" height="60" alt="" />
          <div className="homes__main-post-inner-content">
            <span className="homes__main-post-inner-top">
              <h4 className="homes__main-post-inner-heading">CreativePhoto</h4>
              <p className="homes__main-post-inner-text">@cloutexhibition</p>
              <p className="homes__main-post-inner-min">1h</p>
            </span>
            <p className="homes__main-post-inner-comment">????????????.....</p>
            <p className="homes__main-post-inner-comment">??????????????????????</p>
            <img src={foodPic} width="500" height="320" alt="" />
            <div className="homes__main-post-inner-icons">
              <span className="homes__main-post-inner-icons-group">
                <img src={commentIcon} width="20" height="20" alt="" />
                <p className="homes__main-post-number">10</p>
              </span>
              <span className="homes__main-post-inner-icons-group">
                <img
                  className="homes__main-post-inner-icon"
                  src={arrowIcon}
                  width="24"
                  height="17"
                  alt=""
                />
                <p className="homes__main-post-number">1</p>
              </span>
              <span className="homes__main-post-inner-icons-group">
                <img
                  className="homes__main-post-inner-icon"
                  src={likeIcon}
                  width="20"
                  height="19"
                  alt=""
                />
                <p className="homes__main-post-number">8</p>
              </span>
              <img
                className="homes__main-post-inner-icon"
                src={downloadIcon}
                width="20"
                height="20"
                alt=""
              />
              <img
                className="homes__main-post-inner-icon"
                src={statIcon}
                width="12"
                height="20"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <hr className="homes__menu-line" />
      <div className="homes__search">
        <input
          className="homes__search-input"
          type="search"
          placeholder="Search Twitter"
        />
        <div className="homes__search-trend">
          <span className="homes__search-top">
            <h3 className="homes__search-top-heading">Trends for you</h3>
            <img src={settingsIcon} width="21" height="21" alt="" />
          </span>
          <div className="homes__search-revolution">
            <span className="homes__search-revolution-text">
              <p className="homes__search-revolution-trending">
                Trending in Germany
              </p>
              <p className="homes__search-revolution-rev">Revolution</p>
              <p className="homes__search-revolution-number">50.4K Tweets</p>
            </span>
            <img
              className="homes__search-revolution-img"
              src={moreDotsIcon}
              width="17"
              height="4"
              alt=""
            />
          </div>
          <div className="homes__search-revolution">
            <span className="homes__search-revolution-text">
              <p className="homes__search-revolution-trending">
                Trending in Germany
              </p>
              <p className="homes__search-revolution-rev">Revolution</p>
              <p className="homes__search-revolution-number">50.4K Tweets</p>
            </span>
            <img
              className="homes__search-revolution-img"
              src={moreDotsIcon}
              width="17"
              height="4"
              alt=""
            />
          </div>
          <div className="homes__search-revolution">
            <span className="homes__search-revolution-text">
              <p className="homes__search-revolution-trending">
                Trending in Germany
              </p>
              <p className="homes__search-revolution-rev">Revolution</p>
              <p className="homes__search-revolution-number tweets-number">
                50.4K Tweets
              </p>
            </span>
            <img
              className="homes__search-revolution-img"
              src={moreDotsIcon}
              width="17"
              height="4"
              alt=""
            />
          </div>
          <Link className="homes__search-trend-link">Show more</Link>
        </div>
        <div className="homes__search-follow">
          <h3 className="homes__search-follow-heading">You might like</h3>
          <div className="homes__search-follow-user">
            <img src={mushtariyImg} width="40" height="40" alt="" />
            <span className="homes__search-follow-user-text">
              <h5 className="homes__search-follow-user-name">
                {foundUser.username}
              </h5>
              <p className="homes__search-follow-user-nick">
                @s{foundUser.usernick}
              </p>
            </span>
            <Link className="homes__search-follow-user-link">Follow</Link>
          </div>
          <div className="homes__search-follow-user">
            <img src={shuhratbekImg} width="40" height="40" alt="" />
            <span className="homes__search-follow-user-text">
              <h5 className="homes__search-follow-user-name">
                {foundUser.username}
              </h5>
              <p className="homes__search-follow-user-nick">
                @{foundUser.usernick}
              </p>
            </span>
            <Link className="homes__search-follow-user-link">Follow</Link>
          </div>
          <Link className="homes__search-trend-link">Show more</Link>
        </div>
        <p className="homes__search-privacy">
          Terms of Service Privacy Policy Cookie Policy Imprint Ads Info More
          ?????? ?? 2021 Twitter, Inc.
        </p>
      </div>
    </section>
  );
}

export default Profile;
