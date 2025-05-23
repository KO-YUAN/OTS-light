"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { LangDictionary } from "../lib/dictionary";

function Footer({
   dict
  }: Readonly<{ dict: LangDictionary}>) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpencom2, setIsOpencom2] = useState(false);
  return (
    <div>
      <section className="w-full bg-neutral_01">
        <div
          className="bg-cover bg-center h-screen"
          style={{ backgroundImage: "url('/bg.svg')" }}
        >
          <div className="flex flex-col justify-center items-center h-screen px-4">
            <h2 className="text-neutral_07  font-poppins font-semibold lg:text-[72px] md:text-6xl sm:text-5xl text-[48px] mb-2">
              {dict?.products["footer-title"]}
            </h2>
            <p className="text-neutral_04 font-poppins lg:text-[28px] md:text-2xl text-xl font-medium tracking-[-3%]">
               {dict?.products["footer-subtitle"]}
            </p>
            <Image
              src="/user.svg"
              alt="Logo"
              width={236}
              height={60}
              className="my-6"
            />
            <Link
              href="https://www.104.com.tw/company/1a2x6bn9wd?jobsource=cd_my104_view_r"
              target="_blank"
              className="bg-color_01 hover:bg-shade_06  sm:w-[400px] w-[300px] h-[48px] flex justify-center items-center  rounded-[48px] text-neutral_01 font-poppins text-sm font-semibold "
            >
              {dict?.products["join-btn"]}
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-neutral_01 border-t border-neutral_03">
        <div className="max-w-[1212px] mx-auto grid sm:grid-cols-3  grid-cols-1 px-4">
          <div className="sm:py-[55px] pt-8 sm:pl-[75px] pl-5 sm:border-r border-b border-neutral_03 relative ">
         
            <div className="flex items-center justify-between sm:mb-[38px] mb-4" onClick={() => setIsOpen(!isOpen)}>
              <h2 className="text-neutral_07 font-poppins text-sm font-semibold">
                {`${dict.products["company"]}`}
              </h2>

              <button className="sm:hidden" >
              <Image src={isOpen ? "/menu-close.svg" : "/menu-open.svg"}  width={20} height={20} alt="Toggle" className="w-5 h-5" />
              </button>
            </div>

            <ul
              className={`flex flex-col  sm:gap-8 gap-4 pb-4 md:pb-0 transition-all duration-300 ${
                isOpen ? "block" : "hidden"
              } sm:block`}
            >
              <li className="sm:mb-8 mb-0">
              <Link
                href="#"
                className="font-poppins font-semibold text-sm text-neutral_04 hover:text-neutral_05"
              >
                {`${dict.products["home-btn"]}`}
              </Link>
              </li>
              <li className="sm:mb-8 mb-0">
              <Link
                href="#"
                className="font-poppins font-semibold text-sm text-neutral_04 hover:text-neutral_05"
              >
                {`${dict.products["contact-btn"]}`}
              </Link>
              </li>
              <li className="sm:mb-8 mb-0">
              <Link
                href="#"
                className="font-poppins font-semibold text-sm text-neutral_04 hover:text-neutral_05"
              >
                {`${dict.products["about-us-btn"]}`}
              </Link>
              </li>
            </ul>
          </div>

          <div className="sm:py-[55px] pt-8 sm:pl-[75px] pl-5 sm:border-r border-b border-neutral_03 relative">

            <div className="flex items-center justify-between sm:mb-[38px] mb-4" onClick={() => setIsOpencom2(!isOpencom2)}>
              <h2 className="text-neutral_07 font-poppins text-sm font-semibold">
                {`${dict.products["about-us-btn"]}`}
              </h2>
              <button className="sm:hidden">
                <Image src={isOpencom2 ? "/menu-close.svg" : "/menu-open.svg"} width={20} height={20} alt="Toggle" className="w-5 h-5" />
              </button>
            </div>

         
            <ul
              className={`flex flex-col sm:gap-8 gap-4 pb-4 md:pb-0 transition-all duration-300 ${
                isOpencom2 ? "block" : "hidden"
              } sm:block`}
            >
              <li className="sm:mb-8 mb-0">
              <Link
                href="#"
                className="font-poppins font-semibold text-sm text-neutral_04 hover:text-neutral_05"
              >
                Instagram
              </Link>
              </li>
              <li className="sm:mb-8 mb-0">
              <Link
                href="#"
                className="font-poppins font-semibold text-sm text-neutral_04 hover:text-neutral_05"
              >
                LinkedIn
              </Link>
              </li>
            </ul>
          </div>
          <div className="sm:py-[55px] py-8 flex flex-col items-center md:pl-[55px] pl-5">
            <Link
              href="/"
              className="font-inter md:text-[28px] text-[18px] font-bold text-color_01 flex sm:flex-row flex-col items-center gap-4"
            >
              <Image src="/logo.svg" alt="Logo" width={40} height={40} />
              OPPORTUNE SOFT
            </Link>
            <p className=" font-poppins font-semibold text-sm text-neutral_04 sm:mt-[26px] mt-5 text-center sm:text-left">
               {`${dict.products["address"]}`}
            </p>
          </div>
        </div>
        <div className=" border-t border-neutral_03 px-4">
          <div className="max-w-[1212px] mx-auto flex sm:flex-row flex-col justify-between items-center gap-2 py-[22px]">
            <p className="font-poppins font-medium text-sm text-neutral_04">
              ©️ 2025 All Rights Reserved{" "}
            </p>
            <p className="font-poppins font-medium text-sm text-neutral_04">
              Terms & Conditions, Privacy
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
