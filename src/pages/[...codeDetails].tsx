import { useEffect } from 'react';
import type { GetServerSideProps } from 'next';
import { NextPageWithLayout } from 'types/definitions';

import AppContextProvider from 'core/app/context/AppContextProvider';

import Header from 'components/header';
import useAppContext from 'core/app/util/hooks/useAppContext';

interface CodeProps {
  isLoaded: boolean;
}

const Code: NextPageWithLayout = (props: any) => {
  // TODO_GITHUB_ACTION: fix type
  const { state, dispatch } = useAppContext();

  const { isLoaded } = props;
  useEffect(() => {
    (async () => {
      if (isLoaded) {
        // dispatch
      }
    })();
  }, [isLoaded]);

  return <>asdasdasd</>;
};

Code.getLayout = (page) => {
  return (
    <AppContextProvider initialValue={{}}>
      <div className="code-layout">
        <Header placement={'vertical'} />
        {page}
      </div>
    </AppContextProvider>
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
