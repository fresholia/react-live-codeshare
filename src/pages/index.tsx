import { NextPageWithLayout } from 'types/definitions';

import Header from 'components/header';
import Landing from 'layouts/landing';

import styles from 'styles/home.module.scss';

const Home: NextPageWithLayout = () => {
  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.bigText}>
        Are you <span>ready?</span>
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
    <Landing>
      <Header placement={'horizontal'} />
      {page}
    </Landing>
  );
};

export default Home;
