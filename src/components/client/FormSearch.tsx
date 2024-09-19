'use client';

import { getFormsMatchingTitle } from '@/actions/form-actions';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineForm } from 'react-icons/ai';
import { MdOutlineSearch } from 'react-icons/md';

export default function FormSearchComponent() {
  const [searchParam, setSearchParam] = useState<string>('');

  const {
    data: formsMatch,
    isPending: isPendingFormsMatch,
    isFetching: isFetchingFormsMatch,
    isError: isErrorFormsMatch,
    error: errorFormsMatch,
  } = useQuery({
    queryKey: ['forms-match', searchParam],
    queryFn: () => getFormsMatchingTitle(searchParam),
  });

  return (
    <section
      id='view-forms'
      className='bg-neutral-100 py-4 dark:bg-neutral-950 lg:pb-24'
    >
      <div className='mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-12 lg:py-16'>
        <div className='mb-6 w-full'>
          <div className='flex flex-col items-center justify-between rounded-lg border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-700 dark:bg-neutral-900 sm:flex-row'>
            <div className='w-full shrink-0 sm:flex sm:w-auto'>
              <div className='relative mb-4 w-full shrink-0 sm:mb-0 sm:mr-4 sm:w-64 lg:w-96'>
                <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
                  <MdOutlineSearch className='h-4 w-4 text-neutral-500 dark:text-neutral-400' />
                </div>
                <label className='hidden'>Search created forms:</label>
                <input
                  id='search'
                  type='text'
                  className='block w-full rounded-lg border border-neutral-300 bg-white p-2.5 py-2 pl-10 text-sm text-neutral-900 focus:border-blue-500 focus:ring-blue-500 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white dark:placeholder:text-neutral-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
                  placeholder='Search by Title or Unique ID'
                  value={searchParam}
                  onChange={(event) => setSearchParam(event.target.value)}
                />
              </div>
            </div>
            <div className='hidden text-sm text-neutral-600 dark:text-neutral-400 sm:block'>
              Showing {formsMatch?.length} results.
            </div>
          </div>
        </div>

        <div className='mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3'>
          {isPendingFormsMatch ? (
            <section className='col-span-full flex h-48 flex-col items-center justify-center'>
              <div className='relative inline-flex'>
                <div className='h-8 w-8 rounded-full bg-primary-700 dark:bg-primary-600'></div>
                <div className='absolute left-0 top-0 h-8 w-8 animate-ping rounded-full bg-primary-700 dark:bg-primary-600'></div>
                <div className='absolute left-0 top-0 h-8 w-8 animate-pulse rounded-full bg-primary-700 dark:bg-primary-600'></div>
              </div>
            </section>
          ) : formsMatch?.length === 0 ? (
            <div className='col-span-full h-48 text-center text-neutral-500 dark:text-neutral-400'>
              No forms available
            </div>
          ) : (
            formsMatch?.map((form) => (
              <Link
                key={form.id}
                className='dark:hover:shadow-lg-light h-64 cursor-pointer rounded-lg border border-neutral-100 bg-white hover:border-white hover:shadow-lg dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-neutral-600'
                href={`/view-form/${form.id}`}
              >
                <article className='flex items-center justify-between rounded-t-md border-b border-neutral-200 bg-neutral-50 px-5 py-2.5 dark:border-neutral-700 dark:bg-neutral-700'>
                  <div className='text-left'>
                    <h2 className='text-base font-medium text-neutral-900 dark:text-white'>
                      {form.title || 'Title here'}
                    </h2>
                    <p className='text-sm text-neutral-500 dark:text-neutral-400'>
                      {form.id || 'ID here'}
                    </p>
                  </div>
                  <div className='text-neutral-900 dark:text-white'>
                    <span
                      style={{
                        backgroundColor: form.buttonColor as string,
                      }}
                      className='rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-200 dark:text-green-800'
                    >
                      Button
                    </span>
                  </div>
                </article>
                <div className='relative flex h-[calc(100%_-_4rem)] items-center justify-center'>
                  <AiOutlineForm className='h-8 w-8' />
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
