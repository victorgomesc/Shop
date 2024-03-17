import Image from "next/image";
import { styled } from "../styles";
import { HomeContainer, Product } from "../styles/pages/home";
import { useKeenSlider } from 'keen-slider/react';

import camiseta1 from '../assets/camisetas/camisa1.png';
import camiseta2 from '../assets/camisetas/camisa2.png';
import camiseta3 from '../assets/camisetas/camisa3.png';

import 'keen-slider/keen-slider.min.css';

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 48,
    },
  })

    return(
      <HomeContainer ref={sliderRef} className="keen-slider" >
        <Product className="keen-slider__slide">
          <Image src={camiseta1} width={420} height={380} alt="" />

          <footer>
            <strong>Camiseta Basica</strong>
            <span>R$ 79,90</span>
          </footer>
        </Product>

        <Product className="keen-slider__slide">
          <Image src={camiseta2} width={420} height={380} alt="" />

          <footer>
            <strong>Camiseta Basica</strong>
            <span>R$ 79,90</span>
          </footer>
        </Product>

        <Product className="keen-slider__slide">
          <Image src={camiseta3} width={420} height={380} alt="" />

          <footer>
            <strong>Camiseta Basica</strong>
            <span>R$ 79,90</span>
          </footer>
        </Product>

        <Product className="keen-slider__slide">
          <Image src={camiseta3} width={420} height={380} alt="" />

          <footer>
            <strong>Camiseta Basica</strong>
            <span>R$ 79,90</span>
          </footer>
        </Product>

      </HomeContainer>
      
    )
}
