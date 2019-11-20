import React from 'react';
import PropTypes from 'prop-types';
import styles from './ComicCard.module.css';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

const ComicCard = (props) => (
  <div className={styles.ComicCard}>
    <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.comicData.title}</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
  </div>
);

ComicCard.propTypes = {};

ComicCard.defaultProps = {};

export default ComicCard;
