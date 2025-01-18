import TicketNum from "./TicketNum"
export default function Ticket({ticket}){
 return(
    <div>
        {ticket.map((num, index) =><TicketNum key={index} num={num}/>)}
    </div>
 );
}