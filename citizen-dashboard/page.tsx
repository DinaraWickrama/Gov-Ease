'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';

export default function CitizenDashboardPage() {
    const router = useRouter();
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleBack = () => {
        router.back();
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setSelectedFile(event.target.files[0]);
        } else {
            setSelectedFile(null);
        }
    };

    // Hardcoded appointments for demonstration
    const upcomingAppointments = [
        { id: 1, service: "Driving License Renewal", date: "2025-08-20", time: "10:00 AM" },
        { id: 2, service: "Passport Application", date: "2025-09-05", time: "2:00 PM" },
    ];

    const pastAppointments = [
        { id: 3, service: "Vehicle Registration", date: "2025-07-15", time: "11:00 AM" },
    ];

    return (
        <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#A7C7E7' }}>
            {/* Header Section */}
            <header className="flex items-center justify-between p-4 bg-blue-100">
                <button onClick={handleBack}>
                    <Image src="/back-icon.jpg" alt="Back" width={24} height={24} />
                </button>
                <h1 className="text-2xl font-bold text-black">Citizen Dashboard</h1>
                {/* Placeholder for a right-aligned icon if needed */}
                <div className="w-6 h-6"></div>
            </header>

            {/* Main Content Section */}
            <main className="flex-grow flex flex-col p-8 space-y-8">
                {/* Upcoming Appointments */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold text-black mb-4">Upcoming Appointments</h2>
                    {upcomingAppointments.length > 0 ? (
                        <div className="space-y-4">
                            {upcomingAppointments.map(appt => (
                                <div key={appt.id} className="border-b pb-2">
                                    <p className="text-lg font-semibold">{appt.service}</p>
                                    <p className="text-gray-600">{appt.date} at {appt.time}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-600">No upcoming appointments.</p>
                    )}
                </div>

                {/* Past Appointments */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold text-black mb-4">Past Appointments</h2>
                    {pastAppointments.length > 0 ? (
                        <div className="space-y-4">
                            {pastAppointments.map(appt => (
                                <div key={appt.id} className="border-b pb-2">
                                    <p className="text-lg font-semibold">{appt.service}</p>
                                    <p className="text-gray-600">{appt.date} at {appt.time}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-600">No past appointments.</p>
                    )}
                </div>

                {/* Document Pre-submission */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold text-black mb-4">Document Pre-submission</h2>
                    <p className="text-gray-700 mb-4">Upload necessary documents for your appointments.</p>
                    <input
                        type="file"
                        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                        onChange={handleFileChange}
                    />
                    {selectedFile && (
                        <p className="mt-2 text-gray-700">Selected file: <span className="font-semibold">{selectedFile.name}</span></p>
                    )}
                    <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">Upload Document</button>
                </div>
            </main>
        </div>
    );
}
