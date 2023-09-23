import Link from 'next/link';
import { Button } from '@mantine/core';

export default function Page () {
  return (
    <main>
      <Button component={Link} href="/sample/fetch">
        fetch
      </Button>
    </main>
  );
}
