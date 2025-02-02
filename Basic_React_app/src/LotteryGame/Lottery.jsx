import {useState} from 'react';
import {randomNo} from './ticket.js' ;
import {sum } from './ticket.js';
import Ticket from '../Tickets.jsx';
export default function Lottery({n, winningSum}){
  
  let [ticket, setTicket] = useState([0,0,0 ])
  function generateTicket(){
     setTicket(randomNo(n));
  }
  let winning = winningSum(ticket) //In first time;
    return (
     <div className='Lottery'>
     <h1>Lottery App</h1>
       <div className='ticket'>
       {/* simple form= <span>{ticket[0]}</span>
       &nbsp;&nbsp;
        <span>{ticket[1]}</span>
        &nbsp;&nbsp;
        <span>{ticket[2]}</span> */}
        <Ticket ticket={ticket } />
       </div>
       <button className='LotteryButton' onClick={generateTicket} >Generate Ticket</button>  
       {winning && <h2>Congratulation you won !!!</h2>}
     </div>
);
}