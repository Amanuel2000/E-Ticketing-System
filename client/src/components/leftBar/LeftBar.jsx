import Dropdown from '../dropdown/Dropdown'
import './leftbar.scss'
import { BookmarkAdd, ChatOutlined, GroupOutlined, HelpOutline, PlayCircleFilledOutlined, RssFeedOutlined, SchoolOutlined } from '@mui/icons-material'

export default function LeftBar() {
  return (
    <div className='leftbar'>
      <div className="leftbarWrapper">
        <button className="leftbarButton">Category</button>
        <Dropdown />
      </div>
    </div>
  )
}
