import React from 'react'
import {Link} from 'react-router'


export default React.CreateClass({
	render: function (){
		return(
			<div id="gallery_layout">
				<div className="coloumn">
					<div className="button"></div>
					<div className="button"></div>
					<div className="button"></div>
					<div className="button"></div>
					<div className="button"></div>
					<div className="button"></div>
				</div>
				<div className="pictures">
					<div className="header_pictures"><h1>Pictures</h1></div>
					<div className="photos"></div>
					<div className="photos"></div>
					<div className="photos"></div>
					<div className="photos"></div>
					<div className="photos"></div>
					<div className="photos"></div>
				</div>



			</div>
		)
	}
})