import { FooterComp } from "@/components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-white w-full relative">
      <section className="">{children}</section>
      <FooterComp />
    </main>
  );
}
