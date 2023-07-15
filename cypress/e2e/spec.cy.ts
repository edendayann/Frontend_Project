const username:string = 'e';
const password = 'e';
const title = "hello";
const contant = "my new post";
//test number 1
// describe('login page test', () => { 
//   it('should log in a user', function () {
//     cy.login(username, password)
//   })
// })


//test number 2
// describe('sign up and add a post test', () => {
//   const Username = 'w';
//   const Password = 'w';
//   const Email = 'w@gmail.com';
//   const Name = 'w';

//   it('should sign up a user and add a post', () => {
//     cy.visit('/');
//     cy.contains('Sign Up').click();
//     cy.url().should('include', 'signUp')
//     cy.get('input[placeholder="Full Name"]').as('nameInput');
//     cy.get('@nameInput').type(Name);
//     cy.get('@nameInput').should('have.value', Name);

//     cy.get('input[placeholder="Email"]').as('emailInput');
//     cy.get('@emailInput').type(Email);
//     cy.get('@emailInput').should('have.value', Email);

//     cy.get('input[placeholder="User Name"]').as('usernameInput');
//     cy.get('@usernameInput').type(Username);
//     cy.get('@usernameInput').should('have.value', Username);

//     cy.get('input[placeholder="Password"]').as('passwordInput');
//     cy.get('@passwordInput').type(Password);
//     cy.get('@passwordInput').should('have.value', Password);

//     cy.contains('Sign Me Up!').click();
//     cy.create("hello", "my post");
//     cy.wait(2000)
//     cy.contains('hello');
//   })
// })


//test number 3
// describe('logging out', () => { 
//   beforeEach(() => { // Perform the login before each test
//     cy.login('e', 'e');
//   });
  
//   it('should log out a user', function () {
//     cy.wait(2000); 
//     cy.get('button:contains("Log out")').click();
//     cy.wait(2000);
//     cy.get('div.right').should('not.contain', 'username');
//   })
// })


//test number 4
// describe('publishing post', () => { 
//   beforeEach(() => { // Perform the login before each test
//     cy.login('e', 'e');
//     cy.create(title, contant);
//     cy.wait(2000);
//   });
//   it('should publish a post from drafts', function () {
//     cy.visit('/drafts?username=' + username);
//     cy.get('.post').then(($elements) => {
//       if ($elements.length > 0) {
//         cy.get('.post:first').click();
//         cy.get('button:contains("Publish")').click();
//         cy.wait(2000);
//         cy.get('h2:first').invoke('text').then((text) => {
//           cy.visit('/');
//           cy.contains(text);
//         });
//       } else {
//         cy.log('There are no drafts');
//       }
//     });
//   });
// })


 //test number 5
//  describe('deleting post from drafts', () => { 
//   beforeEach(() => { // Perform the login before each test
//     cy.login('e', 'e');
//     cy.create(title, contant);
//     cy.wait(2000);
//   });
//   it('should delete a post from drafts', function () {
//     cy.get('.post').then(($elements) => {
//       if ($elements.length > 0) {
//         cy.get('.post:last').click();
//         cy.get('button:contains("Delete")').click();
//         cy.wait(1000);
//         cy.visit('/drafts?username=' + username);
//         cy.get('h2').invoke('text').then((text) => {
//           cy.contains(text).should('not.exist');
//         });
//       } else {
//         cy.log('There are no drafts');
//       }
//     });
//   });
// })
