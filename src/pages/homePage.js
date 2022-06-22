import { Header, Image } from "semantic-ui-react";
import Mission from '../assets/mission.png';
import Product from '../assets/product.png';

const HomePage = () => {

  return (
		<div>
      <div style={{position: 'relative', height: '750px', backgroundColor: 'black'}}>
        <div style={{paddingTop: '200px'}}>
					<Image  width="70px" height="70px" src={Mission}  style={{display: 'inline-flex', alignContent: 'center', }}/>
				</div>
        <Header as='h1' style={{color: "white", paddingTop: "40px", padding: '20px 0px 0px 0px'}}
        content="Our Mission"
        />
        <Header color="white" style={{color: "white", padding: '30px 15%', fontWeight: 'normal'}}>AutoNeura is an early stage start-up with the foresight of contributing to the enhancement of interaction the world has with physics and engineering through control systems, data, analytics, digitalization and digitization. Through this, as humans, we will make better decisions in vesting in technologies.</Header>
        
      </div>
      <div style={{position: 'relative', height: '750px', backgroundColor: 'rgb(245,245,247)'}}>
        <div style={{paddingTop: '150px'}}>
					<Image  width="70px" height="70px" src={Product}  style={{display: 'inline-flex', alignContent: 'center', }}/>
				</div>
        <Header as='h1' style={{color: "black", paddingTop: "20px", padding: '50px 0px 0px 0px'}}
          content="Our First Product Range"
        />
        <Header style={{color: "black", padding: '30px 15%', fontWeight: 'normal'}}>The <b>AN I</b> software product enables systems driving the mobility industry, to undergo real-world tests in laboratories at a reduced cost.</Header>
        <div style={{display: 'inline-flex', }}>
          <div style={{paddingRight: '60px'}}>
            <Header style={{fontSize: "42px",  color: "orange"}} sub>2</Header>
            <span color="orange">Collaboration Agreements</span>
          </div>
          <div style={{paddingRight: '60px'}}>
            <Header style={{fontSize: "42px",  color: "orange"}} sub>2</Header>
            <span color="orange">Development Programs Affected</span>
          </div>
          <div>
            <Header style={{fontSize: "42px", color: "orange"}} sub>3</Header>
            <span>Prime Movers Tested On</span>
          </div>
        </div>
      </div>
      <div style={{position: 'relative', height: '750px', backgroundColor: 'black'}}>
        <Header as='h1' style={{color: "white", paddingTop: "40px", padding: '100px 0px 30px 0px'}}
          content="Where We Need to Go"
        />
        <div className="video-responsive">
          <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/PRJHgiLzT58`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
      </div>
		</div>
			
  );
};

export default HomePage;
