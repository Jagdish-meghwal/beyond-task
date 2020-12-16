import React, { useState } from 'react'
import { ArrowForward, ArrowRight, HeroBg, HeroBtnWrapper, HeroContainer, HeroContent, HeroH1, HeroP, VideoBg } from './HeroElements'
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElement';
const HeroSection = () => {
    const [hover,setHover]=useState(false);
    const onHover =()=>{
        setHover(!hover);
    }
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4"></VideoBg>
            </HeroBg>
            <HeroContent>
                <HeroH1>Virtual Banking Made Easy</HeroH1>
                <HeroP>
                    Sign up for new account today and receive $250 in credit toward your next payment.
                </HeroP>
                <HeroBtnWrapper>
                  <Button to='/signin' 
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary='true'
                    dark='true'
                    >
                        Get started 
                        { hover ? <ArrowForward /> : <ArrowRight/>}

                   </Button>
                  
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
