import { DotProps } from 'react-multi-carousel';

const CustomCarouselDot = ({ index, onClick, active }: DotProps) => (
  <li
    className={`mx-0.5 h-6 w-6 rounded-full border-4 border-white ${active ? '' : 'cursor-pointer'}`}
    onClick={onClick ? () => onClick() : undefined}
  ></li>
);

export default CustomCarouselDot;
