import React from 'react';
import ReactDOM from 'react-dom';
import GifExperApp from './GifExpertApp';
import './index.css';
import 'animate.css';

ReactDOM.render(
  <React.StrictMode>
    <GifExperApp defaultCategories={['One Piece']} />
  </React.StrictMode>,

  document.getElementById('root')
);
