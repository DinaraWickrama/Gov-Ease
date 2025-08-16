'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function AnalyticsPage() {
    const router = useRouter();

    const handleBack = () => {
        router.back();
    };

    // Simulated data for analytics
    const peakHours = "10:00 AM - 12:00 PM";
    const departmentalLoad = {
        "Motor Traffic": "85%",
        "Immigrations & Emigration": "70%",
        "Health Services": "90%",
    };
    const noShowRate = "15%";
    const avgProcessingTime = "25 minutes";

    return (
        <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#A7C7E7' }}>
            {/* Header Section */}
            <header className="flex items-center justify-between p-4 bg-blue-100">
                <button onClick={handleBack}>
                    <Image src="/back-icon.jpg" alt="Back" width={24} height={24} />
                </button>
                <h1 className="text-2xl font-bold text-black">Analytics Dashboard</h1>
                {/* Placeholder for a right-aligned icon if needed */}
                <div className="w-6 h-6"></div>
            </header>

            {/* Main Content Section */}
            <main className="flex-grow flex flex-col p-8 space-y-8">
                {/* Peak Booking Hours */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold text-black mb-4">Peak Booking Hours</h2>
                    <p className="text-gray-700 text-lg">{peakHours}</p>
                </div>

                {/* Departmental Load */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold text-black mb-4">Departmental Load</h2>
                    {Object.entries(departmentalLoad).map(([dept, load]) => (
                        <div key={dept} className="mb-2">
                            <p className="text-gray-700">{dept}: <span className="font-semibold">{load}</span></p>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: load }}></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Appointment No-Show Rates */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold text-black mb-4">Appointment No-Show Rates</h2>
                    <p className="text-gray-700 text-lg">{noShowRate}</p>
                </div>

                {/* Average Processing Times */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold text-black mb-4">Average Processing Times</h2>
                    <p className="text-gray-700 text-lg">{avgProcessingTime}</p>
                </div>
            </main>
        </div>
    );
}
