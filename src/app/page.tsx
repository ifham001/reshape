
import Hero from '@/components/layout/Hero'
import MeetFounders from '@/components/layout/MeetFounders'
import { Partners } from '@/components/layout/Partners'
import RiskAnalysisSection from '@/components/layout/RiskAnalysisSection'
import { TickerLine } from '@/components/layout/TickerLine'
import React from 'react'

type Props = {}

function page({}: Props) {
  return (
   <>

   <Hero/>
   <TickerLine/>
   <Partners/>
   <RiskAnalysisSection/>
   <MeetFounders/>
   {/* <ContactPage/>
   <Faqs/> */}

   
   </>
  )
}

export default page