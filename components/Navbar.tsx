import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  Col,
  Container,
  Divider,
  Row,
  Switch,
  Text,
  Tooltip,
  useTheme,
} from '@nextui-org/react';

import { useTheme as useNextTheme } from 'next-themes';
import Link from 'next/link';
import Headroom from 'react-headroom';
import { Moon, Sun } from 'react-feather';

const Navbar = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <Headroom
      style={{
        backgroundColor: show ? (isDark ? '#1d1d1d' : '#fff') : 'transparent',
      }}
    >
      <Container
        as="nav"
        css={{
          maxW: '75rem',
        }}
      >
        <Row
          justify="space-between"
          align="center"
          css={{
            px: '1.5rem',
          }}
        >
          <Col>
            <Link href="/" passHref>
              <Text
                as="a"
                size={60}
                css={{
                  textGradient: '45deg, $blue500 -20%, $pink500 50%',
                }}
                weight="bold"
              >
                Logo
              </Text>
            </Link>
          </Col>
          <Col
            css={{
              display: 'flex',
              justifyContent: 'flex-end',
              px: '2rem',
            }}
          >
            <Link href="/" passHref>
              <Text
                as="a"
                size={20}
                css={
                  router.pathname == '/'
                    ? {
                        px: '1rem',
                        textGradient: '45deg, $blue500 -20%, $pink500 50%',
                      }
                    : { px: '1rem' }
                }
                weight="bold"
              >
                Home
              </Text>
            </Link>
            <Tooltip
              content="Connect your Crypto wallet"
              color="invert"
              placement="bottom"
              css={{
                color: isDark ? '#1d1d1d' : '#fff',
              }}
            >
              <Link href="/wallet" passHref>
                <Text
                  as="a"
                  size={20}
                  css={
                    router.pathname == '/wallet'
                      ? {
                          px: '1rem',
                          textGradient: '45deg, $blue500 -20%, $pink500 50%',
                        }
                      : { px: '1rem' }
                  }
                  weight="bold"
                >
                  Wallet
                </Text>
              </Link>
            </Tooltip>
            <Link href="/blog" passHref>
              <Text
                as="a"
                size={20}
                css={
                  router.pathname == '/blog'
                    ? {
                        px: '1rem',
                        textGradient: '45deg, $blue500 -20%, $pink500 50%',
                      }
                    : { px: '1rem' }
                }
                weight="bold"
              >
                Blog
              </Text>
            </Link>
          </Col>
          <Switch
            aria-label="Toggle dark mode"
            color="primary"
            checked={!isDark}
            onChange={(e) => setTheme(e.target.checked ? 'light' : 'dark')}
            iconOn={<Sun />}
            iconOff={<Moon />}
          />
        </Row>
      </Container>
      <Divider />
    </Headroom>
  );
};

export default Navbar;
