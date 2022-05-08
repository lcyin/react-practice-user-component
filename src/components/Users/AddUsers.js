import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModel from '../UI/ErrorModel ';
import Wrapper from '../Helpers/Wrapper';

import classes from './AddUsers.module.css';
/**
 * Handle User Input
 */
const AddUser = (props) => {
  const [inputUsername, setInputUsername] = useState('');
  const [inputAge, setInputAge] = useState('');
  const [error, setError] = useState();

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (inputUsername.trim().length === 0 || inputAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age.',
      });
      return;
    }
    // add + to ensure number
    if (+inputAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }
    props.onAddUser(inputUsername, inputAge);
    setInputUsername('');
    setInputAge('');
  };

  const usernameChangeHandler = (event) => {
    setInputUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setInputAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModel
          title={error.title}
          message={error.message}
          onConfrim={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={handleOnSubmit}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={inputUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={inputAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
