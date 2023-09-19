'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Hero = (): JSX.Element | null => {
  const pathname = usePathname();

  if (pathname !== '/') {
    return null;
  }
  return (
    <div className="relative flex h-[70vh] w-full items-center justify-center">
      <div className="small:text-left small:justify-end small:items-start small:p-32 absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white">
        <h1 className="mb-4 text-5xl shadow-black drop-shadow-md">
          Introducing the Latest Weekend Styles
        </h1>
        <p className="mb-6 max-w-[32rem] text-base shadow-black drop-shadow-md">
          This season, our new weekend collection embraces designs to provide comfort and style -
          ensuring you&apos;re well-prepared for whatever comes your way.
        </p>

        <Link
          href="/search/records"
          className="text-large-regular group gap-x-4 border-b border-current py-2 transition-all duration-300 hover:pl-4 hover:pr-1"
        >
          <>
            <span> Click here to start shopping </span>
            <Image
              width={30}
              height={30}
              alt=""
              src="/arrow.png"
              className="inline-block transition-all duration-300 group-hover:ml-2"
            ></Image>
          </>
        </Link>
      </div>
      <div className="absolute inset-0 mx-auto flex w-full max-w-[1530px] items-center justify-center">
        <Image
          src="/blacknblue.jpeg"
          loading="eager"
          priority={true}
          quality={90}
          alt=" "
          fill
          style={{
            objectFit: 'cover',
            padding: '15px',
            borderRadius: '25px',
          }}
        />
      </div>
    </div>
  );
};

export default Hero;
