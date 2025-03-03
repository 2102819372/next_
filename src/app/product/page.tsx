import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const images = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  return (
    <main>
      <section className="bg-white min-[1600px]:px-4">
        <div className="flex lg:aspect-video flex-col items-center justify-center text-white relative xl:h-auto lg:max-h-[900px] w-full min-[1600px]:w-auto mx-auto min-[1600px]:mt-16 min-[1600px]:rounded-[3px] overflow-hidden h-[90vh] max-h-[660px] min-h-[500px]">
          <video
            muted
            autoPlay
            loop
            className="absolute inset-0 object-cover w-full h-full"
          >
            <source src="/assets/videos/bottom (1).mp4" />
          </video>
          <div className="bg-black absolute inset-0 opacity-30"></div>
          <div className="relative text-center w-full mb-6 lg:mb-12 mt-auto"></div>
          <div className="relative text-center w-full mb-6 lg:mb-12 mt-auto">
            <div className="rw-container">
              <div className="mx-auto w-full">
                <h1 className="rw-h1">Tools for human imagination.</h1>
                <div className="lg:w-2/3 mx-auto">
                  <div className="rw-bodycopy1 mb-5">
                    Fast and controllable tools that allow you to create
                    high-fidelity content in an a way that’s never been possible
                    before.
                  </div>
                  <div className="flex flex-col md:flex-row items-center justify-center gap-1.5">
                    <Link
                      className="rw-cta-text px-4 pt-[10px] pb-[11px] rounded-full inline-flex transition-all duration-200 items-center justify-center bg-white text-black border border-white hover:text-darkGrayAlt hover:bg-offWhite "
                      target="_self"
                      href="#"
                    >
                      Try Runway Now
                      <svg
                        className="ml-2 mt-px"
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.46812 0L9.89321 4.77037C9.96143 4.83035 10 4.9133 10 5C10 5.0867 9.96143 5.16965 9.89321 5.22963L4.46812 10L3.98863 9.54074L8.7909 5.31802L0 5.31803V4.68198L8.7909 4.68198L3.98863 0.459263L4.46812 0Z"
                          className="fill-current"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="rw-container pt-16 lg:pt-36">
          <div className="text-center mb-5 lg:mb-10">
            <div className="rw-h3-alt mb-2.5">Lorem ipsum dolor sit amet.</div>
            <div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis,
              repellat?
              <br className="hidden lg:block" />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
          <div className="lg:w-14/16 mx-auto">
            <div className="aspect-video rounded-[3px] overflow-hidden relative">
              <video loop autoPlay muted className="w-full h-full object-cover">
                <source src="/assets/videos/top_1.mp4" />
              </video>
            </div>
          </div>
        </div>
        <div className="rw-container pt-16 lg:pt-36 pb-16 lg:pb-36">
          <div className="text-center mb-5 lg:mb-10">
            <div className="rw-h3-alt mb-2.5">Lorem ipsum dolor sit amet.</div>
            <div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis,
              repellat?
              <br className="hidden lg:block" />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
          <div className="lg:w-14/16 mx-auto">
            <div className="aspect-video rounded-[3px] overflow-hidden relative">
              <video loop autoPlay muted className="w-full h-full object-cover">
                <source src="/assets/videos/top_1.mp4" />
              </video>
            </div>
          </div>
        </div>
        <div className="rw-container pb-16 lg:pb-36">
          <div className="text-center mb-5 lg:mb-10">
            <div className="rw-h3-alt mb-2.5">Lorem ipsum dolor sit amet.</div>
            <div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis,
              repellat?
              <br className="hidden lg:block" />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
          <div className="lg:w-14/16 mx-auto">
            <div className="aspect-video rounded-[3px] overflow-hidden relative">
              <video loop autoPlay muted className="w-full h-full object-cover">
                <source src="/assets/videos/top_1.mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-neutral-100 pb-10 lg:pb-20">
        <div className="rw-container pt-16 lg:pb-36">
          <div className="lg:w-14/16 mx-auto">
            <div className="rw-h2 mb-2.5 text-center">Generate anything.</div>
            <div className="pb-10 lg:pb-20 text-center rw-bodycopy1">
              From complex physics-based simulations to hyper-realistic renders,
              our tools allow you to generate <br className="hidden lg:block" />{" "}
              production-ready assets with speed, control and fidelity.
            </div>
          </div>
        </div>
        <section>
          <div>
            <div className="flex flex-col gap-10 lg:gap-20 pb-1 lg:pb-20">
              {images.map((e, idx) => (
                <div key={idx}>
                  <div className="rw-container">
                    <div className="w-full xl:w-14/16 mx-auto -mt-16 pt-16 lg:-mt-32 lg:pt-32">
                      <div>
                        <div className="flex items-center justify-between mb-5">
                          <div className="rw-h5">Lorem, ipsum dolor.</div>
                        </div>
                        <div className="relative -mx-5 lg:-mx-1 overflow-hidden">
                          <div>
                            <div className="flex flex-row pl-4 lg:pl-0">
                              {e.map((j) => (
                                <div
                                  key={j}
                                  className="w-[95%] sm:w-1/2 lg:w-1/3 shrink-0 px-1"
                                >
                                  <div className="aspect-[1.66] rounded-[3px] w-full mb-2.5 cursor-pointer relative group">
                                    <video
                                      loop
                                      muted
                                      className="w-full h-full object-cover rounded-[3px] absolute inset-0"
                                      poster={`https://picsum.photos/id/${
                                        idx + j
                                      }/1080/960`}
                                    >
                                      <source src="/assets/videos/top_2.mp4" />
                                    </video>
                                  </div>
                                  <div className="text-gray-600 text-[13px]">
                                    prompt
                                  </div>
                                  <div className="flex items-center justify-between">
                                    <div className="truncate pr-6 text-[16px]">
                                      Lorem ipsum dolor sit amet consectetur.
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
      <section className="pb-16 lg:pb-36">
        <div className="rw-container pt-16 lg:pt-36">
          <div className="text-center mb-5 lg:mb-16">
            <div className="rw-h3-alt mb-2.5">Direct everything.</div>
            <div className="text-[18px]">
              Bring more control and expressiveness to your generations with
              Multi-Motion Brush and Camera Control.
            </div>
          </div>
          <div className="lg:w-14/16 mx-auto">
            <div className="mb-16">
              <div className="aspect-video relative rounded-[3px] overflow-hidden">
                <video
                  autoPlay
                  loop
                  muted
                  className="w-full h-full object-cover"
                >
                  <source src="/assets/videos/bottom (2).mp4" />
                </video>
              </div>
              <div className="text-center mt-2.5 rw-h6">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
                deserunt nihil atque.
              </div>
            </div>
            <div className="mb-12">
              <div className="aspect-video relative rounded-[3px] overflow-hidden">
                <video
                  autoPlay
                  loop
                  muted
                  className="w-full h-full object-cover"
                >
                  <source src="/assets/videos/bottom (3).mp4" />
                </video>
              </div>
            </div>
            <div className="text-center pt-10 lg:pt-28 mb-5 lg:mb-10">
              <div className="rw-h3-alt mb-2.5">
                Customization and fine-tuning.
              </div>
              <div className="lg:w-1/2 mx-auto mb-5">
                We partner with leading entertainment and media organizations to
                create proprietary fine-tuned versions of our tools.
                Customization allows for even greater control and consistency
                for specific styles, characters and narrative requirements.
              </div>
              <Link
                className="rw-cta-text px-4 pt-[10px] pb-[11px] rounded-full inline-flex transition-all duration-200 items-center justify-center text-black border border-black hover:bg-black hover:text-white "
                target="_self"
                href="#"
              >
                Contact us
              </Link>
            </div>
            <div className="aspect-video rounded-[3px] overflow-hidden relative">
              <video autoPlay muted loop className="w-full h-full object-cover">
                <source src="/assets/videos/top_2.mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black text-white pt-20">
        <div className="rw-container">
          <div className="lg:w-14/16 mx-auto mb-20">
            <div className="rw-h4 lg:w-1/2">
              Explore our dozens of creative AI tools to ideate, generate and
              edit content like never before.
            </div>
            <a
              className="rw-cta-text px-4 pt-[10px] pb-[11px] rounded-full inline-flex transition-all duration-200 items-center justify-center text-white border border-white hover:bg-white hover:text-offBlack mt-4"
              target="_self"
              href="https://app.runwayml.com/"
            >
              Try Runway Now
            </a>
          </div>
          <div className="lg:w-14/16 mx-auto">
            <div className="grid md:grid-cols-3 gap-16 lg:gap-2.5 mb-24 lg:mb-52">
              <Link href="#">
                <div className="aspect-square rounded-[3px] overflow-hidden">
                  <Image
                    fill
                    src="https://picsum.photos/800/800"
                    alt=""
                    className="!static"
                  ></Image>
                </div>
                <div className="rw-h5 mt-2.5">lorem</div>
                <div className="text-gray-400">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Iure, aspernatur!
                </div>
              </Link>
              <Link href="#">
                <div className="aspect-square rounded-[3px] overflow-hidden">
                  <Image
                    fill
                    src="https://picsum.photos/800/800"
                    alt=""
                    className="!static"
                  ></Image>
                </div>
                <div className="rw-h5 mt-2.5">lorem</div>
                <div className="text-gray-400">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Iure, aspernatur!
                </div>
              </Link>
              <Link href="#">
                <div className="aspect-square rounded-[3px] overflow-hidden">
                  <Image
                    fill
                    src="https://picsum.photos/800/800"
                    alt=""
                    className="!static"
                  ></Image>
                </div>
                <div className="rw-h5 mt-2.5">lorem</div>
                <div className="text-gray-400">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Iure, aspernatur!
                </div>
              </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-16 lg:gap-2.5 pb-24 lg:pb-52">
              <Link href="#" className="flex items-start">
                <div className="aspect-square w-[87px] rounded-[3px] overflow-hidden shrink-0">
                  <Image alt="" fill className="!static w-full h-full object-cover" src="https://picsum.photos/400/400"></Image>
                </div>
                <div className="pl-5">
                  <div className="rw-h5 lg:mt-2.5">Lorem, ipsum dolor.</div>
                  <div className="text-[16px] opacity-60">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In aliquam quis earum incidunt quibusdam sint velit voluptatum quaerat debitis quia.
                  </div>
                </div>
              </Link>
              <Link href="#" className="flex items-start">
                <div className="aspect-square w-[87px] rounded-[3px] overflow-hidden shrink-0">
                  <Image alt="" fill className="!static w-full h-full object-cover" src="https://picsum.photos/400/400"></Image>
                </div>
                <div className="pl-5">
                  <div className="rw-h5 lg:mt-2.5">Lorem, ipsum dolor.</div>
                  <div className="text-[16px] opacity-60">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In aliquam quis earum incidunt quibusdam sint velit voluptatum quaerat debitis quia.
                  </div>
                </div>
              </Link>
              <Link href="#" className="flex items-start">
                <div className="aspect-square w-[87px] rounded-[3px] overflow-hidden shrink-0">
                  <Image alt="" fill className="!static w-full h-full object-cover" src="https://picsum.photos/400/400"></Image>
                </div>
                <div className="pl-5">
                  <div className="rw-h5 lg:mt-2.5">Lorem, ipsum dolor.</div>
                  <div className="text-[16px] opacity-60">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In aliquam quis earum incidunt quibusdam sint velit voluptatum quaerat debitis quia.
                  </div>
                </div>
              </Link>
              <Link href="#" className="flex items-start">
                <div className="aspect-square w-[87px] rounded-[3px] overflow-hidden shrink-0">
                  <Image alt="" fill className="!static w-full h-full object-cover" src="https://picsum.photos/400/400"></Image>
                </div>
                <div className="pl-5">
                  <div className="rw-h5 lg:mt-2.5">Lorem, ipsum dolor.</div>
                  <div className="text-[16px] opacity-60">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In aliquam quis earum incidunt quibusdam sint velit voluptatum quaerat debitis quia.
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
