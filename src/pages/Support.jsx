import React from 'react';
import Header from '../components/Header';

export default function Support() {
  return (
    <div className='p-6 text-white min-h-screen bg-gradient-to-b from-[#071025] to-[#061124] font-inter'>
      <Header title='Support Center' link='/policy' linkLabel='Back to Policy' />

      <div className='bg-[#0b1220] p-6 rounded-2xl shadow-xl max-w-lg mx-auto'>
        <h2 className='text-lg font-semibold mb-3'>Need Help?</h2>
        <p className='text-gray-300 text-sm mb-4'>
          Please describe your issue below. Our support team will contact you at:
        </p>
        <p className='text-cyan-400 font-semibold mb-6'>abdulmueezrana6@gmail.com</p>

        <form className='space-y-4'>
          <textarea
            className='w-full p-3 rounded-lg bg-[#0f1724] border border-gray-700 text-white'
            rows='5'
            placeholder='Describe your issue...'
          ></textarea>
          <button
            type='submit'
            className='px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-400 text-white font-semibold w-full'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
