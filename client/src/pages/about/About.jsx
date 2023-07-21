import Header from '../../components/Header'
import './about.css'
import AmanImage from '../../images/Aman.jpeg'
import EliasImage from '../../images/Elias.jpeg'
import { BsMailbox } from 'react-icons/bs'
import { MdCall, MdMail } from 'react-icons/md'

const About = () => {
  return (
    <div className='about'>
      <Header title="About Us">
      </Header>

      <section className="about_story">
        <div className="row">
          <div className="card">
            <img src={ AmanImage } alt="Aman" />
            <div className="about-container">
              <h2>Amanuel Fenta</h2>
              <p className="title">Full Stack Software Engineer</p>
              <div className='desc'>
                <p> I am a software engineer with interest in solving real-world problems with technology and dependable leadership.</p>
                <p><MdMail/> amanfenta@gmail.com</p>
                <p><MdCall /> +251-910-009-313</p>
              </div>
            </div>
          </div>

          <div className="card">
            <img src={EliasImage} alt="Elias" />
            <div className="about-container">
              <h2>Elias Dewa</h2>
              <p className="title">Full Stack Software Engineer</p>
              <div className='desc'>
                <p>I'm a motivated software engineer with great enthusiasm for technology and programming wants to expand my knowledge and skills.</p>
                <p><MdMail/> eliasdewa3@gmail.com</p>
                <p><MdCall /> +251-910-634-296</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About