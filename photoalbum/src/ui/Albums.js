import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
	render: function (){
		return(
			<div id = "containerAlbum">
				<div className="header"><h1>Albums</h1></div>
				<div id="page1">
					<div className="album">
						<img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTh4dzK4Vi-7h2iP-x4a91ZGvF49rc4tzhQgtakkFCG9QhSAZlJzQ"></img>
						<h3>Me</h3>
					</div>
						<div className="album">
						<img src="https://s-media-cache-ak0.pinimg.com/236x/90/b2/23/90b223870c2b8fe92d66c1654f30afdd.jpg"></img>
						<h3>My Boy</h3>
					</div>
					<div className="album">
						<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgSpQABohHYFKHtxCPNGZQw3bt-uvchor61DPKeP5k4HKpTH7Fog"></img>
						<h3>Family</h3>
					</div>
					<div className="album">
						<img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTLEAjec7f06m_YI41Je4CwGTqvM-QUESQGPulUWx5_Oh4Typzk"></img>
						<h3>Pets</h3>
					</div>
					<div className="album">
						<img src="http://www.menshealth.com/sites/menshealth.com/files/styles/slideshow-desktop/public/images/slideshow2/guy-trips-1.jpg?itok=v0Kricch"></img>
						<h3>Travel</h3>
					</div>
					<div className="album">
						<img src="http://runthetrap.com/wp-content/uploads/2015/03/umf14a_075.jpg"></img>
						<h3>Concerts</h3>
					</div>
				</div>
			</div>
		)
	}
})	