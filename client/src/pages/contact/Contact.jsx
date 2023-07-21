import Header from '../../components/Header'
import './contact.css'
import { MdEmail } from 'react-icons/md'
import { BsMessenger, BsWhatsapp } from 'react-icons/bs'

const Contact = () => {
  return (
    <div>
      <Header title="Get In Touch">
      </Header>

      <section className="contact">
        <div className="container contact_container">
          <div className="contact_wrapper">
            <a href="mailto:eticketwpp@gmail.com" target='_blank' rel='noreferrer noopener'><MdEmail /></a>
            <a href="http://m.me/eliasdewa14" target='_blank' rel='noreferrer noopener'><BsMessenger /></a>
            <a href="https://wa.me/+251910634296" target='_blank' rel='noreferrer noopener'><BsWhatsapp /></a>
          </div>
        </div>
        <div className="contact-right">
          <h4>Or send your direct message here</h4>
          <form>
            <input
              type="text"
              name="Name"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="Email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="Message"
              rows="5"
              placeholder="Your Message"
            ></textarea>
            <button type="submit" className='btn'>
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contact