import React, {useState} from 'react'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroBtnWrapper, HeroH1, HeroP, ArrowForward, ArrowRight} from './HeroElements'
import Video from '../../videos/video.mp4'
import {Button} from '../ButtonElement'

function HeroSection() {
  const [hover, setHover ] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='/video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>
          Virtual Banking Made Easy
        </HeroH1>
        <HeroP>
          Sign up for a new account today and recieve $250 in credit towards yur next payment.
        </HeroP>
        <HeroBtnWrapper>
          <Button to="singup" onMouseEnter={onHover} onMouseLeave={onHover}
          primary='true'
          dark="true">
            Get started{hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
