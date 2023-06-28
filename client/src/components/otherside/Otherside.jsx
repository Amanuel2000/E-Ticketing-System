import './rightbar.css'
import {Users} from '../../dummyData'
import Online from '../online/Online'

export default function Rightbar({ profile}) {
  // const PF = process.env.REACT_APP_PUBLIC_FOLDER
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          {/* <img src={`${PF}gift.png`} alt="" className="birthdayImg" /> */}
          <img src="assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText"><b>Bini Aman</b> and <b>3 other friends</b> have a birthday today.</span>
        </div>
        {/* <img src={`${PF}add.png`} alt="" className="rightbarAd" /> */}
        <img src="assets/add.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    )
  };
  const ProfileRightbar = () => {
    return (
      <>
        <h4>User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City: </span>
            <span className="rightbarInfoValue">Bahir Dar</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From: </span>
            <span className="rightbarInfoValue">Ethiopia</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship: </span>
            <span className="rightbarInfoValue">Single</span>
          </div>
          <h4 className="rightbarTitle">User Friends</h4>
          <div className="rightbarFollowings">
            <div className="rightbarFollowing">
              <img src={`${PF}person/1.jpeg`} alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">Jhon Wick</span>
            </div>
            <div className="rightbarFollowing">
              {/* <img src={`${PF}person/2.jpeg`} alt="" className="rightbarFollowingImg" /> */}
              <img src="assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">Jhon Wick</span>
            </div>
            <div className="rightbarFollowing">
              {/* <img src={`${PF}person/3.jpeg`} alt="" className="rightbarFollowingImg" /> */}
              <img src="assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">Jhon Wick</span>
            </div>
            <div className="rightbarFollowing">
              {/* <img src={`${PF}person/4.jpeg`} alt="" className="rightbarFollowingImg" /> */}
              <img src="assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">Jhon Wick</span>
            </div>
            <div className="rightbarFollowing">
              {/* <img src={`${PF}person/5.jpeg`} alt="" className="rightbarFollowingImg" /> */}
              <img src="assets/person/5.jpeg" alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">Jhon Wick</span>
            </div>
            <div className="rightbarFollowing">
              {/* <img src={`${PF}person/6.jpeg`} alt="" className="rightbarFollowingImg" /> */}
              <img src="assets/person/6.jpeg" alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">Jhon Wick</span>
            </div>
          </div>
        </div>
      </>
    )
  };
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  )
}
