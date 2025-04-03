//Estudo de massa de dados 

//importa o json com os dados criados em fixtures
import { usuarios } from '../fixtures/usuarios.json'


describe('Página de cadastro', () => {
    beforeEach(() => {
         cy.visit('https://adopet-frontend-iota.vercel.app/');
         cy.get('[data-test="register-button"]').click();
             
    })
       usuarios.forEach(usuario => { //faz a iteração com cada usuário do array
        it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {      
            cy.get('[data-test="input-name"]').clear().type(usuario.name); 
            cy.get('[data-test="input-email"]').clear().type(usuario.email);
            cy.get('[data-test="input-password"]').clear().type(usuario.password);
            cy.get('[data-test="input-confirm-password"]').clear().type(usuario.password);
            cy.get('[data-test="submit-button"]').click();
        })
     })          
})

//clear() serve para limpar o campo antes de usar
//usuario.nome -> pega a propriedade específica do usuário no array