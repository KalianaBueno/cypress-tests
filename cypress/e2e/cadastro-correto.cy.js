describe('Pagina de cadastro', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
  })


  it('Deve preencher os campos do formulário corretamente para cadastrar novo usuário', () => {

    cy.cadastrar('Marjorie Anoquevem','marjorie@email.com', 'Senha123')
  })
});