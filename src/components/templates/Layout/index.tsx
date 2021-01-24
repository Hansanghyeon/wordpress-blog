// style
import { MainWrapper, Main } from './style';
// state
// components
import GNB from '@module/GNB/container';
import FNB from '@module/FNB';
import MSB from '@module/MSB/container';
import Meta from './meta';
// content
import MainContent from './Main';
import DevContent, { DevType } from './Dev';
import AboutContent from './About';

interface LayoutPorps {
  children: React.ReactNode;
  menuState?: any;
  layoutState?: any;
}
const Layout = ({ children, menuState, layoutState }: LayoutPorps) => {
  console.log(menuState, layoutState);
  return (
    <>
      <Meta />
      <GNB />
      <MSB type={layoutState?.msbType} />
      <MainWrapper
        msbType={layoutState?.msbType}
        sidebarOpen={menuState?.isActive || false}
      >
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
