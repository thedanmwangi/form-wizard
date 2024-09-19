'use client';

import { Menu, Transition } from '@headlessui/react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment, useEffect, useState } from 'react';
import { BiAdjust, BiMoon, BiSun } from 'react-icons/bi';

export default function Header() {
  const [isMounted, setIsMounted] = useState(false);

  const { theme, setTheme } = useTheme();

  const pathname = usePathname();

  /**
   * useEffect hooks.
   */
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <header>
        <nav className='fixed start-0 top-0 z-20 w-full border-neutral-200 bg-white/55 px-4 py-2.5 backdrop-blur-md dark:bg-neutral-900/55 lg:px-6'>
          <div className='container mx-auto flex flex-wrap items-center justify-between'>
            {/* Item A */}
            <Link
              aria-label='Go to Home page'
              href='/'
              className='flex items-center'
            >
              <Image
                width={30}
                height={30}
                src='/assets/form-wizard-logo.svg'
                alt='Form Wizard logo'
                className='mr-3'
              />
              <span className='hidden self-center whitespace-nowrap text-xl font-medium dark:text-white sm:block'>
                Form Wizard
              </span>
            </Link>

            {/* Item B */}
            <div className='flex items-center lg:order-2'>
              {/* Theme changer Button and Menu */}
              {isMounted && renderThemeDropdown()}

              {pathname === '/create-form' ? (
                <Link
                  href='/#view-forms'
                  className='inline-flex items-center justify-center rounded-lg border-neutral-300 px-3.5 py-2 text-center text-base font-normal text-neutral-500 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:ring-neutral-600'
                >
                  View created forms
                </Link>
              ) : (
                <Link
                  href='/create-form'
                  className='inline-flex items-center justify-center rounded-lg bg-primary-700 px-3.5 py-2 text-center text-base font-normal text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900'
                >
                  Design your form
                </Link>
              )}
            </div>
          </div>
        </nav>
      </header>
    </>
  );

  function renderThemeDropdown() {
    return (
      <Menu as='div' className='relative ml-3'>
        <div>
          <Menu.Button className='mx-1 inline-flex items-center rounded-lg p-2 text-sm text-neutral-500 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:ring-neutral-600'>
            <span className='sr-only'>Change theme</span>
            {theme === 'light' ? (
              <BiSun className='block h-6 w-6 fill-current' />
            ) : theme === 'dark' ? (
              <BiMoon className='block h-6 w-6 fill-current' />
            ) : theme === 'system' ? (
              <BiAdjust className='block h-6 w-6 fill-current' />
            ) : (
              <></>
            )}
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-neutral-600'>
            <Menu.Item>
              <button
                type='button'
                onClick={() => setTheme('light')}
                className='inline-flex w-full items-center rounded-md px-5 py-2.5 text-center text-sm font-medium text-neutral-900 hover:bg-neutral-100 focus:outline-none focus:ring-4 focus:ring-neutral-300 dark:text-white dark:hover:bg-neutral-700 dark:focus:ring-neutral-900'
              >
                <BiSun className='-ml-1 mr-2 h-5 w-5 fill-current' />
                Light
              </button>
            </Menu.Item>

            <Menu.Item>
              <button
                type='button'
                onClick={() => setTheme('dark')}
                className='inline-flex w-full items-center rounded-md px-5 py-2.5 text-center text-sm font-medium text-neutral-900 hover:bg-neutral-100 focus:outline-none focus:ring-4 focus:ring-neutral-300 dark:text-white dark:hover:bg-neutral-700 dark:focus:ring-neutral-900'
              >
                <BiMoon className='-ml-1 mr-2 h-5 w-5 fill-current' />
                Dark
              </button>
            </Menu.Item>

            <Menu.Item>
              <button
                type='button'
                onClick={() => setTheme('system')}
                className='inline-flex w-full items-center rounded-md px-5 py-2.5 text-center text-sm font-medium text-neutral-900 hover:bg-neutral-100 focus:outline-none focus:ring-4 focus:ring-neutral-300 dark:text-white dark:hover:bg-neutral-700 dark:focus:ring-neutral-900'
              >
                <BiAdjust className='-ml-1 mr-2 h-5 w-5 fill-current' />
                System
              </button>
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    );
  }
}
