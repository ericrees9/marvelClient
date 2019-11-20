import React from 'react';
import PropTypes from 'prop-types';
import styles from './ComicCard.module.css';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

/* src={`${props.comicData.images[0].path}.jpg`} */

const ComicCard = (props) => (
  <div className={styles.ComicCard}>
    <Card>
    <CardImg top width="100%" src="http://i.annihil.us/u/prod/marvel/i/mg/a/03/53430272978fa.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.comicData.title}</CardTitle>
          <CardSubtitle>{props.comicData.description}</CardSubtitle>
          <Button>Read More</Button>
        </CardBody>
      </Card>
  </div>
);

ComicCard.propTypes = {};

ComicCard.defaultProps = {};

export default ComicCard;
