import React from 'react'
import Hero from '../Component/Elements/Hero'
import Yahoo from '../Component/Elements/Yahoo'
import Staking from '../Component/Elements/Staking'
import Slider from '../Component/Elements/Slider'
import Stakingwork from '../Component/Elements/Stakingwork'
import Benefit from '../Component/Elements/Benefit'
import Video from '../Component/Elements/Video'
import Live from '../Component/Elements/Live'
import Mission from '../Component/Elements/Mission'
import Vision from '../Component/Elements/Vision'
import Tokenomics from '../Component/Elements/Tokenomics'
import Roadmap from '../Component/Elements/Roadmap'
import Rugpul from '../Component/Elements/Rugpul'
import Friends from '../Component/Elements/Friends'
import Feature from '../Component/Elements/Feature'
import Faqs from '../Component/Utils/Faqs'
function Home() {
  return (
    <div>
      <Hero/>
      <Yahoo/>
      <Staking/>
      <Slider/>
      <Stakingwork/>
      <Feature/>
      <Video/>
      <Benefit/>
      <Live/>
      <Mission/>
      <Vision/>
      <Tokenomics/>
      <Roadmap/>
      <Rugpul/>
      <Faqs/>
      <Friends/>
    </div>
  )
}

export default Home
