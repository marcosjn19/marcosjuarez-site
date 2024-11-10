import React, { useState, useEffect } from 'react';
import './ProfileCard.css'
import rutaPfp   from '../../assets/pfp.jpeg'
import rutaGit   from '../../assets/github.svg'
import rutaLink  from '../../assets/linkdn.svg'
import rutaMail  from '../../assets/correo.svg'

function ProfileCard() {
  let whoami = {0:"Computer systems engineering student 💻", 1:"Robotics enthusiast 🤖", 2:"ICPC contestant 🖥️", 3:"STEAM Advocate 🗣️", 4:"Gamer 👾", 5:"FIRST Alumni & Mentor 🎓"}
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true); // Inicia la animación de desvanecimiento
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % Object.keys(whoami).length);
        setFade(false); // Reinicia la animación después del cambio de mensaje
      }, 500); // Duración de la animación de desvanecimiento en ms
    }, 4000); // Cambia el mensaje cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div>
        <div className='cardContainer'>
            <div className='imgCont'>
                <img src={rutaPfp}></img>
            </div>
            <div className='infoCont'>
                <h1>Hello World!</h1>
                <h2>My name is Marcos Juarez</h2>
                <h2>I'm a... </h2>
                <h2 className={`myself ${fade ? 'fade' : ''}`}>{whoami[currentIndex]}</h2>
            </div>
            <div className='iconCont'>
                <img src={rutaGit} onClick={()=>window.open("https://github.com/marcosjn19")} alt="GitHub"></img>
                <img src={rutaLink} onClick={()=>window.open("https://www.linkedin.com/in/marcos-emmanuel-ju%C3%A1rez-navarro-51a3b9322/")} alt="Linkedin"></img>
                <img src={rutaMail} onClick={()=>window.open("mailto:marcosjn719@gmail.com")} alt="Mail"></img>
            </div>
        </div>
      </div>
    </>
  )
}

export default ProfileCard
