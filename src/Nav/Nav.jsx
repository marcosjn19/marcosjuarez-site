import './Nav.css'
import logoMyself from '../assets/logoMJ.png'
function Nav(){
    return(
        <>  
        <div className = "navMainContainer">
          <a href='/'><img className = "logo" src={logoMyself}/></a>
          <div className = "navButtonsContainer">
          <a href='/'>Latest activities</a>
          <a href='/'>Contact me</a>
          </div>
        </div>
        </>

    );
}

export default Nav