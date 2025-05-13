import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Lang, supportedLangs } from "../lib/lang";
import { getDictionary } from "./dictionaries";
export async function generateStaticParams() {
    return supportedLangs.map((lang) => ({ lang }))
  }

export default async function Layout({
  children,
  params
}: Readonly<{ 
    children: React.ReactNode
    params: {
        lang: Lang
    }
 }>) {
    const lang = params.lang
    const dict = await getDictionary(lang) // en

  return (
      <>
        <Navbar dict={dict} />
        {children}
        <Footer/>
      </>
  );
}
