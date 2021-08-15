import React from 'react';
import {data} from'../data/data';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import './Carousel.css';
import Card from './Card';


export default class extends React.Component {
    render() {
      return (
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          currentSlide={0}
          totalSlides={10}
          visibleSlides={3}
          
 
        >
        <Slider>
        {data.map(item =>(
               item.carouselData.map(product => (
                   
                   <Slide >
                        <Image><img src={product.productImageUrl}/></Image>
                        <p>{product.name}</p>
                        <p>£{product.price.formattedValue}</p>
                   </Slide>
                   
               ))
               ))}
        </Slider>
        
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
        </CarouselProvider>
      );
    }
  }



    

