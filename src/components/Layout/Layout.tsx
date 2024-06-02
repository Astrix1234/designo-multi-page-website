import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Footer } from '../FooterAll/Footer/Footer';
import { BgPatternLeaf } from '../../Icons/BgPatternLeaf/BgPatternLeaf';
import { useMediaQuery } from 'react-responsive';

export const Layout = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });

  return (
    <>
      {isDesktop && <BgPatternLeaf />}
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};
