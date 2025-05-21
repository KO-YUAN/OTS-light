"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LangDictionary } from "../lib/dictionary";
import { Lang } from "../lib/lang";

function Navbar({dict,lang}: Readonly<{ dict: LangDictionary, lang: Lang }>) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
console.log("pathname",pathname,`/${lang}${pathname.split(lang)[1]}`)
const navLinks = [
  { name: `${dict.products["home-btn"]}`, href: `/${lang}` },
  { name: `${dict.products["contact-btn"]}`, href: `/${lang}/contact` },
  { name: `${dict.products["about-us-btn"]}`, href: `../${lang}/about` },
];


  return (
    <div className="bg-neutral_02 xl:px-6 sm:px-10 px-6">
      <div className="mx-auto h-24 flex justify-between items-center sm:border-b-2 border-neutral_03">
        <Link
          href={`/${lang}`}
          className="font-inter lg:text-[28px] md:text-[22px] text-base font-bold text-color_01 flex items-center gap-4 transition whitespace-nowrap">
          <Image src="/logo.svg" alt="Logo" width={40} height={40} />
          OPPORTUNE SOFT 
        </Link>

        {/* Toggle Button */}
        <div className="sm:hidden z-50" onClick={toggleMenu}>
          <Image
            src={isOpen ? "/menu-close.svg" : "/menu-open.svg"}
            alt="Menu Icon"
            width={30}
            height={30}
          />
        </div>

        {/* <p className="text-black">{dict?.dictionaries.cart}</p> */}
        <ul className="hidden sm:flex lg:gap-[39px] gap-[18px] items-center font-poppins font-semibold md:text-sm text-xs capitalize">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`transition whitespace-nowrap ${isActive ? "text-color_06" : "text-color_01 hover:text-blue-600"}`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}

          <Link
            href="https://www.104.com.tw/company/1a2x6bn9wd?jobsource=cd_my104_view_r"
            target="_blank"
            className="bg-color_01 hover:bg-shade_06 text-neutral_01 md:w-[150px] w-[120px] md:h-12 h-10 flex justify-center items-center rounded-[48px] text-sm font-semibold transition whitespace-nowrap">
            {dict?.products["join-btn"]}
          </Link>

          {/* 這一段是PC語系選擇 */}
          <div className="flex space-x-2" onClick={toggleMenu}>
            <Link href={`/en-US${pathname.split(lang)[1]}`} locale={lang} scroll={false} className={pathname.split('/').includes('en-US') ? 'block' : 'hidden'}>
              <Image src="/en-US.svg" alt="en-US" width={48} height={48} className="rounded-full" />
            </Link>
            <Link href={`/hi-IN${pathname.split(lang)[1]}`} locale={lang} scroll={false} className={pathname.split('/').includes('hi-IN') ? 'block' : 'hidden'}>
              <Image src="/hi-IN.svg" alt="hi-IN" width={48} height={48} className="rounded-full" />
            </Link>
            <Link href={`/zh-TW${pathname.split(lang)[1]}`} locale={lang} scroll={false} className={pathname.split('/').includes('zh-TW') ? 'block' : 'hidden'}>
              <Image src="/zh-TW.svg" alt="zh-TW" width={48} height={48} className="rounded-full" />
            </Link>
          </div>
  
         
        </ul>
      </div>

      {isOpen && (
        <div className="fixed inset-0  z-40" onClick={toggleMenu}></div>
      )}

{/* top-[268px] left-1/2  transform -translate-x-1/2 -translate-y-1/2 */}
      {/* 這一段是手機版展開選擇語系視窗 */}
      <div
        className={`
          fixed left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:right-10 w-[300%] sm:w-[150px] max-w-[300px] bg-white shadow-lg z-50 rounded-[20px] sm:p-4 p-6 flex flex-col transition-transform duration-300
          ${isOpen ? "scale-100" : "scale-0"}
        `}
      >
        <div className="absolute right-6 top-4 mb-6">
          <button onClick={toggleMenu}>
            <Image
              src="/menu-close.svg"
              alt="Close Menu"
              width={24}
              height={24}
            />
          </button>
        </div>

        <div className="flex flex-col gap-6 items-start pt-[43px] font-poppins font-semibold text-lg sm:hidden">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`transition ${isActive
                  ? "text-blue-500"
                  : "text-gray-700 hover:text-blue-500"
                  }`}
                onClick={toggleMenu}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="sm:mt-0 mt-12 sm:border-0 border-t pt-4 flex sm:flex-col flex-row justify-around sm:space-y-2">
          <Link href='/en-US' scroll={false} className="flex items-center text-gray-700 hover:text-blue-500 font-semibold space-x-2 whitespace-nowrap">
            <Image src="/en-US.svg" alt="en-US" width={48} height={48} className="rounded-full" />
            <p className="sm:block hidden">English</p>
          </Link>
          <Link href='/zh-TW' scroll={false} className="flex items-center text-gray-700 hover:text-blue-500 font-semibold space-x-2 whitespace-nowrap">
            <Image src="/zh-TW.svg" alt="zh-TW" width={48} height={48} className="rounded-full" />
            <p className="sm:block hidden">繁體中文</p>
          </Link>
          <Link href='/hi-IN' scroll={false} className="flex items-center text-gray-700 hover:text-blue-500 font-semibold space-x-2 whitespace-nowrap">
            <Image src="/hi-IN.svg" alt="hi-IN" width={48} height={48} layout="fixed" className="rounded-full" />
            <p className="sm:block hidden">हिन्दी</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
