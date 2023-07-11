// describe('login page test', () => { 
//   it('passes', function () {
//     const username:string = 'testuser';
//     const password = 'testpassword';
//     cy.login(username, password)
//   })
// })


describe('sign up and add a post test', () => {
  const Username = 'r';
  const Password = '111';
  const Email = 'r@gmail.com';
  const Name = 'r';

  it('passes', () => {
    cy.visit('/');
    cy.contains('Sign Up').click();
    cy.url().should('include', 'signUp')
    cy.get('input[placeholder="Full Name"]').as('nameInput');
    cy.get('@nameInput').type(Name);
    cy.get('@nameInput').should('have.value', Name);

    cy.get('input[placeholder="Email"]').as('emailInput');
    cy.get('@emailInput').type(Email);
    cy.get('@emailInput').should('have.value', Email);

    cy.get('input[placeholder="User Name"]').as('usernameInput');
    cy.get('@usernameInput').type(Username);
    cy.get('@usernameInput').should('have.value', Username);

    cy.get('input[placeholder="Password"]').as('passwordInput');
    cy.get('@passwordInput').type(Password);
    cy.get('@passwordInput').should('have.value', Password);

    cy.contains('Sign Me Up!').click();
    cy.contains('New post').click();
    cy.url().should('include', 'create')

    cy.get('input[placeholder="Title"]').as('newTitle');
    cy.get('@newTitle').type('my first post');
    cy.get('@newTitle').should('have.value', 'my first post');

    cy.get('textarea[placeholder="Content"]').as('newContent');
    cy.get('@newContent').type('hello world');
    cy.get('@newContent').should('have.value', 'hello world');
    
    cy.contains('Create').click();
    cy.visit('http://localhost:3000');
    cy.contains('my first post');
  })
})

