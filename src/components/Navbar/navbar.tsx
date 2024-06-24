import { CustomSelect } from "../CustomSelect/custom-select"

type PropsType = {
    targetLangSelect: string
    setTargetLangSelect: React.Dispatch<React.SetStateAction<string>>
    categorySelect: string
    setCategorySelect: React.Dispatch<React.SetStateAction<string>>
}

export const Navbar = ({targetLangSelect, setTargetLangSelect, categorySelect, setCategorySelect}: PropsType) => {

    const categories = [
        { label: "Sem categoria", value: ""},
        { label: "Animal", value: "animal"},
        { label: "Carreira", value: "career"},
        { label: "Celebridade", value: "celebrity"},
        { label: "Desenvolvedor", value: "dev"},
        { label: "Explícito", value: "explicit"},
        { label: "Moda", value: "fashion"},
        { label: "Comida", value: "food"},
        { label: "História", value: "history"},
        { label: "Dinheiro", value: "money"},
        { label: "Filme", value: "movie"},
        { label: "Música", value: "music"},
        { label: "Política", value: "political"},
        { label: "Religião", value: "religion"},
        { label: "Ciência", value: "science"},
        { label: "Esporte", value: "sport"},
        { label: "Viagem", value: "travel"},
    ]

    return(
        <div
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
            '
        >
            <CustomSelect
                id="categorySelect"
                itemSelect={categorySelect}
                setItemSelect={setCategorySelect}
            >
                {categories.map((category, index) => (
                    <option id={'option_' + category.value} key={index} value={category.value}>
                        {category.label}
                    </option>
                ))}  
            </CustomSelect>
            
            <CustomSelect
                id="targetLangSelect"
                itemSelect={targetLangSelect}
                setItemSelect={setTargetLangSelect}
            >
                <option key={0} id="option_pt_BR" value="pt-BR">Português - Brasil</option>
                <option key={1} id="option_en" value="en">English</option>
                <option key={2} id="option_es" value="es">Español</option>
            </CustomSelect>
        </div>
    )
}
