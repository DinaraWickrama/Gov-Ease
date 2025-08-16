'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';

export default function PayBillsPage() {
    const router = useRouter();
    const [selectedBillType, setSelectedBillType] = useState<string | null>(null);
    const [accountNumber, setAccountNumber] = useState('');
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
    const [cardNumber, setCardNumber] = useState('');
    const [cvv, setCvv] = useState('');
    const [bankSlip, setBankSlip] = useState<File | null>(null);

    const handleBack = () => {
        router.back();
    };

    const billTypes = ["Water", "Telephone", "Electricity", "Tax Payments"];

    const handleBankSlipChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setBankSlip(event.target.files[0]);
        } else {
            setBankSlip(null);
        }
    };

    const handleSubmitPayment = () => {
        // In a real application, this would send data to a backend
        console.log({
            billType: selectedBillType,
            accountNumber,
            name,
            amount,
            paymentMethod,
            cardNumber: paymentMethod === 'Credit/Debit' ? cardNumber : 'N/A',
            cvv: paymentMethod === 'Credit/Debit' ? cvv : 'N/A',
            bankSlip: paymentMethod === 'Bank Transfer' && bankSlip ? bankSlip.name : 'N/A'
        });
        router.push('/pay-bills/success'); // Redirect to success page
    };

    return (
        <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#A7C7E7' }}>
            {/* Header Section */}
            <header className="flex items-center justify-between p-4 bg-blue-100">
                <button onClick={handleBack}>
                    <Image src="/back-icon.jpg" alt="Back" width={24} height={24} />
                </button>
                <h1 className="text-2xl font-bold text-black">Pay Bills</h1>
                {/* Placeholder for a right-aligned icon if needed */}
                <div className="w-6 h-6"></div>
            </header>

            {/* Main Content Section */}
            <main className="flex-grow flex flex-col p-8 space-y-8">
                {!selectedBillType ? (
                    <>
                        <h2 className="text-xl font-bold text-black">Select Bill Type:</h2>
                        <div className="grid grid-cols-1 gap-4">
                            {billTypes.map((type) => (
                                <button
                                    key={type}
                                    className="p-4 rounded-lg shadow-md bg-white text-black font-semibold hover:bg-gray-100"
                                    onClick={() => setSelectedBillType(type)}
                                >
                                    {type}
                                </button>
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
                        <h2 className="text-xl font-bold text-black">Pay for {selectedBillType}</h2>
                        <div>
                            <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-700">Account Number</label>
                            <input
                                type="text"
                                id="accountNumber"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                value={accountNumber}
                                onChange={(e) => setAccountNumber(e.target.value)}
                                placeholder="Enter account number"
                            />
                        </div>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter name"
                            />
                        </div>
                        <div>
                            <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount</label>
                            <input
                                type="number"
                                id="amount"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                placeholder="Enter amount"
                            />
                        </div>

                        <h3 className="text-lg font-bold text-black mt-4">Select Payment Method:</h3>
                        <div className="flex space-x-4">
                            <button
                                className={`py-2 px-4 rounded-md ${paymentMethod === 'Credit/Debit' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
                                onClick={() => setPaymentMethod('Credit/Debit')}
                            >
                                Credit/Debit Card
                            </button>
                            <button
                                className={`py-2 px-4 rounded-md ${paymentMethod === 'Bank Transfer' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
                                onClick={() => setPaymentMethod('Bank Transfer')}
                            >
                                Bank Transfer
                            </button>
                        </div>

                        {paymentMethod === 'Credit/Debit' && (
                            <div className="space-y-4 mt-4">
                                <div>
                                    <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card Number</label>
                                    <input
                                        type="text"
                                        id="cardNumber"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                        value={cardNumber}
                                        onChange={(e) => setCardNumber(e.target.value)}
                                        placeholder="Enter card number"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
                                    <input
                                        type="text"
                                        id="cvv"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                        value={cvv}
                                        onChange={(e) => setCvv(e.target.value)}
                                        placeholder="Enter CVV"
                                    />
                                </div>
                            </div>
                        )}

                        {paymentMethod === 'Bank Transfer' && (
                            <div className="space-y-4 mt-4">
                                <div>
                                    <label htmlFor="bankSlip" className="block text-sm font-medium text-gray-700">Upload Bank Slip Image</label>
                                    <input
                                        type="file"
                                        id="bankSlip"
                                        className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                        onChange={handleBankSlipChange}
                                    />
                                    {bankSlip && (
                                        <p className="mt-2 text-gray-700">Selected file: <span className="font-semibold">{bankSlip.name}</span></p>
                                    )}
                                </div>
                            </div>
                        )}

                        <button
                            className="mt-8 bg-blue-600 text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-blue-700 w-full"
                            onClick={handleSubmitPayment}
                        >
                            Pay Now
                        </button>
                    </div>
                )}
            </main>
        </div>
    );
}
