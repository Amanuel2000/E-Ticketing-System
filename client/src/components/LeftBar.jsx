import Select from "react-select";
import imageAd from '../images/ads.jpg'
import imageAnn from '../images/ann.jpeg'

const LeftBar = () => {
  const leagueOptions = [
    "Men Football",
    "Female Football",
    "Tennis"
  ];

  return (
    <div>
      <div className='leftBar'>
        <div className="leftBarWrapper">
          <button className="leftBarButton">Category</button>
          <select>
            {
              leagueOptions.map(league => {
                return <option>{league}</option>
              })
            }
          </select>
        </div>
        <div className="item">
          <div className="desc">
            <img src={imageAd} alt="advert" />
          </div>
        </div>
        <div className="item">
          <div className="desc">
            <img src={imageAnn} alt="announcement" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default LeftBar;