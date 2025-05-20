
import Home from "../components/Home";
import {Lang, supportedLangs } from "../lib/lang";
import { getDictionary } from "./dictionaries";

export async function generateStaticParams() {
  return supportedLangs.map((lang) => ({ lang }))
}

interface PageProps {
  params: Promise<{ lang: Lang }>;
}

export default async function RootPage(
  {
  params
  }: Readonly<PageProps>)  {
 const {lang} = await params
const dict = await getDictionary(lang) // en


  return (
   <Home dict={dict} />
  );
}
