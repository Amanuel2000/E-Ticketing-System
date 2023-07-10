import Header from '../../components/Header'
import './about.css'
import AmanImage from '../../images/Aman.jpeg'
import EliasImage from '../../images/Elias.jpeg'

const About = () => {
  return (
    <div>
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
                <br />
                <p><b>Email:</b> amanfenta@gmail.com</p>
                <p><b>Phone Number:</b> +251-910-009-313</p>
              </div>
              <button className="about-btn">Contact</button>
            </div>
          </div>

          <div className="card">
            <img src={EliasImage} alt="Elias" />
            <div className="about-container">
              <h2>Elias Dewa</h2>
              <p className="title">Full Stack Software Engineer</p>
              <div className='desc'>
                <p>I'm a motivated software engineer with great enthusiasm for technology and programming who wants to expand my knowledge and skills.</p>
                <br />
                <p><b>Email:</b> eliasdewa3@gmail.com</p>
                <p><b>Phone Number:</b> +251-910-634-296</p>
              </div>
              <button className="about-btn">Contact</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About