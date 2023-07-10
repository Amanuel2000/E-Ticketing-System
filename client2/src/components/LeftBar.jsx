import Dropdown from './dropdown/Dropdown-fixture'

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