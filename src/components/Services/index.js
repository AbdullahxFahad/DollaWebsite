import React from 'react'
import { ServicesWrapper,
    ServicesContainer, 
    ServicesH1,
    ServicesCard,
    ServicesH2,
    ServicesIcon,
    ServicesP
 } from './ServicesElements'

 import Icon1 from '../../images/svg-1.svg'
 import Icon2 from '../../images/svg-3.svg'
 import Icon3 from '../../images/svg-4.svg'

 const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Reduce expenses</ServicesH2>
                    <ServicesP>We help reduce your fees and increase your overall revenue.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Virtual Office</ServicesH2>
                    <ServicesP>You can access our paltform online anywhere in the world.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Premium Bank </ServicesH2>
                    <ServicesP>Unlock our special membership card that returns 5% cash back.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>

        </ServicesContainer>
    )
}

export default Services