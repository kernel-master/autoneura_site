import { Header, Image } from "semantic-ui-react";

const AboutPage = () => {

  return (
		<div>
       <div style={{position: 'relative', height: '750px', backgroundColor: 'black'}}>
        <div style={{paddingTop: '200px'}}>
					<Image  width="70px" height="70px" src={""}  style={{display: 'inline-flex', alignContent: 'center', }}/>
				</div>
        <Header as='h1' style={{color: "white", paddingTop: "40px", padding: '20px 0px 0px 0px'}}
        content="Who We Are"
        />
        <Header color="white" style={{color: "white", padding: '30px 15%', fontWeight: 'normal'}}>AutoNeura is an early stage start-up with the foresight of contributing to the enhancement of interaction the world has with physics and engineering through control systems, data, analytics, digitalization and digitization. Through this, as humans, we will make better decisions in vesting in technologies.</Header>
        
      </div>
		</div>
			
  );
};

export default AboutPage;
