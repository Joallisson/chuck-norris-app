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
        { label: "Hostória", value: "history"},
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
                justify-end
                px-5
                py-3
                w-1/2
                border-2
                border-red-500
                gap-x-10
            '
        >
            <CustomSelect
                itemSelect={categorySelect}
                setItemSelect={setCategorySelect}
            >
                {categories.map(category => <option value={category.value}>{category.label}</option>)}  
            </CustomSelect>
            
            <CustomSelect
                itemSelect={targetLangSelect}
                setItemSelect={setTargetLangSelect}
            >
                <option value="pt-BR">Português - Brasil</option>
                <option value="en">English</option>
                <option value="es">Español</option>
            </CustomSelect>
        </div>
    )
}