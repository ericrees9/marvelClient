import React from 'react';
import '../ComicCard/ComicCard.css';
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';

/* src={`${props.comicData.images[0].path}.jpg`} */
/* "http://i.annihil.us/u/prod/marvel/i/mg/a/03/53430272978fa.jpg" */

const ComicCard = (props) => (
  <div className='ComicCard'>
    <Card>
    <CardImg top width="100%" src={`${props.comicData.thumbnail.path}.jpg`} alt="Card image cap" />
        <CardBody>
          <CardTitle><h2>{props.comicData.title}</h2></CardTitle>
        </CardBody>
      </Card>
  </div>
);

export default ComicCard;
