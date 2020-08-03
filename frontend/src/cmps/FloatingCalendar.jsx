import React from 'react';
import { ReactCalendar } from '../cmps/ReactCalendar'

export function FloatingCalendar(props) {
  return (
    <div className="floating-calendar">
      <div className="main-floating-content flex column">

        <form onSubmit={props.onReserveSeller}>
          <div className="flex space-between  column">
            <h1 className="price-title">Price: ${props.seller.price * props.guestsAmount / 10} </h1>
            <p className="guests-amount-price">(for {props.guestsAmount} people)</p>
            <label htmlFor="guestsAmount">Guests amount:</label>
            <select name="" id="" onChange={props.getGuestCount}>
              <option value={0}> Select guest amount</option>
              <option value={500}> Up To 500</option>
              <option value={1000}> Up To 1000</option>
              <option value={5000}> Up To 5000</option>
              <option value={10000}> More than 10000</option>
            </select>
            <div className="checkings flex space-around column">
              <p > Choose event dates:</p>
              <div className="calander-container margin-center">
                <ReactCalendar dates={props.getDates} /></div>
            </div>
          </div>
          <div className="submit">
            <button className="sbmt-btn">Reserve</button>
          </div>
        </form>
      </div>
    </div>
  )
}