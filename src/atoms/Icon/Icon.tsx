import { FC } from 'react';
import { ArrowDown } from './SVG/ArrowDown';
import { ArrowUp } from './SVG/ArrowUp';

export const iconMap = {
  ArrowDown,
  ArrowUp,
};

export type IconName = keyof typeof iconMap;

export type IconProps = {
  name: IconName;
  containerProps?: string;
  iconProps?: string;
  onClick?: (e: any) => void;
};

// eslint-disable-next-line react/jsx-no-useless-fragment
const fallback = () => <></>;

export const Icon: FC<IconProps> = ({ name, onClick, containerProps, iconProps, ...props }) => {
  const Component = iconMap[name] ?? fallback;

  return (
    <div className={`flex items-center justify-center ${containerProps}`} {...props}>
      <Component className={iconProps} />
    </div>
  );
};
