import "./Art.scss";
import React from "react";

class Art extends React.Component {
	_handleClick = () => {
		this.props.toggleFavorite(this.props.art.id);
	}

	render() {
		// Replace me with real data from props
		const { art, favorite, toggleFavorite } = this.props;
		console.log(art); 
		// Replace me with real data from props
		const isFavorited = favorite;
		console.log(isFavorited);
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
					<button className={favClass} onClick={this._handleClick}>
						{isFavorited ? 'Unfavorite' : 'Favorite'} ♥
					</button>
				</div>
			</div>
		);
	}
}

export default Art;
