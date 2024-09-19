export default function Loading() {
  return (
    <section className='flex h-screen w-full flex-col items-center justify-center bg-slate-100 dark:bg-neutral-900'>
      <div className='relative inline-flex'>
        <div className='h-8 w-8 rounded-full bg-primary-700 dark:bg-primary-600'></div>
        <div className='absolute left-0 top-0 h-8 w-8 animate-ping rounded-full bg-primary-700 dark:bg-primary-600'></div>
        <div className='absolute left-0 top-0 h-8 w-8 animate-pulse rounded-full bg-primary-700 dark:bg-primary-600'></div>
      </div>
    </section>
  );
}
