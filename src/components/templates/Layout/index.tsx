// style
import { MainWrapper, Main } from './style';
// state
// components
import GNB from '@module/GNB';
import FNB from '@module/FNB';
import Meta from './meta';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Meta />
      <GNB />
      <MainWrapper msbType="hidden" sidebarOpen={false}>
        <Main>{children}</Main>
        <FNB />
      </MainWrapper>
    </>
  );
};

export default Layout;
