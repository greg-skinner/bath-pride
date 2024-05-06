import { news, newsSlug } from '@utils';
import { PageContextBuiltIn } from 'vike/types';

export const onBeforeRender = (pageContext: PageContextBuiltIn) => ({
  pageContext: {
    pageProps: {
      article: news.find(
        (item) => pageContext.routeParams.id.slice(0, 10) === newsSlug(item)
      ),
    },
  },
});
