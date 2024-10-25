import * as React from 'react';
import Button from '@mui/material/Button';

export default function ButtonGame(props) {
  return <Button onClick={props.onClick} variant="contained" color={props.color}>{props.text}</Button>;
}