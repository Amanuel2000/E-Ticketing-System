import "./ticket.css"
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import React, { useState } from 'react';

const Ticket = () => {
  const [value, setValue] = useState('')
  const ticketOptions = [
    {label:" ", value:  0},
    {label:"VIP 200ETB", value: 200},
    {label:"Standard 100ETB", value: 100},
    {label:"Semi 50ETB", value: 50},
    {label:"Ordinary 20ETB", value: 20},
  ];

  function handleSelect(event){
    setValue(event.target.value)
  }

  const numOptions = [
    {label:"", value: 0},
    {label:"One", value: 1},
  ];
  
  return (
    <div>
      <div className="ticket">
        <div className="ticket_container">
          <h1>Get your ticket</h1>
          <div className="ticket_card">
            <form className="form-row">
              <div>
                <label>Select Ticket Type and Price</label>
                <select onChange={handleSelect}>
                  {
                    ticketOptions.map(ticket => (
                      <option value = {ticket.value}>{ticket.label}</option>
                    ))
                  }
                </select>
              </div>
              <div>
                <label htmlFor="">Number of Applicants</label>
                <select>
                  {
                    numOptions.map(num => (
                      <option value = {num.value}>{num.label}</option>
                    ))
                  }
                </select>
              </div>
              <label htmlFor="">Total Price</label>
              <p>{(value) * 1 } ETB </p>
            </form>
            <div className="ticket_btn">
              <Link to="/fixtures">
                <button className="btn"><AiOutlineArrowLeft /> Go Back To Fixtures</button>
              </Link>
              <Link to="/payment">
                <button className="btn">Go To Payment <AiOutlineArrowRight /></button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
export default Ticket;
