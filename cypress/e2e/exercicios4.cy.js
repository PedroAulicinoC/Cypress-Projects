describe('Exercícios 4', () =>{
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwM2VkYzZkNS04ODI2LTQ3NzktYjMwNy0xMzVhY2Q5MTJmMGYiLCJhZG9wdGVyTmFtZSI6IlN0ZXZlIE1pbmVjcmFmdCIsImlhdCI6MTc2OTUyNDM1NywiZXhwIjoxNzY5NzgzNTU3fQ.RHjxv_UE5ZwUpWj52ARj8-hdZ4Nkl-7OqJaEzVFksDw`

    it ('API username', () => {
        cy.request({
            method: 'GET' ,
            url: 'https://adopet-api-i8qu.onrender.com/adotante/perfil/03edc6d5-8826-4779-b307-135acd912f0f',
            headers: { authorization }
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('perfil')
            expect(res.body.perfil.nome).to.be.equal('Steve Minecraft')
        })
    })
})