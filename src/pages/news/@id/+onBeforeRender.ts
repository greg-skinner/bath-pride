import { news, newsSlug } from '@utils';
import { PageContextBuiltIn } from 'vike/types';

export const onBeforeRender = (pageContext: PageContextBuiltIn) => ({
  pageContext: {
    pageProps: {
      news: news.find((item) => pageContext.routeParams.id === newsSlug(item)),
    },
  },
});
