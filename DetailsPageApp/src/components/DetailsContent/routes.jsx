import React from 'react';
import ContentC from '../../pages/ContentC.jsx';
import ContentD from '../../pages/ContentD.jsx';

export const routes = [
  {
    path: '/contentC',
    element: <ContentC />,
  },
  {
    path: '/contentD',
    element: <ContentD />,
  },
];

export default routes;