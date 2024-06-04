import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Footer } from '../FooterAll/Footer/Footer';
import { BgPatternLeaf } from '../../Icons/BgPatternLeaf/BgPatternLeaf';
import { useMediaQuery } from 'react-responsive';
import { BgPatternLeafContainer } from './Layout.styles';

export const Layout = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });

  return (
    <>
      {isDesktop && (
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
