import {Link} from 'react-router-dom';
import styled from 'styled-components';


const NavBar = styled.ul`
list-style-type: none;
margin: 0;
padding: 0;
font-size:20px;

`;

const Navbar =() => {


    return (
      
<NavBar>

<Link to="/">Home | </Link>
<Link to="/userlist">Users | </Link>
<Link to="/form">Add post </Link>


</NavBar>
      
    )
  }
  
  export default Navbar