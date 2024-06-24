import React from 'react';

type SelectType = {
    itemSelect: string;
    setItemSelect: React.Dispatch<React.SetStateAction<string>>;
    children: React.ReactNode;
    id: string;
    label: string;
};

export const CustomSelect = ({ itemSelect, setItemSelect, children, id, label }: SelectType) => {
    return (
        <div className="flex flex-col">
            <label htmlFor={id} className="sr-only">
                {label}
            </label>
            <select
                id={id}
                className='
                    block
                    w-full
                    max-w-xs
                    md:max-w-sm
                    lg:max-w-56
                    mt-1
                    px-3
                    py-2
                    bg-white
                    border
                    border-gray-300
                    rounded-md
                    shadow-sm
                    focus:outline-none
                    focus:ring-indigo-500
                    focus:border-indigo-500
                    sm:text-sm
                '
                onChange={(e) => setItemSelect(e.target.value)}
                value={itemSelect}
                aria-label={label}
            >
                {children}
            </select>
        </div>
    );
};
