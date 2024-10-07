import Navbar from "@/components/signin/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-primary w-full min-h-screen">
      <Navbar />
      <section className="py-10">{children}</section>
    </main>
  );
}
