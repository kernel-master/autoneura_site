import { Header, Image } from "semantic-ui-react";
import Contact from '../assets/contact.png';

const ContactPage = () => {

  return (
		<div>
       <div style={{position: 'relative', height: '1000px', backgroundColor: 'black'}}>
        <div style={{paddingTop: '300px'}}>
					<Image  width="70px" height="70px" src={Contact}  style={{display: 'inline-flex', alignContent: 'center', }}/>
				</div>
        <Header as='h1' style={{color: "white", paddingTop: "40px", padding: '20px 0px 0px 0px'}}
        content="Get In Touch With Us"
        />
        <Header color="white" style={{color: "white", padding: '30px 15%', fontWeight: 'normal'}}>If you would like to learn more or have any questions, we are happy to initiate our discussion via email on: <b>abarr@autoneura.com</b></Header>
        
      </div>
		</div>
			
  );
};

export default ContactPage;
