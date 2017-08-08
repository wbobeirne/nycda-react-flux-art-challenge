import "./List.scss";
import React from "react";

import ListArt from "components/ListArt";

class List extends React.Component {
	render() {
		// Replace me with real data
		const artList = [{
			id: 1,
			title: "Test 1",
			artist: "Test Artist",
			year: 2017,
			image: "http://via.placeholder.com/500x350",
		}, {
			id: 2,
			title: "Test 2",
			artist: "Test Artist",
			year: 2017,
			image: "http://via.placeholder.com/250x600",
		}, {
			id: 3,
			title: "Test 3",
			artist: "Test Artist",
			year: 2017,
			image: "http://via.placeholder.com/400x400",
		}];

		// Replace me with real data prop
		const favorites = {
			2: true,
		};

		// Replace me with real data prop
		const isShowingFavorites = false;
		let favClass = "List-filter-favorites";
		if (isShowingFavorites) {
			favClass += " isActive";
		}

		return (
			<div className="List">
				<div className="List-filter">
					Show only favorites
					<button className={favClass}>
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

export default List;
