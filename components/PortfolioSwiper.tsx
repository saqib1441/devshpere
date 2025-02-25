"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FC } from "react";
import { MdInsertLink } from "react-icons/md";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface PortfolioInterface {
  imgSrc: (StaticImageData | string)[]; // Accept both StaticImageData and URLs
  link: string;
  portfolio: string; // Portfolio name
  portfolioDesc: string;
}

const PortfolioSwiper: FC<PortfolioInterface> = ({
  imgSrc,
  link,
  portfolio,
  portfolioDesc,
}) => {
  return (
    <Swiper
      modules={[Pagination, Navigation]}
      pagination={{ clickable: true }}
      navigation={true}
      loop={true}
      spaceBetween={50}
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {imgSrc.map((img, index) => {
        const isVideo =
          portfolio === "Video Editing" && typeof img === "string"; // Ensure it's a string for video

        return (
          <SwiperSlide key={index} className="w-full">
            <div className="relative rounded-2xl overflow-hidden group select-none">
              {/* Image or Video */}
              {isVideo ? (
                <video
                  src={img}
                  className="mx-auto"
                  width={500}
                  height={300}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <Image
                  src={img}
                  alt={`Portfolio image ${index + 1}`}
                  className="mx-auto"
                  priority
                  width={500}
                  height={300}
                  style={{ objectFit: "cover" }} // Fix for Next.js image
                />
              )}
              {/* Link */}
              <Link
                href={link}
                aria-label={`View portfolio item ${index + 1}`}
                className="absolute z-50 w-full h-full backdrop-blur-sm bg-white/10 top-0 left-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
              >
                <span className="w-14 h-14 flex items-center justify-center bg-gradient-to-r from-primary to-yellow-500 text-white rounded-full text-2xl translate-y-96 group-hover:translate-y-0 transition-all duration-300">
                  <MdInsertLink />
                </span>
              </Link>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default PortfolioSwiper;
