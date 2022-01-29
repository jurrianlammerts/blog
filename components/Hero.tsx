import styled from '@emotion/styled';
import { Button, Container, Row, Text } from '@nextui-org/react';

const Hero = () => {
  return (
    <Container
      as="header"
      css={{
        marginTop: '2rem',
        maxW: '75rem',
        display: 'flex',
        flexDirection: 'column-reverse',
        alignItems: 'center',

        '@sm': {
          margin: '0 auto',
          flexDirection: 'row',
        },
      }}
    >
      <HeroContent>
        <Text
          h1
          css={{
            fontSize: '5rem',
            lineHeight: 1,
            mb: '2rem',
            wordBreak: 'break-word',
          }}
        >
          Digital data analytics_..
        </Text>
        <Text
          as="p"
          css={{
            fontSize: '1.5rem',
            letterSpacing: '0.025rem',
            lineHeight: 1.25,
            w: '100%',
            '@sm': {
              w: '50%',
            },
          }}
        >
          Integrate our solutions - and start processing more sales
        </Text>
        <Row
          align="center"
          css={{
            marginTop: '2rem',
          }}
        >
          <Button
            color="gradient"
            auto
            size="xl"
            css={{
              mr: '1rem',
              zIndex: 0,
            }}
          >
            Get started
          </Button>
          <Button
            light
            auto
            size="xl"
            css={{
              zIndex: 0,
              px: '1.5rem',
              margin: 0,
              textTransform: 'uppercase',
              fontFamily: '$mono',
              fontSize: '0.875rem',
            }}
          >
            It&apos;s free
          </Button>
        </Row>
      </HeroContent>
      <HeroImage>
        <HeroIllustration />
      </HeroImage>
    </Container>
  );
};

export default Hero;

const HeroContent = styled.div`
  height: 100%;
  width: 100%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 960px) {
    height: 80vh;
    width: 50%;
  }
`;

const HeroImage = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  max-width: 20rem;
  display: flex;
  @media (min-width: 960px) {
    height: 80vh;
    max-width: 100%;
    width: 50%;
  }
`;

const HeroIllustration = ({ color }: { color?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={color}>
    <defs>
      <linearGradient id="gradient" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0070f3" offset="-20%" />
        <stop stopColor="#ff4ecd" offset="50%" />
      </linearGradient>
    </defs>
    <path
      fill="url(#gradient)"
      d="M12 0c-2.762 0-5 2.238-5 5s2.238 5 5 5 5-2.238 5-5-2.238-5-5-5zm.25 7.474v.526h-.5v-.499c-.518-.009-1.053-.132-1.5-.363l.228-.822c.478.186 1.114.383 1.612.271.574-.131.692-.722.057-1.006-.465-.217-1.889-.402-1.889-1.621 0-.682.52-1.292 1.492-1.426v-.534h.5v.509c.361.01.768.073 1.221.21l-.181.824c-.384-.135-.808-.258-1.222-.232-.744.043-.81.688-.29.958.855.402 1.972.7 1.972 1.772.002.859-.672 1.316-1.5 1.433zm-.25 6.526c-2.762 0-5 2.238-5 5s2.238 5 5 5 5-2.238 5-5-2.238-5-5-5zm0 9c-2.205 0-4-1.795-4-4s1.795-4 4-4c2.206 0 4 1.795 4 4s-1.794 4-4 4zm9.577-13.613c1.233 2.352 1.548 6.801-2.585 9.756.019-.882-.113-1.706-.436-2.572 2.113-1.744 2.051-4.264 1.193-6.234l-2.377 1.236 1.596-5.182 5.032 1.737-2.423 1.259zm-19.154 5.611c-1.233-2.352-1.46-7.146 2.672-10.101-.019.882.114 1.707.436 2.572-2.114 1.745-2.139 4.609-1.281 6.58l2.377-1.236-1.596 5.182-5.031-1.738 2.423-1.259zm9.576 7.002v-.756h-.248v.756h-.502v-.756h-1.242l.127-.744h.27c.219 0 .347-.213.347-.427v-2.222c0-.208-.122-.351-.341-.351h-.41v-.75h1.249v-.75h.502v.75h.248v-.75h.502v.763c1.078.037 1.506.445 1.629.907.143.545-.216 1.002-.525 1.114.375.096.896.373.896 1.013 0 .871-.673 1.454-1.999 1.454v.749h-.503zm-.248-2.751v1.251c.991 0 1.671-.094 1.671-.629 0-.575-.734-.622-1.671-.622zm0-.499c.552 0 1.395-.04 1.395-.626 0-.499-.521-.625-1.395-.625v1.251z"
    />
  </svg>
);
