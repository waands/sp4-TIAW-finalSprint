const modulesData = {
  results: [
    {
      id: "1",
      type: "T",
      title: "Criar uma senha forte",
      preview:
        "Uma senha complicada de se quebrar se trata de uma que seja longa, aleatória e complexa. Isso se deve ao fato de os computadores terem se tornado mais eficientes, tornando mais fácil desvendar uma senha pequena e simples.",
      parts: [
        {
          partId: "1",
          partName: "O problema de uma senha longa, aleatória e complexa",
          partText: `O cérebro humano tem dificuldade para se lembrar de uma sequência longa de letras, números e símbolos.`,
        },

        {
          partId: "2",

          partName: "Como resolver o problema da senha enigmática",
          partText: `Utilize algo que você consiga se lembrar, como por exemplo, uma frase que você conhece muito bem ou a letra de uma música que você gosta. A partir disso, basta criar uma espécie de criptografia pessoal, ou seja, uma série de regras para alterar a frase de certa maneira.`,
        },

        {
          partId: "3",

          partName: "Série de regras para alterar a frase",
          partText: `Um exemplo comum que você não deveria usar é trocar letras específicas por números que se pareçam com elas. Apesar de ser uma regra válida, ela já é muito usada. No entanto, seguindo esse mesmo raciocínio, é possível criar regras diferentes e mais aleatórias que essa. É o caso de substituir letras por símbolos aleatórios.<br><p>&emsp;</p>
                
          <p>&emsp;&emsp;• No exemplo da frase do Roberto Carlos: leveimeucadillac<br></p>
          <p>&emsp;&emsp;• Substituindo algumas letras por símbolos:  E → $7, A → 6&<br></p>
          <p>&emsp;&emsp;• Final: l$7v$7im$7uc6&dill6&c<br></p><p>&emsp;</p>

          Isso, além de adicionar caracteres na sua senha, deixa-a mais complexa e difícil de decifrar, mas ao mesmo tempo, fácil para você se lembrar, já que foi escolhida uma frase de sua preferência.<br><p></p>

                Apesar de a frase ser fácil de se lembrar, as regras podem não ser, portanto é importante anotá-la de alguma forma. A maneira mais comum de fazer isso, seria anotar a senha nas notas do celular, no entanto, isso não é seguro. Assim, uma forma de tornar essa prática segura seria criar regras para salvar sua senha, por exemplo, dividir todos os números da senha pela metade, ou se sua senha se tratar de uma frase de música, salvar o nome da música ou o verso anterior nesse local que você vai salvar. É necessário guardar também regras que você utilizou, mas não necessariamente de forma implementada na senha ou na mesma nota do celular.<br><p></p>
                    
                `,
        },

        {
          partId: "4",

          partName: "Opção alternativa",
          partText: `Outra opção é utilizar um gerenciador de senha, como o Dashlane ou o LastPass, que se trata de um programa que armazena todas suas senhas em segurança de forma criptografada, fazendo com que você não precise de se lembrar de cada uma delas, mas apenas da senha mestra para acessá-lo. No entanto, se alguém conseguir acesso à essa senha mestra, ele terá acesso a todas suas outras, portanto, o ideal seria usar a criptografia simples ensinada anteriormente para criar essa senha mestra.`,
        },
      ],
      link: "NULL",
      img: "NULL",
    },

    {
      id: "2",
      type: "T",
      title: "Dar informações mínimas para os sites",
      preview:
        "Algumas companhias maliciosas recolhem informações especiais do seu navegador e então vendem esses dados para outras empresas, os conhecidos data brokers.",
      parts: [
        {
          partId: "1",
          partName: "Tipos de informações que podem ser coletadas",
          partText: `Essas informações podem vir de diversos lugares como:
          <p>&emsp;&emsp;• Histórico de navegação<br></p>
          <p>&emsp;&emsp;• Histórico de compras online<br></p>
          <p>&emsp;&emsp;• Dados do cartão de crédito<br></p>
          <p>&emsp;&emsp;• Dados das redes sociais<br>&emsp;</p>

            E, as informações coletadas são diversas, como:
            <p>&emsp;&emsp;• Seu nome completo<br></p>
            <p>&emsp;&emsp;• Endereço de residência<br></p>
            <p>&emsp;&emsp;• Número de telefone<br></p>
            <p>&emsp;&emsp;• Endereço de email<br></p>
            <p>&emsp;&emsp;• Idade e gênero<br></p>
            <p>&emsp;&emsp;• Ocupação<br></p>

            Essas empresas coletam esses dados e então criam um perfil de usuário e vendem essas informações para outras empresas.
            `,
        },

        {
          partId: "2",
          partName: "Como verificar e se precaver desses perigos",
          partText: `Apesar desse iminente perigo há formas de verificar se suas informações foram vazadas e de contornar essa situação. Para saber se seus dados estão em algum desses bancos de dados maliciosos, é possível utilizar serviços da internet que monitoram essas empresas tanto na web, como na dark web.<br><p></p>
            
            <p>O site: https://haveibeenpwned.com faz esse tipo de verificação.<br></p>
            
            <p>Em vista de evitar ser rastreado, há algumas configurações que podem ajudar a solucionar esse problema.<br></p>

            <p>&emsp;&emsp;• De forma geral, é sugerido apagar todos os cookies e dados de sites quando o navegador for fechado.<br></p>
            <p>&emsp;&emsp;• Não salvar contas e senhas de sites no navegador.<br></p>
            <p>&emsp;&emsp;• Limpar o histórico de navegação quando o navegador for fechado.<br></p>
            <p>&emsp;&emsp;• Tornar um sistema de busca que não rastreie suas pesquisas ao utilizar ele como o padrão (sugestão: DuckDuckGo).<br></p>
            Caso algum site precise de utilizar os cookies para realizar alguma ação, basta clicar no canto superior esquerdo, antes do link do site, e aceitar o uso de cookies por aquela página.
            `,
        },

        {
          partId: "3",
          partName: "Sugestões de navegadores",
          partText: `É sugerido o uso do navegador Firefox, Edge ou Brave, devido à sua grande possibilidade de customização, foco e competência em relação à segurança do usuário.`,
        },
      ],
      link: "https://haveibeenpwned.com",
      img: "./imgs/navigatorSuggestion.png",
    },

    {
      id: "3",
      type: "T",
      title: "Criar múltiplos emails",
      preview:
        "Ao utilizar apenas um email para todas as suas necessidades, além de que sua caixa de entrada ficará desorganizada, se de alguma forma descobrirem a senha daquele email, você terá todas as suas contas vazadas.",
      parts: [
        {
          partId: "1",
          partName: "Solução para o problema de ter apenas um email",
          partText: `Isso é um problema, com uma solução fácil de certa forma, que seria criar múltiplos emails. Fazendo isso, você poderia ter por exemplo, um email apenas para compras online, um para coisas relacionadas ao trabalho, um para as redes sociais e um para coisas pessoais. Dessa forma, você estará melhorando sua segurança online e a sua privacidade.

            Se algum desses emails for hackeado, então só uma parte dos seus dados poderá ser roubada.
            `,
        },

        {
          partId: "2",
          partName: "Facilitando essa resolução",
          partText: `Apesar de parecer uma medida extrema, ela não precisa de ser isso tudo, por exemplo, você pode usar algo do tipo: faustosilvacompras@... e o mesmo para as outras contas, e a senha utilizar uma pequena variação das regras entre elas. `,
        },

        {
          partId: "3",
          partName: "Benefícios dessa medida",
          partText: `Assim, você terá uma nova camada de segurança digital e terá sua caixa de entrada organizada por categorias, facilitando se você quiser procurar um email antigo.`,
        },
      ],
      link: "NULL",
      img: "NULL",
    },
  ],
};

