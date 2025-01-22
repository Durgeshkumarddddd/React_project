import './App.css'
// import Probes from './Probes.jsx'
// import MsgBox from './MsgBox.jsx';
import ProductTab from './ProductTab';
import Button from './Button';
import Form from './Form';
import Hooks from './Hooks';
import LikeButton from './LikeButton';
import Ludo from './Ludo';
import TudoList from './TudoList';
import Lottery from './Lottery';
import {sum } from './ticket.js';
import MultipleInputForm from './MultipleInputForm.jsx';
import CreateUseEffect from './CreateUseEffect.jsx';
import Jokes from './jokes.jsx'
import WheatherApi from './WheatherApi';
function App() {
  function winCondition(ticket){
    return sum(ticket) === 15 ;
  }
return(
    <>
       {/* <ProductTab /> 
       <Button />
       <Form />
       <Hooks /> 
       <LikeButton />
        <Ludo />
        <TudoList /> */}
        {/* <Lottery n={3} winningSum={winCondition} />
        <MultipleInputForm></MultipleInputForm>
        <CreateUseEffect></CreateUseEffect>  // Added useEffect component
        <Jokes /> */}
        <WheatherApi />
    </>
  );
 {/* <MsgBox name="Durgesh" textcolor="red" desColor="pink" description="Some student is very intelli"/>
 <MsgBox name="Shradha" textcolor="yellow" desColor="Blue" description="I love you"/>
  <Probes /> */}
}
export default App
