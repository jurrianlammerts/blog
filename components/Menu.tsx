import { Col, Container, Switch, Text, useTheme } from '@nextui-org/react';
import { useTheme as useNextTheme } from 'next-themes';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Moon, Sun } from 'react-feather';

const activeStyle = {
  py: '0.5rem',
  textGradient: '45deg, $blue500 -20%, $pink500 50%',
};

const style = {
  py: '0.5rem',
};

const Menu = () => {
  const router = useRouter();
  const { isDark } = useTheme();
  const { setTheme } = useNextTheme();
  return (
    <Container
      css={{
        position: 'fixed',
        top: '90px',
        background: isDark ? '#1d1d1d' : '#fff',
        left: '0',
        zIndex: 1,
        py: '2rem',
        height: '100%',
        maxH: '90vh',
      }}
    >
      <Col
        css={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Link href="/" passHref>
          <Text
            as="a"
            size={40}
            css={router.pathname == '/' ? activeStyle : style}
            weight="bold"
          >
            Home
          </Text>
        </Link>

        <Link href="/wallet" passHref>
          <Text
            as="a"
            size={40}
            css={router.pathname == '/wallet' ? activeStyle : style}
            weight="bold"
          >
            Wallet
          </Text>
        </Link>

        <Link href="/blog" passHref>
          <Text
            as="a"
            size={40}
            css={router.pathname == '/blog' ? activeStyle : style}
            weight="bold"
          >
            Blog
          </Text>
        </Link>
      </Col>

      <Col
        css={{
          py: '2rem',
        }}
      >
        <Switch
          aria-label={`Toggle dark mode ${isDark ? 'on' : 'off'}`}
          color="primary"
          checked={!isDark}
          onChange={(e) => setTheme(e.target.checked ? 'light' : 'dark')}
          iconOn={<Sun />}
          iconOff={<Moon />}
        />
      </Col>
    </Container>
  );
};

export default Menu;
