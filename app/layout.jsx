import '@/assets/styles/globals.css';

export const metadata = {
  title: 'RentConnect | Find the perfect rental',
  description: 'Find your dream rental property',
  keywords: 'render, find rental, find properties',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
