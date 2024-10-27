import * as React from 'react';
import Button from '@mui/material/Button';
import '@mui/material/styles';


export default function ButtonGame({ text, onClick, className, color }) {
  return <Button className={className} onClick={onClick} variant="contained" color={color}>{text}</Button>;
}