import Link from 'next/link';

import { AiOutlineForm } from 'react-icons/ai';
import { MdOutlineChevronRight } from 'react-icons/md';

import { getFormsMatchingTitle } from '@/actions/form-actions';
import FormSearchComponent from '@/components/client/FormSearch';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // With SSR, we usually want to set some default staleTime
      // above 0 to avoid refetching immediately on the client
      staleTime: 60 * 10 * 1000, // 10 minutes
      refetchInterval: 60 * 10 * 1000, // 10 minutes
    },
  },
});

export default async function HomePage() {
  await queryClient.prefetchQuery({
    queryKey: ['forms-match', ''],
    queryFn: () => getFormsMatchingTitle(''),
  });

  return (
    <>
      <section
        id='home'
        className='bg-neutral-100 pb-4 pt-40 dark:bg-neutral-950'
      >
        <div className='mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-12 lg:py-16'>
          <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-neutral-900 dark:text-white md:text-5xl lg:text-6xl'>
            Build and customize your Forms
          </h1>
          <p className='mb-8 text-lg font-normal text-neutral-500 dark:text-neutral-400 sm:px-16 lg:text-xl xl:px-48'>
            This project helps you build and customize your forms to your liking
          </p>
          <div className='mb-8 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0 lg:mb-16'>
            <Link
              href='#view-forms'
              className='inline-flex items-center justify-center rounded-lg border border-neutral-300 px-5 py-3 text-center text-base font-medium text-neutral-900 hover:bg-neutral-100 focus:ring-4 focus:ring-neutral-100 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:ring-neutral-900'
            >
              <AiOutlineForm className='-ml-1 mr-2 h-5 w-5' />
              View created forms
            </Link>
            <Link
              href='/create-form'
              className='inline-flex items-center justify-center rounded-lg bg-primary-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900'
            >
              Design your own
              <MdOutlineChevronRight className='-mr-1 ml-2 h-6 w-6' />
            </Link>
          </div>
        </div>
      </section>

      <HydrationBoundary state={dehydrate(queryClient)}>
        <FormSearchComponent />
      </HydrationBoundary>
    </>
  );
}