const showModulesCards = () => {
  let dadosPartes = "";

  let dadosHTML = "";

  for (let size = 0; size < modulesData.results.length; size++) {
    let partsSize = modulesData.results[size].parts.length;

    for (i = 0; i < partsSize; i++) {
      const part = modulesData.results[size].parts[i];
      dadosPartes += `
        <!-- ----------parte ${part.partId}---------- -->
                <a class="col-5 col-lg-4" href="module.html?id=${part.partId}">
                  <button type="button" class="btn-outline-* btn col-12">
                    <div class="accordionContent">
                      <span class="accPartTitle">PARTE ${part.partId}:</span>
                      <span class="accPartCont"
                        >${part.partName}
                      </span>
                    </div>
                  </button></a
                >
        `;
    }

    const module = modulesData.results[size];
    dadosHTML += `

    <!-- --------------box1-------------- -->
    <div class="container col-11 col-md-8">
      <div class="row">
        <div class="contentBox align-self-center col-12">
          <div class="content">
            <div class="contentTitle row">
              <h3>${module.title}</h3>
            </div>
            <div class="contentSinopse row">
              <span
                >${module.preview}</span
              >
            </div>
            <div class="row">
              <div class="btns col-7 col-md-6">
                <div class="row">
                  <a class="col-6 col-lg-4" href="module.html?id=${module.id}">
                    <button
                      type="button"
                      class="contentButtom btn btn-outline-* col-12"
                    >
                      Iniciar
                    </button></a
                  >
                  <div
                    class="accordion accordion-flush col-6 col-lg-4"
                    id="accordionFlushExample"
                  >
                    <div>
                      <button
                        class="collapsed contentButtom btn btn-outline-* col-12"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapse${module.id}"
                      >
                        <!--important to change the data-bs-target with the id of the accordion-->
                        Partes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="info col-5">
                <span class="contentSize">${module.parts.length} PARTES</span>
                <span class="contentDate">Atualizado a 3 dias</span>
              </div>
            </div>
          </div>
        </div>
        <div
          id="flush-collapse${module.id}"
          class="accordion-collapse collapse"
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"
        >
          <!--important to change the data-bs-target with the id of the accordion-->
          <div class="accordion-body">
            ${dadosPartes}
          </div>

          <!-- end content part-->
        </div>
      </div>
    </div>
    <!-- box content -->
    
    `;
    dadosPartes = "";
  }
  document.getElementById("modulesCard").innerHTML = dadosHTML;
};

