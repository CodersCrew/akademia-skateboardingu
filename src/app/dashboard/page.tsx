'use client';
import { Table } from '@tremor/react';
import { useRouter } from 'next/navigation';
import React from 'react';

import { ButtonProduct, TableBody, TableHead } from '@/components/dashboard';

const Dashboard = () => {
  const { push } = useRouter();

  const handleButtonClick = () => {
    push('/addForm');
  };

  return (
    <div className="mx-auto mt-20 w-full pl-20 pr-20">
      <ButtonProduct handleButtonClick={handleButtonClick} />
      <Table>
        <TableHead />
        <TableBody items={[]} />
      </Table>
    </div>
  );
};

export default Dashboard;
