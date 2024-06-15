import css from './TilePages.module.css';
import { TileProps } from '../../../../interfaces/interfaces';

export const TilePages: React.FC<TileProps> = ({ title, text, src }) => {
  return (
    <div className={css.container}>
      <div className={css.image}>
        <img src={src} alt={title} />
      </div>
      <div className={css.text}>
        <div>
          <h4>{title}</h4>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};
