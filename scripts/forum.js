//arrow functions simples
bt2.onclick = () =>
  alert("essa página está sendo desenvolvida por outro aluno");

//dados de discussoes que foram iniciadas como teste
const dadosIniciais = {
  discussoes: [
    {
      id: 0,
      title: "teste de discussão para administrador",
      username: "@administrador",
      description: "descrição criada para teste de administradores.",
    },
    {
      id: 1,
      title: "title test",
      username: "@user",
      description: "test description",
    },
  ],
  respostas: [
    {
      id: 0,
      username: "@administrador",
      resposta: "teste de resposta da administração.",
      typeSolution: "adm",
    },
    {
      id: 1,
      username: "@user",
      resposta: "reply.",
      typeSolution: "type",
    },
  ],
};

//carrega os testes adm e user
window.onload = () => {
  document.querySelector("#pubContent").innerHTML = "";

  for (i = 0; i < dadosIniciais.discussoes.length; i++) {
    let pub = dadosIniciais.discussoes[i];
    let resp = dadosIniciais.respostas[i];
    document.querySelector("#pubContent").innerHTML += `  
    <h2 id="headingOne">
      <button class= "botao col-12" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${pub.id}" aria-expanded="true" aria-controls="collapseOne">
          <div class = "dados col-12">
              <p class = "titled">${pub.title}</p>
              <p class ="username">${pub.username}</p>
              <p class ="description">${pub.description}</p>
          </div>
      </button>
    </h2>
    <div id="collapse${pub.id}" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
    
    <div class="ab">
            <p class ="respostas">Respostas</p>
            <div class="rusers">

              <div class = "blockrep">
                <p class = "rdescription">${resp.description}</p>
                <span class = "username">${resp.username}</span><span class=" ts">  ${resp.typeSolution}</span>
              </div>
              
              <div class = "blockrep">
                <p class = "rdescription">${resp.description}</p>
                <span class = "username">${resp.username}</span><span class=" ts"> ${resp.typeSolution}</span>
              </div>
              
            </div>
          </div>

    </div>

    `;
    /*document.querySelector("#collapseOne").innerHTML = '' 
    for(j=0; j<dadosIniciais.respostas.length; j++)
  {
    let resp = dadosIniciais.respostas[j];
    document.querySelector("#pubContent").innerHTML += `
          <div class="ab">
            <p class ="respostas">Respostas</p>
            <div class="rusers">

              <div class = "blockrep">
                <p class = "rdescription">${resp.description}</p>
                <span class = "username">${resp.username}</span><span class=" ts">  ${resp.typeSolution}</span>
              </div>
              
              <div class = "blockrep">
                <p class = "rdescription">${resp.description}</p>
                <span class = "username">${resp.username}</span><span class=" ts"> ${resp.typeSolution}</span>
              </div>
              
            </div>
          </div>
           `  
   }*/
  }
};
