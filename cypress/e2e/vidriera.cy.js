/// <reference types="cypress"/>
describe('Cambio de plan', () => {
  beforeEach(() => {
    cy.visit('https://tiendacerti.hogar.m2c.tmoviles.com.ar/cambiodeplan/')
  })
  for (let index = 0; index < 99; index++) {
    it(`Se prueba la vidriera de CDP ciclo ${index}`, () => {
      
        cy.visit('https://tiendacerti.hogar.m2c.tmoviles.com.ar/cambiodeplan/')
        cy.get('#filteredLines').type(2616874338)//este numero tiene un plan AGR, CDP no tiene bonif. a AGR
        cy.get('#ldpcdpmovileline').click({force: true}) 
        cy.get('#filteredLines2').type(111111)
        cy.get('#ldpcdpmovilelineverification').click({force: true})
        cy.wait(10000)
      //cy.contains('WhatsApp gratis').should('be.visible')
      //cy.contains('Hablá gratis a cualquier compañía').should('be.visible')
        cy.contains('6 Gigas').should('be.visible')
        

      })

      }
      
    

    







  })