import { useState } from "react"
import Card from "./Card"
import SectionHead from "./SectionHead"
import { testimonials } from "../data"
import { FaArrowCircleLeft, FaArrowCircleRight, FaQuoteLeft } from "react-icons/fa"


const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const {name, quote, job, avatar} = testimonials[index];

  const prevTestimonialsHandler = () => {
    setIndex(prev => prev - 1);

    if (index <= 0) {
      setIndex(testimonials.length - 1);
    }
  }

  const nextTestimonialsHandler = () => {
    setIndex(prev => prev + 1);

    if (index >= testimonials.length - 1) {
      setIndex(0);
    }
  }

  return (
    <section className="testimonials">
      <div className="container testimonials_container">
        <SectionHead icon={<FaQuoteLeft />} title="Testimonials" className="testimonials_head" />
        <Card className="testimonial">
          <div className="testimonial_avatar">
            <img src={avatar} alt={name} />
          </div>
          <p className="testimonial_quote">{`"${quote}"`}</p>
          <h5>{name}</h5>
          <small className="testimonial_title">{job}</small>
        </Card>
        <div className="testimonials_btn-container">
          <button className="testimonials_btn" onClick={prevTestimonialsHandler}>
            <FaArrowCircleLeft />
          </button>
          <button className="testimonials_btn" onClick={nextTestimonialsHandler}>
            <FaArrowCircleRight />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials