import FAQs from '../../components/FAQs'
import MainHeader from '../../components/MainHeader'
import Stories from '../../components/Stories'
import Testimonials from '../../components/Testimonials'
import './home.css'

const Home = () => {
  return (
    <div>
      <MainHeader />
      <Stories />
      <FAQs />
      <Testimonials />
    </div>
  )
}

export default Home