describe('Setup test', () => {
  it('Opens the main screen, and we should have a blank screen', () => {
    cy.visit('/')
    cy.contains('span.md-title', 'No title set')
    cy.contains('span', '0 / 10 possible answers')
    cy.contains('span', 'Total votes: 0')
    cy.get('#vote-button').should('be.disabled')
    cy.get('#reset-button').should('be.enabled')
  })

  it('Start creating a poll and adds, removes, updates', () => {
    cy.visit('/')
    cy.get('#poll-name').type('My new poll')
    cy.contains('span.md-title', 'My new poll')
    cy.get('#poll-add-option').type('Option 1{enter}')
    cy.get('#vote-button').should('be.disabled')
    cy.get('input:radio').first().click({ force: true })
    cy.get('#vote-button').should('be.disabled')
    cy.get('#poll-add-option').type('Option 2{enter}')
    cy.get('#vote-button').should('be.enabled')
    cy.contains('span', '2 / 10 possible answers')
    cy.get('.poll-option .md-icon').first().click({})
    cy.contains('span', '1 / 10 possible answers')
    cy.get('#vote-button').should('be.disabled')
    cy.get('#poll-add-option').type('Option 3{enter}')
    cy.get('.poll-option .md-input').eq(1).type('{selectall}{del}Modified Option 3{enter}')
    cy.get('.poll-option .md-icon').first().click({})
    cy.get('#vote-button').should('be.disabled')
    cy.contains('span', '1 / 10 possible answers')
  })

  it('Create maximum polls and reset', () => {
    cy.visit('/')
    cy.get('#poll-name').type('My new poll')
    cy.contains('span.md-title', 'My new poll')
    for (var i = 0; i < 10; i++) {
      cy.get('#poll-add-option').type('Option ' + (i + 1) + '{enter}')
    }
    cy.get('#poll-option-add-panel').should('not.be.visible')
    cy.contains('span', '10 / 10 possible answers')
    cy.get('#reset-button').should('be.enabled')
    cy.get('#reset-button').click()
    cy.contains('span', '0 / 10 possible answers')
    cy.get('#poll-option-add-panel').should('be.visible')
    cy.contains('span.md-title', 'No title set')
    cy.contains('span', '0 / 10 possible answers')
    cy.contains('span', 'Total votes: 0')
  })

  it('Vote and reset at the end for a clean slate', () => {
    cy.visit('/')
    cy.get('#poll-name').type('My test poll')
    cy.contains('span.md-title', 'My test poll')
    cy.get('#poll-add-option').type('Option 1{enter}')

    cy.get('input:radio').first().click({ force: true })
    cy.get('#vote-button').click({ force: true })

    cy.contains('span', '1 / 10 possible answers')

    cy.get('#reset-button').click()
    cy.contains('span', '0 / 10 possible answers')
    cy.get('#poll-option-add-panel').should('be.visible')
    cy.contains('span.md-title', 'No title set')
    cy.contains('span', '0 / 10 possible answers')
    cy.contains('span', 'Total votes: 0')
  })

  it('Vote 6 times on different options', () => {
    cy.visit('/')
    cy.get('#poll-name').type('My test poll')
    cy.contains('span.md-title', 'My test poll')
    for (var i = 0; i < 3; i++) {
      cy.get('#poll-add-option').type('Option ' + (i + 1) + '{enter}')
    }

    // click first one 3 times
    cy.get('input:radio').first().click({ force: true })
    cy.get('#vote-button').click()
    cy.get('input:radio').first().click({ force: true })
    cy.get('#vote-button').click()
    cy.get('input:radio').first().click({ force: true })
    cy.get('#vote-button').click()

    cy.get('input:radio').eq(2).click({ force: true })
    cy.get('#vote-button').click()
    cy.get('input:radio').eq(2).click({ force: true })
    cy.get('#vote-button').click()

    cy.get('input:radio').eq(1).click({ force: true })
    cy.get('#vote-button').click()

    cy.contains('span', '3 / 10 possible answers')
    cy.contains('span', 'Total votes: 6')
  })
})
