import { IconCircleSmall } from '../Icons/IconCircleSmall/IconCircleSmall';
import { IconCircleSmall270Deg } from '../Icons/IconCircleSmall270Deg/IconCircleSmall270Deg';
import { IconCircleSmall90Deg } from '../Icons/IconCircleSmall90Deg/IconCircleSmall90Deg';
import { Canada } from '../Icons/Locations/Canada/Canada';
import { Australia } from '../Icons/Locations/Australia/Australia';
import { UnitedKingdom } from '../Icons/Locations/UnitedKingdom/UnitedKingdom';
import { Button } from '../components/Share/Button/Button';
import { useNavigate } from 'react-router-dom';

export const useCreateDataLocations = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/locations');
  };

  const data = [
    {
      icon: <Canada />,
      circle: <IconCircleSmall90Deg />,
      title: 'Canada',
      button: (
        <Button
          content="See Location"
          color="light"
          $background="peach"
          onClick={handleNavigate}
        />
      ),
    },
    {
      icon: <Australia />,
      circle: <IconCircleSmall />,
      title: 'Australia',
      button: (
        <Button
          content="See Location"
          color="light"
          $background="peach"
          onClick={handleNavigate}
        />
      ),
    },
    {
      icon: <UnitedKingdom />,
      circle: <IconCircleSmall270Deg />,
      title: 'United Kingdom',
      button: (
        <Button
          content="See Location"
          color="light"
          $background="peach"
          onClick={handleNavigate}
        />
      ),
    },
  ];

  return data;
};
