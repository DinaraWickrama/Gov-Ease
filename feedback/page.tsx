'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';

export default function FeedbackPage() {
    const router = useRouter();
    const [rating, setRating] = useState(0);
    const [feedback, setFeedback] = useState('');

    const handleBack = () => {
        router.back();
    };

    const handleSubmitFeedback = () => {
        // In a real application, this would send data to a backend
        console.log({ rating, feedback });
        alert('Thank you for your feedback!');
        router.back(); // Go back after submission
    };

    return (
        <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#A7C7E7' }}>
            {/* Header Section */}
            <header className="flex items-center justify-between p-4 bg-blue-100">
                <button onClick={handleBack}>
                    <Image src="/back-icon.jpg" alt="Back" width={24} height={24} />
                </button>
                <h1 className="text-2xl font-bold text-black">Provide Feedback</h1>
                {/* Placeholder for a right-aligned icon if needed */}
                <div className="w-6 h-6"></div>
            </header>

            {/* Main Content Section */}
            <main className="flex-grow flex flex-col p-8 space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
                    <h2 className="text-xl font-bold text-black">Rate Your Experience:</h2>
                    <div className="flex justify-center space-x-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                className={`text-4xl ${rating >= star ? 'text-yellow-500' : 'text-gray-300'}`}
                                onClick={() => setRating(star)}
                            >
                                ★
                            </button>
                        ))}
                    </div>

                    <h2 className="text-xl font-bold text-black mt-8">Your Feedback:</h2>
                    <textarea
                        rows={5}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        placeholder="Share your thoughts on your experience..."
                    ></textarea>

                    <button
                        className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 w-full"
                        onClick={handleSubmitFeedback}
                    >
                        Submit Feedback
                    </button>
                </div>
            </main>
        </div>
    );
}
