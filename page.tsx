'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function WelcomePage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/login');
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer); // Cleanup the timer
  }, [router]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white">
      <div className="flex-grow flex items-center justify-center">
        <Image src="/Gove ease.png" alt="Gove ease logo" width={192} height={192} />
      </div>
      <div className="pb-10">
        <p className="text-black text-lg">All Government services in one hand</p>
      </div>
    </main>
  );
}
