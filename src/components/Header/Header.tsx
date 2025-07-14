import { Burger, Container, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link } from '@tanstack/react-router'
import { FaFlagUsa } from "react-icons/fa";
import classes from './Header.module.css';

const links = [
  { link: '/', label: 'Home' },
  { link: '/about', label: 'About' },
  { link: '/learn', label: 'Learn' },
  { link: '/community', label: 'Community' },
];

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);

    const items = links.map((link) => (
        <Link  to={link.link} className={classes.link}>
            {link.label}
        </Link>
    ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Group>
            <FaFlagUsa size={24}/>
            <h2>Politrack</h2>
        </Group>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" color='white'/>
      </Container>
    </header>
  );
}