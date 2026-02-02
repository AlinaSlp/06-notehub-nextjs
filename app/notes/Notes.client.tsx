'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchNotes } from '@/lib/api';
import NoteList from '@/components/NoteList/NoteList';
import Loader from '@/components/Loader/Loader';

export default function NotesClient() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['notes'],
    queryFn: () => fetchNotes(),
  });

  if (isLoading) return <Loader />;
  if (error || !data) return <p>Something went wrong.</p>;

  return <NoteList notes={data} />;
}
