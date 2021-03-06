import React from 'react';
import AppList from './AppList';

const HomePage = () => (
  <div>
    <h1>
      Aabhyasa Client
    </h1>
    <p>
      <i>
        <small>
          <b>abhyāsa</b>
          =Learning
        </small>
      </i>
      {' '}
      <i><small>(in Sanskrit language)</small></i>
    </p>

    <h3>About</h3>
    <p>This is a gallery of Machine Learning demos</p>

    <h3>Gallery</h3>
    <AppList />
  </div>
);

export default HomePage;
