'use client';

import { Orbitron } from 'next/font/google';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const logoFont = Orbitron({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
});

export default function Navbar() {
  const [hasMounted, setHasMounted] = useState(false);
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);

  useEffect(() => {
    setHasMounted(true);

    const handleScroll = (): void => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!hasMounted) return null;

  return (
    <nav className={`fixed top-0 z-50 w-full py-4 ${hasScrolled ? 'bg-[#222222] transition-all' : 'transition-all'}`}>
      <div className='w-3/5 mx-auto flex items-center justify-between'>
        <div className=''>
          <h2 className={`text-white font-extrabold text-xl ${logoFont.className}`}>M_DEV</h2>
        </div>
        <ul className='flex items-center gap-16'>
          <li>
            <Link href={`#`} className='text-white font-semibold text-base'>
              Home
            </Link>
          </li>
          <li>
            <Link href={`#`} className='text-white font-semibold text-base'>
              Projects
            </Link>
          </li>
          <li>
            <Link href={`#`} className='text-white font-semibold text-base'>
              Experience
            </Link>
          </li>
          <li>
            <Link href={`#`} className='text-white font-semibold text-base'>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
