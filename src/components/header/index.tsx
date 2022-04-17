import styles from './header.module.scss';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { useRouter } from 'next/router';

import navigatorItems from 'core/model/navigatorItems';

type Placement = 'vertical' | 'horizontal';
interface HeaderProps {
  placement: Placement;
}

const Header = ({ placement }: HeaderProps): JSX.Element => {
  const { asPath } = useRouter();
  return (
    <header className={styles[placement]}>
      <Image src="/logo.svg" width={100} height={50} alt="logo" />
      <div className={styles.items}>
        {placement == 'horizontal' &&
          navigatorItems.map((value, index) => (
            <a
              className={value.href == asPath ? styles.active : ''}
              key={index}
              href={value.href}
            >
              {value.name}
            </a>
          ))}
      </div>
      <div className={styles.socialItems}>
        <a
          href="https://github.com/cleoppa/react-live-codeshare"
          rel="noreferrer"
          target="_blank"
        >
          <Icon width={24} icon="fa-brands:github" />
        </a>
      </div>
    </header>
  );
};

export default Header;
