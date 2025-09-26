import React from 'react';
import { Link } from 'react-router-dom';

export default function Header({ title, link, linkLabel }) {
  return (
    <header className='flex justify-between items-center mb-6'>
      <h1 className='text-xl font-bold'>{title}</h1>
      {link && (
        <Link
          to={link}
          className='px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-400 text-white font-semibold'
        >
          {linkLabel}
        </Link>
      )}
    </header>
  );
}
