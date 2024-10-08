import React, { MouseEventHandler } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

type ActionIconsProps = {
  handleEdit: MouseEventHandler<SVGSVGElement>;
  handleDelete: MouseEventHandler<SVGSVGElement>;
};

export function ActionIcons({ handleEdit, handleDelete }: ActionIconsProps) {
  return (
    <div className="flex items-center">
      <FaEdit
        className="bg-blue mr-3 cursor-pointer text-lg text-blue-500"
        title="Edytuj"
        onClick={handleEdit}
      />
      <FaTrash
        className="bg-blue mr-3 cursor-pointer text-lg text-blue-500"
        title="Usuń"
        onClick={handleDelete}
      />
    </div>
  );
}
