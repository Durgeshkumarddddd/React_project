import './App.css'
import {Routes, Route,Link,NavLink} from 'react-router-dom'
import Home from './Routing/Home';
import User from './Routing/User';
import Detail from './Routing/Detail';
function App () {
  return(
    <>
     <nav className='nav_link_routing'>
      <NavLink style={(e)=> { return{
         color : e.isActive ? 'red' : "",
         fontWeight : e.isActive ? "bold" :""
      }}}
       to={'/'} > Home </NavLink >
      <NavLink  style={(e)=> {return{color : e.isActive ? "red" : "",
                fontWeight : e.isActive ? "bold" :""
      }}} to={'/user'} > User </NavLink>
      <NavLink className={(e)=> {return{color : e.isActive ? "red" : ""}}} to={'/detail'}> Detail  </NavLink>  {/* comment :   // In case of Css tailwind it auto give color but in case of css  you hava to give color  */}
     </nav>
      <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/user" element={<User />} />     
          <Route path="/detail" element={<Detail />} />
      </Routes>
    </>
  );
}
 
export default App

   {/*
    // import Probes from './Probes.jsx'
// import MsgBox from './MsgBox.jsx';
import ProductTab from './ProductTab';
import Button from './Simple/Button.jsx';
import Form from './Form';
import Hooks from './Hooks';
import LikeButton from './LikeButton';
import Ludo from './Ludo';
import TudoList from './TudoList/TudoList.jsx';
import Lottery from './LotteryGame/Lottery.jsx';
import {sum } from './LotteryGame/ticket.js';
import MultipleInputForm from './MultipleInputForm.jsx';
import CreateUseEffect from './Simple/CreateUseEffect.jsx';
import Jokes from './jokes.jsx'
import WheatherApi from './WheatherApi';
    
    <ProductTab /> 
       <Button />
       <Form />
       <Hooks /> 
       <LikeButton />
        <Ludo />
        <TudoList /> */}
        {/* <Lottery n={3} winningSum={winCondition} />
        <MultipleInputForm></MultipleInputForm>
        <CreateUseEffect></CreateUseEffect>  // Added useEffect component
        <Jokes />
           <WheatherApi /> */}
     

{/* <MsgBox name="Durgesh" textcolor="red" desColor="pink" description="Some student is very intelli"/>
 <MsgBox name="Shradha" textcolor="yellow" desColor="Blue" description="I love you"/>
  <Probes /> */}