document.addEventListener('DOMContentLoaded', function () {
    
    // Adiciona um leve atraso na exibição do texto inicial
       digitarMensagem('mensagem1', 'Você está diante de um cofre seguro! ', 75, 3000);
      
       // Aguarda 6000 milissegundos (6 segundos) antes de exibir a próxima mensagem
      setTimeout(function () {
          digitarMensagem('mensagem2', ' Seu objetivo: encontrar a combinação certa...', 75, 90000);
      }, 6000);
                
    // Variável identificar se o jogo está iniciado ou não
      var jogoIniciado = false;
    
      // Adiciona um ouvinte de evento para detectar a tecla Enter
      document.addEventListener('keypress', function (event) {
          // Verifica se a tecla pressionada é Enter (código 13) e se o jogo não foi iniciado
          if (event.key === 'Enter' && !jogoIniciado) {
              // Chama a função startGame ao pressionar Enter apenas se o jogo não foi iniciado
              startGame();
              // Atualiza o estado do jogo
              jogoIniciado = true;
          }
  });
      document.addEventListener('click', function () {
          // Chama a função startGame ao clicar em qualquer lugar da tela apenas se o jogo não foi iniciado
          if (!jogoIniciado) {
              startGame();
              // Atualiza o estado do jogo
              jogoIniciado = true;
            
        // Ocultar a div 'skip' 
        var skipElement = document.getElementById('skip');
        if (skipElement) {
            skipElement.style.display = 'none';
        }
             // Ocultar a div 'abertura'
          var abertura1Element = document.getElementById('abertura');
          if (abertura1Element) {
              abertura1Element.style.display = 'none';
          }
          }
      });
    
  });
  
   // Variável para armazenar o número secreto
    var numeroSecreto;
   // Atribui a quantidade de tentativas
    var tentativa = 10
  
  // Função para exibir mensagens uma de cada vez
  function digitarMensagem(elementId, message, speed, pause) {
      var elemento = document.getElementById(elementId);
      if (elemento) {
          var caracteres = message.split('');
          caracteres.forEach(function (caractere, index) {
              setTimeout(function () {
                  elemento.innerHTML += caractere;
                
                  // Se for o último caractere, adicione uma pausa antes de iniciar a próxima mensagem
                  if (index === caracteres.length - 1) {
                      setTimeout(function () {
                          elemento.innerHTML = ''; // Limpa o conteúdo antes da próxima mensagem
                      }, pause);
                  }
              }, speed * index);
          });
      }
  }
    
  function mostrarOutput(message) {
      var outputDiv = document.getElementById('output');
      outputDiv.innerHTML = ''; // Limpa o conteúdo atual do elemento
      outputDiv.innerHTML += '<p>' + message + '</p>';
  }  
  
  function startGame() {
   // Apresentar a tela de Menu 
   
    showSection('TelaMenu');
   
  // Função para gerar o número secreto entre 1 e 100
  function gerarNumeroSecreto() {
      numeroSecreto = Math.floor(Math.random() * 100) + 1;
  }
  
  // Chame essa função quando iniciar o jogo para definir o número secreto
  gerarNumeroSecreto();
  }
  
  function newGame() {
      console.log("Tela de Novo Jogo")
  }
  
  function processarPalpite() {
      // Obtenha o valor inserido no campo de entrada
      var palpiteInput = document.getElementById('palpite');
      var palpite = parseInt(palpiteInput.value);
    
      // Verifique se o palpite é válido
      if (!isNaN(palpite) && palpite >= 1 && palpite <= 100) {
          // Lógica de comparação com o número secreto
          if (palpite === numeroSecreto) {
              mostrarOutput("A manivela gira e o cofre se abre. O número " + numeroSecreto + " era o correto!");
              mostrarOutput("Você desvendou o mistério! Pontuação: " + tentativa);
              
              // Pare a execução ou faça outra coisa, dependendo do seu jogo
          } else if (palpite > numeroSecreto) {
              mostrarOutput("Você ouve um clique, mas você precisa mirar mais baixo que " + palpite + "...");
              tentativa = tentativa - 1;
              //Util.aguarde(500);
              if (tentativa === 0) {
                  mostrarOutput("Infelizmente você esgotou suas chances. O cofre permanece fechado.");
                  //Util.aguarde(500);
                  mostrarOutput("----- Game Over! -----");
                  
                  // Pare a execução ou faça outra coisa, dependendo do seu jogo
              }
          } else {
              mostrarOutput("O cofre responde com um leve som, mas você precisa mirar mais alto que " + palpite + "...");
              tentativa = tentativa - 1;
              //Util.aguarde(500);
              if (tentativa === 0) {
                  mostrarOutput("Infelizmente você esgotou suas chances. O cofre permanece fechado.");
                  //Util.aguarde(500);
                  mostrarOutput("----- Game Over! -----");
                  
                  // Pare a execução ou faça outra coisa, dependendo do seu jogo
              }
          }
      } else {
          // Caso o palpite não seja válido, exiba uma mensagem de erro
          mostrarOutput("Por favor, insira um palpite válido entre 1 e 100.");
      }
  
        // Limpe o campo de entrada após processar o palpite
        palpiteInput.value = "";    
  }
  
  function rules() {
      console.log("Tela de Regras")
  }
  
  function credits() {
      console.log("Tela de créditos")
  }
  
  function exit(){
    console.log("Tela de saída")
  }
  
  function sairDoJogo(){
    console.log("O jogo foi encerrado!");
  }
  
  function showSection(sectionId) {
      // Oculta todas as seções
      var secoes = document.querySelectorAll('.secao');
      secoes.forEach(function(secao) {
          secao.style.display = 'none';
      });
  
    // Exibe a seção desejada
      var secaoDesejada = document.getElementById(sectionId);
      if (secaoDesejada) {
          secaoDesejada.style.display = 'block';
      }
  }
  
  function voltarAoMenu() {
    showSection('TelaMenu');
      
  } 

