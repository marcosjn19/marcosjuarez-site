import { useRef } from 'react';
import { Carousel, CarouselSlide } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import './ActivitiesCarousel.css'
import Activity from './ActivityCard/Activity';
import imgAnalisis from '../Activities/assetsActivities/dataAnalysisSS.png'
import imgInnobotica from '../../assets/innoboticaImg1.jpg'
import imgOmega from '../Activities/assetsActivities/omegaUpCert.png'
function ActivitiesCarousel() {
  const autoplay = useRef(Autoplay({ delay: 3000 }));
  return (
    <div className='carrusel'>
      <Carousel  
      height={450} 
      width="80%"
      slideGap="xl"
      dragFree
      loop
      align="start"
      slideSize="25%"
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      >
        <CarouselSlide><Activity titulo={"Data analysis program"}preview={"Just made a data analysis program using python"} imgSrc={imgAnalisis} date="09/08/2024" link={"https://github.com/marcosjn19/analisisCalcio"}></Activity></CarouselSlide>
        <CarouselSlide><Activity titulo={"We made it to the nationals!"}preview={"Just qualified to Innobotica nationals contest!"} imgSrc={imgInnobotica} date="08/10/2024" link={"https://www.facebook.com/share/p/uMkiem5WP9vmKZ2z/"}></Activity></CarouselSlide>
        <CarouselSlide><Activity titulo={"3rd Regional Place at 'Copa Comunidades OmegaUP'"}preview={"Got 3rd place at a programming contest"} imgSrc={imgOmega} date="15/06/2024"></Activity></CarouselSlide>
      </Carousel>
    </div>
  );
}

export default ActivitiesCarousel