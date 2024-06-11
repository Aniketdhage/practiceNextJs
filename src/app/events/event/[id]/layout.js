import { checkRsvpProgress } from '@/api';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const fetchCurrentEventData = async (id) => {
  const resp = await checkRsvpProgress(id);
  if (resp.data) {
    return resp.data;
  }
};

export const generateMetadata = async ({ params }) => {
  const data = await fetchCurrentEventData(params.id);

  return {
    title: data?.event_title,
    description: data?.event_description,
    openGraph: {
      images: [data?.event_image],
    },
  };
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
