import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import Button from './Button';
import classes from './ErrorModel.module.css';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfrim} />;
};

const ModelOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfrim}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModel = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfrim={props.onConfrim} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModelOverlay
          title={props.title}
          message={props.message}
          onConfrim={props.onConfrim}
        />,
        document.getElementById('overlay-root')
      )}
    </React.Fragment>
  );
};

export default ErrorModel;
