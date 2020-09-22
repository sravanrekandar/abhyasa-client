import React from 'react';
import { Route } from 'react-router-dom';
import AboutPage from './components/AboutPage';
import DogBreedDetector from './components/DogBreedDetector';
import HomePage from './components/HomePage';
import NotFoundPage from './components/NotFoundPage';

export default [
  <Route key="/" path="/" exact component={HomePage} />,
  <Route key="/about" path="/about" component={AboutPage} />,
  <Route key="/dog-breed-detector" path="/dog-breed-detector" component={DogBreedDetector} />,
  <Route key="/not-found" component={NotFoundPage} />,
];
