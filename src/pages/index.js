import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card';
import Section from '../components/Section';
import Wave from '../components/Wave';
import staticdata from '../../staticdata.json'
import Cell from '../components/Cell';
import styled from 'styled-components'

const SectionCaption = styled.p`
	font-weight: 600;
	font-size: 18px;
	text-transform: uppercase;
	color: #94A4BA;
	text-align: center;
`

const SectionCellGroup = styled.div`
	max-width: 800px;
	margin: 0 auto 100px;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-column-gap: 20px;
	padding: 0 20px;

	@media (max-width: 800px) {
		grid-template-columns: repeat(1, 1fr);
	}
`

const IndexPage = () => (
	<div>
		<div className ="Hero">
			<div className ="HeroGroup">
				<h1>Professional translations,<br />done faster.</h1>
				<p>Get your documents translated with AI assistance, providing you with high quality service and best prices on the market!</p>
				<Link to="/page-2/">Get First Access</Link>
				<div className="Logos">
					<img src="https://gdurl.com/aJH6" width="50" />
					<img src="https://gdurl.com/795a" width="50" />
					<img src="https://gdurl.com/AR5c" width="50" />
					<img src="https://gdurl.com/z0Ws" width="50" />
					<img src="https://gdurl.com/mAnK" width="50" />
					<img src="https://gdurl.com/Pf2K" width="50" />
					<img src="https://gdurl.com/Vv2o" width="50" />
					<img src="https://gdurl.com/T-xK" width="50" />
				</div>
				<Wave />
			</div>
		</div>
		<div className="Cards">
			<h2>11 courses, more coming</h2>
				<div className="CardGroup">
					<Card 
						title="DesignSystem"
						text="10 sections"
						image="https://gdurl.com/Vtlx" />
						<Card 
						title="React for Designers"
						text="11 sections"
						image="https://gdurl.com/Vtlx" />
						<Card 
						title="Sound Design"
						text="5 sections"
						image="https://gdurl.com/Vtlx" />
						<Card 
						title="ARKit 2"
						text="10 sections"
						image="https://gdurl.com/Vtlx" />
				</div>
		</div>

		<Section
		image='https://gdurl.com/Idam'
		logo='https://gdurl.com/veCW'
		title="React for Designers"
		text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with components, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify."
	 />
	 <SectionCaption>12 sections - 6 hours</SectionCaption>
	 <SectionCellGroup>
		{staticdata.cells.map(cell => (
		<Cell 
			title={cell.title}
			image={cell.image} />
		))}
	 </SectionCellGroup>
	</div>
)

export default IndexPage
