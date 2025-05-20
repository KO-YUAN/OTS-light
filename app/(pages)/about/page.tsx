import React from "react";
import Image from "next/image";
function page() {
  return (
    <div className="">
      <div className="bg-neutral_02 ">
        <section className="max-w-[1251px] mx-auto sm:pt-[72px] pt-5 xl:px-4 sm:px-20 px-6">
          <h1 className="text-neutral_07 md:text-[72px] text-5xl font-poppins font-semibold">
            {dict.products["about-us"]}
          </h1>
          <div className="flex md:flex-row flex-col-reverse lg:gap-[22px] md:gap-[10px] gap-5 md:mt-[55px] mt-5">
            <div className="xl:w-5/12 md:w-1/2 w-full">
              <div className="max-w-[460px]">
                <h2 className="text-neutral_07 md:text-[35px] text-[30px]  font-semibold font-poppins md:block hidden">
                   {dict.products["about-us-title"]}
                </h2>
                <div className="flex sm:flex-row flex-col gap-5 sm:mt-4 mt-0 ">
                  <p className="text-neutral_04 sm:w-1/2 w-full text-base font-poppins font-medium">
                    Founded by a team of tech enthusiasts, Opportune Soft values
                    collaboration, growth, and innovation. We foster a culture built
                    on harmony, vitality, creativity, and unity, where everyone is
                    trusted to thrive in the right role.
                  </p>
                  <p className="text-neutral_04 sm:w-1/2 w-full text-base font-poppins font-medium">
                    With an open management style, we encourage initiative, honest
                    communication, and diverse ideas—working together with empathy
                    and integrity toward a shared vision.
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:w-7/12 md:w-1/2 w-full -ml-1">
              <h2 className="text-neutral_07 md:text-4xl md:text-[36px] mb-5 text-2xl font-semibold font-poppins block md:hidden">
                What is OPPORTUNE SOFT
              </h2>
              <p className="font-poppins font-medium md:text-[22px] text-lg text-neutral_06 sm:leading-[32px] leading-7 tracking-[-1%]">
                Our vision is to become a flagship enterprise leading innovation
                and quality standards in the software outsourcing industry. <br />
                Our
                mission is to leverage cutting-edge technology and
                high-performance products to deliver tailored digital solutions
                for various businesses and organizations, helping our clients
                thrive amid digital transformation, achieve business growth, and
                pursue sustainable development.
              </p>
            </div>
          </div>
        </section>

        <section className="sm:mt-[58px] mt-[30px]">
          <Image src="/hero-about.png" alt="Logo" width={1100} height={100} className="w-[100%] h-auto" />
        </section>

        <section className="sm:mt-[64px] mt-[30px] sm:pb-[126px] pb-[30px] sm:px-4 px-5">
          <div>
            <h2 className="font-poppins text-neutral_07 font-semibold text-4xl text-center">Meet the team</h2>
            <p className="font-poppins text-neutral_04 font-medium text-base mt-6 text-center">Together, we create access to information and build products for everyone. Want to become an OPPORTUNE SOFT employee? Find your team.</p>
          </div>

          <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-[126px] sm:gap-y-[36px] gap-y-5 sm:mt-[61px] mt-5 max-w-[800px] mx-auto ">
            <div>
              <Image src="/team1.png" alt="Logo" width={360} height={360} className="w-[100%] h-auto" />
              <h2 className="text-neutral_07 font-poppins font-medium text-[22px] mt-2.5">Shih-Kai Wang</h2>
              <p className="text-neutral_04 font-poppins font-semibold text-base ">CEO</p>
            </div>
            <div>
              <Image src="/team-2.png" alt="Logo" width={360} height={360} className="w-[100%] h-auto" />
              <h2 className="text-neutral_07 font-poppins font-medium text-[22px] mt-2.5">Jason Chang</h2>
              <p className="text-neutral_04 font-poppins font-semibold text-base ">CTO</p>
            </div>
            <div>
              <Image src="/team-3.png" alt="Logo" width={360} height={360} className="w-[100%] h-auto" />
              <h2 className="text-neutral_07 font-poppins font-medium text-[22px] mt-2.5">Iris Lee</h2>
              <p className="text-neutral_04 font-poppins font-semibold text-base ">Product Manager</p>
            </div>
            <div>
              <Image src="/team-4.png" alt="Logo" width={360} height={360} className="w-[100%] h-auto" />
              <h2 className="text-neutral_07 font-poppins font-medium text-[22px] mt-2.5">Brian Wu</h2>
              <p className="text-neutral_04 font-poppins font-semibold text-base ">Software Engineer</p>
            </div>
            <div>
              <Image src="/team-5.png" alt="Logo" width={360} height={360} className="w-[100%] h-auto" />
              <h2 className="text-neutral_07 font-poppins font-medium text-[22px] mt-2.5">Kevin Wang</h2>
              <p className="text-neutral_04 font-poppins font-semibold text-base ">Systems Analyst</p>
            </div>
            <div>
              <Image src="/team-6.png" alt="Logo" width={360} height={360} className="w-[100%] h-auto" />
              <h2 className="text-neutral_07 font-poppins font-medium text-[22px] mt-2.5">Andrew Chen</h2>
              <p className="text-neutral_04 font-poppins font-semibold text-base ">UI/UX Designer</p>
            </div>
            <div>
              <Image src="/team-7.png" alt="Logo" width={360} height={360} className="w-[100%] h-auto" />
              <h2 className="text-neutral_07 font-poppins font-medium text-[22px] mt-2.5">Ethan Lin</h2>
              <p className="text-neutral_04 font-poppins font-semibold text-base ">Marketing Manager</p>
            </div>
            <div>
              <Image src="/team-8.png" alt="Logo" width={360} height={360} className="w-[100%] h-auto" />
              <h2 className="text-neutral_07 font-poppins font-medium text-[22px] mt-2.5">Tiffany Chen</h2>
              <p className="text-neutral_04 font-poppins font-semibold text-base ">Administrative Assistant</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default page;
