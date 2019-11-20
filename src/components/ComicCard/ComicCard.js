import React from 'react';
import PropTypes from 'prop-types';
import styles from './ComicCard.module.css';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

const ComicCard = (props) => (
  <div className={styles.ComicCard}>
    <Card>
        <CardImg top width="100%" src={props.comicData.images[0].path} alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.comicData.title}</CardTitle>
          <CardSubtitle>{props.comicData.series.name}</CardSubtitle>
          <Button>Read On</Button>
        </CardBody>
      </Card>
  </div>
);

ComicCard.propTypes = {};

ComicCard.defaultProps = {};

export default ComicCard;
