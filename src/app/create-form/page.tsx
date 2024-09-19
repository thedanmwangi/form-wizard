'use client';

import Button from '@/components/atoms/Button';
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Switch,
  Transition,
} from '@headlessui/react';
import { Fragment, ReactNode, useState } from 'react';
import { HiMiniChevronUpDown } from 'react-icons/hi2';
import {
  MdCheck,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from 'react-icons/md';

import fonts from '@/data/fonts.json';
import textSizes from '@/data/text_sizes.json';
import clsx from 'clsx';
import { BiAlignLeft, BiAlignMiddle, BiAlignRight } from 'react-icons/bi';
import { toast } from 'sonner';

interface FontType {
  displayName: string;
  tailwindName: string;
  styleName: string;
}

interface TextSizeType {
  displayName: string;
  tailwindName: string;
  styleName: string;
}

interface TextAlignmentType {
  displayIcon: ReactNode;
  displayName: string;
  tailwindName: string;
  styleName: 'left' | 'center' | 'right';
}

export default function CreateFormPage() {
  // TITLE Preferences Hooks
  const [title, setTitle] = useState<string>('');

  const [selectedTitleFont, setSelectedTitleFont] = useState<FontType | null>(
    null
  );
  const [queryTitleFont, setQueryTitleFont] = useState('');

  const [selectedTitleTextSize, setSelectedTitleTextSize] =
    useState<TextSizeType | null>(null);
  const [queryTitleTextSize, setQueryTitleTextSize] = useState('');

  const [titleColor, setTitleColor] = useState<string>('');

  const [titleTextAlignment, setTitleTextAlignment] =
    useState<TextAlignmentType | null>({
      displayIcon: <BiAlignLeft className='block h-6 w-6 fill-current' />,
      displayName: 'Align left',
      tailwindName: 'text-left',
      styleName: 'left',
    });

  // SUBTITLE Preferences Hooks
  const [subtitle, setSubtitle] = useState<string>('');

  const [selectedSubtitleFont, setSelectedSubtitleFont] =
    useState<FontType | null>(null);
  const [querySubtitleFont, setQuerySubtitleFont] = useState('');

  const [selectedSubtitleTextSize, setSelectedSubtitleTextSize] =
    useState<TextSizeType | null>(null);
  const [querySubtitleTextSize, setQuerySubtitleTextSize] = useState('');

  const [subtitleColor, setSubtitleColor] = useState<string>('');

  const [subtitleTextAlignment, setSubtitleTextAlignment] =
    useState<TextAlignmentType | null>({
      displayIcon: <BiAlignLeft className='block h-6 w-6 fill-current' />,
      displayName: 'Align left',
      tailwindName: 'text-left',
      styleName: 'left',
    });

  // Inputs Preferences Hooks
  const [isFirstNameRequired, setIsFirstNameRequired] =
    useState<boolean>(false);

  const [isLastNameRequired, setIsLastNameRequired] = useState<boolean>(false);

  const [isEmailRequired, setIsEmailRequired] = useState<boolean>(true);

  // BUTTON Preferences Hooks
  const [buttonText, setButtonText] = useState<string>('');

  const [selectedButtonFont, setSelectedButtonFont] = useState<FontType | null>(
    null
  );
  const [queryButtonFont, setQueryButtonFont] = useState('');

  const [selectedButtonTextSize, setSelectedButtonTextSize] =
    useState<TextSizeType | null>(null);
  const [queryButtonTextSize, setQueryButtonTextSize] = useState('');

  const [buttonColor, setButtonColor] = useState<string>('');

  // Checks if any button, toggle is changed
  const [isAnyToggleChanged, setIsAnyToggleChanged] = useState<boolean>(false);

  // Filter Title font, text based on the query
  const filteredTitleFonts =
    queryTitleFont === ''
      ? fonts
      : fonts.filter((font) => font.displayName.includes(queryTitleFont));

  const filteredTitleTextSizes =
    queryTitleTextSize === ''
      ? textSizes
      : textSizes.filter((textSize) =>
          textSize.displayName.includes(queryTitleTextSize)
        );

  // Filter Subtitle font, text based on the query
  const filteredSubtitleFonts =
    querySubtitleFont === ''
      ? fonts
      : fonts.filter((font) => font.displayName.includes(querySubtitleFont));

  const filteredSubtitleTextSizes =
    querySubtitleTextSize === ''
      ? textSizes
      : textSizes.filter((textSize) =>
          textSize.displayName.includes(querySubtitleTextSize)
        );

  // Filter Button font, text based on the query
  const filteredButtonFonts =
    queryButtonFont === ''
      ? fonts
      : fonts.filter((font) => font.displayName.includes(queryButtonFont));

  const filteredButtonTextSizes =
    queryButtonTextSize === ''
      ? textSizes
      : textSizes.filter((textSize) =>
          textSize.displayName.includes(queryButtonTextSize)
        );

  // Check if user has added a filter
  const hasFilterValue =
    title !== '' ||
    selectedTitleFont !== null ||
    selectedTitleTextSize !== null ||
    titleColor !== '' ||
    subtitle !== '' ||
    selectedSubtitleFont !== null ||
    selectedSubtitleTextSize !== null ||
    subtitleColor !== '' ||
    isFirstNameRequired ||
    isLastNameRequired ||
    buttonText !== '' ||
    selectedButtonFont !== null ||
    selectedButtonTextSize !== null ||
    buttonColor !== '' ||
    isAnyToggleChanged;

  const clearAllSelections = () => {
    setTitle('');
    setSelectedTitleFont(null);
    setSelectedTitleTextSize(null);
    setTitleColor('');
    setTitleTextAlignment({
      displayIcon: <BiAlignLeft className='block h-6 w-6 fill-current' />,
      displayName: 'Align left',
      tailwindName: 'text-left',
      styleName: 'left',
    });
    setSubtitle('');
    setSelectedSubtitleFont(null);
    setSelectedSubtitleTextSize(null);
    setSubtitleColor('');
    setSubtitleTextAlignment({
      displayIcon: <BiAlignLeft className='block h-6 w-6 fill-current' />,
      displayName: 'Align left',
      tailwindName: 'text-left',
      styleName: 'left',
    });
    setIsFirstNameRequired(false);
    setIsLastNameRequired(false);
    setIsEmailRequired(true);
    setButtonText('');
    setSelectedButtonFont(null);
    setSelectedButtonTextSize(null);
    setButtonColor('');
    setIsAnyToggleChanged(false);
  };

  return (
    <>
      <section className='bg-neutral-100 pb-4 pt-20 dark:bg-neutral-950'>
        <div className='mx-auto min-h-full max-w-screen-xl px-4 py-8'>
          <div className='font-light text-neutral-500 dark:text-neutral-400 sm:text-lg'>
            <h2 className='mb-4 text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white'>
              Design your Form
            </h2>
            <p className='text-neutral-500 dark:text-neutral-400 sm:text-xl'>
              From the Typography, to the color of your components, get to
              customize your form as per your liking.
            </p>
          </div>

          <hr className='my-7 border border-neutral-200 dark:border-neutral-700' />

          <div className='grid gap-8 lg:grid-cols-12 lg:py-16'>
            <div className='w-full lg:col-span-5'>
              {/* Left Hand side */}

              {/* Add a button to submit or clear when data is input */}
              {hasFilterValue && (
                <div className='relative w-full'>
                  <div className='mx-4 mt-4 flex items-center justify-between gap-2'>
                    <Button
                      text={'Clear all'}
                      type={'button'}
                      className={'w-full'}
                      variant={'secondary'}
                      size={'normal'}
                      isPill={false}
                      isLoading={false}
                      isDisabled={false}
                      onClick={clearAllSelections}
                    />

                    <Button
                      text={'Save'}
                      type={'button'}
                      className={'w-full'}
                      variant={'primary'}
                      size={'normal'}
                      isPill={false}
                      isLoading={false}
                      isDisabled={false}
                      // onClick={openDrawer}
                    />
                  </div>
                </div>
              )}

              <Disclosure
                as='div'
                className='my-4 w-full rounded-lg border dark:border-neutral-700'
                defaultOpen={true}
              >
                {({ open }) => (
                  <>
                    <div className='rounded-t-lg bg-neutral-50 dark:bg-neutral-800 dark:text-neutral-400'>
                      <DisclosureButton className='flex w-full items-center justify-between'>
                        <span className='text-md inline-block p-4 font-medium text-neutral-900 dark:border-neutral-700 dark:border-transparent dark:text-white'>
                          Title
                        </span>
                        <div className='me-2 items-center justify-center rounded-md p-2 text-neutral-400 hover:bg-neutral-200 hover:text-neutral-900 dark:hover:bg-neutral-600 dark:hover:text-white'>
                          {open ? (
                            <MdKeyboardArrowDown className='h-6 w-6 shrink-0 rotate-180' />
                          ) : (
                            <MdKeyboardArrowUp className='h-6 w-6 shrink-0 rotate-180' />
                          )}
                        </div>
                      </DisclosureButton>
                    </div>

                    <Transition
                      enter='transition duration-100 ease-out'
                      enterFrom='transform translate-y-[-10%] opacity-0'
                      enterTo='transform translate-y-0 opacity-100'
                      leave='transition duration-75 ease-out'
                      leaveFrom='transform translate-y-0 opacity-100'
                      leaveTo='transform translate-y-[-10%] opacity-0'
                    >
                      <DisclosurePanel className='border-t border-neutral-200 p-4 dark:border-neutral-700'>
                        <div className='space-y-4 md:space-y-6'>
                          <div className='w-full'>
                            <input
                              id={'title'}
                              type={'text'}
                              placeholder={'Enter your title'}
                              className='block w-full rounded-lg border border-neutral-300 bg-neutral-50 p-2.5 text-neutral-900 focus:border-primary-600 focus:ring-primary-600 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white dark:placeholder-neutral-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 sm:text-sm'
                              value={title}
                              onChange={(event) => setTitle(event.target.value)}
                            />
                          </div>
                          <div className='flex flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0'>
                            <div className='w-full'>
                              <Combobox
                                value={selectedTitleFont}
                                onChange={setSelectedTitleFont}
                              >
                                <div className='relative'>
                                  <ComboboxInput
                                    aria-label='Font'
                                    className='block w-full rounded-lg border border-neutral-300 bg-neutral-50 p-2.5 text-neutral-900 focus:border-primary-500 focus:ring-primary-500 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white dark:placeholder-neutral-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 sm:text-sm'
                                    displayValue={(font: FontType) =>
                                      font?.displayName
                                    }
                                    onChange={(event) =>
                                      setQueryTitleFont(event.target.value)
                                    }
                                    placeholder='Font face'
                                  />
                                  <ComboboxButton className='absolute inset-y-0 right-0 flex items-center pr-2'>
                                    <HiMiniChevronUpDown
                                      className='h-5 w-5 text-neutral-400'
                                      aria-hidden='true'
                                    />
                                  </ComboboxButton>
                                </div>
                                <Transition
                                  as={Fragment}
                                  leave='transition ease-in duration-100'
                                  leaveFrom='opacity-100'
                                  leaveTo='opacity-0'
                                  afterLeave={() => setQueryTitleFont('')}
                                >
                                  <ComboboxOptions className='mt-2 max-h-48 w-full overflow-y-auto rounded-lg border bg-white p-1 dark:border-neutral-700 dark:bg-neutral-800'>
                                    {filteredTitleFonts.length === 0 &&
                                    queryTitleFont !== '' ? (
                                      <div className='relative cursor-default select-none px-4 py-2 text-xs text-neutral-700 dark:text-white'>
                                        Not found.
                                      </div>
                                    ) : (
                                      filteredTitleFonts.map((font) => (
                                        <ComboboxOption
                                          key={font.tailwindName}
                                          className={({ active }) =>
                                            `relative text-xs hover:bg-neutral-100 rounded dark:hover:bg-neutral-600 dark:hover:text-white cursor-default select-none py-2 pl-8 pr-3 ${
                                              active
                                                ? 'bg-neutral-100 dark:bg-neutral-600'
                                                : ''
                                            }`
                                          }
                                          value={font}
                                        >
                                          {({ selected }) => (
                                            <>
                                              <span
                                                className={`block truncate ${
                                                  selected
                                                    ? 'font-medium'
                                                    : 'font-normal'
                                                }`}
                                              >
                                                {font.displayName}
                                              </span>
                                              {selected ? (
                                                <span
                                                  className={`absolute inset-y-0 left-0 flex items-center pl-2 text-neutral-900 dark:text-white`}
                                                >
                                                  <MdCheck
                                                    className='h-4 w-4'
                                                    aria-hidden='true'
                                                  />
                                                </span>
                                              ) : null}
                                            </>
                                          )}
                                        </ComboboxOption>
                                      ))
                                    )}
                                  </ComboboxOptions>
                                </Transition>
                              </Combobox>
                            </div>

                            <div className='w-full'>
                              <Combobox
                                value={selectedTitleTextSize}
                                onChange={setSelectedTitleTextSize}
                              >
                                <div className='relative'>
                                  <ComboboxInput
                                    aria-label='Text Size'
                                    className='block w-full rounded-lg border border-neutral-300 bg-neutral-50 p-2.5 text-neutral-900 focus:border-primary-500 focus:ring-primary-500 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white dark:placeholder-neutral-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 sm:text-sm'
                                    displayValue={(textSize: TextSizeType) =>
                                      textSize?.displayName
                                    }
                                    onChange={(event) =>
                                      setQueryTitleTextSize(event.target.value)
                                    }
                                    placeholder='Font size'
                                  />
                                  <ComboboxButton className='absolute inset-y-0 right-0 flex items-center pr-2'>
                                    <HiMiniChevronUpDown
                                      className='h-5 w-5 text-neutral-400'
                                      aria-hidden='true'
                                    />
                                  </ComboboxButton>
                                </div>
                                <Transition
                                  as={Fragment}
                                  leave='transition ease-in duration-100'
                                  leaveFrom='opacity-100'
                                  leaveTo='opacity-0'
                                  afterLeave={() => setQueryTitleTextSize('')}
                                >
                                  <ComboboxOptions className='mt-2 max-h-48 w-full overflow-y-auto rounded-lg border bg-white p-1 dark:border-neutral-700 dark:bg-neutral-800'>
                                    {filteredTitleTextSizes.length === 0 &&
                                    queryTitleTextSize !== '' ? (
                                      <div className='relative cursor-default select-none px-4 py-2 text-xs text-neutral-700 dark:text-white'>
                                        Not found.
                                      </div>
                                    ) : (
                                      filteredTitleTextSizes.map((textSize) => (
                                        <ComboboxOption
                                          key={textSize.tailwindName}
                                          className={({ active }) =>
                                            `relative text-xs hover:bg-neutral-100 rounded dark:hover:bg-neutral-600 dark:hover:text-white cursor-default select-none py-2 pl-8 pr-3 ${
                                              active
                                                ? 'bg-neutral-100 dark:bg-neutral-600'
                                                : ''
                                            }`
                                          }
                                          value={textSize}
                                        >
                                          {({ selected }) => (
                                            <>
                                              <span
                                                className={`block truncate ${
                                                  selected
                                                    ? 'font-medium'
                                                    : 'font-normal'
                                                }`}
                                              >
                                                {textSize.displayName}
                                              </span>
                                              {selected ? (
                                                <span
                                                  className={`absolute inset-y-0 left-0 flex items-center pl-2 text-neutral-900 dark:text-white`}
                                                >
                                                  <MdCheck
                                                    className='h-4 w-4'
                                                    aria-hidden='true'
                                                  />
                                                </span>
                                              ) : null}
                                            </>
                                          )}
                                        </ComboboxOption>
                                      ))
                                    )}
                                  </ComboboxOptions>
                                </Transition>
                              </Combobox>
                            </div>
                          </div>
                          <div className='flex flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0'>
                            <div className='flex w-full items-center'>
                              <input
                                id='titleColor'
                                className='mr-2 block h-11 w-16 cursor-pointer rounded-lg border border-neutral-200 bg-neutral-50 p-1 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-700 md:h-10 md:w-14'
                                type={'color'}
                                onChange={(event) =>
                                  setTitleColor(event.target.value)
                                }
                              />

                              <div className='relative w-full'>
                                <input
                                  type='text'
                                  disabled={true}
                                  value={titleColor}
                                  className='block w-full rounded-lg border border-neutral-300 bg-neutral-50 p-2.5 text-neutral-900 focus:border-primary-600 focus:ring-primary-600 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white dark:placeholder-neutral-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 sm:text-sm'
                                  placeholder='#FF0000'
                                />
                              </div>
                            </div>

                            <div className='flex w-full flex-row justify-center space-x-6'>
                              {textAlignments.map((textAlignment, index) => (
                                <button
                                  type={'button'}
                                  key={index}
                                  className={clsx(
                                    titleTextAlignment?.styleName ===
                                      textAlignment.styleName
                                      ? 'mx-1 items-center rounded-lg p-2 text-sm text-neutral-500 bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-200 dark:text-neutral-400 dark:bg-neutral-700 dark:focus:ring-neutral-600'
                                      : 'mx-1 items-center rounded-lg p-2 text-sm text-neutral-500 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:ring-neutral-600'
                                  )}
                                  onClick={() => {
                                    setTitleTextAlignment(textAlignment);
                                    setIsAnyToggleChanged(true);
                                  }}
                                >
                                  {textAlignment.displayIcon}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      </DisclosurePanel>
                    </Transition>
                  </>
                )}
              </Disclosure>

              <Disclosure
                as='div'
                className='my-4 w-full rounded-lg border dark:border-neutral-700'
                defaultOpen={false}
              >
                {({ open }) => (
                  <>
                    <div className='rounded-t-lg bg-neutral-50 dark:bg-neutral-800 dark:text-neutral-400'>
                      <DisclosureButton className='flex w-full items-center justify-between'>
                        <span className='text-md inline-block p-4 font-medium text-neutral-900 dark:border-neutral-700 dark:border-transparent dark:text-white'>
                          Subtitle
                        </span>
                        <div className='me-2 items-center justify-center rounded-md p-2 text-neutral-400 hover:bg-neutral-200 hover:text-neutral-900 dark:hover:bg-neutral-600 dark:hover:text-white'>
                          {open ? (
                            <MdKeyboardArrowDown className='h-6 w-6 shrink-0 rotate-180' />
                          ) : (
                            <MdKeyboardArrowUp className='h-6 w-6 shrink-0 rotate-180' />
                          )}
                        </div>
                      </DisclosureButton>
                    </div>

                    <Transition
                      enter='transition duration-100 ease-out'
                      enterFrom='transform translate-y-[-10%] opacity-0'
                      enterTo='transform translate-y-0 opacity-100'
                      leave='transition duration-75 ease-out'
                      leaveFrom='transform translate-y-0 opacity-100'
                      leaveTo='transform translate-y-[-10%] opacity-0'
                    >
                      <DisclosurePanel className='border-t border-neutral-200 p-4 dark:border-neutral-700'>
                        <div className='space-y-4 md:space-y-6'>
                          <div className='w-full'>
                            <input
                              id={'subtitle'}
                              type={'text'}
                              placeholder={'Enter your subtitle'}
                              className='block w-full rounded-lg border border-neutral-300 bg-neutral-50 p-2.5 text-neutral-900 focus:border-primary-600 focus:ring-primary-600 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white dark:placeholder-neutral-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 sm:text-sm'
                              value={subtitle}
                              onChange={(event) =>
                                setSubtitle(event.target.value)
                              }
                            />
                          </div>
                          <div className='flex flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0'>
                            <div className='w-full'>
                              <Combobox
                                value={selectedSubtitleFont}
                                onChange={setSelectedSubtitleFont}
                              >
                                <div className='relative'>
                                  <ComboboxInput
                                    aria-label='Font'
                                    className='block w-full rounded-lg border border-neutral-300 bg-neutral-50 p-2.5 text-neutral-900 focus:border-primary-500 focus:ring-primary-500 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white dark:placeholder-neutral-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 sm:text-sm'
                                    displayValue={(font: FontType) =>
                                      font?.displayName
                                    }
                                    onChange={(event) =>
                                      setQuerySubtitleFont(event.target.value)
                                    }
                                    placeholder='Font face'
                                  />
                                  <ComboboxButton className='absolute inset-y-0 right-0 flex items-center pr-2'>
                                    <HiMiniChevronUpDown
                                      className='h-5 w-5 text-neutral-400'
                                      aria-hidden='true'
                                    />
                                  </ComboboxButton>
                                </div>
                                <Transition
                                  as={Fragment}
                                  leave='transition ease-in duration-100'
                                  leaveFrom='opacity-100'
                                  leaveTo='opacity-0'
                                  afterLeave={() => setQuerySubtitleFont('')}
                                >
                                  <ComboboxOptions className='mt-2 max-h-48 w-full overflow-y-auto rounded-lg border bg-white p-1 dark:border-neutral-700 dark:bg-neutral-800'>
                                    {filteredSubtitleFonts.length === 0 &&
                                    queryTitleFont !== '' ? (
                                      <div className='relative cursor-default select-none px-4 py-2 text-xs text-neutral-700 dark:text-white'>
                                        Not found.
                                      </div>
                                    ) : (
                                      filteredTitleFonts.map((font) => (
                                        <ComboboxOption
                                          key={font.tailwindName}
                                          className={({ active }) =>
                                            `relative text-xs hover:bg-neutral-100 rounded dark:hover:bg-neutral-600 dark:hover:text-white cursor-default select-none py-2 pl-8 pr-3 ${
                                              active
                                                ? 'bg-neutral-100 dark:bg-neutral-600'
                                                : ''
                                            }`
                                          }
                                          value={font}
                                        >
                                          {({ selected }) => (
                                            <>
                                              <span
                                                className={`block truncate ${
                                                  selected
                                                    ? 'font-medium'
                                                    : 'font-normal'
                                                }`}
                                              >
                                                {font.displayName}
                                              </span>
                                              {selected ? (
                                                <span
                                                  className={`absolute inset-y-0 left-0 flex items-center pl-2 text-neutral-900 dark:text-white`}
                                                >
                                                  <MdCheck
                                                    className='h-4 w-4'
                                                    aria-hidden='true'
                                                  />
                                                </span>
                                              ) : null}
                                            </>
                                          )}
                                        </ComboboxOption>
                                      ))
                                    )}
                                  </ComboboxOptions>
                                </Transition>
                              </Combobox>
                            </div>

                            <div className='w-full'>
                              <Combobox
                                value={selectedSubtitleTextSize}
                                onChange={setSelectedSubtitleTextSize}
                              >
                                <div className='relative'>
                                  <ComboboxInput
                                    aria-label='Text Size'
                                    className='block w-full rounded-lg border border-neutral-300 bg-neutral-50 p-2.5 text-neutral-900 focus:border-primary-500 focus:ring-primary-500 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white dark:placeholder-neutral-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 sm:text-sm'
                                    displayValue={(textSize: TextSizeType) =>
                                      textSize?.displayName
                                    }
                                    onChange={(event) =>
                                      setQuerySubtitleTextSize(
                                        event.target.value
                                      )
                                    }
                                    placeholder='Font size'
                                  />
                                  <ComboboxButton className='absolute inset-y-0 right-0 flex items-center pr-2'>
                                    <HiMiniChevronUpDown
                                      className='h-5 w-5 text-neutral-400'
                                      aria-hidden='true'
                                    />
                                  </ComboboxButton>
                                </div>
                                <Transition
                                  as={Fragment}
                                  leave='transition ease-in duration-100'
                                  leaveFrom='opacity-100'
                                  leaveTo='opacity-0'
                                  afterLeave={() =>
                                    setQuerySubtitleTextSize('')
                                  }
                                >
                                  <ComboboxOptions className='mt-2 max-h-48 w-full overflow-y-auto rounded-lg border bg-white p-1 dark:border-neutral-700 dark:bg-neutral-800'>
                                    {filteredSubtitleTextSizes.length === 0 &&
                                    querySubtitleTextSize !== '' ? (
                                      <div className='relative cursor-default select-none px-4 py-2 text-xs text-neutral-700 dark:text-white'>
                                        Not found.
                                      </div>
                                    ) : (
                                      filteredSubtitleTextSizes.map(
                                        (textSize) => (
                                          <ComboboxOption
                                            key={textSize.tailwindName}
                                            className={({ active }) =>
                                              `relative text-xs hover:bg-neutral-100 rounded dark:hover:bg-neutral-600 dark:hover:text-white cursor-default select-none py-2 pl-8 pr-3 ${
                                                active
                                                  ? 'bg-neutral-100 dark:bg-neutral-600'
                                                  : ''
                                              }`
                                            }
                                            value={textSize}
                                          >
                                            {({ selected }) => (
                                              <>
                                                <span
                                                  className={`block truncate ${
                                                    selected
                                                      ? 'font-medium'
                                                      : 'font-normal'
                                                  }`}
                                                >
                                                  {textSize.displayName}
                                                </span>
                                                {selected ? (
                                                  <span
                                                    className={`absolute inset-y-0 left-0 flex items-center pl-2 text-neutral-900 dark:text-white`}
                                                  >
                                                    <MdCheck
                                                      className='h-4 w-4'
                                                      aria-hidden='true'
                                                    />
                                                  </span>
                                                ) : null}
                                              </>
                                            )}
                                          </ComboboxOption>
                                        )
                                      )
                                    )}
                                  </ComboboxOptions>
                                </Transition>
                              </Combobox>
                            </div>
                          </div>
                          <div className='flex flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0'>
                            <div className='flex w-full items-center'>
                              <input
                                id='titleColor'
                                className='mr-2 block h-11 w-16 cursor-pointer rounded-lg border border-neutral-200 bg-neutral-50 p-1 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-700 md:h-10 md:w-14'
                                type={'color'}
                                onChange={(event) =>
                                  setSubtitleColor(event.target.value)
                                }
                              />

                              <div className='relative w-full'>
                                <input
                                  type='text'
                                  disabled={true}
                                  value={subtitleColor}
                                  className='block w-full rounded-lg border border-neutral-300 bg-neutral-50 p-2.5 text-neutral-900 focus:border-primary-600 focus:ring-primary-600 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white dark:placeholder-neutral-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 sm:text-sm'
                                  placeholder='#FF0000'
                                />
                              </div>
                            </div>

                            <div className='flex w-full flex-row justify-center space-x-6'>
                              {textAlignments.map((textAlignment, index) => (
                                <button
                                  type={'button'}
                                  key={index}
                                  className={clsx(
                                    subtitleTextAlignment?.styleName ===
                                      textAlignment.styleName
                                      ? 'mx-1 items-center rounded-lg p-2 text-sm text-neutral-500 bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-200 dark:text-neutral-400 dark:bg-neutral-700 dark:focus:ring-neutral-600'
                                      : 'mx-1 items-center rounded-lg p-2 text-sm text-neutral-500 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:ring-neutral-600'
                                  )}
                                  onClick={() => {
                                    setSubtitleTextAlignment(textAlignment);
                                    setIsAnyToggleChanged(true);
                                  }}
                                >
                                  {textAlignment.displayIcon}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      </DisclosurePanel>
                    </Transition>
                  </>
                )}
              </Disclosure>

              <Disclosure
                as='div'
                className='my-4 w-full rounded-lg border dark:border-neutral-700'
                defaultOpen={false}
              >
                {({ open }) => (
                  <>
                    <div className='rounded-t-lg bg-neutral-50 dark:bg-neutral-800 dark:text-neutral-400'>
                      <DisclosureButton className='flex w-full items-center justify-between'>
                        <span className='text-md inline-block p-4 font-medium text-neutral-900 dark:border-neutral-700 dark:border-transparent dark:text-white'>
                          Inputs
                        </span>
                        <div className='me-2 items-center justify-center rounded-md p-2 text-neutral-400 hover:bg-neutral-200 hover:text-neutral-900 dark:hover:bg-neutral-600 dark:hover:text-white'>
                          {open ? (
                            <MdKeyboardArrowDown className='h-6 w-6 shrink-0 rotate-180' />
                          ) : (
                            <MdKeyboardArrowUp className='h-6 w-6 shrink-0 rotate-180' />
                          )}
                        </div>
                      </DisclosureButton>
                    </div>

                    <Transition
                      enter='transition duration-100 ease-out'
                      enterFrom='transform translate-y-[-10%] opacity-0'
                      enterTo='transform translate-y-0 opacity-100'
                      leave='transition duration-75 ease-out'
                      leaveFrom='transform translate-y-0 opacity-100'
                      leaveTo='transform translate-y-[-10%] opacity-0'
                    >
                      <DisclosurePanel className='border-t border-neutral-200 p-4 dark:border-neutral-700'>
                        <ul className='w-full dark:border-neutral-700'>
                          <li className='border-b border-dashed border-slate-200 py-2 dark:border-neutral-700'>
                            <label className='grid grid-cols-12 items-center'>
                              <div className='col-span-10'>
                                <span>First name</span>
                                <p className='text-sm text-neutral-500 dark:text-neutral-400'>
                                  Make first name required*
                                </p>
                              </div>
                              <div className='col-span-2 flex items-center justify-center'>
                                <Switch
                                  name={'First name'}
                                  defaultChecked={isFirstNameRequired}
                                  as={Fragment}
                                >
                                  {({ checked }) => (
                                    <button
                                      onClick={() => {
                                        setIsFirstNameRequired(
                                          !isFirstNameRequired
                                        );
                                        setIsAnyToggleChanged(true);
                                      }}
                                      disabled={false}
                                      defaultChecked={false}
                                      className={`${
                                        checked
                                          ? false // isMandatory
                                            ? 'bg-primary-400' // If checked and isMandatory
                                            : 'bg-primary-600' // If checked but not isMandatory
                                          : 'bg-neutral-200 dark:bg-neutral-700' // If not checked
                                      } relative inline-flex h-6 w-11 items-center rounded-full`}
                                    >
                                      <span className='sr-only'>
                                        {
                                          'Enable required validation for First name'
                                        }
                                      </span>
                                      <span
                                        className={`${
                                          checked
                                            ? 'translate-x-6'
                                            : 'translate-x-1'
                                        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                                      />
                                    </button>
                                  )}
                                </Switch>
                              </div>
                            </label>
                          </li>

                          <li className='border-b border-dashed border-slate-200 py-2 dark:border-neutral-700'>
                            <label className='grid grid-cols-12 items-center'>
                              <div className='col-span-10'>
                                <span>Last name</span>
                                <p className='text-sm text-neutral-500 dark:text-neutral-400'>
                                  Make last name required*
                                </p>
                              </div>
                              <div className='col-span-2 flex items-center justify-center'>
                                <Switch
                                  name={'Last name'}
                                  defaultChecked={isLastNameRequired}
                                  as={Fragment}
                                >
                                  {({ checked }) => (
                                    <button
                                      onClick={() => {
                                        setIsLastNameRequired(
                                          !isLastNameRequired
                                        );
                                        setIsAnyToggleChanged(true);
                                      }}
                                      disabled={false}
                                      defaultChecked={false}
                                      className={`${
                                        checked
                                          ? false // isMandatory
                                            ? 'bg-primary-400' // If checked and isMandatory
                                            : 'bg-primary-600' // If checked but not isMandatory
                                          : 'bg-neutral-200 dark:bg-neutral-700' // If not checked
                                      } relative inline-flex h-6 w-11 items-center rounded-full`}
                                    >
                                      <span className='sr-only'>
                                        {
                                          'Enable required validation for Last name'
                                        }
                                      </span>
                                      <span
                                        className={`${
                                          checked
                                            ? 'translate-x-6'
                                            : 'translate-x-1'
                                        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                                      />
                                    </button>
                                  )}
                                </Switch>
                              </div>
                            </label>
                          </li>

                          <li className='border-b border-dashed border-slate-200 py-2 dark:border-neutral-700'>
                            <label className='grid grid-cols-12 items-center'>
                              <div className='col-span-10'>
                                <span>Email address</span>
                                <p className='text-sm text-neutral-500 dark:text-neutral-400'>
                                  Make email address required*
                                </p>
                              </div>
                              <div className='col-span-2 flex items-center justify-center'>
                                <Switch
                                  name={'Email address'}
                                  checked={isEmailRequired}
                                  as={Fragment}
                                >
                                  {({ checked }) => (
                                    <button
                                      onClick={() =>
                                        toast.error(
                                          'Email address does not accept null values'
                                        )
                                      }
                                      disabled={false}
                                      defaultChecked={false}
                                      className={`${
                                        checked
                                          ? true // isMandatory
                                            ? 'bg-primary-400' // If checked and isMandatory
                                            : 'bg-primary-600' // If checked but not isMandatory
                                          : 'bg-neutral-200 dark:bg-neutral-700' // If not checked
                                      } relative inline-flex h-6 w-11 items-center rounded-full`}
                                    >
                                      <span className='sr-only'>
                                        {
                                          'Enable required validation for Email address'
                                        }
                                      </span>
                                      <span
                                        className={`${
                                          checked
                                            ? 'translate-x-6'
                                            : 'translate-x-1'
                                        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                                      />
                                    </button>
                                  )}
                                </Switch>
                              </div>
                            </label>
                          </li>
                        </ul>
                      </DisclosurePanel>
                    </Transition>
                  </>
                )}
              </Disclosure>

              <Disclosure
                as='div'
                className='my-4 w-full rounded-lg border dark:border-neutral-700'
                defaultOpen={false}
              >
                {({ open }) => (
                  <>
                    <div className='rounded-t-lg bg-neutral-50 dark:bg-neutral-800 dark:text-neutral-400'>
                      <DisclosureButton className='flex w-full items-center justify-between'>
                        <span className='text-md inline-block p-4 font-medium text-neutral-900 dark:border-neutral-700 dark:border-transparent dark:text-white'>
                          Button
                        </span>
                        <div className='me-2 items-center justify-center rounded-md p-2 text-neutral-400 hover:bg-neutral-200 hover:text-neutral-900 dark:hover:bg-neutral-600 dark:hover:text-white'>
                          {open ? (
                            <MdKeyboardArrowDown className='h-6 w-6 shrink-0 rotate-180' />
                          ) : (
                            <MdKeyboardArrowUp className='h-6 w-6 shrink-0 rotate-180' />
                          )}
                        </div>
                      </DisclosureButton>
                    </div>

                    <Transition
                      enter='transition duration-100 ease-out'
                      enterFrom='transform translate-y-[-10%] opacity-0'
                      enterTo='transform translate-y-0 opacity-100'
                      leave='transition duration-75 ease-out'
                      leaveFrom='transform translate-y-0 opacity-100'
                      leaveTo='transform translate-y-[-10%] opacity-0'
                    >
                      <DisclosurePanel className='border-t border-neutral-200 p-4 dark:border-neutral-700'>
                        <div className='space-y-4 md:space-y-6'>
                          <div className='w-full'>
                            <input
                              id={'buttonText'}
                              type={'text'}
                              placeholder={'Enter your button text'}
                              className='block w-full rounded-lg border border-neutral-300 bg-neutral-50 p-2.5 text-neutral-900 focus:border-primary-600 focus:ring-primary-600 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white dark:placeholder-neutral-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 sm:text-sm'
                              onChange={(event) =>
                                setButtonText(event.target.value)
                              }
                            />
                          </div>
                          <div className='flex flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0'>
                            <div className='w-full'>
                              <Combobox
                                value={selectedButtonFont}
                                onChange={setSelectedButtonFont}
                              >
                                <div className='relative'>
                                  <ComboboxInput
                                    aria-label='Font'
                                    className='block w-full rounded-lg border border-neutral-300 bg-neutral-50 p-2.5 text-neutral-900 focus:border-primary-500 focus:ring-primary-500 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white dark:placeholder-neutral-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 sm:text-sm'
                                    displayValue={(font: FontType) =>
                                      font?.displayName
                                    }
                                    onChange={(event) =>
                                      setQueryButtonFont(event.target.value)
                                    }
                                    placeholder='Font face'
                                  />
                                  <ComboboxButton className='absolute inset-y-0 right-0 flex items-center pr-2'>
                                    <HiMiniChevronUpDown
                                      className='h-5 w-5 text-neutral-400'
                                      aria-hidden='true'
                                    />
                                  </ComboboxButton>
                                </div>
                                <Transition
                                  as={Fragment}
                                  leave='transition ease-in duration-100'
                                  leaveFrom='opacity-100'
                                  leaveTo='opacity-0'
                                  afterLeave={() => setQueryButtonFont('')}
                                >
                                  <ComboboxOptions className='mt-2 max-h-48 w-full overflow-y-auto rounded-lg border bg-white p-1 dark:border-neutral-700 dark:bg-neutral-800'>
                                    {filteredButtonFonts.length === 0 &&
                                    queryButtonFont !== '' ? (
                                      <div className='relative cursor-default select-none px-4 py-2 text-xs text-neutral-700 dark:text-white'>
                                        Not found.
                                      </div>
                                    ) : (
                                      filteredButtonFonts.map((font) => (
                                        <ComboboxOption
                                          key={font.tailwindName}
                                          className={({ active }) =>
                                            `relative text-xs hover:bg-neutral-100 rounded dark:hover:bg-neutral-600 dark:hover:text-white cursor-default select-none py-2 pl-8 pr-3 ${
                                              active
                                                ? 'bg-neutral-100 dark:bg-neutral-600'
                                                : ''
                                            }`
                                          }
                                          value={font}
                                        >
                                          {({ selected }) => (
                                            <>
                                              <span
                                                className={`block truncate ${
                                                  selected
                                                    ? 'font-medium'
                                                    : 'font-normal'
                                                }`}
                                              >
                                                {font.displayName}
                                              </span>
                                              {selected ? (
                                                <span
                                                  className={`absolute inset-y-0 left-0 flex items-center pl-2 text-neutral-900 dark:text-white`}
                                                >
                                                  <MdCheck
                                                    className='h-4 w-4'
                                                    aria-hidden='true'
                                                  />
                                                </span>
                                              ) : null}
                                            </>
                                          )}
                                        </ComboboxOption>
                                      ))
                                    )}
                                  </ComboboxOptions>
                                </Transition>
                              </Combobox>
                            </div>

                            <div className='w-full'>
                              <Combobox
                                value={selectedButtonTextSize}
                                onChange={setSelectedButtonTextSize}
                              >
                                <div className='relative'>
                                  <ComboboxInput
                                    aria-label='Text Size'
                                    className='block w-full rounded-lg border border-neutral-300 bg-neutral-50 p-2.5 text-neutral-900 focus:border-primary-500 focus:ring-primary-500 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white dark:placeholder-neutral-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 sm:text-sm'
                                    displayValue={(textSize: TextSizeType) =>
                                      textSize?.displayName
                                    }
                                    onChange={(event) =>
                                      setQueryButtonTextSize(event.target.value)
                                    }
                                    placeholder='Font size'
                                  />
                                  <ComboboxButton className='absolute inset-y-0 right-0 flex items-center pr-2'>
                                    <HiMiniChevronUpDown
                                      className='h-5 w-5 text-neutral-400'
                                      aria-hidden='true'
                                    />
                                  </ComboboxButton>
                                </div>
                                <Transition
                                  as={Fragment}
                                  leave='transition ease-in duration-100'
                                  leaveFrom='opacity-100'
                                  leaveTo='opacity-0'
                                  afterLeave={() => setQueryButtonTextSize('')}
                                >
                                  <ComboboxOptions className='mt-2 max-h-48 w-full overflow-y-auto rounded-lg border bg-white p-1 dark:border-neutral-700 dark:bg-neutral-800'>
                                    {filteredButtonTextSizes.length === 0 &&
                                    queryButtonTextSize !== '' ? (
                                      <div className='relative cursor-default select-none px-4 py-2 text-xs text-neutral-700 dark:text-white'>
                                        Not found.
                                      </div>
                                    ) : (
                                      filteredButtonTextSizes.map(
                                        (textSize) => (
                                          <ComboboxOption
                                            key={textSize.tailwindName}
                                            className={({ active }) =>
                                              `relative text-xs hover:bg-neutral-100 rounded dark:hover:bg-neutral-600 dark:hover:text-white cursor-default select-none py-2 pl-8 pr-3 ${
                                                active
                                                  ? 'bg-neutral-100 dark:bg-neutral-600'
                                                  : ''
                                              }`
                                            }
                                            value={textSize}
                                          >
                                            {({ selected }) => (
                                              <>
                                                <span
                                                  className={`block truncate ${
                                                    selected
                                                      ? 'font-medium'
                                                      : 'font-normal'
                                                  }`}
                                                >
                                                  {textSize.displayName}
                                                </span>
                                                {selected ? (
                                                  <span
                                                    className={`absolute inset-y-0 left-0 flex items-center pl-2 text-neutral-900 dark:text-white`}
                                                  >
                                                    <MdCheck
                                                      className='h-4 w-4'
                                                      aria-hidden='true'
                                                    />
                                                  </span>
                                                ) : null}
                                              </>
                                            )}
                                          </ComboboxOption>
                                        )
                                      )
                                    )}
                                  </ComboboxOptions>
                                </Transition>
                              </Combobox>
                            </div>
                          </div>
                          <div className='flex flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0'>
                            <div className='flex w-full items-center'>
                              <input
                                id='buttonColor'
                                className='mr-2 block h-11 w-16 cursor-pointer rounded-lg border border-neutral-200 bg-neutral-50 p-1 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-700 md:h-10 md:w-14'
                                type={'color'}
                                onChange={(event) =>
                                  setButtonColor(event.target.value)
                                }
                              />

                              <div className='relative w-full'>
                                <input
                                  type='text'
                                  disabled={true}
                                  value={buttonColor}
                                  className='block w-full rounded-lg border border-neutral-300 bg-neutral-50 p-2.5 text-neutral-900 focus:border-primary-600 focus:ring-primary-600 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white dark:placeholder-neutral-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 sm:text-sm'
                                  placeholder='#FF0000'
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </DisclosurePanel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            </div>
            <div className='sticky top-0 z-10 lg:col-span-7 lg:flex lg:justify-center'>
              {/* Right Hand side */}
              <div className='space-y-4 p-6 sm:p-8 md:space-y-6'>
                <h1
                  style={{
                    fontFamily: selectedTitleFont?.styleName,
                    fontSize: selectedTitleTextSize?.styleName,
                    color: titleColor,
                    textAlign: titleTextAlignment?.styleName,
                  }}
                  className='text-xl font-bold text-neutral-900 dark:text-white md:text-2xl'
                >
                  {title || 'Invite your friends'}
                </h1>
                <p
                  style={{
                    fontFamily: selectedSubtitleFont?.styleName,
                    fontSize: selectedSubtitleTextSize?.styleName,
                    color: subtitleColor,
                    textAlign: subtitleTextAlignment?.styleName,
                  }}
                  className='text-sm font-light text-neutral-500 dark:text-neutral-400'
                >
                  {subtitle || 'Join our referral program!'}
                </p>

                <form className='space-y-4 md:space-y-6'>
                  <div className='mb-6 flex flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0'>
                    <div className='w-full'>
                      <label
                        htmlFor={'firstName'}
                        className='mb-2 block text-sm font-medium text-neutral-900 dark:text-white'
                      >
                        First name{isFirstNameRequired && '*'}
                      </label>
                      <input
                        id={'firstName'}
                        type={'text'}
                        required={isFirstNameRequired}
                        className='block w-full rounded-lg border border-neutral-300 bg-neutral-50 p-2.5 text-neutral-900 focus:border-primary-600 focus:ring-primary-600 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white dark:placeholder-neutral-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 sm:text-sm'
                      />
                    </div>

                    <div className='w-full'>
                      <label
                        htmlFor={'lastName'}
                        className='mb-2 block text-sm font-medium text-neutral-900 dark:text-white'
                      >
                        Last name{isLastNameRequired && '*'}
                      </label>
                      <input
                        id={'lastName'}
                        type={'text'}
                        required={isLastNameRequired}
                        className='block w-full rounded-lg border border-neutral-300 bg-neutral-50 p-2.5 text-neutral-900 focus:border-primary-600 focus:ring-primary-600 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white dark:placeholder-neutral-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 sm:text-sm'
                      />
                    </div>
                  </div>

                  <div className='w-full'>
                    <label
                      htmlFor={'email'}
                      className='mb-2 block text-sm font-medium text-neutral-900 dark:text-white'
                    >
                      Email address{isEmailRequired && '*'}
                    </label>
                    <input
                      id={'email'}
                      type={'text'}
                      required={isEmailRequired}
                      className='block w-full rounded-lg border border-neutral-300 bg-neutral-50 p-2.5 text-neutral-900 focus:border-primary-600 focus:ring-primary-600 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white dark:placeholder-neutral-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 sm:text-sm'
                    />
                  </div>

                  <Button
                    style={{
                      fontFamily: selectedButtonFont?.styleName,
                      fontSize: selectedButtonTextSize?.styleName,
                      backgroundColor: buttonColor,
                    }}
                    text={buttonText || 'Join and Win'}
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

const textAlignments: TextAlignmentType[] = [
  {
    displayIcon: <BiAlignLeft className='block h-6 w-6 fill-current' />,
    displayName: 'Align left',
    tailwindName: 'text-left',
    styleName: 'left',
  },
  {
    displayIcon: <BiAlignMiddle className='block h-6 w-6 fill-current' />,
    displayName: 'Align center',
    tailwindName: 'text-center',
    styleName: 'center',
  },
  {
    displayIcon: <BiAlignRight className='block h-6 w-6 fill-current' />,
    displayName: 'Align right',
    tailwindName: 'text-right',
    styleName: 'right',
  },
] as const;
