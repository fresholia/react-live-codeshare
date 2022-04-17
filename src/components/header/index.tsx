import styles from './header.module.scss';
import Image from 'next/image';

type Placement = 'vertical' | 'horizontal';
interface HeaderProps {
  placement: Placement;
}

const Header = ({ placement }: HeaderProps): JSX.Element => {
  return (
    <header className={styles[placement]}>
      <Image src="/logo.svg" width={100} height={50} alt="logo" />
      <div className={styles.items}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Buy me a Coffe</a>
      </div>
    </header>
  );
};

export default Header;
