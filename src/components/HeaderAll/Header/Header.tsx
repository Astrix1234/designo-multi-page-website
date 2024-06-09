import { Container, HederContainer } from './Header.styles';
import { Logo } from '../../Share/Logo/Logo';
import { Link } from 'react-router-dom';
import { NavigationLinks } from '../../Share/Navigation/NavigationLinks/NavigationLinks';
import { useMediaQuery } from 'react-responsive';
import { MobilNavigation } from '../MobilNavigation/MobilNavigation';
import { IconHamburger } from '../../../Icons/IconHamburger/IconHamburger';
import { IconClose } from '../../../Icons/IconClose/IconClose';
import { useState } from 'react';

export const Header = () => {
  const isTabletDesktop = useMediaQuery({ query: '(min-width: 768px)' });
  const [isOpened, setIsOpened] = useState(false);

  const handleMenuClose = () => {
    setIsOpened(false);
  };

  const handleMenuOpen = () => {
    setIsOpened(true);
  };

  return (
    <HederContainer>
      <Container>
        <Link to="/">
          <Logo $background="dark" />
        </Link>
        {isTabletDesktop ? (
          <NavigationLinks color="dark" />
        ) : !isOpened ? (
          <button type="button" onClick={handleMenuOpen}>
            <IconHamburger />
          </button>
        ) : (
          <button type="button" onClick={handleMenuClose}>
            <IconClose />
          </button>
        )}
        {!isTabletDesktop && (
          <MobilNavigation
            onClose={handleMenuClose}
            onOpen={handleMenuOpen}
            isOpen={isOpened}
          />
        )}
      </Container>
    </HederContainer>
  );
};
