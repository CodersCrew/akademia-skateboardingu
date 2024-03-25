import { Button } from '@tremor/react';

type CancelButtonType = {
  handleCancel: () => void;
};

const CancelButton = ({ handleCancel }: CancelButtonType) => {
  return (
    <Button
      className="mt-5 rounded-md bg-blue-500 p-2 text-white"
      onClick={() => handleCancel()}
    >
      Porzuć zmiany
    </Button>
  );
};

export default CancelButton;
