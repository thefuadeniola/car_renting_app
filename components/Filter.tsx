'use client'
import { CustomFilterProps, FilterProps } from '@/types'
import React, { useState, Fragment } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Listbox, Transition } from '@headlessui/react'
import { updateSearchParams } from '@/utils'

const Filter = ({ title, options }: CustomFilterProps) => {
    const [selected, setSelected] = useState(options[0])
    const router = useRouter()
    const handleUpdateParams = (e: { title: string; value: string }) => {
        const newPathName = updateSearchParams(title, e.value.toLowerCase());

        router.push(newPathName, { scroll: false });
    };

    return (
        <div className='w-fit'>
            <Listbox
                value={selected}
                onChange={(e) => {
                    setSelected(e); // Update the selected option in state
                    handleUpdateParams(e); // Update the URL search parameters and navigate to the new URL
                }}
            >
                <div className='relative fit z-10'>
                    <Listbox.Button className='custom-filter__btn'>
                        <span className='block truncate'>{selected.title}</span>
                        <Image src='/chevron-up-down.svg' width={20} height={20} className='ml-4 object-contain' alt='chevron' />
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave='transition ease-in duration-100'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                    >
                        <Listbox.Options className='custom-filter__options'>
                            {options.map((option) => (
                                <Listbox.Option key={option.title} value={option} className={({ active }) => `relative cursor-default selected-none py-2 px-4 ${active ? 'bg-primary-blue text-white' : 'text-gray-900'
                                    }`}>
                                    {({ selected }) => (
                                        <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>{option.title}</span>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    )
}

export default Filter