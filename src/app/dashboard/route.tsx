import { Dashboard } from '@/components/dashboard/Dashboard';
import { getAllItems } from '@/server/controllers/shop/itemController';
import Link from 'next/link';

// const items = [
//     {
//         name: 'deska',
//         description: 'deska',
//         price: 250,
//         quantity: 20,
//         visible: 'tak',
//         category: 'deski',
//         priceHistory: [
//             {
//                 date: new Date(),
//                 price: 300,
//             },
//             {
//                 date: new Date(),
//                 price: 200,
//             },
//         ],
//         photos: [],
//     },
//     {
//         name: 'kółka',
//         description: 'kółka',
//         price: 50,
//         quantity: 100,
//         visible: 'tak',
//         category: 'deski',
//         priceHistory: [
//             {
//                 date: new Date(),
//                 price: 50,
//             },
//         ],
//         photos: [],
//     },
// ];

export async function GET(req: Request) {
    const response = await getAllItems();
    const data = await response.json();
    return <Dashboard items={items} />;
}
