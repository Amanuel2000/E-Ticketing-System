import Select from "react-select";

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
            <p>
              Promotion
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default LeftBar;