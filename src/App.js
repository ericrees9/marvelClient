import React, { useState } from 'react';
import './App.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import ComicCard from './components/ComicCard/ComicCard.js';
import ComicPage from './components/ComicPage/ComicPage.js';
import TestData from '../src/testData.js';

const baseURL = "https://gateway.marvel.com:443/v1/public/"
const APIKey = "6ac68c640e567a0be876ac9a65ba411f"
let COMIC_ROUTE = "/comicpage/:comicID"

// console.log(APIKey);
// console.log(baseURL + APIKey);

function App() {
  const [search, setSearch] = useState("");
  const [comics, setComics] = useState([]);

  // console.log(TestData);
  
  const Excelsior = (e) => {
    e.preventDefault();
    let url = `${baseURL}comics?title=${search}&apikey=${APIKey}`;
    // console.log(search)
  
    fetch(url)
      .then(res => res.json())
      .then(res => {setComics(res.data.results); console.log(res)})
      .catch(err => console.error({ message: err }))
    // setComics(TestData.data.results);
  }

  return (
    <Router>
    <Switch>
      <Route exact path="/">
        <div className="App">
        <h1 className="bigHeader">Marvel Comic Book Search</h1>
          <div className="Header">
            <Form inline>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="exampleSearch" className="mr-sm-2">Which hero are you looking for?</Label>
                <Input type="search" name="search" id="exampleSearch" onChange={(e) => setSearch(e.target.value)} />
              </FormGroup>
              <Button color="warning" onClick={(e) => Excelsior(e)}>Excelsior!</Button>
            </Form>
          </div>
          <div className="ResultsArea">
            {comics.map((comic, index) => {
              return(
                <Link to={{ pathname: COMIC_ROUTE.replace(':comicID', `${comic.id}`), state: { data: comic } }}>
                  <ComicCard comicData={comic}>{comic.title}</ComicCard>
                </Link>
              )
            })}
          </div>
        </div>
        </Route>
        <Route path="/comicpage" component={ComicPage}><ComicPage comicData={comics} /></Route>
    </Switch>
    </Router>
  );
}

export default App;
