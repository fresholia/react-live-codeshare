import { NextPageWithLayout } from 'types/definitions';

import Header from 'components/header';

const Home: NextPageWithLayout = () => {
  return <div>Hello Next.js</div>;
};

Home.getLayout = (page) => {
  return (
    <>
      <Header placement={'horizontal'} />
      {page}
      <h2>footer</h2>
    </>
  );
};

export default Home;
