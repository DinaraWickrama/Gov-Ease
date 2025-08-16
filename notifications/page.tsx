'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function NotificationsPage() {
    const router = useRouter();

    const handleBack = () => {
        router.back();
    };

    // Simulated notifications
    const notifications = [
        { id: 1, type: "Confirmation", message: "Your appointment for Driving License Renewal on 2025-08-20 at 10:00 AM is confirmed. Reference: REF-ABC123XYZ", date: "2025-08-18" },
        { id: 2, type: "Reminder", message: "Reminder: Your Passport Application appointment is tomorrow, 2025-09-05 at 2:00 PM. Please bring your original ID and application form.", date: "2025-09-04" },
        { id: 3, type: "Status Update", message: "Your Vehicle Registration application status has been updated. Please check your Citizen Dashboard for details.", date: "2025-08-10" },
    ];

    return (
        <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#A7C7E7' }}>
            {/* Header Section */}
            <header className="flex items-center justify-between p-4 bg-blue-100">
                <button onClick={handleBack}>
                    <Image src="/back-icon.jpg" alt="Back" width={24} height={24} />
                </button>
                <h1 className="text-2xl font-bold text-black">Notifications</h1>
                {/* Placeholder for a right-aligned icon if needed */}
                <div className="w-6 h-6"></div>
            </header>

            {/* Main Content Section */}
            <main className="flex-grow flex flex-col p-8 space-y-4">
                {notifications.length > 0 ? (
                    notifications.map(notification => (
                        <div key={notification.id} className="bg-white p-4 rounded-lg shadow-md">
                            <p className="text-sm text-gray-500">{notification.date}</p>
                            <h2 className="text-lg font-semibold text-black">{notification.type}</h2>
                            <p className="text-gray-700">{notification.message}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-600">No new notifications.</p>
                )}
            </main>
        </div>
    );
}
