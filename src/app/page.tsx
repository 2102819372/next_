import Link from "next/link";
import VideoSwiper from "./compoents/videoSwiper";
import Image from "next/image";
export default function Page() {
  return (
    <>
      <main>
        <section className="bg-white min-[1600px]:px-4">
          <div className="flex lg:aspect-video flex-col items-center justify-center text-white relative xl:h-auto lg:max-h-[900px] w-full min-[1600px]:w-auto mx-auto min-[1600px]:mt-16 min-[1600px]:rounded-[3px] overflow-hidden h-[90vh] max-h-[660px] min-h-[500px]">
            <VideoSwiper />
          </div>
        </section>
        <section
          data-header-color="dark"
          className="bg-white w-full pt-16 lg:pt-28 pb-8"
        >
          <div className="ml-auto mr-auto pl-5 pr-5 max-w-[1600px]">
            <div className="text-center mb-10 lg:mb-20">
              <div className="rw-h2 mb-2 lg:mb-0">
                Advancing creativity
                <br className="hidden lg:block" /> with artificial intelligence.
              </div>
              <div className="lg:w-1/2 mx-auto rw-bodycopy2 mb-5">
                Runway is an applied research company building the next era of
                art,
                <br className="hidden lg:block" /> entertainment and human
                creativity.
              </div>
              <a
                className="px-4 pt-[10px] pb-[11px] rounded-full inline-flex transition-all duration-200 items-center justify-center text-black border border-black hover:bg-black hover:text-white "
                target="_self"
                href="/product"
              >
                Our Tools
              </a>
            </div>
            <div className="sm:w-10/12 md:w-full xl:w-14/16 mx-auto mb-16 lg:mb-24">
              <div className="text-[22px] mb-5 ">News</div>
              <div className="grid md:grid-cols-3 w-full gap-9 md:gap-2.5">
                <a
                  className="group"
                  target="_self"
                  href="/news/runway-launches-global-talent-network"
                >
                  <div className="relative aspect-[1.48] w-full mb-3 rounded-[3px] overflow-hidden">
                    <Image
                      fill
                      alt=""
                      className="w-full h-full object-cover scale-[1.01] transform-gpu group-hover:scale-110 transition-all duration-[3s] ease-linear"
                      src="https://picsum.photos/1080/721"
                    />
                  </div>
                  <div className="rw-h5 pr-5 group-hover:opacity-70 transition-opacity duration-200 flex items-center">
                    Runway Launches Global Talent Network
                  </div>
                  <div className="mt-1">
                    <div className="inline rw-bodycopy3 text-darkGrayAlt">
                      News /
                    </div>
                    <div className="inline rw-bodycopy3 text-darkGrayAlt ml-1">
                      December 19, 2024
                    </div>
                  </div>
                </a>
                <a
                  className="group"
                  target="_self"
                  href="/news/runway-partners-with-lionsgate"
                >
                  <div className="relative aspect-[1.48] w-full mb-3 rounded-[3px] overflow-hidden">
                    <Image
                      fill
                      alt=""
                      className="object-cover scale-[1.01] transform-gpu group-hover:scale-110 transition-all duration-[3s] ease-linear"
                      src="https://picsum.photos/1080/960"
                    />
                  </div>
                  <div className="rw-h5 pr-5 group-hover:opacity-70 transition-opacity duration-200 flex items-center">
                    Runway Partners with Lionsgate
                  </div>
                  <div className="mt-1">
                    <div className="inline rw-bodycopy3 text-darkGrayAlt">
                      News /
                    </div>
                    <div className="inline rw-bodycopy3 text-darkGrayAlt ml-1">
                      September 19, 2024
                    </div>
                  </div>
                </a>
                <a
                  className="group"
                  target="_self"
                  href="/news/runway-partners-with-tribeca-festival"
                >
                  <div className="relative aspect-[1.48] w-full mb-3 rounded-[3px] overflow-hidden">
                    <Image
                      fill
                      alt=""
                      className="object-cover scale-[1.01] transform-gpu group-hover:scale-110 transition-all duration-[3s] ease-linear"
                      src="https://picsum.photos/1080/720"
                    />
                  </div>
                  <div className="rw-h5 pr-5 group-hover:opacity-70 transition-opacity duration-200 flex items-center">
                    Exploring the Future of Filmmaking with Tribeca Festival
                    2024
                  </div>
                  <div className="mt-1">
                    <div className="inline rw-bodycopy3 text-darkGrayAlt">
                      News /
                    </div>
                    <div className="inline rw-bodycopy3 text-darkGrayAlt ml-1">
                      May 11, 2024
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="bg-slate-100 xl:w-14/16 mx-auto p-10 flex flex-col lg:flex-row items-center justify-between rounded-[3px]">
              <div className="mb-6 lg:mb-0">
                <div className="rw-eyebrow">Latest Update</div>
                <div className="rw-h5">
                  Introducing Frames: An image generation model offering
                  unprecedented stylistic control.
                </div>
              </div>
              <Link
                className="rw-cta-text px-4 pt-[10px] pb-[11px] rounded-full inline-flex transition-all duration-200 items-center justify-center text-black border border-black hover:bg-black hover:text-white "
                target="_self"
                href="#"
              >
                Try Now
              </Link>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-start bg-black text-white relative pt-20 lg:pt-24 pb-10">
          <div className="ml-auto mr-auto pl-5 pr-5 max-w-[1600px]">
            <div className="sm:w-10/12 md:w-full xl:w-14/16 mx-auto">
              <div className="lg:w-1/2 mb-4">
                <div className="min-[1024px]:text-[11px] font-medium">
                  Our Research
                </div>
                <div className="rw-h4 text-[22px]">
                  We are pioneering general-purpose multimodal simulators of the
                  world.
                </div>
              </div>
              <Link
                href="#"
                className="px-4 pt-[10px] pb-[11px] rounded-full inline-flex transition-all duration-200 items-center justify-center text-white border border-white hover:bg-white hover:text-black "
              >
                Read more
              </Link>
              <div className="grid md:grid-cols-3 w-full mt-16 lg:mt-20 gap-9 md:gap-2.5">
                <Link href="#">
                  <div className="relative aspect-[1.48] w-full mb-3 rounded-[3px] overflow-hidden">
                    <Image
                      className="w-full h-full object-cover scale-[1.01] transform-gpu hover:scale-110 transition-all duration-[3000ms] ease-linear"
                      src="https://picsum.photos/id/237/1080/960"
                      fill
                      alt=""
                      objectFit="cover"
                    />
                  </div>
                  <div className="pr-5 group-hover:opacity-70 transition-opacity duration-200 flex items-center">
                    Introducing Frames
                  </div>
                  <div className="mt-1">
                    <div className="inline rw-bodycopy3 text-slate-400">
                      Research/
                    </div>
                    <div className="inline rw-bodycopy3 text-slate-400 ml-1">
                      November 26, 2024
                    </div>
                  </div>
                </Link>
                <Link href="#">
                  <div className="relative aspect-[1.48] w-full mb-3 rounded-[3px] overflow-hidden">
                    <Image
                      className="w-full h-full object-cover scale-[1.01] transform-gpu hover:scale-110 transition-all duration-[3000ms] ease-linear"
                      src="https://picsum.photos/id/239/1080/960"
                      fill
                      alt=""
                      objectFit="cover"
                    />
                  </div>
                  <div className="pr-5 group-hover:opacity-70 transition-opacity duration-200 flex items-center">
                    Introducing Frames
                  </div>
                  <div className="mt-1">
                    <div className="inline rw-bodycopy3 text-slate-400">
                      Research/
                    </div>
                    <div className="inline rw-bodycopy3 text-slate-400 ml-1">
                      November 26, 2024
                    </div>
                  </div>
                </Link>
                <Link href="#">
                  <div className="relative aspect-[1.48] w-full mb-3 rounded-[3px] overflow-hidden">
                    <Image
                      className="w-full h-full object-cover scale-[1.01] transform-gpu hover:scale-110 transition-all duration-[3000ms] ease-linear"
                      objectFit="cover"
                      src="https://picsum.photos/id/240/1080/960"
                      fill
                      alt=""
                    />
                  </div>
                  <div className="pr-5 group-hover:opacity-70 transition-opacity duration-200 flex items-center">
                    Introducing Frames
                  </div>
                  <div className="mt-1">
                    <div className="inline rw-bodycopy3 text-slate-400">
                      Research/
                    </div>
                    <div className="inline rw-bodycopy3 text-slate-400 ml-1">
                      November 26, 2024
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-black text-white w-full pt-20 lg:pt-32 pb-16 lg:pb-24">
          <div className="ml-auto mr-auto pl-5 pr-5 max-w-[1600px]">
            <div className="flex items-center justify-center mb-6">
              brand Studio
            </div>
            <div className="text-52px leading-none text-center mb-12 rw-h1">
              Lorem, ipsum dolor. <br /> Lorem ipsum dolor sit.
            </div>
            <div className="lg:w-8/12 mx-auto">
              <div className="w-full relative">
                <div className="absolute h-40 w-full bg-gradient-to-b from-transparent to-black"></div>
                <div className="aspect-video relative rounded-[3px] overflow-hidden group">
                  <video
                    playsInline
                    autoPlay
                    muted
                    loop
                    poster="https://d3phaj0sisr2ct.cloudfront.net/site/videos/homepage/Homepage_006.webp"
                  >
                    <source
                      src="https://d3phaj0sisr2ct.cloudfront.net/site/videos/homepage/Homepage_006.mp4"
                      type="video/mp4"
                    />
                  </video>
                  <div className="absolute inset-0 backdrop-blur-sm bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <a
                      className="rw-cta-text px-4 pt-[10px] pb-[11px] rounded-full inline-flex transition-all duration-200 items-center justify-center text-white border border-white hover:bg-white hover:text-offBlack "
                      target="_self"
                      href="/studios"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-10 lg:mt-20 min-[1024px]:text-[36px] text-[22px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae,
              consectetur.
              <br className="hidden lg:block" />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              <br className="hidden lg:block" />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo!
            </div>
            <div className="flex justify-center mt-5">
              <Link
                href="#"
                className="text-[16px] min-[1024]:text-[14px] px-4 pt-[10px] pb-[11px] rounded-full inline-flex transition-all duration-200 items-center justify-center text-white border border-white hover:bg-white hover:text-black "
              >
                Lorem, ipsum.
              </Link>
            </div>
            <div className="sm:w-10/12 md:w-full xl:w-14/16 mx-auto">
              <div className="mt-24 lg:mt-48 mb-4 lg:mb-8 min-[1024px]:text-[30px] min-[768px]:text-[24px] text-[26px]">
                Lorem ipsum dolor sit amet.
              </div>
              <div className="grid md:grid-cols-3 w-full gap-9 md:gap-2.5">
                {[1, 2, 3].map((e) => (
                  <Link className="group" key={e} href="#">
                    <div className="relative aspect-[1.48] w-full mb-3 rounded-[3px] overflow-hidden">
                      <Image
                        className="w-full h-full object-cover scale-[1.01] transform-gpu group-hover:scale-110 transition-all duration-[3s] ease-linear"
                        fill
                        src={`https://picsum.photos/id/${100 + e}/1080/960`}
                        alt=""
                      ></Image>
                    </div>
                    <div className="text-[22px] pr-5 hover:opacity-70 transition-opacity duration-200 flex items-center">
                      Lorem, ipsum dolor.
                      <span className="rw-bodycopy1 ml-3.5">→</span>
                    </div>
                    <div className="text-slate-400 mt-1 lg:pr-20">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nulla, sequi.
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="w-full pt-20 bg-white">
          <div className="max-w-[1600px] ml-auto mr-auto pl-5 pr-5">
            <div className="text-center">
              <div className="mb-5 rw-h2">
                Lorem ipsum dolor sit amet.
                <br />
                Lorem, ipsum dolor.
              </div>
              <Link
                href="#"
                className="rw-cta-text px-4 pt-[10px] pb-[11px] rounded-full inline-flex transition-all duration-200 items-center justify-center text-black border border-offBlack hover:bg-black hover:text-white "
              >
                Lorem, ipsum dolor.
              </Link>
            </div>
            <div className="sm:w-10/12 md:w-full xl:w-14/16 mx-auto pb-12 lg:pb-24">
              <div className="grid md:grid-cols-3 w-full mt-16 lg:mt-20 gap-9 md:gap-2.5">
                {[1, 2, 3].map((e) => (
                  <Link className="group" href="#" key={e}>
                    <div className="relative aspect-[1.48] w-full mb-3 rounded-[3px] overflow-hidden">
                      <Image
                        className="w-full h-full object-cover scale-[1.01] transform-gpu group-hover:scale-110 transition-all duration-[3s] ease-linear"
                        src={`https://picsum.photos/id/${200 + e}/1080/960 `}
                        alt=""
                        fill
                      ></Image>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="pb-16 lg:pb-32">
            <div className="text-center mb-7 min-[1024px]:text-[13px] text-[14px] text-slate-400">
              Select Enterprise Partners
            </div>
            <div className="max-w-[1600px] ml-auto mr-auto pl-5 pr-5">
              <div className="w-full md:w-12/16 lg:w-14/16 mx-auto">
                <div className="grid grid-cols-3 lg:grid-cols-6 items-center place-items-center justify-center gap-y-3 gap-x-3 md:gap-24 opacity-70 text-slate-400">
                  <div className="max-w-[60px] lg:max-w-[71px] flex items-center justify-center relative w-7 h-7">
                    <Image
                      src="/assets/icons/brand-github.svg"
                      fill
                      alt=""
                    ></Image>
                  </div>
                  <div className="max-w-[60px] lg:max-w-[71px] flex items-center justify-center relative w-7 h-7">
                    <Image
                      src="/assets/icons/brand-github.svg"
                      fill
                      alt=""
                    ></Image>
                  </div>
                  <div className="max-w-[60px] lg:max-w-[71px] flex items-center justify-center relative w-7 h-7">
                    <Image
                      src="/assets/icons/brand-github.svg"
                      fill
                      alt=""
                    ></Image>
                  </div>
                  <div className="max-w-[60px] lg:max-w-[71px] flex items-center justify-center relative w-7 h-7">
                    <Image
                      src="/assets/icons/brand-github.svg"
                      fill
                      alt=""
                    ></Image>
                  </div>
                  <div className="max-w-[60px] lg:max-w-[71px] flex items-center justify-center relative w-7 h-7">
                    <Image
                      src="/assets/icons/brand-github.svg"
                      fill
                      alt=""
                    ></Image>
                  </div>
                  <div className="max-w-[60px] lg:max-w-[71px] flex items-center justify-center relative w-7 h-7">
                    <Image
                      src="/assets/icons/brand-github.svg"
                      fill
                      alt=""
                    ></Image>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
