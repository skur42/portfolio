import { Icon } from '../Icon';

type Variant = 'down' | 'up' | 'right' | 'left';

export const ArrowVariant: Record<Variant, string> = {
  down: 'rotate-0',
  up: 'rotate-180',
  right: '-rotate-90',
  left: 'rotate-90',
};

export type ArrowProps = {
  variant?: Variant;
  iconProps?: string;
  containerProps?: string;
  onClick?: () => void;
};

export const Arrow = ({ variant = 'down', iconProps = '', containerProps = '', onClick }: ArrowProps) => {
  return (
    <button type="button" className={`cursor-pointer ${containerProps}`} onClick={onClick}>
      <Icon name="ArrowDown" iconProps={`transition-all ${ArrowVariant[variant]} ${iconProps}`} />
    </button>
  );
};

export default Arrow;
