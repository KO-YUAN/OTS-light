
import Home from "../components/Home";
import {Lang, supportedLangs } from "../lib/lang";
import { getDictionary } from "./dictionaries";

export async function generateStaticParams() {
  return supportedLangs.map((lang) => ({ lang }))
}

export default async function RootPage(
  {
    params
  }: Readonly<{ 
      params: {
          lang: Lang
      }
   }>
) {
 const lang = params.lang
const dict = await getDictionary(lang) // en


  return (
   <Home dict={dict} />
  );
}
