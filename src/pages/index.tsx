import { NextPageWithLayout } from 'types/definitions';

import Header from 'components/header';

import styles from 'styles/home.module.scss';

const Home: NextPageWithLayout = () => {
  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.bigText}>Write</h1>
      <h1 className={styles.bigText}>Code</h1>
      <h1 className={styles.bigText}>
        <span>Together.</span>
      </h1>
      <span className={styles.gray}>
        Meet the simultaneous coding application developed with{' '}
        <b>better technologies</b> than you can imagine.
      </span>
    </div>
  );
};

Home.getLayout = (page) => {
  return (
    <div className="landing">
      <Header placement={'horizontal'} />
      {page}
    </div>
  );
};

export default Home;
