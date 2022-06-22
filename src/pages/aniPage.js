import { Header, Image } from "semantic-ui-react";
import Collaboration from '../assets/collaboration.png';
import Efficiency from '../assets/efficiency.png';
import Markets from '../assets/markets.png';


const AnIPage = () => {

  return (
		<div>
      <div style={{position: 'relative', height: '750px', backgroundColor: 'white'}}>
				<div style={{paddingTop: '200px'}}>
					<Image  width="70px" height="70px" src={Efficiency} style={{display: 'inline-flex', alignContent: 'center', }}/>
				</div>
      	<Header as='h1' style={{color: "black", padding: '20px 0px 0px 0px'}}
        content="We enable propulsion system development at a reduced cost"
        />
        <Header color="white" style={{color: "black", padding: '30px 15%', fontWeight: 'normal', fontSize: '20px'}}>AutoNeura's software solutions enable more efficient assessment, for multiple transport market segments; from automotive to aerospace</Header>
			</div>
			<div style={{position: 'relative', height: '750px', backgroundColor: 'black'}}>
				<div style={{paddingTop: '200px'}}>
					<Image  width="70px" height="70px" src={Collaboration} style={{display: 'inline-flex', alignContent: 'center', }}/>
				</div>
      	<Header as='h1' style={{color: "orange",  padding: '20px 0px 0px 0px'}}
        content="Collaborations and Endorsement"
        />
					<Header color="white" style={{color: "white", padding: '30px 15%', fontWeight: 'normal'}}>AN I is endorsed by a leading global automotive consultancy and university. Furthermore, we are currently collaborating on go to market development with an academic institution and the aforementioned consultancy. </Header>
			</div>
			<div style={{position: 'relative', height: '750px', backgroundColor: 'rgb(245,245,247)'}}>
				<div style={{display: 'inline-block', color: 'orange', paddingTop: '200px'}}>
					<i class="rocket icon" style={{display: 'flex', fontSize: '42px'}}/>
				</div>
      	<Header as='h1' style={{color: "black"}}
        content="Our Value Proposition"
        />
				<Header color="white" style={{color: "black", padding: '30px 15%', fontWeight: 'normal'}}>Our patent protected software is applicable to anything that outputs power through a rotational shaft. As a result of our software application we provide a <b>2x</b> to <b>10x cost reduction</b> for propulsion and drivetrain system development programs.</Header>
			
				<div>
					<Header color="white" style={{color: "black", padding: '0px 15%', fontWeight: 'normal'}}>Our goal is to become a dominant, global software provider for testing and assessment of propulsion system technologies driving the mobility industry.</Header>
				</div>
			</div>
			<div style={{position: 'relative', height: '900px', backgroundColor: 'black'}}>
			<div style={{paddingTop: '200px'}}>
					<Image  width="70px" height="70px" src={Markets} style={{display: 'inline-flex', alignContent: 'center', }}/>
				</div>
      	<Header as='h1' style={{color: "white", padding: '20px 0px 0px 0px'}}
       		content="Market Sectors for AN I"
        />
			
				<div class="ui list" style={{marginTop: '50px', fontSize: '18px', color: 'white'}}>
					<div class="item"><i class='train icon' style={{marginRight: '5px', marginBottom: '15px'}} />Rail</div>
					<div class="item"><i class='car icon' style={{marginRight: '5px', marginBottom: '15px'}}/>Light Duty Vehicles</div>
					<div class="item"><i class='cart icon' style={{marginRight: '5px', marginBottom: '15px'}}/>Heavy Goods Vehicles</div>
					<div class="item"><i class='ship icon' style={{marginRight: '5px', marginBottom: '15px'}}/>Marine Vehicles</div>
					<div class="item"><i class='taxi icon' style={{marginRight: '5px', marginBottom: '15px'}}/>Passenger Vehicles</div>
					<div class="item"><i class='motorcycle icon' style={{marginRight: '5px', marginBottom: '15px'}}/>Motorcycles and Light Transport</div>
					<div class="item"><i class='plane icon' style={{marginRight: '5px', marginBottom: '15px'}}/>Aerospace</div>
					<div class="item"><i class='pallet icon' style={{marginRight: '5px', marginBottom: '15px'}}/>Heavy Duty Vehicles</div>
					<div class="item"><i class='truck icon' style={{marginRight: '5px', marginBottom: '15px'}}/>Off Highway Vehicles</div>
				</div>
			</div>
			</div>

			
  );
};

export default AnIPage;
