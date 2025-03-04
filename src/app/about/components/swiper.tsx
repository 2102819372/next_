"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
export default function Swipers({ data = [] }: { data: { url: string }[] }) {
  return (
    <Swiper loop slidesPerView="auto" spaceBetween={10}>
      {data.map((e, idx) => (
        <SwiperSlide
          key={idx}
          className="!h-[200px] lg:!h-[500px] shrink-0 overflow-hidden rounded-[3px] !w-2/3 lg:!w-auto"
        >
          <Image
            className="!static object-cover"
            src={e.url}
            fill
            alt="Image"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
