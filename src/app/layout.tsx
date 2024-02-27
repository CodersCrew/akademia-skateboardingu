import '@/tailwind.css';

import fonts from '@/fonts';

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="pl">
    <body className={fonts}>{children}</body>
  </html>
);

export const metadata = {
  title: 'Akademia Skateboardingu',
  description: 'Nauka jazdy na deskorolce we Wrocławiu'
};

export default RootLayout;
