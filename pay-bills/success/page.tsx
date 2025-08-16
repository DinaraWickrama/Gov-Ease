'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function PayBillsSuccessPage() {
    const router = useRouter();

    const handleEmailAndTransfer = () => {
        // Simulate email and transfer action
        alert('Email and transfer initiated!');
        router.push('/dashboard'); // Redirect to dashboard
    };

    return (
        <div className="flex flex-col min-h-screen items-center justify-center" style={{ backgroundColor: '#A7C7E7' }}>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <h1 className="text-3xl font-bold text-black mb-4">Payment Successful!</h1>
                <p className="text-gray-700 mb-6">Your payment has been processed successfully.</p>
                <button
                    className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                    onClick={handleEmailAndTransfer}
                >
                    Email and Transfer
                </button>
                <Link href="/dashboard">
                    <button
                        className="mt-4 bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700"
                    >
                        Back to Dashboard
                    </button>
                </Link>
            </div>
        </div>
    );
}
