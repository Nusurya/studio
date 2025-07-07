import { redirect } from 'next/navigation';

export default function PodcastDetailsPage({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  redirect('/dashboard');
}
