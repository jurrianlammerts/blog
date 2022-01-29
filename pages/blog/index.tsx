import Head from 'next/head';
import { Container, Text } from '@nextui-org/react';

import { getPosts } from '../../lib/api';
import Overview from '../../components/Overview';

const Home = ({ posts = [] }: any) => {
  return (
    <div>
      <Head>
        <title>Next.js blog</title>
        <meta
          name="description"
          content="Generated by create next app and using NextUI as a react UI library"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container
        as="main"
        css={{
          maxW: '75rem',
          marginTop: '2rem',
        }}
      >
        <Text
          h1
          css={{
            fontSize: '5rem',
            mb: '2rem',
            textGradient: '45deg, $blue500 -20%, $pink500 50%',
          }}
        >
          The Blog
        </Text>
        {console.log('posts: ', posts.results)}
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
