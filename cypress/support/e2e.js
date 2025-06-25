// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// // support/e2e.js
// let hydrationErrors = [];

// Cypress.on('uncaught:exception', (err) => {
//   if (err.message.includes('Minified React error #425')) {
//     const errorInfo = {
//       message: err.message,
//       componentStack: err.componentStack,
//       timestamp: new Date().toISOString()
//     };
//     hydrationErrors.push(errorInfo);
//     cy.writeFile('cypress/logs/hydration-errors.json', JSON.stringify(hydrationErrors, null, 2));
//     return false;
//   }
//   return true;
// });

// beforeEach(() => {
//   cy.window().then((win) => {
//     cy.stub(win.console, 'error').log(false).as('consoleError');
//   });
// });

// afterEach(() => {
//   cy.get('@consoleError').then((errors) => {
//     errors.getCalls().forEach(call => {
//       if (call.args[0].includes('425')) {
//         cy.log('Detail Error Hydration:', call.args);
//       }
//     });
//   });
// });


// cypress/support/e2e.js
Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes('Text content does not match') || 
      err.message.includes('Minified React error #425')) {
    console.warn('Suppressed hydration error:', err.message);
    return false; // Prevent test failure
  }
  return true;
});

