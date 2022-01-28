import {
  Col,
  Container,
  Divider,
  Row,
  Switch,
  Text,
  useTheme,
} from '@nextui-org/react';
import { useTheme as useNextTheme } from 'next-themes';
import Link from 'next/link';
import Headroom from 'react-headroom';
import { Moon, Sun } from 'react-feather';

const Navbar = () => {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();

  return (
    <Headroom
      style={{
        backgroundColor: isDark ? '#1d1d1d' : '#fff',
      }}
    >
      <Container>
        <Row justify="space-between" align="center">
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
                Blog
              </Text>
            </Link>
          </Col>
          <Switch
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
