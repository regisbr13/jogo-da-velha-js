let cont = 0        // contador de jogadas realizadas
const pegarElemento = (j) => document.getElementById(`${j}`).innerHTML      // recebe um elemento recebendo um id

const mostrarVencedor = (cont) => {         // mostra o vencedor da partida: Jogador 1 ou 2
    if(cont % 2 === 0) {
        document.getElementById('vencedor').innerHTML = '<p class="vencedor">O JOGADOR <strong>2</strong> GANHOU!<p>'
        document.getElementById('botao').innerHTML = '<button class="botao" onclick="novaPartida()">NOVA PARTIDA</button>'
    } else {
        document.getElementById('vencedor').innerHTML = '<p class="vencedor">O JOGADOR <strong>1</strong> GANHOU!<p>'
        document.getElementById('botao').innerHTML = '<button class="botao" onclick="novaPartida()">NOVA PARTIDA</button>'

    }
}

const verificaLinha = (j, cont) => {        // verifica se alguém venceu em uma linha
    if(pegarElemento(j) !== '') {
        if(pegarElemento(j) === pegarElemento(j+1) && pegarElemento(j) === pegarElemento(j+2)) {
           mostrarVencedor(cont);
        }
    }
}

const verificaColuna = (j, cont) => {       // verifica se alguém venceu em uma coluna
    if(pegarElemento(j) !== '') {
        if(pegarElemento(j) === pegarElemento(j+3) && pegarElemento(j) === pegarElemento(j+6)) {
            mostrarVencedor(cont);
        }
    }
}

const verificaDiagonais = (cont) => {       // verifica se alguém venceu em uma diagonal
    if(pegarElemento(1) !== '') {
        if(pegarElemento(1) === pegarElemento(5) && pegarElemento(1) === pegarElemento(9)) {
            mostrarVencedor(cont);
        }
    } else if(pegarElemento(3) !== '') {
        if(pegarElemento(3) === pegarElemento(5) && pegarElemento(3) === pegarElemento(7)) {
            mostrarVencedor(cont);
        }
    }
}

const fazerJogada = (i) => {                // execução das jogadas recebendo o id de uma célula
    let celula = document.getElementById(`${i}`)
    let jogadorAtual = document.getElementById('jogadorAtual')
    let k = 1                               // percorrerá as linhas
    let l = 1                               // percorrerá as colunas
    if(celula.innerHTML === '') {           // Verifica se a célula está vazia para inserir a jogada somente nesta condição
        if(cont % 2 === 0) {
            celula.innerHTML = 'X'                  // Faz a jogada, começando sempre com o jogador 1: 'X'
            jogadorAtual.innerHTML = 'Jogador 1'    // Exibe o jogador atual na tela
            cont++                                  // Contabiliza a jogada realizada    
        } else {
        celula.innerHTML = 'O'                      // Faz a jogada do jogador 2: 'O'
            jogadorAtual.innerHTML = 'Jogador 2'
            cont++                              
        }

        do {                            // A cada jogada realizada, verifica se há um vencedor
            verificaLinha(k, cont)
            verificaColuna(l, cont)
            verificaDiagonais(cont)
            k += 3
            l += 1
        } while(k < 8)
    }

    if(cont === 9) {                    // Caso o número de jogadas realizadas chegue a 9, significa que houve empate: 'Deu velha'
        document.getElementById('vencedor').innerHTML = '<p class="vencedor">DEU VELHA!<p>'
        document.getElementById('botao').innerHTML = '<button class="botao" onclick="novaPartida()">NOVA PARTIDA</button>'
    }
}

const novaPartida = () => location.reload()     // Reinicia uma nova partida, recarregando a página a partir de um botão