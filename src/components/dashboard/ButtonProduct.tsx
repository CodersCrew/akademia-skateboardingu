import { Button } from '@tremor/react';
import { FaPlus } from 'react-icons/fa';

interface ButtonProps {
    handleButtonClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const ButtonProduct = ({ handleButtonClick }: ButtonProps) => {
    return (
        <Button
            variant="primary"
            className="flex justify-left mb-7"
            onClick={handleButtonClick}
        >
            <div className="flex items-center">
                <FaPlus className="mr-3" /> Dodaj produkt
            </div>
        </Button>
    );
};
