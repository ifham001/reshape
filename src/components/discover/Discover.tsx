import React from 'react'
import BenefitsSection from './Benefits'
import TraditionalRiskAnalysis from './TraditionalRiskAnalysis'
import WhyChooseUs from './WhyChooseUs'
import Applications from './Applications'
import HowItWorks from './HowItWorks'

type Props = {}

const Discover = (props: Props) => {
  return (
   <>
   <Applications/>
   <HowItWorks/>
   <WhyChooseUs/>
   <TraditionalRiskAnalysis/>
   <BenefitsSection/>
   
   
   
   </>
  )
}

export default Discover