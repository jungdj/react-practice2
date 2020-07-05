import React from 'react';
import loadable from '@loadable/component';
import Loading from './LoadingPage';

export const HomePage = loadable(() => import('./HomePage'), {
  fallback: <Loading />,
});

export const AboutPage = loadable(() => import('./AboutPage'), {
  fallback: <Loading />,
});
