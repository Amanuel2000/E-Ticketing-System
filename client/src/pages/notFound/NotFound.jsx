import { Link } from 'react-router-dom'
import './notFound.css'

const NotFound = () => {
  return (
    <div>
      <section>
        <div className="container notfound_container">
          <h2>Page Not Found</h2>
          <Link to='/' className='btn'>Go Back To Home</Link>
        </div>
      </section>
    </div>
  )
}

export default NotFound