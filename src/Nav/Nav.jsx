import './Nav.css'
import logoMyself from '../assets/firmaMJ.png'

function scrollToElement(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

function Nav() {

  return(
    <>  
      <div className="navMainContainer">
        <a href='#' onClick={() => scrollToElement('cardContainer')}><img className="logo" src={logoMyself} alt="Logo" /></a>
        <div className="navButtonsContainer">
          <a href="#" onClick={() => scrollToElement('activities-main-container')}>Latest activities</a>
          <a href='mailto:marcosjn719@gmail.com'>Contact me</a>
        </div>
      </div>
    </>
  );
}

export default Nav;
