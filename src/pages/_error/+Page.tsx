import * as React from 'react';

import 'normalize.css';
import '@renderer/globals.css';

import { IMetaData } from '@renderer/types';

export const Page = ({ is404 }: { is404: boolean }) => {
  if (is404) {
    return (
      <>
        <h1>404 Page Not Found</h1>
        <p>This page could not be found.</p>
      </>
    );
  }

  return (
    <>
      <h1>500 Internal Error</h1>
      <p>Something went wrong.</p>
    </>
  );
};

export const documentProps: IMetaData = {
  title: 'Error',
};
