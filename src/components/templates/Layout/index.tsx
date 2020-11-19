import GNB from '@organism/GNB'
import FNB from '@organism/FNB'
import FNB from '@organism/FNB'
import { MainWrapper, Main, GlobalStyle } from './style';

export default function Layout ({ children }) {
  return (
    <>
            <GNB />
            <MSB type={msbType} />
            <MainWrapper msbType={msbType} sidebarOpen={isActive}>
              <Main className={`layout_main ${isDark ? 'dark' : 'light'}`}>
                {children}
              </Main>
              <FNB type={fnbType} />
            </MainWrapper>
          </>
  )
}