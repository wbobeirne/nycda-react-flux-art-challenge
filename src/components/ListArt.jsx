import "./ListArt.scss";
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class ListArt extends React.Component {
	render() {
		const { art, isFavorited } = this.props;

		return (
			<Link className="ListArt" to={`/art/${art.id}`}>
				<div className="ListArt-frame">
					<img src={art.image} className="ListArt-frame-image"/>
					{isFavorited &&
						<div className="ListArt-frame-favorite">♥</div>
					}
				</div>
				<div className="ListArt-title">
					{art.title}
				</div>
			</Link>
		);
	}
}

ListArt.propTypes = {
	art: PropTypes.shape({
		id: PropTypes.number,
		image: PropTypes.string,
		name: PropTypes.string,
	}).isRequired,
	isFavorited: PropTypes.bool,
};

export default ListArt;
