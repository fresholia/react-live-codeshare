import type { GetServerSideProps } from 'next';
import { NextPageWithLayout } from 'types/definitions';

import Header from 'components/header';

const Code: NextPageWithLayout = () => {
  return <>asdasdasd</>;
};

Code.getLayout = (page) => {
  return (
    <div className="code-layout">
      <Header placement={'vertical'} />
      {page}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {
    query: { codeDetails },
    res,
  } = context;

  const code: string = codeDetails ? codeDetails[0] : ('' as string);

  if (code != '') {
    // Request the server and retrieve details about the code snippet
  }

  return {
    props: {},
  };
};

export default Code;
