import React, { useState } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import JokeCategories from './components/JokeCategories/JokeCategories';
import RandomCategoryJoke from './components/RandomCategoryJoke/RandomCategoryJoke';
import StarWarsCharaters from './components/StarWarsCharacters/StarWarsCharaters';

import FullSearch from './components/FullSearch/FullSearch';

function App() {
  const [searchInput, setSearchInput] = useState(false);

  return (
    <Router>
      <div className="App">
        <Navigation
          setSearchInput={(setSearchInput)}
        />

        <Switch>
          <Route path="/" exact component={JokeCategories} />
          <Route path="/jokes" exact component={JokeCategories} />
          <Route path="/jokes/:category" component={RandomCategoryJoke} />
          <Route path="/characters" component={StarWarsCharaters} />
          {searchInput &&
            <FullSearch
              searchInput={searchInput} path="/search" component={FullSearch}
            />
          }
        </Switch>
      </div>
    </Router>
  );
}



export default App;
