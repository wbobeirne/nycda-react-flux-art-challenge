import "./App.scss";
import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import List from "pages/List";
import Art from "pages/Art";
import ART from "data/art";

class App extends React.Component {
	state = {
		artList: ART,
		favorites: {},
		isShowingFavorites: false,
		error: null,
		isLoading: false,
	};

	_getArt = (artId) => {
		// Returns the art object that has the same ID as the argument. If
		// no art is found with that ID, returns null.
		return this.state.artList.reduce((prev, art) => {
			return art.id === artId ? art : prev;
		}, null);
	}

	_toggleFavorite = (artId) => {
		const { favorites } = this.state;

		this.setState({
			// Creates a new favorites object, with the key at
			// artId marked as the opposite of what it was before
			favorites: {
				...favorites,
				[artId]: !favorites[artId],
			},
		});
	}

	_toggleFavoriteFilter = () => {
		// Replaces the art list with one that only has favorited art. If that's
		// already active, puts it back to having all art.
		const { isShowingFavorites, favorites } = this.state;
		let artList;

		if (isShowingFavorites) {
			artList = ART;
		}
		else {
			artList = this.state.artList.filter((art) => {
				return !!favorites[art.id];
			});
		}

		this.setState({
			artList,
			isShowingFavorites: !this.state.isShowingFavorites,
		});
	}

	render() {
		const { artList, favorites, isShowingFavorites, error, isLoading } = this.state;
		return (
			<BrowserRouter>
				<div className="App">
					<div className="App-header">
						<Link className="App-header-title" to="/">
							Art Gallery
						</Link>
					</div>

					<Switch>
						<Route exact path="/" render={() => {
							return ( 
								<List artList={artList}
									favorites={favorites} 
									toggleFavoriteFilter={this._toggleFavoriteFilter}

							 />
							 )
						}} />
						<Route path="/art/:artId" render={(props) => {
							return ( 
								<Art
										art={this._getArt(parseInt(props.match.params.artId))}
										artId={props.match.params.artId}
										favorite={favorites[props.match.params.artId]}
										toggleFavorite={this._toggleFavorite}
									
							 />
							 )
						}} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
