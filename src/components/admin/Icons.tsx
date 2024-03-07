import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

export const ActionIcons = () => (
  <div className="flex items-center">
    <FaEdit className="mr-3 cursor-pointer" title="Edytuj" />
    <FaTrash className="mr-3 cursor-pointer" title="Usuń" />
  </div>
);
