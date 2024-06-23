type SelectType = {
    itemSelect: string;
    setItemSelect: React.Dispatch<React.SetStateAction<string>>;
    children: React.ReactNode;
}

export const CustomSelect = ({ itemSelect, setItemSelect, children }: SelectType) => {
    return (
        <select 
            className='
                block
                w-48
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
        >
            {children}
        </select>
    );
};