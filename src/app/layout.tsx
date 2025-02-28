import "./globals.css";
import Header from "@/components/ui/header";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header></Header>
        {children}
        <footer>
          <section className="bg-black text-white pt-5 min-[1600px]:pt-28">
            <div className="ml-auto mr-auto pl-5 pr-5 max-w-[1600px]">
              <div className="aspect-video lg:aspect-[2.36] w-full rounded-[3px] mb-16 overflow-hidden relative">
                <video autoPlay muted loop>
                  <source src={`/assets/videos/bottom (${Math.floor(Math.random() * 3) + 1}).mp4`}/>
                </video>
                <div className="absolute bottom-2 right-2 lg:bottom-3 lg:right-3 text-[16px] opacity-70 scale-90 lg:scale-100">
                  Lorem, ipsum dolor.
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-0 mb-52 flex-1">
                  <div >
                    <div className="text-[13px] mb-4 text-slate-400">lorem</div>
                    <ul className="flex flex-col items-start">
                      <li className="mb-1 hover:underline">
                        Lorem, ipsum dolor.
                      </li>
                    </ul>
                  </div>
                  <div >
                    <div className="text-[13px] mb-4 text-slate-400">lorem</div>
                    <ul className="flex flex-col items-start">
                      <li className="mb-1 hover:underline">
                        Lorem, ipsum dolor.
                      </li>
                    </ul>
                  </div>
                  <div >
                    <div className="text-[13px] mb-4 text-slate-400">lorem</div>
                    <ul className="flex flex-col items-start">
                      <li className="mb-1 hover:underline">
                        Lorem, ipsum dolor.
                      </li>
                    </ul>
                  </div>
                  <div >
                    <div className="text-[13px] mb-4 text-slate-400">lorem</div>
                    <ul className="flex flex-col items-start">
                      <li className="mb-1 hover:underline">
                        Lorem, ipsum dolor.
                      </li>
                    </ul>
                  </div>
                  <div >
                    <div className="text-[13px] mb-4 text-slate-400">lorem</div>
                    <ul className="flex flex-col items-start">
                      <li className="mb-1 hover:underline">
                        Lorem, ipsum dolor.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-end pb-6 relative"></div>
            </div>
          </section>
        </footer>
      </body>
    </html>
  );
}
