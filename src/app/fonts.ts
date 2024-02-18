import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

const fonts = `${inter.variable}`;

export default fonts;
