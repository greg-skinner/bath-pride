// See https://vike.dev/data-fetching
import * as React from 'react';
import ReactDOMServer from 'react-dom/server';

import 'normalize.css';
import './globals.css';

import { dangerouslySkipEscape, escapeInject } from 'vike/server';

import { Shell } from './shell';
import type { IMetaData, PageContextServer } from './types';

export const passToClient = ['pageProps'];

export const onRenderHtml = async (pageContext: PageContextServer) => {
  const { Page, pageProps } = pageContext;

  // This render() hook only supports SSR, see https://vike.dev/render-modes for how to modify render() to support SPA
  if (!Page) {
    throw new Error('My render() hook expects pageContext.Page to be defined');
  }

  const pageHtml = ReactDOMServer.renderToString(
    <Shell pageContext={pageContext}>
      <Page {...pageProps} />
    </Shell>
  );

  // See https://vike.dev.com/head
  const { documentProps, getDocumentProps } = pageContext.exports;
  const getMetaData = (field: keyof IMetaData, fallback: string) =>
    (pageProps && getDocumentProps?.(pageProps)[field]) ||
    (documentProps && documentProps[field]) ||
    fallback;

  const title = getMetaData('title', '');
  const desc = getMetaData('description', 'Bath Pride');
  const img = getMetaData('img', 'images/logo_stone.png');
  const alt = getMetaData('alt', 'Bath Pride logo');

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="Content-Security-Policy" content="default-src 'self'">
        <meta name="google" content="nositelinkssearchbox">
        <link rel="icon" sizes="192x192" href="${
          APP_CONFIG.BASE_URL
        }images/icon.png" />
        <meta name="description" content="${desc}" />
        <title>${`${title ? `${title} - ` : ''}Bath Pride`}</title>
        <meta name="subject" content="Bath Pride">
        <meta name="rating" content="General">
        <meta name="referrer" content="no-referrer">
        <meta property="og:site_name" content="Bath Pride">
        <meta property="og:title" content="${title}" />
        <meta property="og:type" content="article" />
        <meta property="og:description" content="${desc}" />
        <meta property="og:image" content="${APP_CONFIG.HOST}${
          APP_CONFIG.BASE_URL
        }${img}" />
        <meta property="og:image:alt" content="${alt}" />
        <meta property="og:locale" content="en_GB">
        <meta property="og:url" content="${
          APP_CONFIG.HOST + pageContext.urlPathname
        }" />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body>
        <div id="root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;

  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vike.dev/page-redirection
    },
  };
};
