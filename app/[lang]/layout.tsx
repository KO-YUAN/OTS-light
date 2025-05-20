import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Lang, supportedLangs } from "../lib/lang";
import { getDictionary } from "./dictionaries";
export async function generateStaticParams() {
    return supportedLangs.map((lang) => ({ lang }))
  }

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: Lang }>;
}

export default async function Layout({
  children,
  params
}: Readonly<LayoutProps>) {
    const {lang} = await params
    const dict = await getDictionary(lang) // en

  return (
      <>
        <Navbar dict={dict} lang={lang} />
        {children}
        <Footer dict={dict}/>
      </>
  );
}
