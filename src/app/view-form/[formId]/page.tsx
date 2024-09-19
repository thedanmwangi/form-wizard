import Button from '@/components/atoms/Button';

import prisma from '@/lib/db';
import { FontFaceType, FontSizeType, TextAlignmentType } from '@/types/types';

export default async function ViewFormPage({
  params,
}: {
  params: { formId: string };
}) {
  const form = await prisma.form.findUnique({
    where: {
      id: params.formId,
    },
  });

  return (
    <>
      <section className='bg-neutral-100 pb-4 pt-20 dark:bg-neutral-950'>
        <div className='h-full min-h-screen w-full'>
          <div className='mx-auto flex flex-col items-center justify-center px-6 py-16'>
            <div className='mb-6 font-light text-neutral-500 dark:text-neutral-400 sm:text-lg'>
              <p className='text-sm text-neutral-500 dark:text-neutral-400'>
                Form ID: {form?.id}
              </p>

              <p className='text-sm text-neutral-500 dark:text-neutral-400'>
                Designed on {form?.createdAt.toDateString()} at{' '}
                {form?.createdAt.toTimeString()}
              </p>
            </div>

            <div className='w-full rounded-lg bg-white shadow dark:border dark:border-neutral-700 dark:bg-neutral-900 sm:max-w-xl'>
              <div className='space-y-4 p-6 sm:p-8 md:space-y-6'>
                <h1
                  style={{
                    fontFamily: (form?.titleFontFace as FontFaceType)
                      ?.styleName,
                    fontSize: (form?.titleFontSize as FontSizeType)?.styleName,
                    color: form?.titleTextColor as string,
                    textAlign: (form?.titleTextAlignment as TextAlignmentType)
                      ?.styleName,
                  }}
                  className='text-xl font-bold text-neutral-900 dark:text-white md:text-2xl'
                >
                  {form?.title || 'Invite your friends'}
                </h1>
                <p
                  style={{
                    fontFamily: (form?.subtitleFontFace as FontFaceType)
                      ?.styleName,
                    fontSize: (form?.subtitleFontSize as FontSizeType)
                      ?.styleName,
                    color: form?.subtitleTextColor as string,
                    textAlign: (
                      form?.subtitleTextAlignment as TextAlignmentType
                    )?.styleName,
                  }}
                  className='text-sm font-light text-neutral-500 dark:text-neutral-400'
                >
                  {form?.subtitle || 'Join our referral program!'}
                </p>

                <form className='space-y-4 md:space-y-6'>
                  <div className='mb-6 flex flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0'>
                    <div className='w-full'>
                      <label
                        htmlFor={'firstName'}
                        className='mb-2 block text-sm font-medium text-neutral-900 dark:text-white'
                      >
                        First name{form?.isFirstNameRequired && '*'}
                      </label>
                      <input
                        id={'firstName'}
                        type={'text'}
                        required={form?.isFirstNameRequired as boolean}
                        className='block w-full rounded-lg border border-neutral-300 bg-neutral-50 p-2.5 text-neutral-900 focus:border-primary-600 focus:ring-primary-600 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white dark:placeholder-neutral-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 sm:text-sm'
                      />
                    </div>

                    <div className='w-full'>
                      <label
                        htmlFor={'lastName'}
                        className='mb-2 block text-sm font-medium text-neutral-900 dark:text-white'
                      >
                        Last name{form?.isLastNameRequired && '*'}
                      </label>
                      <input
                        id={'lastName'}
                        type={'text'}
                        required={form?.isLastNameRequired as boolean}
                        className='block w-full rounded-lg border border-neutral-300 bg-neutral-50 p-2.5 text-neutral-900 focus:border-primary-600 focus:ring-primary-600 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white dark:placeholder-neutral-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 sm:text-sm'
                      />
                    </div>
                  </div>

                  <div className='w-full'>
                    <label
                      htmlFor={'email'}
                      className='mb-2 block text-sm font-medium text-neutral-900 dark:text-white'
                    >
                      Email address{form?.isEmailRequired && '*'}
                    </label>
                    <input
                      id={'email'}
                      type={'text'}
                      required={form?.isEmailRequired as boolean}
                      className='block w-full rounded-lg border border-neutral-300 bg-neutral-50 p-2.5 text-neutral-900 focus:border-primary-600 focus:ring-primary-600 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white dark:placeholder-neutral-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 sm:text-sm'
                    />
                  </div>

                  <Button
                    style={{
                      fontFamily: (form?.buttonTextFontFace as FontFaceType)
                        ?.styleName,
                      fontSize: (form?.buttonTextFontSize as FontSizeType)
                        ?.styleName,
                      backgroundColor: form?.buttonColor as string,
                    }}
                    text={form?.buttonText || 'Join and Win'}
                    type={'button'}
                    className={'w-full'}
                    variant={'primary'}
                    size={'normal'}
                    isPill={false}
                    isLoading={false}
                    isDisabled={false}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
