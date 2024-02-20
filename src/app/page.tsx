import React from 'react';
import '../styles/styling.css';
import Link from 'next/link';
import { DashboardPage } from '@/app/dashboard/route';

const App = () => {
    return (
        <div>
            <DashboardPage />
        </div>
    );
};

export default App;
