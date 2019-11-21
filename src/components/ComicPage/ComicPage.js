import React, { useState, useEffect } from 'react';
import './ComicPage.css';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import { Link } from 'react-router-dom';
import IndvTestData from '../../individualTestData';
import moment from 'moment';

const ComicPage = (props) => {
  const [ singleComic, setSingleComic ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);
  const abortController = new AbortController();
  const signal = abortController.signal

  useEffect(() => {
    fetchComic();
    return function cleanup() {
      abortController.abort()
    }
  }, [])
  
  const fetchComic = () => {
    const uuid = (window.location.pathname).slice(11)
    const url = "https://gateway.marvel.com:443/v1/public/comics/" + uuid + "?apikey=6ac68c640e567a0be876ac9a65ba411f"

    fetch(url, { signal })
      .then(res => {
         res.json();
         setSingleComic(res.data.results[0]);
         console.log(res);
         setIsLoading(false)
      })
      .catch(err => console.error({ message: err })) 
    // setSingleComic(IndvTestData.data.results)
    // console.log(IndvTestData.data.results[0].images[0])
  }

  if (isLoading) {
    return ( <div>Loading...</div> );
  }
  return (
      <div className="main">
        {console.log(singleComic)}
        {/* <h1 className="comicTitle">{singleComic.title}</h1>
        <div className="resultsArea">
          <div className="left">
            <img className="img" src={`${singleComic.images[0].path}.jpg`} />
          </div>
          <div className="right">
            <ListGroup className="listArea">
              <ListGroupItem>
                <ListGroupItemHeading>Created By</ListGroupItemHeading>
                  <ListGroupItemText>
                  {singleComic.creators.items[0].name}
                  </ListGroupItemText>
              </ListGroupItem>
              <ListGroupItem>
                <ListGroupItemHeading>Description</ListGroupItemHeading>
                  <ListGroupItemText>
                  {singleComic.description}
                  </ListGroupItemText>
              </ListGroupItem>
              <ListGroupItem>
                <ListGroupItemHeading>On Sale Date</ListGroupItemHeading>
                  <ListGroupItemText>
                  {moment(singleComic.dates[0].date).format("MMMM Do YYYY")}
                  </ListGroupItemText>
              </ListGroupItem>
              <ListGroupItem>
                <ListGroupItemHeading>Original Print Price</ListGroupItemHeading>
                  <ListGroupItemText>
                  ${singleComic.prices[0].price}
                  </ListGroupItemText>
              </ListGroupItem>
              <ListGroupItem>
                <ListGroupItemHeading>Pages</ListGroupItemHeading>
                  <ListGroupItemText>
                  {singleComic.pageCount}
                  </ListGroupItemText>
              </ListGroupItem>
              <ListGroupItem>
                <ListGroupItemHeading><a target="_blank" href={`${singleComic.urls[0].url}`}>More Details</a></ListGroupItemHeading>
              </ListGroupItem>
              <ListGroupItem>
                <ListGroupItemHeading><a target="_blank" href={`${singleComic.urls[1].url}`}>Buy Now</a></ListGroupItemHeading>
              </ListGroupItem>
              <ListGroupItem>
                <ListGroupItemHeading><Link to="/">Back to Search</Link></ListGroupItemHeading>
              </ListGroupItem>
            </ListGroup>
          </div>
        </div> */}
      </div>
  );
};

export default ComicPage;
