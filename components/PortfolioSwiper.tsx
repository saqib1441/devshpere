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
}

const PortfolioSwiper: FC<PortfolioInterface> = ({ imgSrc, link }) => {
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
      {imgSrc.map((img, index) => (
        <SwiperSlide key={index} className="w-full">
          <div className="relative rounded-2xl overflow-hidden group select-none">
            {/* Image */}
            <Image
              src={img}
              alt={`Portfolio image ${index + 1}`} // Descriptive alt text for each image
              className="mx-auto"
              priority
              width={500} // Ensure a fixed width
              height={300} // Ensure a fixed height
              objectFit="cover"
            />
            {/* Link */}
            <Link
              href={link}
              aria-label={`View portfolio item ${index + 1}`} // Add aria-label for accessibility
              className="absolute z-50 w-full h-full backdrop-blur-sm bg-white/10 top-0 left-0 items-center justify-center flex opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
              <span className="w-14 h-14 flex items-center justify-center bg-gradient-to-r from-primary to-yellow-500 text-white rounded-full text-2xl translate-y-96 group-hover:translate-y-0 transition-all duration-300">
                <MdInsertLink />
              </span>
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PortfolioSwiper;
