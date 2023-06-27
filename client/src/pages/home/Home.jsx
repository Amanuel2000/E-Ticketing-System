import React from 'react'
import "./home.scss"
import Payment from '../../components/payment/Payment'
import Fixture from '../../components/Fixture/Fixture'
import Ticket from '../../components/ticket/Ticket'
import PaymentMethod from '../../components/paymentMethod/PaymentMethod'
 
 

const Home = () => {
  return (
    <div className="home">
    <PaymentMethod/>
   </div>
  )
}

export default Home
