import { React, useState } from 'react'
import { Carousel } from 'react-bootstrap'
import FirstSlide from '../assets/slide1.jpg'
import SecondSlide from '../assets/slide2.jpg'
import ThirdSlide from '../assets/slide3.jpg'

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          classNameName="d-block w-100"
          src={FirstSlide}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Pc's <strong>Gamer</strong> <br/>armamos lo que necesites a medida <br/>con los mejores componentes.</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          classNameName="d-block w-100"
          src={SecondSlide}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Notebooks <strong>las mejores marcas</strong></h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          classNameName="d-block w-100"
          src={ThirdSlide}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Reparaciones <br/>al mejor precio</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel
