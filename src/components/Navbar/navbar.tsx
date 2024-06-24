import React from 'react';
import { CustomSelect } from '../CustomSelect/custom-select';

type PropsType = {
    targetLangSelect: string;
    setTargetLangSelect: React.Dispatch<React.SetStateAction<string>>;
    categorySelect: string;
    setCategorySelect: React.Dispatch<React.SetStateAction<string>>;
};

export const Navbar = ({ targetLangSelect, setTargetLangSelect, categorySelect, setCategorySelect }: PropsType) => {
    const categories = [
        { label: "Sem categoria", value: "" },
        { label: "Animal", value: "animal" },
        { label: "Carreira", value: "career" },
        { label: "Celebridade", value: "celebrity" },
        { label: "Desenvolvedor", value: "dev" },
        { label: "Explícito", value: "explicit" },
        { label: "Moda", value: "fashion" },
        { label: "Comida", value: "food" },
        { label: "História", value: "history" },
        { label: "Dinheiro", value: "money" },
        { label: "Filme", value: "movie" },
        { label: "Música", value: "music" },
        { label: "Política", value: "political" },
        { label: "Religião", value: "religion" },
        { label: "Ciência", value: "science" },
        { label: "Esporte", value: "sport" },
        { label: "Viagem", value: "travel" },
    ];

    return (
        <nav
            className='
                flex
                flex-col
                md:flex-row
                justify-center
                px-5
                py-3
                w-full
                max-w-screen-lg
                border-2
                border-slate-500
                gap-3
                md:gap-5
                lg:gap-10
                mx-auto
                bg-gray-200
            '
            aria-label="Menu de navegação"
        >
            <CustomSelect
                id="categorySelect"
                itemSelect={categorySelect}
                setItemSelect={setCategorySelect}
                label="Seleção de categoria"
            >
                {categories.map((category, index) => (
                    <option key={index} value={category.value}>
                        {category.label}
                    </option>
                ))}
            </CustomSelect>

            <CustomSelect
                id="targetLangSelect"
                itemSelect={targetLangSelect}
                setItemSelect={setTargetLangSelect}
                label="Seleção de idioma alvo"
            >
                <option value="pt-BR">Português - Brasil</option>
                <option value="en">English</option>
                <option value="es">Español</option>
            </CustomSelect>
        </nav>
    );
};
