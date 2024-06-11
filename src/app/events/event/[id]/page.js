'use client';
import { checkRsvpProgress } from '@/api';
import Link from 'next/link';
import React from 'react';

const EventDetails = ({ params }) => {
  return (
    <>
      <div>Here is your event id : {params.id}</div>
      <Link href="/">Go to Home</Link>
    </>
  );
};

export default EventDetails;
