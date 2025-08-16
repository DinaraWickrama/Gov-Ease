'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AppointmentsPage() {
    const router = useRouter();

    const handleBack = () => {
        router.push('/dashboard');
    };

    // Placeholder for departments and services
    const departments = [
        {
            name: "Department of Motor Traffic",
            services: ["Driving License Renewal", "Vehicle Registration", "Vehicle Transfer"]
        },
        {
            name: "Department of Immigrations & Emigration",
            services: ["Passport Application", "Visa Extension", "Dual Citizenship"]
        },
        {
            name: "Ministry of Health",
            services: ["Medical Consultation", "Vaccination", "Health Check-up"]
        },
        {
            name: "Ministry of Education",
            services: ["School Enrollment", "Scholarship Application", "Exam Results Inquiry"]
        },
        {
            name: "Ministry of Finance",
            services: ["Tax Filing Assistance", "Business Registration", "Grants and Loans Inquiry"]
        }
    ];

    const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null);
    const [selectedService, setSelectedService] = useState<string | null>(null);
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
    const [bookingConfirmed, setBookingConfirmed] = useState(false);
    const [referenceNumber, setReferenceNumber] = useState<string | null>(null);

    // Hardcoded time slots for demonstration
    const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM"];

    const handleConfirmBooking = () => {
        // Generate a simple unique reference number
        const refNum = 'REF-' + Math.random().toString(36).substr(2, 9).toUpperCase();
        setReferenceNumber(refNum);
        setBookingConfirmed(true);
    };

    // Simple calendar display for the current month
    const renderCalendar = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const firstDayOfMonth = new Date(year, month, 1).getDay(); // 0 for Sunday, 1 for Monday, etc.

        const days: React.ReactNode[] = [];
        for (let i = 0; i < firstDayOfMonth; i++) {
            days.push(<div key={`empty-${i}`} className="p-2"></div>); // Empty cells for days before 1st
        }
        for (let i = 1; i <= daysInMonth; i++) {
            const date = `${year}-${month + 1}-${i}`;
            const isSelected = selectedDate === date;
            days.push(
                <button
                    key={date}
                    className={`p-2 rounded-md ${isSelected ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
                    onClick={() => setSelectedDate(date)}
                >
                    {i}
                </button>
            );
        }

        return (
            <div className="grid grid-cols-7 gap-2 text-center">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <div key={day} className="font-bold text-black">{day}</div>
                ))}
                {days}
            </div>
        );
    };

    return (
        <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#A7C7E7' }}>
            {/* Header Section */}
            <header className="flex items-center justify-between p-4">
                <button onClick={handleBack}>
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                    </svg>
                </button>
                <h1 className="text-3xl font-bold text-black">Appointments</h1>
                <div className="w-6 h-6"></div>
            </header>

            {/* Main Content Section */}
            <main className="flex-grow flex flex-col p-8 space-y-8">
                {!bookingConfirmed ? (
                    <>
                        <h2 className="text-3xl font-bold text-black mb-4">Select a Department:</h2>
                        <div className="grid grid-cols-1 gap-4">
                            {departments.map((dept) => (
                                <button
                                    key={dept.name}
                                    className={`p-4 rounded-lg shadow-md text-black font-semibold ${selectedDepartment === dept.name ? 'bg-blue-300' : 'bg-white'}`}
                                    onClick={() => {
                                        setSelectedDepartment(dept.name);
                                        setSelectedService(null);
                                        setSelectedDate(null);
                                        setSelectedTimeSlot(null);
                                    }}
                                >
                                    {dept.name}
                                </button>
                            ))}
                        </div>

                        {selectedDepartment && (
                            <>
                                <h2 className="text-3xl font-bold text-black mb-4 mt-8">Select a Service:</h2>
                                <div className="grid grid-cols-1 gap-4">
                                    {departments.find(dept => dept.name === selectedDepartment)?.services.map((service) => (
                                        <button
                                            key={service}
                                            className={`p-4 rounded-lg shadow-md text-black font-semibold ${selectedService === service ? 'bg-blue-300' : 'bg-white'}`}
                                            onClick={() => {
                                                setSelectedService(service);
                                                setSelectedDate(null);
                                                setSelectedTimeSlot(null);
                                            }}
                                        >
                                            {service}
                                        </button>
                                    ))}
                                </div>
                            </>
                        )}

                        {selectedService && (
                            <>
                                <h2 className="text-3xl font-bold text-black mb-4 mt-8">Select a Date:</h2>
                                <div className="p-4 bg-white rounded-lg shadow-md">
                                    {renderCalendar()}
                                </div>

                                {selectedDate && (
                                    <>
                                        <h2 className="text-3xl font-bold text-black mb-4 mt-8">Select a Time Slot:</h2>
                                        <div className="grid grid-cols-3 gap-4">
                                            {timeSlots.map(slot => (
                                                <button
                                                    key={slot}
                                                    className={`p-2 rounded-md ${selectedTimeSlot === slot ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
                                                    onClick={() => setSelectedTimeSlot(slot)}
                                                >
                                                    {slot}
                                                </button>
                                            ))}
                                        </div>
                                    </>
                                )}

                                {selectedDate && selectedTimeSlot && (
                                    <button
                                        className="mt-8 bg-blue-600 text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-blue-700"
                                        onClick={handleConfirmBooking}
                                    >
                                        Confirm Booking
                                    </button>
                                )}
                            </>
                        )}
                    </>
                ) : (
                    <div className="mt-8 p-6 bg-white rounded-lg shadow-md text-center">
                        <h2 className="text-3xl font-bold text-black mb-6">Booking Confirmed!</h2>
                        <div className="space-y-4">
                            <p className="text-xl text-black">Department: <span className="text-gray-600">{selectedDepartment}</span></p>
                            <p className="text-xl text-black">Service: <span className="text-gray-600">{selectedService}</span></p>
                            <p className="text-xl text-black">Date: <span className="text-gray-600">{selectedDate}</span></p>
                            <p className="text-xl text-black">Time: <span className="text-gray-600">{selectedTimeSlot}</span></p>
                            <p className="text-xl font-bold text-black mt-6">Reference Number: <span className="text-blue-600">{referenceNumber}</span></p>
                        </div>
                        {/* QR Code Placeholder */}
                        <div className="mt-6 p-4 bg-gray-100 mx-auto rounded-lg flex items-center justify-center" style={{ width: '150px', height: '150px' }}>
                            <p className="text-gray-600">QR Code</p>
                        </div>
                        <div className="flex flex-col space-y-4 mt-8">
                            <button
                                className="bg-blue-600 text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-blue-700 mx-auto"
                                onClick={() => {
                                    setBookingConfirmed(false);
                                    setSelectedDepartment(null);
                                    setSelectedService(null);
                                    setSelectedDate(null);
                                    setSelectedTimeSlot(null);
                                    setReferenceNumber(null);
                                }}
                            >
                                Book Another Appointment
                            </button>
                            <Link href="/citizen-dashboard" className="mx-auto">
                                <button
                                    className="bg-green-600 text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-green-700"
                                >
                                    Back to Citizen Dashboard
                                </button>
                            </Link>
                            <Link href="/dashboard" className="mx-auto">
                                <button className="bg-gray-600 text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-gray-700">
                                    Back to Dashboard
                                </button>
                            </Link>
                            <Link href="/feedback" className="mx-auto">
                                <button className="bg-yellow-600 text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-yellow-700">
                                    Provide Feedback
                                </button>
                            </Link>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}
