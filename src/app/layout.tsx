import '@/tailwind.css';

import type { Metadata } from 'next';

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="pl">
    <body className="bg-[#171717] font-inter">{children}</body>
  </html>
);

export const metadata: Metadata = {
  title: 'Akademia Skateboardingu',
  description: 'Nauka jazdy na deskorolce we Wrocławiu',
  icons: {
    icon: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        url: '/images/favicon_blue/favicon.ico',
        media: '(prefers-color-scheme: light)'
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        url: '/images/favicon/favicon.ico',
        media: '(prefers-color-scheme: dark)'
      },
      {
        rel: 'apple-touch-icon',
        type: 'image/png',
        url: '/images/favicon_blue/apple-touch-icon.png',
        media: '(prefers-color-scheme: light)'
      },
      {
        rel: 'apple-touch-icon',
        type: 'image/png',
        url: '/images/favicon/apple-touch-icon.png',
        media: '(prefers-color-scheme: dark)'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        url: '/images/favicon_blue/android-chrome-192x192.png',
        media: '(prefers-color-scheme: light)'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        url: '/images/favicon/android-chrome-192x192.png',
        media: '(prefers-color-scheme: dark)'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '512x512',
        url: '/images/favicon_blue/android-chrome-512x512.png',
        media: '(prefers-color-scheme: light)'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '512x512',
        url: '/images/favicon/android-chrome-512x512.png',
        media: '(prefers-color-scheme: dark)'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/images/favicon_blue/favicon-32x32.png',
        media: '(prefers-color-scheme: light)'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/images/favicon/favicon-32x32.png',
        media: '(prefers-color-scheme: dark)'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/images/favicon_blue/favicon-16x16.png',
        media: '(prefers-color-scheme: light)'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/images/favicon/favicon-16x16.png',
        media: '(prefers-color-scheme: dark)'
      }
    ]
  }
};

export default RootLayout;
