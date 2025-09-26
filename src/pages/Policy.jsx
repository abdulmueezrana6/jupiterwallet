import React from 'react';
import Header from '../components/Header';

export default function Policy() {
  return (
    <div className='p-6 text-white min-h-screen bg-gradient-to-b from-[#071025] to-[#061124] font-inter'>
      <Header title='Jupiter Wallet — Privacy Policy' link='/support' linkLabel='Support' />

      <div className='bg-[#0b1220] p-6 rounded-2xl shadow-xl'>
        <h2 className='text-lg font-semibold mb-3'>Information We Collect</h2>
        <ul className='space-y-3 text-gray-300 text-sm list-disc list-inside'>
          <li><strong>Basic personal information:</strong> name, phone number, email address.</li>
          <li><strong>Device information:</strong> OS, IP address, browser type.</li>
          <li><strong>Transaction data:</strong> recorded on a public ledger (date/time, amount, wallet addresses).</li>
          <li><strong>No sale of user data:</strong> Jupiter Wallet does not sell user data.</li>
          <li><strong>Security measures:</strong> encryption, updates, audits.</li>
        </ul>
      </div>

      <footer className='mt-6 text-center text-gray-400 text-sm'>
        &copy; Jupiter Wallet — All rights reserved.
      </footer>
    </div>
  );
}
