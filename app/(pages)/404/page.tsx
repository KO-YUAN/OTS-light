import React from "react";
import Image from "next/image";
import Link from "next/link";

function page() {
  return (
    <div className="bg-[#f2f3f6]">
      <section className="md:flex  justify-between md:pl-[128px] py-10">
        <div className="md:max-w-[386px] w-full md:min-h-[663px] md:pt-[141px] md:pb-[104px] flex flex-col justify-between  ">
          <div className="flex flex-col items-center md:items-start">
            <h2 className="font-poppins sm:max-w-[375px]  max-w-[245px]  md:text-[72px] sm:text-[64px] text-5xl font-semibold text-neutral_07 tracking-[-3px] md:leading-[75px] leading-[56px] text-center md:text-left">
              Whoops, that page is gone.
            </h2>
            <p className="font-poppins font-medium md:text-[22px] text-18 text-center md:text-left text-neutral_04 mt-5">
              Something went wrong.
            </p>
            <Link
              href="#"
              className="bg-color_01 hover:bg-shade_06 w-[125px] h-12 rounded-[48px] flex justify-center items-center font-poppins font-semibold text-sm text-neutral_01 mt-[38px]"
            >
              Contact us
            </Link>
          </div>
          <div className="hidden md:block">
            <p className="font-poppins font-medium font-xs text-neutral_04">Follow us</p>
            <div className="flex gap-[19px] mt-5">
              <Link href="#">
                <Image src="/linkedIn.png" width={36} height={36} alt=""/>
              </Link>
              <Link href="#">
                <Image src="/instagram.png" width={36} height={36} alt="" />
              </Link>
            </div>
          </div>
        </div>

   
        <div className="md:w-[80%] w-full md:float-right float-none">
          <Image
            src="/404.png"
            alt="404 Image"
            width={600}
            height={600}
            className="w-full  h-auto object-contain"
          />
        </div>
      </section>
    </div>
  );
}

export default page;
