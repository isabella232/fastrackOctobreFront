// == Import : npm
import React from 'react';
import { render } from 'react-dom';


// == Import : local
import Nav from 'src/components/Nav';

// == Render
const rootComponent = (
  <Nav />
);

// Le rendu de React => DOM
render(rootComponent, document.getElementById('root'));
