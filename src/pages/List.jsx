import "./List.scss";
import React from "react";
import PropTypes from "prop-types";

import ListArt from "components/ListArt";

class List extends React.Component {
	render() {
		// Replace me with real data
		const { artList, favorites, isShowingFavorites, toggleFavoriteFilter } = this.props;

		// Replace me with real data prop
		// this was favorites, now declared above	
		// Replace me with real data prop
		let favClass = "List-filter-favorites";
		if (isShowingFavorites) {
			favClass += " isActive";
		}

		return (
			<div className="List">
				<div className="List-filter">
					Show only favorites
					<button className={favClass} onClick={toggleFavoriteFilter}>
						♥
					</button>
				</div>

				{artList.map((art) => {
					return (
						<ListArt
							key={art.id}
							art={art}
							isFavorited={favorites[art.id]}
						/>
					);
				})}
			</div>
		);
	}
}

List.propTypes = {
	artList: PropTypes.shape({

	})
}

export default List;
