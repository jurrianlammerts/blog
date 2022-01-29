import Head from 'next/head';
import { Container, Divider, Text } from '@nextui-org/react';

import { getPosts } from '../lib/api';
import Overview from '../components/Overview';
import Hero from '../components/Hero';

const Home = ({ posts = [] }: any) => {
  return (
    <div>
      <Head>
        <title>Blog - a Next.js app using NextUI as a react UI library</title>
        <meta
          name="description"
          content="a Next.js app using NextUI as a react UI library"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Container
        as="main"
        css={{
          marginTop: '2rem',
          maxW: '75rem',
        }}
      >
        <Divider />
        <Text
          h2
          css={{
            fontSize: '5rem',
            mb: '2rem',
            px: '1.5rem',
          }}
        >
          The Blog
        </Text>
        <Overview posts={posts.results} />
      </Container>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  // Get all posts from the Notion database
  const posts: any = await getPosts();

  return {
    props: {
      posts,
    },
    revalidate: 60,
  };
}
