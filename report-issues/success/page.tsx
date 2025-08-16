'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function ReportIssueSuccessPage() {
    const router = useRouter();

    const handleBackToDashboard = () => {
        router.push('/dashboard');
    };

    return (
        <div className="flex flex-col min-h-screen items-center justify-center" style={{ backgroundColor: '#A7C7E7' }}>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <h1 className="text-3xl font-bold text-black mb-4">Issue Submitted Successfully!</h1>
                <p className="text-gray-700 mb-6">Thank you for reporting the issue. We will look into it shortly.</p>
                <Link href="/dashboard">
                    <button
                        className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                    >
                        Back to Dashboard
                    </button>
                </Link>
            </div>
        </div>
    );
}
