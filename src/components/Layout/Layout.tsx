import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../HeaderAll/Header/Header';
import { Footer } from '../FooterAll/Footer/Footer';
import { BgPatternLeaf } from '../../Icons/BgPatternLeaf/BgPatternLeaf';
import { useMediaQuery } from 'react-responsive';
import { BgPatternLeafContainer } from './Layout.styles';
import { useLocation } from 'react-router-dom';

export const Layout = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });

  const location = useLocation();

  return (
    <>
      {isDesktop && location.pathname !== '/contact' && (
        <BgPatternLeafContainer>
          <BgPatternLeaf />
        </BgPatternLeafContainer>
      )}
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};
