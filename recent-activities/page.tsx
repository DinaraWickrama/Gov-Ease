'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function RecentActivitiesPage() {
    const router = useRouter();

    const handleBack = () => {
        router.back();
    };

    // Simulated recent activities
    const activities = [
        { id: 1, type: "Appointment Booked", details: "Booked Driving License Renewal for 2025-08-20", date: "2025-08-18" },
        { id: 2, type: "Document Uploaded", details: "Uploaded National ID copy for Passport Application", date: "2025-08-17" },
        { id: 3, type: "Profile Updated", details: "Updated mobile number in profile", date: "2025-08-15" },
        { id: 4, type: "Appointment Confirmed", details: "Your Vehicle Registration application status has been updated.", date: "2025-07-10" },
    ];

    return (
        <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#A7C7E7' }}>
            {/* Header Section */}
            <header className="flex items-center justify-between p-4 bg-blue-100">
                <button onClick={handleBack}>
                    <Image src="/back-icon.jpg" alt="Back" width={24} height={24} />
                </button>
                <h1 className="text-2xl font-bold text-black">Recent Activities</h1>
                {/* Placeholder for a right-aligned icon if needed */}
                <div className="w-6 h-6"></div>
            </header>

            {/* Main Content Section */}
            <main className="flex-grow flex flex-col p-8 space-y-4">
                {activities.length > 0 ? (
                    activities.map(activity => (
                        <div key={activity.id} className="bg-white p-4 rounded-lg shadow-md">
                            <p className="text-sm text-gray-500">{activity.date}</p>
                            <h2 className="text-lg font-semibold text-black">{activity.type}</h2>
                            <p className="text-gray-700">{activity.details}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-600">No recent activities.</p>
                )}
            </main>
        </div>
    );
}
