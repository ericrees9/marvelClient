import React, { useState } from 'react';
import './App.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import ComicCard from './components/ComicCard/ComicCard.js';
import TestData from '../src/testData.js';

const baseURL = "https://gateway.marvel.com:443/v1/public/"
const APIKey = "6ac68c640e567a0be876ac9a65ba411f"

// console.log(APIKey);
// console.log(baseURL + APIKey);

function App() {
  const [search, setSearch] = useState("");
  const [comics, setComics] = useState([]);

  console.log(TestData);
  
  const Excelsior = (e) => {
    // e.preventDefault();
    // let url = `${baseURL}comics?title=${search}&apikey=${APIKey}`;
    // console.log(search)
  
    // fetch(url)
    //   .then(res => res.json())
    //   .then(res => {setComics(res.data.results); console.log(res)})
    //   .catch(err => console.error({ message: err }))
    setComics(TestData.data.results);
  }

  return (
    <div className="App">
      <div className="Header">
        <h1>Marvel Comic Book Search</h1>
        <Form>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="exampleSearch" className="mr-sm-2">Your Comic</Label>
            <Input type="search" name="search" id="exampleSearch" onChange={(e) => setSearch(e.target.value)} />
          </FormGroup>
          <Button onClick={(e) => Excelsior(e)}>Excelsior!</Button>
        </Form>
      </div>
      <div className="ResultsArea">
        {comics.map((comic, index) => {
          return(
            <ComicCard comicData={comic}>{comic.title}</ComicCard>
          )
        })}
      </div>
    </div>
  );
}

export default App;
