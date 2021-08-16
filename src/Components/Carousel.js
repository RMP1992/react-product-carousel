import React from 'react';
import {data} from'../data/data';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import './Carousel.scss';
import "pure-react-carousel/dist/react-carousel.es.css";


export default class extends React.Component {
    render() {
      return (
        <CarouselProvider
          naturalSlideWidth={90}
          naturalSlideHeight={125}
          currentSlide={0}
          totalSlides={10}
          visibleSlides={4}
          
 
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
        <div className="btn-container">
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
        </div>
        </CarouselProvider>
      );
    }
  }



    

