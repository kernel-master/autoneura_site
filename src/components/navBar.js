import { useState } from 'react';
import { Link } from "react-router-dom";
import { Image, Menu } from 'semantic-ui-react';
import AnLogo from '../assets/AN_logo.png';

const NavBar = () => {

	const [ activeItem, setActiveItem ] = useState('')
	
  return (
    <div >
     <Menu tabular style={{backgroundColor: 'rgb(49,49,50)', display: 'flex'}}>

				<Menu.Item
					style={{backgroundColor: 'rgb(49,49,50)',  }}
          name='logo'
          // active={ activeItem === 'home'}
          // onClick={()=> setActiveItem('home')}
        >
					<Image width="25px" height="25px" src={AnLogo}></Image>
          
        </Menu.Item>
        <Menu.Item
					style={{backgroundColor: 'rgb(49,49,50)'}}
          name='home'
          active={ activeItem === 'home'}
          onClick={()=> setActiveItem('home')}
        >
          <div style={{color: "white"}}><Link style={{ color: '#FFF' }} to='/home'>Home</Link></div>
        </Menu.Item>
				
				<Menu.Item
					style={{backgroundColor: 'rgb(49,49,50)'}}
          name='an 1'
          active={activeItem === 'an 1'}
          onClick={()=> setActiveItem('an 1')}
        >
          <div style={{color: "white"}}><Link style={{ color: '#FFF' }} to='/anIproduct'>AN I</Link></div>
        </Menu.Item>
				
        {/* <Menu.Item
					style={{backgroundColor: 'rgb(49,49,50)'}}
          name='about'
          active={activeItem === 'about'}
          onClick={()=> {setActiveItem('about');  }}
        >
          <div style={{color: "white"}}><Link style={{ color: '#FFF' }} to='/about'>About</Link></div>
        </Menu.Item> */}
				
				{/* <Menu.Item
					style={{backgroundColor: 'rgb(49,49,50)'}}
          name='careers'
          active={activeItem === 'careers'}
          onClick={()=> setActiveItem('careers')}
        >
          <div style={{color: "white"}}><Link style={{ color: '#FFF' }} to='/careers'>Careers</Link></div>
        </Menu.Item> */}
				
        <Menu.Item
					style={{backgroundColor: 'rgb(49,49,50)'}}
          name='contact'
          active={activeItem === 'contact'}
          onClick={()=> setActiveItem('contact')}
        >
          <div style={{color: "white"}}><Link style={{ color: '#FFF' }} to='/contact'>Contact</Link></div>
        </Menu.Item>

      </Menu>
    </div>
  );
}

export default NavBar;
