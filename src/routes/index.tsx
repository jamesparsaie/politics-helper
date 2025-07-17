import { createFileRoute } from '@tanstack/react-router'
import { IconCookie, IconGauge, IconUser } from '@tabler/icons-react';
import {
  Badge,
  Button,
  Card,
  Container,
  Group,
  SimpleGrid,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import classes from "../PageCSS/home.module.css"

export const Route = createFileRoute('/')({
  component: Index,
})

const cardData = [
  {
    title: 'See who speaks for you.',
    description:
      'Find detailed info on your local, state, and federal representatives — who they are, what they stand for, and how to contact them.',
    icon: IconGauge,
  },
  {
    title: 'Track what’s being debated.',
    description:
      'Stay updated on current bills your reps are discussing, how they could affect you, and where they stand in the legislative process.',
    icon: IconUser,
  },
  {
    title: 'Simplified, unbiased, and for you.',
    description:
      'Explore key political info — voting deadlines, policies, party positions, and more — all in one easy-to-understand place.',
    icon: IconCookie,
  },
];

export function Index() {
  const theme = useMantineTheme();
  const features = cardData.map((feature) => (
    <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
      <feature.icon size={50} stroke={1.5} color={theme.colors.blue[6]} />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container size="lg" py="xl" className={classes.mainContent}>
      <Group justify="center">
        <Badge variant="filled" size="lg">
          Civic Power Starts Here
        </Badge>
      </Group>

      <Title order={2} className={classes.title} ta="center" mt="sm">
        Cut Through the Noise. Step Into Action.
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Find out who represents you, what they’re doing, and how it affects your life.
      </Text>

      <Button>Hello</Button>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
}