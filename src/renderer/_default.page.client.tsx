import * as React from 'react';
import { hydrateRoot } from 'react-dom/client';

import 'normalize.css';
import './globals.css';

import { Shell } from './shell';
import type { PageContextClient } from './types';

// This render() hook only supports SSR, see https://vike.dev/render-modes for how to modify render() to support SPA
export const render = async (pageContext: PageContextClient) => {
  const { Page, pageProps } = pageContext;

  if (!Page) {
    throw new Error(
      'Client-side render() hook expects pageContext.Page to be defined'
    );
  }

  const root = document.getElementById('root');

  if (!root) {
    throw new Error('DOM element #root not found');
  }

  hydrateRoot(
    root,
    <Shell pageContext={pageContext}>
      <Page {...pageProps} />
    </Shell>
  );
};

export const clientRouting = true;
