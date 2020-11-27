// style
import { MainWrapper, Main } from './style';
// state
// components
import GNB from '@module/GNB';
import FNB from '@module/FNB';
import Meta from './meta';
// content
import MainContent, { MainType } from './Main';
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
Layout.Main = ({ data }: MainType) => (
  <Layout>
    <MainContent data={data} />
  </Layout>
);
Layout.About = () => (
  <Layout>
    <AboutContent />
  </Layout>
);

export default Layout;
