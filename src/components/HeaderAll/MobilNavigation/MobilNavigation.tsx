import { Container, LinksContainer } from './MobilNavigation.styles';
import { navigationObject } from '../../../utils/navigation';
import { Link } from '../Link/Link';
import { useEffect } from 'react';
import { MobilNavigationProps } from '../../../interfaces/interfaces';

export const MobilNavigation: React.FC<MobilNavigationProps> = ({
  onClose,
  onOpen,
  isOpen,
}) => {
  useEffect(() => {
    if (isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  const handleMenuClose = () => {
    onClose();
  };
  return (
    <Container onClick={handleMenuClose} className={isOpen ? 'opened' : ''}>
      <LinksContainer>
        {navigationObject.map(navItem => (
          <Link to={navItem.to} key={navItem.to}>
            {navItem.text}
          </Link>
        ))}
      </LinksContainer>
    </Container>
  );
};
