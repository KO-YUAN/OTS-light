
import Home from "../components/Home";

export async function generateStaticParams() {
  return [{ lang: 'en-US' }, { lang: 'hi' }, { lang: 'zh-TW' }]
}

export default function RootPage() {
  return (
   <Home/>
  );
}
