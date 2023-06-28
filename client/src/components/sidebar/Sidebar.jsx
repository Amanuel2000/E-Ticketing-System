import Dropdown from '../dropdown/Dropdown'
import './sidebar.scss'
import { BookmarkAdd, ChatOutlined, GroupOutlined, HelpOutline, PlayCircleFilledOutlined, RssFeedOutlined, SchoolOutlined } from '@mui/icons-material'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <button className="sidebarButton">Category</button>
        <Dropdown />
      </div>
    </div>
  )
}
