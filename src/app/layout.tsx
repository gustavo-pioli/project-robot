import type { Metadata } from 'next';
import './globals.css';
import { type_logo } from '@/functions/fonts';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';

export const metadata: Metadata = {
  title: 'Robot Games',
  description: 'Loja de jogos.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={type_logo.variable}>
        <div className="App">
          <Header />
          <main className="AppBody">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
