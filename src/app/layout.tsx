import Footer from '@/components/Footer';
import './globals.css';
import { Open_Sans } from 'next/font/google';
import Header from '@/components/Header';

const sans = Open_Sans({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: "DK's blog",
    template: "DK's blog | %s",
  },
  description: "Frontend Developer DK's blog",
  icons: '/favicon.ico',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={sans.className}>
      <body className='flex flex-col w-full max-w-screen-2xl mx-auto'>
        <Header />
        <main className='grow'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
