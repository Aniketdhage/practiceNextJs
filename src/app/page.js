import Link from 'next/link';
import React from 'react';

const Home = () => {
  return (
    <>
      <div>Home</div>
      <Link href="/events">Go to Events</Link>
    </>
  );
};

export default Home;
