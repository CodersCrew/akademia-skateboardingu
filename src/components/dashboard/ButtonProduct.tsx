import { Button } from '@tremor/react';
import { FaPlus } from 'react-icons/fa';

type ButtonProps = {
  handleButtonClick: React.MouseEventHandler<HTMLButtonElement>;
};

const ButtonProduct = ({ handleButtonClick }: ButtonProps) => (
  <Button
    variant="primary"
    className="justify-left mb-7 flex"
    onClick={handleButtonClick}
  >
    <div className="flex items-center">
      <FaPlus className="mr-3" /> Dodaj produkt
    </div>
  </Button>
);

export default ButtonProduct;
