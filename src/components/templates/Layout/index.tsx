// style
import { MainWrapper, Main } from './style';
// state
// components
import GNB from '@module/GNB';
import FNB from '@module/FNB';
import Meta from './meta';
// content
import MainContent from './Main';
import DevContent, { DevType } from './Dev';
import AboutContent from './About';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Meta />
      <GNB />
      <MainWrapper msbType="hidden" sidebarOpen={false}>
        <Main>{children}</Main>
      </MainWrapper>
      <FNB />
    </>
  );
};
Layout.Main = () => (
  <Layout>
    <MainContent />
  </Layout>
);
Layout.Dev = ({ data }: DevType) => (
  <Layout>
    <DevContent data={data} />
  </Layout>
);
Layout.About = () => (
  <Layout>
    <AboutContent />
  </Layout>
);

export default Layout;
