'use client';

import Button from '@/components/atoms/Button';
import { useRouter } from 'next/navigation';

export const metadata = {
  title: '404 | Not Found',
};

export default function NotFound() {
  const router = useRouter();

  return (
    <section className='flex h-screen w-full flex-col items-center justify-center bg-neutral-100 dark:bg-neutral-950'>
      <div className='mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16'>
        <div className='mx-auto max-w-screen-sm text-center'>
          <h1 className='mb-4 text-7xl font-extrabold tracking-tight text-primary-700 dark:text-primary-600 lg:text-9xl'>
            404
          </h1>

          <p className='mb-4 text-xl font-bold tracking-tight text-neutral-900 dark:text-white md:text-2xl lg:text-3xl'>
            Not found
          </p>

          <p className='mb-4 text-lg font-light text-neutral-500 dark:text-neutral-400'>
            We couldn&apos;t find the requested resource.
          </p>

          <Button
            text={'Go back'}
            type={'button'}
            className={'w-full'}
            variant={'primary'}
            size={'normal'}
            isPill={false}
            isLoading={false}
            isDisabled={false}
            onClick={() => router.back()}
          />
        </div>
      </div>
    </section>
  );
}
