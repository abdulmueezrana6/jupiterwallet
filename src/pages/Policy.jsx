import React from 'react';
import Header from '../components/Header';

export default function Policy() {
  return (
 <div className="p-6 text-white min-h-screen bg-gradient-to-b from-[#071025] to-[#061124] font-inter">
      <Header title="Jupiter Wallet — Privacy Policy" link="/support" linkLabel="Support" />

      <div className="bg-[#0b1220] p-6 rounded-2xl shadow-xl space-y-4">
        <h2 className="text-lg font-semibold mb-3">Privacy Policy</h2>
        <ol className="space-y-3 text-gray-300 text-sm list-decimal list-inside">
          <li>
            Jupiter Wallet collects basic user information such as name, phone number, and email address for the purpose of creating and managing a Jupiter Wallet account.
          </li>
          <li>
            Jupiter Wallet also collects and stores device information such as the device's operating system, IP address, and browser type to help diagnose problems with the app and improve the user experience.
          </li>
          <li>
            In addition, Jupiter Wallet collects information about user transactions within the app and stores that information in a public ledger. This information includes the date and time of the transaction, the amount transferred, and the wallet addresses of the sender and receiver.
          </li>
          <li>
            Jupiter Wallet takes user privacy seriously and states that it does not sell user data to third parties. The policy also outlines the measures that Jupiter Wallet takes to secure user data, including encryption and regular security updates.
          </li>
          <li>
            It's important to read and understand the privacy policy before using any app or service, and to be aware of the data that is being collected and how it is being used. Jupiter Wallet collects basic user information such as name, phone number, and email address for the purpose of creating and managing a Jupiter Wallet account.
          </li>
          <li>
            Jupiter Wallet also collects and stores device information such as the device's operating system, IP address, and browser type to help diagnose problems with the app and improve the user experience.
          </li>
          <li>
            In addition, Jupiter Wallet collects information about user transactions within the app and stores that information in a public ledger. This information includes the date and time of the transaction, the amount transferred, and the wallet addresses of the sender and receiver.
          </li>
          <li>
            Jupiter Wallet takes user privacy seriously and states that it does not sell user data to third parties. The policy also outlines the measures that Jupiter Wallet takes to secure user data, including encryption and regular security updates.
          </li>
          <li>
            It's important to read and understand the privacy policy before using any app or service, and to be aware of the data that is being collected and how it is being used.
          </li>
        </ol>
      </div>

      <footer className="mt-6 text-center text-gray-400 text-sm">
        &copy; Jupiter Wallet — All rights reserved.
      </footer>
    </div>
  );
}
