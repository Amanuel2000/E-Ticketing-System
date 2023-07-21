import { MdAutoStories } from 'react-icons/md';
import Image from '../images/ball.jpg';
import SectionHead from './SectionHead';
import { stories } from '../data';
import Card from './Card';
import { Link } from 'react-router-dom';

const Stories = () => {
  return (
    <section className="stories">
      <div className="container stories_container">
        <SectionHead icon={<MdAutoStories />} title="Stories" />
        <div className="stories_wrapper">
          <div className="stories_left">
            <div className="stories_image">
              <img src={Image} alt="stories" className="img" />
            </div>
          </div>
          <div className="stories_right">
            <div className="stories_wrapper-right">
              {
                stories.map(({id, icon, title, desc}) => {
                  return (
                    <Card className="stories_value" key={id}>
                      <span>{icon}</span>
                      <h2>{title}</h2>
                      <p>{desc}</p>
                      <br />
                      <br />
                      <Link to='/fixtures'><button className='btn'>Get Started Here</button></Link>
                    </Card>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stories