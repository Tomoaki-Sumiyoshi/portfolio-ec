'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCart } from '@/features/cart/cart.store';
import { IconShoppingCart } from '@tabler/icons-react';
import styles from './Header.module.scss';
import { ActionIcon, Indicator } from '@mantine/core';

export function Header() {
  const router = useRouter();
  const items = useCart((s) => s.items);
  const count = items.length;

  return (
    <header className={styles.header}>
      {/* 左：ロゴ */}
      <div className={styles.left} onClick={() => router.push('/')}>
        My Sass
      </div>

      {/* 右：アイコン類 */}
      <div className={styles.right}>
        {/* カート */}
        <Indicator
          label={count}
          size={16}
          disabled={count === 0}
          color="red"
          offset={4}
          inline
          processing={false}
        >
          <ActionIcon
            radius="xl"
            size="lg"
            variant="subtle"
            onClick={() => router.push('/cart')}
          >
            <IconShoppingCart size={24} />
          </ActionIcon>
        </Indicator>
        {/* ログイン(仮) */}
        <Link href="/auth/login">ログイン</Link>
      </div>
    </header>
  );
}
