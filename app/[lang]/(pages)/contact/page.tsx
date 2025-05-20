import React from "react";
import Image from "next/image";
import Link from "next/link";
import {Lang, supportedLangs } from "../../../lib/lang";
import { getDictionary } from "../../../[lang]/dictionaries";
export async function generateStaticParams() {
  return supportedLangs.map((lang) => ({ lang }))
}

interface PageProps {
  params: Promise<{ lang: Lang }>;
}

export default async function contact({params}: Readonly<PageProps>) {
  const {lang} = await params
  const dict = await getDictionary(lang) 

  return (
    <div className="bg-shade_02">
      <section className="bg-neutral_02 relative md:py-[81px] sm:py-12 pt-12 pb-[72px] overflow-hidden">
        <div className="">
          <h1 className="text-neutral_07  font-poppins md:text-7xl text-5xl font-semibold text-center relative z-30">
            {dict.products["contact-us"]}
          </h1>
        </div>
        <div className="max-w-[1024px] px-4 mx-auto flex gap-10 sm:mt-[83px] mt-12 relative z-10">
          <div className="w-1/2 bg-neutral_01 rounded-[16px] sm:block hidden">
            <div className="md:px-[47px] px-5 md:pt-14 pt-10">
              <h2 className="text-neutral_07 md:text-4xl text-3xl font-poppins font-semibold mb-4">
                {dict.products["contact-us-title"]}
              </h2>
              <p className="text-neutral_04 font-medium font-poppins text-base ">
                {dict.products["contact-us-subtitle"]}
              </p>
            </div>
            <div className="px-4 pb-3">
              <div className="mt-5 bg-neutral_02 rounded-[16px]">
                <Image src="/helping.png" alt="Logo" width={440} height={300} />
              </div>
            </div>
          </div>
          <div className="sm:w-1/2 w-full bg-neutral_01 rounded-[16px] pt-12 px-8 pb-10 relative">
            <h2 className="text-neutral_07 sm:text-[28px] text-xl font-poppins font-medium text-center">
              {dict.products["contact-us"]}
            </h2>
            <p className="font-poppins text-neutral_04 text-sm font-medium sm:block hidden text-center">
              {dict.products["contact-us-sub-subtitle"]}
            </p>

            <form action="#" className="sm:mt-7 mt-6">
              <div className="relative  w-full">
                <input
                  type="text"
                  placeholder="Email address"
                  className="h-14 pl-12 w-full rounded-[8px] bg-neutral_02 placeholder:text-sm font-poppins placeholder:font-medium placeholder:text-neutral_04"
                />
                <span className="absolute left-3 top-[16px]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.32698 5.63803C2 6.27976 2 7.11984 2 8.8V15.2C2 16.8802 2 17.7202 2.32698 18.362C2.6146 18.9265 3.07354 19.3854 3.63803 19.673C4.27976 20 5.11984 20 6.8 20H17.2C18.8802 20 19.7202 20 20.362 19.673C20.9265 19.3854 21.3854 18.9265 21.673 18.362C22 17.7202 22 16.8802 22 15.2V8.8C22 7.11984 22 6.27976 21.673 5.63803C21.3854 5.07354 20.9265 4.6146 20.362 4.32698C19.7202 4 18.8802 4 17.2 4H6.8C5.11984 4 4.27976 4 3.63803 4.32698C3.07354 4.6146 2.6146 5.07354 2.32698 5.63803ZM7.56569 8.17538C7.11026 7.86296 6.4878 7.97889 6.17538 8.43431C5.86296 8.88974 5.97889 9.5122 6.43431 9.82462L10.3029 12.4785C11.3256 13.18 12.6744 13.18 13.6971 12.4785L17.5657 9.82462C18.0211 9.5122 18.137 8.88974 17.8246 8.43431C17.5122 7.97889 16.8897 7.86296 16.4343 8.17538L12.5657 10.8293C12.2248 11.0631 11.7752 11.0631 11.4343 10.8293L7.56569 8.17538Z"
                      fill="#787F84"
                    />
                  </svg>
                </span>
              </div>
              <div className="relative  w-full">
                <input
                  type="text"
                  placeholder="Name"
                  className="h-14 mt-[15px] pl-12 w-full rounded-[8px] bg-neutral_02 placeholder:text-sm font-poppins placeholder:font-medium placeholder:text-neutral_04"
                />
                <span className="absolute left-3 top-[31px]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 14C6.23858 14 4 16.2386 4 19C4 20.6569 5.34315 22 7 22H17C18.6569 22 20 20.6569 20 19C20 16.2386 17.7614 14 15 14H9Z"
                      fill="#787F84"
                    />
                    <path
                      d="M12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2Z"
                      fill="#787F84"
                    />
                  </svg>
                </span>
              </div>
              <div className="relative  w-full">
                <input
                  type="text"
                  placeholder="Company name"
                  className="h-14 mt-[15px] pl-12 w-full rounded-[8px] bg-neutral_02 placeholder:text-sm font-poppins placeholder:font-medium placeholder:text-neutral_04"
                />
                <span className="absolute left-3 top-[31px]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.6815 7.16472C12.2534 6.94639 11.7466 6.94639 11.3185 7.16472L5.81851 9.96972C5.31621 10.2259 5 10.7421 5 11.306V17.9997C5 19.6566 6.34315 20.9997 8 20.9997H8.86047C9.48981 20.9997 10 20.4895 10 19.8602V16.9997C10 15.8951 10.8954 14.9997 12 14.9997C13.1046 14.9997 14 15.8951 14 16.9997V19.8602C14 20.4895 14.5102 20.9997 15.1395 20.9997H16C17.6569 20.9997 19 19.6566 19 17.9997V11.306C19 10.7421 18.6838 10.2259 18.1815 9.96972L12.6815 7.16472Z"
                      fill="#787F84"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.10579 8.44721C3.35278 8.94119 3.95345 9.14142 4.44743 8.89443L12.0002 5.11803L19.553 8.89443C20.047 9.14142 20.6476 8.94119 20.8946 8.44721C21.1416 7.95324 20.9414 7.35256 20.4474 7.10557L12.4474 3.10557C12.1659 2.96481 11.8345 2.96481 11.553 3.10557L3.553 7.10557C3.05902 7.35256 2.8588 7.95324 3.10579 8.44721Z"
                      fill="#787F84"
                    />
                  </svg>
                </span>
              </div>
              <div className="relative  w-full">
                <textarea
                  placeholder="How can we help you"
                  rows={10}
                  cols={50}
                  className="mt-[15px] h-[144px] pl-12 pt-5 w-full rounded-[8px] bg-neutral_02 placeholder:text-sm font-poppins placeholder:font-medium placeholder:text-neutral_04"
                ></textarea>
                <span className="absolute left-3 top-[34px]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.77529 14.6582L3.05957 19.6735C2.79072 20.4594 3.54164 21.2115 4.32793 20.9439L9.34987 19.2347C9.78455 19.0867 10.1795 18.841 10.5042 18.5164L10.6569 18.3637C10.8522 18.1685 10.8523 17.8519 10.657 17.6566L6.35408 13.3535C6.15884 13.1582 5.84231 13.1582 5.64703 13.3534L5.49288 13.5075C5.16899 13.8312 4.92352 14.2249 4.77529 14.6582Z"
                      fill="#787F84"
                    />
                    <path
                      d="M12.8344 6.83444C12.6386 6.63861 12.3209 6.63925 12.1258 6.83587L7.85009 11.1464C7.65618 11.3419 7.65682 11.6574 7.85151 11.8521L12.1544 16.1552C12.3502 16.351 12.6679 16.3504 12.863 16.1538L17.1387 11.8433C17.3326 11.6478 17.332 11.3323 17.1373 11.1376L12.8344 6.83444Z"
                      fill="#787F84"
                    />
                    <path
                      d="M15.1186 3.8812L14.3535 4.64636C14.1582 4.84162 14.1582 5.15819 14.3535 5.35345L18.6564 9.65656C18.8516 9.85183 19.1682 9.85183 19.3635 9.65655L20.1288 8.89118C21.3003 7.71961 21.3003 5.82022 20.1288 4.64867L19.3613 3.88117C18.1897 2.70952 16.2901 2.70954 15.1186 3.8812Z"
                      fill="#787F84"
                    />
                  </svg>
                </span>
              </div>

              <Link href="#" className="mt-4 w-full h-12 bg-color_01 hover:bg-shade_06 rounded-[48px] flex justify-center items-center text-neutral_01  font-poppins font-semibold text-sm" >Send now</Link>
            </form>

            <div className="top-5 right-5 absolute ">
              <Image
                src="/menu-close.svg"
                alt="Close Menu"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>


        <div className="w-[360px] h-[360px]  bg-[#B6DFEC] rounded-full absolute md:top-5 top-20 lg:left-4 sm:left-[-90px] left-[-190px]"></div>
        <div className=" absolute top-96 left-14">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" fill="url(#paint0_radial_173_1879)" />
            <circle cx="20" cy="20" r="20" fill="url(#paint1_radial_173_1879)" fillOpacity="0.2" />
            <defs>
              <radialGradient id="paint0_radial_173_1879" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(33.3971 36.7464) rotate(-129.944) scale(40.6901)">
                <stop offset="0.436111" stopColor="#3CB779" />
                <stop offset="1" stopColor="#62EFA8" />
              </radialGradient>
              <radialGradient id="paint1_radial_173_1879" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(5.83732 6.2201) rotate(44.2205) scale(19.8956)">
                <stop stopColor="white" />
                <stop offset="0.424767" stopColor="white" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="w-[260px] h-[260px]  bg-[#D2C6F0] rounded-full absolute bottom-2 lg:right-6 right-[-90px]"></div>
        <div className=" absolute top-96 right-20">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="24" fill="url(#paint0_radial_173_1878)" />
            <circle cx="24" cy="24" r="24" fill="url(#paint1_radial_173_1878)" fillOpacity="0.2" />
            <defs>
              <radialGradient id="paint0_radial_173_1878" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(40.0766 44.0957) rotate(-129.944) scale(48.8281)">
                <stop offset="0.436111" stopColor="#FFAF13" />
                <stop offset="1" stopColor="#FBFF47" />
              </radialGradient>
              <radialGradient id="paint1_radial_173_1878" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(7.00478 7.46412) rotate(44.2205) scale(23.8747)">
                <stop stopColor="white" />
                <stop offset="0.424767" stopColor="white" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </section>
    </div>
  );
}
