import { Friendly } from '../Icons/GraphicsHomePage/Friendly/Friendly';
import { Passionate } from '../Icons/GraphicsHomePage/Passionate/Passionate';
import { Resourceful } from '../Icons/GraphicsHomePage/Resourceful/Resourceful';
import { IconCircleSmall } from '../Icons/IconCircleSmall/IconCircleSmall';
import { IconCircleSmall270Deg } from '../Icons/IconCircleSmall270Deg/IconCircleSmall270Deg';
import { IconCircleSmall90Deg } from '../Icons/IconCircleSmall90Deg/IconCircleSmall90Deg';

export const useCreateDataFeatures = () => {
  const data = [
    {
      icon: <Passionate />,
      circle: <IconCircleSmall />,
      title: 'Passionate',
      description:
        'Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.',
    },
    {
      icon: <Resourceful />,
      circle: <IconCircleSmall270Deg />,
      title: 'Resourceful',
      description:
        'Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.',
    },
    {
      icon: <Friendly />,
      circle: <IconCircleSmall90Deg />,
      title: 'Friendly',
      description:
        'We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.',
    },
  ];

  return data;
};
