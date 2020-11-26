import React from 'react'
import { ServicesCard, ServicesContainer, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper } from './ServicesElements'
import car from '../../images/off_road.svg'
import saving from '../../images/Saving.svg'
import signup from '../../images/card.svg'
const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={car}></ServicesIcon>
                    <ServicesH2>Reduce Expenses</ServicesH2>
                    <ServicesP>We help reduce your fees and increase your overall revenue</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={saving}></ServicesIcon>
                    <ServicesH2>Virtual Offices</ServicesH2>
                    <ServicesP>You can access our plateform online anywhere in world.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={signup}></ServicesIcon>
                    <ServicesH2>Premium Benifits</ServicesH2>
                    <ServicesP>Unlock our special membership card that return 5% cashback.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>

            
        </ServicesContainer>
    )
}

export default Services
