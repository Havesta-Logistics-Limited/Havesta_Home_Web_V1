import React from 'react';
import { useLocation } from 'react-router-dom';

const RouteWrapper = ({ component: Component, hero }) => {
  return <Component hero={hero} />;
};

export default RouteWrapper;
