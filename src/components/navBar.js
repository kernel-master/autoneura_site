import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Image, Menu } from 'semantic-ui-react';
import AnLogo from '../assets/AN_logo.png';

const NavBar = () => {
  let navigate = useNavigate();
	const [ activeItem, setActiveItem ] = useState('')
	console.log('ACTIVE', activeItem)
  return (
    <div >
        <Menu tabular style={{backgroundColor: 'rgb(49,49,50)', display: 'flex'}}>
          <Menu.Item
            style={{backgroundColor: 'rgb(49,49,50)',  }}
            name='logo'
          >
            <Image width="25px" height="25px" src={AnLogo}></Image>
          </Menu.Item>
          <Menu.Item
            style={{backgroundColor: 'rgb(49,49,50)'}}
            name='home'
            active={ activeItem === 'home'}
            onClick={()=> {setActiveItem('home'); navigate('home')}}
          >
            <div style={{color: "white"}}>Home</div>
          </Menu.Item>
          
          <Menu.Item
            style={{backgroundColor: 'rgb(49,49,50)'}}
            name='an 1'
            active={activeItem === 'an 1'}
            onClick={()=> {setActiveItem('an 1'); navigate('anIproduct')}}
          >
            <div style={{color: "white"}}>AN I</div>
          </Menu.Item>
          
          {/* <Menu.Item
            style={{backgroundColor: 'rgb(49,49,50)'}}
            name='about'
            active={activeItem === 'about'}
            onClick={()=> {setActiveItem('about');  }}
          >
            <div style={{color: "white"}}><Link style={{ color: '#FFF' }} to='/about'>About</Link></div>
          </Menu.Item>
          
          <Menu.Item
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
                onClick={()=> {setActiveItem('contact'); navigate('contact')}}
              >
                <div style={{color: "white"}}>Contact</div>
              </Menu.Item>
        </Menu>
    </div>
  );
}

export default NavBar;
