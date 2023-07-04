import Dropdown from '../dropdown/Dropdown-fixture'
import './leftBar.scss'

const LeftBar = () => {
  return (
    <div>
      <div className='leftBar'>
        <div className="leftBarWrapper">
          <button className="leftBarButton">Category</button>
          <Dropdown />
        </div>
      </div>
    </div>
  )
}
export default LeftBar;