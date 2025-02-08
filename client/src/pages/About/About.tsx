import Joinus from '@/components/JoinUs'

import AboutUs from '@/components/AboutUs'
import Form from '@/components/Form'
import Grid from './components/Grid'
import Vision from './components/Vision'
import Heading from '@/components/Heading'
import PageTitle from '@/components/PageTitle'


function About() {
  return (
    <div>
      <Heading title="About Us"/>
      <PageTitle title="About Us - MarketingExl" />
      <Grid />
      <AboutUs />
      <Vision />
      <Joinus /> 
      <Form />
      
    </div>
  )
}

export default About
