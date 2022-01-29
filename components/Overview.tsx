import NextLink from 'next/link';
import { Grid, Text } from '@nextui-org/react';
import styled from '@emotion/styled';

import { PostData } from '../types';
import Image from 'next/image';

interface Props {
  posts: PostData[];
}

const Overview = ({ posts }: Props) => {
  const highlightedPost = posts.filter(
    (post) => post.properties.highlighted.checkbox,
  )[0] as PostData;
  const otherPosts = posts.filter(
    (post) => !post.properties.highlighted.checkbox,
  );
  return (
    <>
      <NextLink
        href={`/blog/${highlightedPost.properties.slug.rich_text[0].plain_text}`}
        passHref
      >
        <HighLightedPost>
          <HighLightedPostImage>
            {highlightedPost.properties.thumbnail?.files[0]?.external?.url && (
              <Image
                src={
                  highlightedPost.properties.thumbnail?.files[0]?.external?.url
                }
                alt={highlightedPost.properties.name.title[0].plain_text}
                layout="fill"
                objectFit="cover"
              />
            )}
          </HighLightedPostImage>
          <HighLightedPostContent>
            <Text
              color="$accents6"
              css={{
                mt: '1rem',
              }}
            >
              {highlightedPost.properties.published.date.start}
            </Text>
            <Text
              h2
              css={{
                fontSize: '3.5rem',
                lineHeight: '1.2',
              }}
            >
              {highlightedPost.properties.name.title[0].plain_text}
            </Text>
            <Text color="$accents6">
              {highlightedPost.properties.subtitle.rich_text[0].plain_text}
            </Text>
          </HighLightedPostContent>
        </HighLightedPost>
      </NextLink>
      <Grid.Container
        gap={4}
        justify="space-between"
        css={{
          marginTop: '2rem',
        }}
      >
        {otherPosts.map((post: PostData) => (
          <Grid
            key={post.id}
            xs={12}
            sm={6}
            lg={4}
            css={{
              maxW: '30rem',
              w: '100%',
            }}
          >
            <NextLink
              href={`/blog/${post.properties.slug.rich_text[0].plain_text}`}
              passHref
            >
              <a
                style={{
                  width: '100%',
                }}
              >
                <>
                  <PostImage>
                    {post.properties.thumbnail?.files[0]?.external?.url && (
                      <Image
                        src={post.properties.thumbnail?.files[0]?.external?.url}
                        alt={post.properties.name.title[0].plain_text}
                        layout="fill"
                        objectFit="cover"
                      />
                    )}
                  </PostImage>
                  <Text
                    color="$accents6"
                    css={{
                      mt: '1rem',
                    }}
                  >
                    {post.properties.published.date.start}
                  </Text>
                  <Text h2>{post.properties.name.title[0].plain_text}</Text>
                  <Text color="$accents6">
                    {post.properties.subtitle.rich_text[0].plain_text}
                  </Text>
                </>
              </a>
            </NextLink>
          </Grid>
        ))}
      </Grid.Container>
    </>
  );
};

export default Overview;

const HighLightedPost = styled.a`
  position: relative;
  height: 30rem;
  overflow: hidden;
  display: flex;
  flex-direction: row;
`;

const HighLightedPostImage = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  border-radius: 0.5rem;
`;

const HighLightedPostContent = styled.div`
  width: 40rem;
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const PostImage = styled.div`
  position: relative;
  height: 15rem;
  width: 100%;
  overflow: hidden;
  border-radius: 0.5rem;
`;
