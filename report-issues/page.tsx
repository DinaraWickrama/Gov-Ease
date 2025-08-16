'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';

export default function ReportIssuesPage() {
    const router = useRouter();
    const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null);
    const [problemDescription, setProblemDescription] = useState('');
    const [location, setLocation] = useState('');
    const [evidenceFile, setEvidenceFile] = useState<File | null>(null);

    const handleBack = () => {
        router.back();
    };

    const departments = [
        "Roads and Transport",
        "Electricity and Water",
        "Health Services",
        "Education",
        "Waste Management"
    ];

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setEvidenceFile(event.target.files[0]);
        } else {
            setEvidenceFile(null);
        }
    };

    const handleSubmit = () => {
        // In a real application, this would send data to a backend
        console.log({
            department: selectedDepartment,
            problemDescription,
            location,
            evidenceFile: evidenceFile ? evidenceFile.name : 'No file'
        });
        router.push('/report-issues/success'); // Redirect to success page
    };

    return (
        <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#A7C7E7' }}>
            {/* Header Section */}
            <header className="flex items-center justify-between p-4 bg-blue-100">
                <button onClick={handleBack}>
                    <Image src="/back-icon.jpg" alt="Back" width={24} height={24} />
                </button>
                <h1 className="text-2xl font-bold text-black">Report an Issue</h1>
                {/* Placeholder for a right-aligned icon if needed */}
                <div className="w-6 h-6"></div>
            </header>

            {/* Main Content Section */}
            <main className="flex-grow flex flex-col p-8 space-y-8">
                {!selectedDepartment ? (
                    <>
                        <h2 className="text-xl font-bold text-black">Select Department:</h2>
                        <div className="grid grid-cols-1 gap-4">
                            {departments.map((dept) => (
                                <button
                                    key={dept}
                                    className="p-4 rounded-lg shadow-md bg-white text-black font-semibold hover:bg-gray-100"
                                    onClick={() => setSelectedDepartment(dept)}
                                >
                                    {dept}
                                </button>
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
                        <h2 className="text-xl font-bold text-black">Report Issue for {selectedDepartment}</h2>
                        <div>
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Problem Description (in detail)</label>
                            <textarea
                                id="description"
                                rows={4}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                value={problemDescription}
                                onChange={(e) => setProblemDescription(e.target.value)}
                                placeholder="Describe the problem here..."
                            ></textarea>
                        </div>
                        <div>
                            <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
                            <input
                                type="text"
                                id="location"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                placeholder="e.g., Street name, landmark"
                            />
                        </div>
                        <div>
                            <label htmlFor="evidence" className="block text-sm font-medium text-gray-700">Upload Photo/Video Evidence</label>
                            <input
                                type="file"
                                id="evidence"
                                className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                onChange={handleFileChange}
                            />
                            {evidenceFile && (
                                <p className="mt-2 text-gray-700">Selected file: <span className="font-semibold">{evidenceFile.name}</span></p>
                            )}
                        </div>
                        <div className="flex justify-end space-x-4">
                            <button
                                className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600"
                                onClick={() => setSelectedDepartment(null)} // Go back to department selection
                            >
                                Change Department
                            </button>
                            <button
                                className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                                onClick={handleSubmit}
                            >
                                Submit Issue
                            </button>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}
