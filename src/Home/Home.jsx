import './Home.css'
import Nav from '../Nav/Nav';
import ProfileCard from './ProfileCard/ProfileCard';
import ActivitiesCarousel from './ActivitiesCarousel/ActivitiesCarousel';
import imgAb1 from '../assets/innoboticaImg1.jpg'
import imgAb2 from '../assets/myselfv2.jpg'
import Skillset from './Skillset/Skillset';

function Home(){
    return(
        <>  
        <Nav></Nav>
        <ProfileCard/>
        <div className='infoH alt1'>
            <div className='contInfoH'>
            <h1>A little about myself...</h1>
            <p> I am a 7th-semester Computer Systems Engineering student. My academic career has been marked by high performance and active
                participation in extracurricular projects.
                </p>
            </div>
            <img src={imgAb1}></img>
        </div>

        <div className='infoH alt2'>
            <div className='contInfoH'>
            <h1>Looking for new challenges</h1>
            <p> I am characterized by being responsible, proactive, committed, and with a taste for challenges
            and learning. I am looking for opportunities for the application and development of my skills to learn, grow, and advance professionally.
                </p>
            </div>
            <img src={imgAb2}></img>
        </div>

        <div className='infoH alt1'>
            <div className='contInfoH'>
                <h1>Current skills</h1>
                <p> 
                I have a solid base in programming, data structures, and algorithms, and I’m always diving into new tech areas like software development, machine learning, and cloud computing. My goal is to stay adaptable and keep up with the fast-paced world of tech.
                </p>
            </div>
            <div>
                <Skillset/>
            </div>
        </div>  

        <div className='activities-main-container'>
        <h1>Latest activities...</h1>
        <ActivitiesCarousel/>
        </div>
        </>

    );
}

export default Home