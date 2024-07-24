import type {
  PageContextBuiltIn,
  PageContextBuiltInClientWithClientRouting as PageContextBuiltInClient,
} from 'vike/types';

import { IArticle } from './news.types';

export type PageProps = {
  article?: IArticle;
};
export type Page = (pageProps: PageProps) => React.ReactElement;

export interface IMetaData {
  title?: string;
  description?: string;
  img?: string;
  alt?: string;
  redirectUrl?: string;
  hidden?: boolean;
}

export type PageContextCustom = {
  Page: Page;
  pageProps?: PageProps;
  urlPathname: string;
  exports: {
    documentProps?: IMetaData;
    getDocumentProps?: (pageProps: PageProps) => IMetaData;
  };
};

export type PageContextServer = PageContextBuiltIn<Page> & PageContextCustom;
export type PageContextClient = PageContextBuiltInClient<Page> &
  PageContextCustom;

export type PageContext = PageContextClient | PageContextServer;
