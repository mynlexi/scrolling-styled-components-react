import React from 'react'
import {ServicesCard, ServicesContainer, ServicesH2, ServicesIcon, ServicesP, ServicesH1,ServicesWrapper} from './ServiceElements'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'


const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
        <ServicesIcon src={Icon1} />
        <ServicesH2>Reduce expenses</ServicesH2>
        <ServicesP>we help reduce your fees and increase overall revenue</ServicesP>
        </ServicesCard>
        <ServicesCard>
        <ServicesIcon src={Icon2} />
        <ServicesH2>Virtual Offices</ServicesH2>
        <ServicesP>we help reduce your fees and increase overall revenue</ServicesP>
        </ServicesCard>
        <ServicesCard>
        <ServicesIcon src={Icon3} />
        <ServicesH2>Premium Benefits</ServicesH2>
        <ServicesP>we help reduce your fees and increase overall revenue</ServicesP>
        </ServicesCard>
      </ServicesWrapper>

      
    </ServicesContainer>
  )
}

export default Services
