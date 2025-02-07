import Joinus from '@/components/JoinUs'

import AboutUs from '@/components/AboutUs'
import Form from '@/components/Form'
import Grid from './components/Grid'
import Vision from './components/Vision'
import Heading from '@/components/Heading'


function About() {
  return (
    <div>
      <Heading title="About Us"/>
      <Grid />
      <AboutUs />
      <Vision />
      <Joinus /> 
      <Form />
      
    </div>
  )
}

export default About
