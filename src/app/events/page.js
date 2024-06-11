'use client';
import { getEventList } from '@/api';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Events = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await getEventList('shoppingshow', 'upcoming');
      if (response?.statusCode === 1) {
        setEvents(response?.data);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="flex w-full gap-10 flex-row flex-wrap">
        {events?.map((item, index) => {
          return (
            <div
              key={item?.id}
              class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <a href="#">
                <img
                  class="rounded-t-lg"
                  src={item?.event_image}
                  alt=""
                  width="100%"
                  height="100%"
                />
              </a>
              <div class="p-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item?.event_title}
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {item?.event_description}
                </p>
                <Link
                  href={`events/event/${item?.id}`}
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Events;
