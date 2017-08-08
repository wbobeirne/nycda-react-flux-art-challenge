import "./Art.scss";
import React from "react";

class Art extends React.Component {
	render() {
		// Replace me with real data from props
		const art = {
			id: 1,
			title: "Test Art",
			artist: "Test Artist",
			year: 2017,
			image: "http://via.placeholder.com/300x300"
		};

		// Replace me with real data from props
		const isFavorited = false;
		let favClass = "Art-info-favorite";
		if (isFavorited) {
			favClass += " isActive";
		}

		return (
			<div className="Art">
				<div className="Art-frame">
					<img className="Art-frame-image" src={art.image}/>
				</div>

				<div className="Art-info">
					<div className="Art-info-title">{art.title}</div>
					<div className="Art-info-artist">{art.artist} ({art.year})</div>
					<button className={favClass}>
						{isFavorited ? 'Unfavorite' : 'Favorite'} ♥
					</button>
				</div>
			</div>
		);
	}
}

export default Art;
