import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import Footer from "../components/footer"
import Container from "../components/container"

import phone from "../images/phone-sm.jpg" 
import chip from "../images/chip-sm.jpg" 
import key from "../images/keyboard-sm.jpg" 
import old from "../images/old-sm.jpg" 


export default () => (
 <div className="full">
  	<Header headerText="Projects"/>   
  	<Layout>
	<h2>Projects</h2>

	<Container imgPath={old}
	head="Awesome Project"
	subhead="yada">
	</Container>

	<Container imgPath={key}
	head="Another Super Amazing Project"
	subhead="yada">
	</Container>  

	<Container imgPath={chip}
	head="Showstopping Project"
	subhead="yada">
	</Container>
	
	</Layout>
	<Footer />
  </div>


)