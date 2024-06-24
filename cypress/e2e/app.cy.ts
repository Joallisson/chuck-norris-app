class PageFacts{
  elements = {
    btnSubmit: () => cy.get('#generateNewJoke'),
    jokeText: () => cy.get('#jokeText'),
    spinner: () => cy.get('#spinner'),
    categorySelect: () => cy.get('#categorySelect'),
    optionPtBR: () => cy.get('#option_pt_BR'),
    optionEn: () => cy.get('#option_en'),
    optionEs: () => cy.get('#option_es'),
    targetLangSelect: () => cy.get('#targetLangSelect'),

    optionNoCategory: () => cy.get('#option_'),
    optionAnimal: () => cy.get('#option_animal'),
    optionCareer: () => cy.get('#option_career'),
    optionCelebrity: () => cy.get('#option_celebrity'),
    optionDev: () => cy.get('#option_dev'),
    optionExplicit: () => cy.get('#option_explicit'),
    optionFashion: () => cy.get('#option_fashion'),
    optionFood: () => cy.get('#option_food'),
    optionHistory: () => cy.get('#option_history'),
    optionMoney: () => cy.get('#option_money'),
    optionMovie: () => cy.get('#option_movie'),
    optionMusic: () => cy.get('#option_music'),
    optionPolitical: () => cy.get('#option_political'),
    optionReligion: () => cy.get('#option_religion'),
    optionScience: () => cy.get('#option_science'),
    optionSport: () => cy.get('#option_sport'),
    optionTravel: () => cy.get('#option_travel'),
  }

  clickSubmit(){
    this.elements.btnSubmit().click()
  }
}

const pageFacts = new PageFacts()

const languages = [
  { value: 'en', label: 'English' },
  { value: 'es', label: 'Español' }
]

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

describe('Randomly generate chuck norris jokes', () => {
  describe('Click on the button to generate facts about Chuck Norris with the default language and without changing the category', () => {
  
    it('I am on the page to generate facts about Chuck Norris', () => {
      cy.visit('/')
    })

    it('I click the submit button', () => {
      pageFacts.clickSubmit()
    })

    it('The loading spinner should appear while loading the joke', () => {
      pageFacts.elements.spinner().should('be.visible')
    })

    it('The loading spinner will disappear', () => {
      pageFacts.elements.spinner().should('not.exist')
    })

    it('The text of the joke about Chuck Norris should appear', () => {
      pageFacts.elements.jokeText().should('be.visible')
    })

  })

  languages.forEach(language => {
    describe(`Generate facts about Chuck Norris in ${language.label}`, () => {
    
      it('I am on the page to generate facts about Chuck Norris', () => {
        cy.visit('/')
      })

      it(`I select the language ${language.label} from the dropdown`, () => {
        pageFacts.elements.targetLangSelect().select(language.value)
      })

      it('I click the submit button', () => {
        pageFacts.clickSubmit()
      })

      it('The loading spinner should appear while loading the joke', () => {
        pageFacts.elements.spinner().should('be.visible')
      })

      it('The loading spinner will disappear', () => {
        pageFacts.elements.spinner().should('not.exist')
      })

      it('The text of the joke about Chuck Norris should appear', () => {
        pageFacts.elements.jokeText().should('be.visible')
      })

    })
  })

  categories.forEach(category => {
    describe(`Generate facts about Chuck Norris in Portuguese in the category ${category.label}`, () => {
    
      it('I am on the page to generate facts about Chuck Norris', () => {
        cy.visit('/')
      })

      it(`I select the language portuguese from the dropdown`, () => {
        pageFacts.elements.targetLangSelect().select('pt-BR')
      })

      it(`I select the category ${category.label} from the dropdown`, () => {
        pageFacts.elements.categorySelect().select(category.value)
      })

      it('I click the submit button', () => {
        pageFacts.clickSubmit()
      })

      it('The loading spinner should appear while loading the joke', () => {
        pageFacts.elements.spinner().should('be.visible')
      })

      it('The loading spinner will disappear', () => {
        pageFacts.elements.spinner().should('not.exist')
      })

      it('The text of the joke about Chuck Norris should appear', () => {
        pageFacts.elements.jokeText().should('be.visible')
      })

    })
  })

  categories.forEach(category => {
    describe(`Generate facts about Chuck Norris in English in the category ${category.label}`, () => {
    
      it('I am on the page to generate facts about Chuck Norris', () => {
        cy.visit('/')
      })

      it(`I select the language english from the dropdown`, () => {
        pageFacts.elements.targetLangSelect().select('en')
      })

      it(`I select the category ${category.label} from the dropdown`, () => {
        pageFacts.elements.categorySelect().select(category.value)
      })

      it('I click the submit button', () => {
        pageFacts.clickSubmit()
      })

      it('The loading spinner should appear while loading the joke', () => {
        pageFacts.elements.spinner().should('be.visible')
      })

      it('The loading spinner will disappear', () => {
        pageFacts.elements.spinner().should('not.exist')
      })

      it('The text of the joke about Chuck Norris should appear', () => {
        pageFacts.elements.jokeText().should('be.visible')
      })

    })
  })

  categories.forEach(category => {
    describe(`Generate facts about Chuck Norris in Spanish in the category ${category.label}`, () => {
    
      it('I am on the page to generate facts about Chuck Norris', () => {
        cy.visit('/')
      })

      it(`I select the language spanish from the dropdown`, () => {
        pageFacts.elements.targetLangSelect().select('es')
      })

      it(`I select the category ${category.label} from the dropdown`, () => {
        pageFacts.elements.categorySelect().select(category.value)
      })

      it('I click the submit button', () => {
        pageFacts.clickSubmit()
      })

      it('The loading spinner should appear while loading the joke', () => {
        pageFacts.elements.spinner().should('be.visible')
      })

      it('The loading spinner will disappear', () => {
        pageFacts.elements.spinner().should('not.exist')
      })

      it('The text of the joke about Chuck Norris should appear', () => {
        pageFacts.elements.jokeText().should('be.visible')
      })

    })
  })
})

