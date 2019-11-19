import React from 'react';
import './App.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import ComicCard from './components/ComicCard/ComicCard.js';

const baseURL = "https://gateway.marvel.com:443/v1/public/"
const APIKey = ""

// console.log(APIKey);
// console.log(baseURL + APIKey);

const Excelsior = (title) => {
  // e.preventDefault();
  let url = `${baseURL}comics?title=${title}&apikey=${APIKey}`;
  console.log(title)

  fetch(url)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.error({ message: err }))
}

function App() {
  return (
    <div className="App">
      <h1>Marvel Comic Book Search</h1>
      <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="exampleSearch" className="mr-sm-2">Your Comic</Label>
          <Input type="searc" name="search" id="exampleSearch" />
        </FormGroup>
        <Button 
          onClick={(event) => Excelsior(event.target.value)}
        >Excelsior!</Button>
      </Form>
      <ComicCard></ComicCard>
    </div>
  );
}

export default App;
