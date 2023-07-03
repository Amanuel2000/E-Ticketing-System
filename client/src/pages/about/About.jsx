import Footer from '../../components/footer/Footer';
import './about.scss'

const About = () => {
  return (
    <div className='about'>
      <div className="section">
        <h1>About Us</h1>
      </div>
      <div className="row">
        <div className="card">
          <img src="assets/Aman.jpeg" alt="Aman" />
          <div className="container">
            <h2>Amanuel Fenta</h2>
            <p className="title">Full Stack Software Engineer</p>
            <p> I am a software engineer with interest in solving real-world problems with technology and dependable leadership.</p>
            <p><b>Email:</b> aman@gmail.com</p>
            <p><b>Phone Number:</b> +251-910-009-313</p>
            <button className="button">Contact</button>
          </div>
        </div>
        <div className="card">
          <img src="assets/Elias.png" alt="Elias" />
          <div className="container">
            <h2>Elias Dewa</h2>
            <p className="title">Full Stack Software Engineer</p>
            <p>I'm a motivated software engineer with great enthusiasm for technology and programming who wants to expand my knowledge and skills.</p>
            <p><b>Email:</b> eliasdewa3@gmail.com</p>
            <p><b>Phone Number:</b> +251-910-634-296</p>
            <button className="button">Contact</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
};

export default About;