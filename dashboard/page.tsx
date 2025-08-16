'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

// Placeholder for icons
const HomeIcon = () => <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-7 4h6a1 1 0 001-1v-7a1 1 0 00-1-1h-6a1 1 0 00-1 1v7a1 1 0 001 1z"></path></svg>;
const ProfileIcon = () => <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>;
const NotificationIcon = () => <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>;
const MoreIcon = () => <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01"></path></svg>;


export default function DashboardPage() {
  const router = useRouter();
  const [username, setUsername] = useState("User"); // Default to "User"
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn !== 'true') {
      router.push('/login');
    } else {
      const userDetailsString = localStorage.getItem('userDetails');
      if (userDetailsString) {
        const userDetails = JSON.parse(userDetailsString);
        setUsername(userDetails.username || "User"); // Use stored username or default
      }

      // Set time-based greeting
      const hour = new Date().getHours();
      if (hour < 12) {
        setGreeting("Good Morning");
      } else if (hour < 18) {
        setGreeting("Good Afternoon");
      } else {
        setGreeting("Good Evening");
      }
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userDetails'); // Clear user details on logout
    router.push('/login');
  };

  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#A7C7E7' }}>
      {/* Header Section */}
      <div className="relative">
        <Image
          src="/lotustower.webp"
          alt="Lotus Tower"
          width={500}
          height={200}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="absolute bottom-0 left-0 p-4">
          <h1 className="text-2xl font-bold text-white">{greeting}, {username}</h1>
          <p className="text-sm text-white uppercase">WELCOME Back</p>
        </div>
      </div>

      {/* Main Content Section */}
      <main className="flex-grow flex flex-col items-center justify-center p-8">
        <button className="bg-gray-200 p-4 rounded-lg shadow-md text-black text-lg font-bold w-full max-w-xs mb-8">
          Services
        </button>
        <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
          <Link href="/recent-activities">
            <button className="bg-gray-200 p-4 rounded-lg shadow-md text-black text-lg font-bold w-full h-full flex items-center justify-center">
              Recent Activities
            </button>
          </Link>
          <Link href="/report-issues">
            <button className="bg-gray-200 p-4 rounded-lg shadow-md text-black text-lg font-bold w-full h-full flex items-center justify-center">
              Report Issues
            </button>
          </Link>
          <Link href="/appointments">
            <button className="bg-gray-200 p-4 rounded-lg shadow-md text-black text-lg font-bold w-full h-full flex items-center justify-center">
              Appointments
            </button>
          </Link>
          <Link href="/pay-bills">
            <button className="bg-gray-200 p-4 rounded-lg shadow-md text-black text-lg font-bold w-full h-full flex items-center justify-center">
              Pay Bills
            </button>
          </Link>
          <Link href="/officer-dashboard">
            <button className="bg-gray-200 p-4 rounded-lg shadow-md text-black text-lg font-bold w-full h-full flex items-center justify-center">
              Government Officer
            </button>
          </Link>
          <Link href="/analytics">
            <button className="bg-gray-200 p-4 rounded-lg shadow-md text-black text-lg font-bold w-full h-full flex items-center justify-center">
              Analytics
            </button>
          </Link>
        </div>
      </main>

      {/* Bottom Navigation Bar */}
      <footer className="w-full p-4" style={{ backgroundColor: '#A7C7E7' }}>
        <div className="flex justify-around">
          <Link href="/dashboard">
            <div className="flex flex-col items-center">
              <HomeIcon />
              <span className="text-xs">Home</span>
            </div>
          </Link>
          <Link href="/profile">
            <div className="flex flex-col items-center">
              <ProfileIcon />
              <span className="text-xs">Profile</span>
            </div>
          </Link>
          <Link href="/notifications">
            <div className="flex flex-col items-center">
              <NotificationIcon />
              <span className="text-xs">Notifications</span>
            </div>
          </Link>
          <button onClick={handleLogout} className="flex flex-col items-center">
             <MoreIcon />
             <span className="text-xs">Logout</span>
          </button>
        </div>
      </footer>
    </div>
  );
}
