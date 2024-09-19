import Link from 'next/link';

import { AiOutlineForm } from 'react-icons/ai';
import { MdOutlineChevronRight } from 'react-icons/md';

export default function HomePage() {
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
                    <svg
                      className='h-4 w-4 text-neutral-500 dark:text-neutral-400'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 20 20'
                    >
                      <path
                        stroke='currentColor'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                      ></path>
                    </svg>
                  </div>
                  <label className='hidden'>Search created forms:</label>
                  <input
                    id='search'
                    type='text'
                    className='block w-full rounded-lg border border-neutral-300 bg-white p-2.5 py-2 pl-10 text-sm text-neutral-900 focus:border-blue-500 focus:ring-blue-500 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white dark:placeholder:text-neutral-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
                    placeholder='Search by email or ID'
                    value=''
                  />
                </div>
              </div>
              <div className='hidden text-sm text-neutral-600 dark:text-neutral-400 sm:block'>
                Showing 78 results.
              </div>
            </div>
          </div>
          <div className='mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3'>
            <a
              className='dark:hover:shadow-lg-light h-64 cursor-pointer rounded-lg border border-neutral-100 bg-white hover:border-white hover:shadow-lg dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-neutral-600 md:h-80'
              href='/blocks/marketing/hero/'
            >
              <article className='flex items-center justify-between rounded-t-md border-b border-neutral-200 bg-neutral-50 px-5 py-2.5 dark:border-neutral-700 dark:bg-neutral-700'>
                <div className='text-left'>
                  <h2 className='flex items-center text-base font-medium text-neutral-900 dark:text-white'>
                    Hero Sections{' '}
                  </h2>
                  <p className='text-sm text-neutral-500 dark:text-neutral-400'>
                    18 components
                  </p>
                </div>
                <div className='text-neutral-900 dark:text-white'>
                  <span className='rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-200 dark:text-green-800'>
                    Marketing UI
                  </span>
                </div>
              </article>
              <div className='relative flex h-[calc(100%_-_4rem)] items-center justify-center'>
                <div className='relative hidden h-auto w-full text-center dark:block'>
                  <img
                    src='https://flowbite.s3.amazonaws.com/block-thumbnails/marketing/hero-dark.svg'
                    alt='Hero Sections thumbnail dark mode'
                    className='mx-auto h-44 max-w-full md:h-52'
                  />
                </div>
                <div className='relative h-auto w-full text-center dark:hidden'>
                  <img
                    src='https://flowbite.s3.amazonaws.com/block-thumbnails/marketing/hero.svg'
                    alt='Hero Sections thumbnail dark mode'
                    className='mx-auto h-44 max-w-full md:h-52'
                  />
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
