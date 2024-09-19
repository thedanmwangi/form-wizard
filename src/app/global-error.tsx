'use client';

import Button from '@/components/atoms/Button';
import React from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className='flex h-screen w-full flex-col items-center justify-center bg-neutral-100 dark:bg-neutral-950'>
      <div className='mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16'>
        <div className='mx-auto max-w-screen-sm text-center'>
          <h1 className='mb-4 text-7xl font-extrabold tracking-tight text-primary-700 dark:text-primary-600 lg:text-9xl'>
            500
          </h1>

          <p className='mb-4 text-3xl font-bold tracking-tight text-neutral-900 dark:text-white md:text-4xl'>
            Internal error.
          </p>

          <p className='mb-4 text-lg font-light text-neutral-500 dark:text-neutral-400'>
            Something weird happened.
          </p>

          <p className='mb-4 text-start text-xs font-light text-neutral-500 dark:text-neutral-400'>
            {error.message.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index !== error.message.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>

          <Button
            text={'Try again'}
            type={'submit'}
            className={'w-full'}
            variant={'primary'}
            size={'normal'}
            isPill={false}
            isLoading={false}
            isDisabled={false}
            onClick={() => reset()}
          />
        </div>
      </div>
    </section>
  );
}
