import * as React from 'react';

import { BulletPage } from '@components/bulletPage/bulletPage';
import { StandardPage } from '@components/standardPage';
import { IBlog } from '@renderer/blog.types';
import { PageProps } from '@renderer/types';
import { blogs, blogSlug } from '@utils';
import { PageContextBuiltIn } from 'vike';

export const Page = ({ blog }: { blog: IBlog }) => {
  console.log('blog contents:', blog);

  if (blog.type === 'standard') {
    return (
      <StandardPage
        content={blog.content}
        title={blog.title}
        date={blog.date}
      />
    );
  }

  if (blog.type === 'bullet') {
    return (
      <BulletPage content={blog.content} title={blog.title} date={blog.date} />
    );
  }

  return (
    <>
      <div>{blog.date}</div>
      <div>{blog.title}</div>
      {blog.content.map((item) => item)}
    </>
  );
};

export const onBeforeRender = (pageContext: PageContextBuiltIn) => ({
  pageContext: {
    pageProps: {
      blog: blogs.find((item) => pageContext.routeParams.id === blogSlug(item)),
    },
  },
});

export const getDocumentProps = (pageProps: PageProps) => ({
  title: pageProps.blog?.title,
  description: '',
});
