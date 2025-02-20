import {Routes, Route,Link,NavLink} from 'react-router-dom'
import Home from './context/Home';
import User from './context/User';
import Detail from './context/Details';
export default function Home(){
    return (
      <div>
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
      </div>
    );
}