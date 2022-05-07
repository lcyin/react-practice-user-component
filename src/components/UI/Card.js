import React from 'react';
import classes from './Card.module.css';

const Card = (props) => {
  // props.children accept incoming content
  // props.className accept incoming class
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
