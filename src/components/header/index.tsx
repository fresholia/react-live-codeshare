import styles from './header.module.scss';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { useRouter } from 'next/router';

import navigatorItems from 'model/navigatorItems';

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
        {navigatorItems.map((value, index) => (
          <a
            className={value.href == asPath ? styles.active : ''}
            key={index}
            href="#"
          >
            {value.name}
          </a>
        ))}
      </div>
      <div className={styles.socialItems}>
        <Icon width={24} icon="fa-brands:github" />
      </div>
    </header>
  );
};

export default Header;