const showModulesContent = () => {
  let dadosPartes = "";

  let dadosHTML = "";

  const params = new URLSearchParams(location.search);

  let id = params.get("id");

  let partsSize = modulesData.results[id - 1].parts.length;

  for (i = 0; i < partsSize; i++) {
    const part = modulesData.results[id - 1].parts[i];
    dadosPartes += `
      <div class="subtext" style="margin-bottom: 1.5em">
      <p></p>
      <p></p>

      <h3>${part.partName}</h3>
      <span class="subtext">
        ${part.partText}
      </span>
    </div>
        `;
  }

  const module = modulesData.results[id - 1];

  let link = "";
  if (module.link != "NULL") {
    link += `
      <h5>Anexos</h5>
        <div class="Anexos">
          <a href="${module.link}"
            >•LINK</a
          >
        </div>
      `;
  }

  let images = "";
  if (module.img != "NULL") {
    images += `
      <p></p>
        <div class="images col-8 col-md-10 col-sm-12">
          <img src=${module.img} style="width: 100%; margin: 5px;">
        </div>
        <p></p>
      `;
  }

  dadosHTML += `
          <div class="contentTitle row">
                <h2 style="font-size: xxx-large; font-weight: 400">${module.title}</h2>
              </div>
              <div class="contentSinopse row">
                <div id="intro" style="margin-bottom: 1.5em">
                 <span >
                ${module.preview}
                </span>
                </div>

                ${dadosPartes}

                ${images}

                <div class="col-8"></div>
                <button
                  type="button"
                  class="contentButtom btn btn-outline col-4"
                >
                  Proximo
                </button>

                ${link}
                
              </div>
    `;
  dadosPartes = "";

  document.getElementById("moduleContent").innerHTML = dadosHTML;
};

if (window.location.pathname == "/modules.html") {
  document.body.onload = showModulesCards;
} else if (window.location.pathname == "/module.html") {
  document.body.onload = showModulesContent;
}
