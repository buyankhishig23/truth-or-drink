import './globals.css';

export const metadata = {
  title: 'Хариул эсвэл Уу',
  description: 'Хөгжилтэй асуулт, хариулттай тоглоом',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-gradient-to-b from-purple-500 to-pink-500 min-h-screen flex items-center justify-center">
        {children}
      </body>
    </html>
  );
}
