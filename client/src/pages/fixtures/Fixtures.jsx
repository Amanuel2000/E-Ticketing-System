import LeftBar from '../../components/LeftBar'
import RightBar from '../../components/RightBar'
import './fixtures.css'
import { Link } from 'react-router-dom'
import { fixtures } from '../../data';
// import { useState } from 'react';
// import axios from 'axios';

const Fixtures = () => {
  // const [fixtures, setFixtures] = useState([])

  // useEffect(() => {
  //   const fetchAllFixtures = async () => {
  //     try {
  //       const res = await axios.get("http://localhost:8080/fixtures")
  //      setBooks(res)
  //     } catch {
  //       (err)
  //       console.log(err)
  //     }
  //   }
  // })
  return (
    <div>
      <div className='fixtures'>
        <LeftBar />
        <div className="fixture-content">
          <h1>All Upcoming Fixtures</h1>
          <div>
            {
              fixtures.map(({id, locationIcon, stadium, calendarIcon, Date, team1, team1Image, timeIcon, time, team2Image, team2}) => {
                return (
                  <div className="fixture-card" key={id}>
                    <div className="desc">
                      <span>{locationIcon} {stadium}</span>
                      <span>{calendarIcon} {Date}</span>
                    </div>
                    <div className="team">
                      <span>{team1}</span>{team1Image}
                      <span>{timeIcon} {time}</span>{team2Image}
                      <span>{team2}</span>
                    </div>
                    <Link to="/ticket" >
                      <button className='btn'>Request Ticket</button>
                    </Link>
                  </div>
                )
              })
            }
          </div>
        </div>
        <RightBar />
      </div>
    </div>
  )
}

export default Fixtures