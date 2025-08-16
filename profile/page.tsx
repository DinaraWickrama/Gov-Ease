'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react'; // Import useEffect and useState
import Image from 'next/image'; // Import Image component

// Placeholder for icons
// const BackArrowIcon = () => <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>;
const ProfileIcon = () => <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="32" height="32"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>;


export default function ProfilePage() {
    const router = useRouter();
    const [username, setUsername] = useState('Placeholder User');
    const [mobileNumber, setMobileNumber] = useState('0123456789');
    const [email, setEmail] = useState('user@example.com');
    const [nic, setNic] = useState('123456789V');

    useEffect(() => {
        const userDetailsString = localStorage.getItem('userDetails');
        if (userDetailsString) {
            const userDetails = JSON.parse(userDetailsString);
            setUsername(userDetails.username || 'Placeholder User');
            setMobileNumber(userDetails.mobileNumber || '0123456789');
            setEmail(userDetails.email || 'user@example.com');
            setNic(userDetails.nic || '123456789V');
        }
    }, []); // Empty dependency array means this runs once on mount

    const handleBack = () => {
        router.back();
    };

  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#A7C7E7' }}>
      {/* Header Section */}
      <header className="flex items-center justify-between p-4 bg-blue-100">
        <button onClick={handleBack}>
            <Image src="/back-icon.jpg" alt="Back" width={24} height={24} />
        </button>
        <h1 className="text-2xl font-bold text-black">My Profile</h1>
        <ProfileIcon />
      </header>

      {/* Main Content Section */}
      <main className="flex-grow flex flex-col p-8 space-y-8">
        <div>
          <p className="text-gray-900 font-bold text-2xl">Username</p>
          <p className="text-white text-lg">{username}</p>
        </div>
        <div>
          <p className="text-gray-900 font-bold text-2xl">Mobile Number</p>
          <p className="text-white text-lg">{mobileNumber}</p>
        </div>
        <div>
          <p className="text-gray-900 font-bold text-2xl">Email</p>
          <p className="text-white text-lg">{email}</p>
        </div>
        <div>
          <p className="text-gray-900 font-bold text-2xl">NIC</p>
          <p className="text-white text-lg">{nic}</p>
        </div>
      </main>
    </div>
  );
}

