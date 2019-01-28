/// <reference types="Cypress" />
describe('My test', () => {

    /* TestRail = C1425
     * You could easily document this the way
     * that you would any other testing code
     */
    it('should go to my website', () => {
        cy.visit('/');
        cy.contains('Nicholas Brandt');
    });
})

describe('My website', () => {
    

    // Navigate to my site to start each test
    beforeEach(() => {
        cy.visit('/');
    })

    /* TestRail = C1426
     * Verify that my site redirects from http to https
     */
    it('should redirect to https', () => {
        expect(cy.url().should('include', 'https://'));
    });


    /* TestRail = C1427
     * Verify that my site contains some social links
     */
    it('should have social links', () => {
        cy
        .get('section.icons-container')
        .should('be.visible')
    });


    /* TestRail = C1428
     * Verify that the Github link works
     */
    it('should link a user to my Github', () => {
        cy
        .get('a[href*="github"]')
        .invoke('attr', 'href')
        .then( (href) => {
            cy.request(href)
        })
    });

    /* TestRail = C1429
     * Verify that the nav menu is visible
     */
    it('should contain a navigation menu', () => {
        cy
        .get('nav')
        .should('be.visible');
    })

    /* TestRail = C1430
     * Verify that the nav items are numbered
     */
    it('should have numbered nav items', () => {

        // Check there are five list items
        cy
        .get('li.list-item')
        .its('length')
        .should('eql', 5)
        
        // Check that each nav item is numbered
        for (var i = 0; i < 5; i++) {
            cy
            .get('li.list-item')
            .contains(i+1);
        }
        
    })
})