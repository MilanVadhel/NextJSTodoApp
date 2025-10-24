import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex-1 px-8 py-8">
        <h1 className="text-white text-3xl font-bold">Todo App</h1>
        <p className="text-white mt-2">Simple Todo App with Next.js + Tailwind + TypeScript</p>
        <main className="mt-8">{children}</main>
      </body>
    </html>
  );
}
