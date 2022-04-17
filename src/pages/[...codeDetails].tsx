import { NextPageWithLayout } from 'types/definitions';

import Header from 'components/header';
import CodeLayout from 'layouts/code';

const Code: NextPageWithLayout = () => {
  return <></>;
};

Code.getLayout = (page) => {
  return (
    <CodeLayout>
      <Header placement={'vertical'} />
      {page}
    </CodeLayout>
  );
};

export default Code;
