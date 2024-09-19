export default function Footer() {
  return (
    <footer className='bg-white p-4 dark:bg-neutral-900 sm:p-6'>
      <div className='mx-auto max-w-screen-xl'>
        <div className='sm:flex sm:items-center sm:justify-between'>
          <span className='text-sm text-neutral-500 dark:text-neutral-400 sm:text-center'>
            {new Date().getFullYear()} Dan Mwangi. (for Viral Loops)
          </span>
        </div>
      </div>
    </footer>
  );
}
