// Seleção dos elementos no DOM
const musicaElement = document.getElementById("musica"); // Elemento para exibir o nome da música
const bandaElement = document.getElementById("banda"); // Elemento para exibir o nome da banda/artista
const audioElement = document.getElementById("audio"); // Elemento de áudio para reprodução
const capaElement = document.getElementById("capa"); // Elemento de imagem da capa do álbum
const playButton = document.getElementById("play"); // Botão de play/pause
const voltarButton = document.getElementById("voltar"); // Botão para voltar para a música anterior
const avançarButton = document.getElementById("avançar"); // Botão para avançar para a próxima música
const embaralharButton = document.getElementById("embaralhar"); // Botão para embaralhar a playlist

// Variáveis de controle
let isPlaying = false; // Estado atual de reprodução do áudio (verdadeiro se estiver tocando, falso se estiver pausado)
let isShuffled = false; // Estado de embaralhamento da playlist (verdadeiro se estiver embaralhada, falso se estiver na ordem original)
let index = 0; // Índice da música atual na playlist

// Definição das músicas da playlist com seus detalhes
const playlist = [
    {
        musica: 'AsYouHere',
        banda: 'TrackTribe',
        file: 'As_You_Here'
    },
    {
        musica: 'boomBapFlick',
        banda: 'quincas moreira',
        file: 'boom_Bap_Flick'
    },
    {
        musica: 'cantHide',
        banda: 'TrackTribe',
        file: 'cant_Hide'
    }
];

// Cria uma cópia da playlist para permitir o embaralhamento
let playlistordem = [...playlist]; 

// Função para iniciar a reprodução da música
function playsong() {
    // Altera o ícone do botão de play para pause
    playButton.querySelector('.bi').classList.add('bi-pause-circle-fill');
    playButton.querySelector('.bi').classList.remove('bi-play-circle');
    playButton.querySelector('.bi').classList.add('bi-pause-circle');
    
    // Inicia a reprodução do áudio
    audioElement.play();
    isPlaying = true; // Atualiza o estado de reprodução para verdadeiro
    
    // Adiciona a classe 'start' ao body para mudar a cor de fundo
    document.body.classList.add("start");
}

// Função para pausar a música
function pausesong() {
    // Altera o ícone do botão de pause para play
    playButton.querySelector('.bi').classList.remove('bi-pause-circle-fill');
    playButton.querySelector('.bi').classList.add('bi-play-circle');
    playButton.querySelector('.bi').classList.remove('bi-pause-circle');
    
    // Pausa a reprodução do áudio
    audioElement.pause();
    isPlaying = false; // Atualiza o estado de reprodução para falso
    
    // Remove a classe 'start' do body para resetar a cor de fundo
    document.body.classList.remove("start");
}

// Função para alternar entre play e pause
function playpause() {
    if (isPlaying) {
        pausesong(); // Se estiver tocando, pausa a música
    } else {
        playsong(); // Se estiver pausado, inicia a reprodução da música
    }
}

// Função para iniciar a música selecionada
function iniciarmusica() {
    // Define a imagem da capa da música atual
    capaElement.src = `img/${playlistordem[index].file}.jpg`;
    
    // Define o arquivo de áudio da música atual
    audioElement.src = `audio/${playlistordem[index].file}.mp3`;
    
    // Define o nome da música no elemento correspondente
    musicaElement.innerText = playlistordem[index].musica;
    
    // Define o nome da banda/artista no elemento correspondente
    bandaElement.innerText = playlistordem[index].banda;

    // Se não estiver tocando, inicia a reprodução da música
    if (!isPlaying) {
        playsong();
    }
}

// Função para voltar para a música anterior na playlist
function voltarmusica() {
    // Calcula o índice da música anterior, considerando o ciclo da playlist
    index = (index - 1 + playlistordem.length) % playlistordem.length;
    
    // Inicia a música selecionada
    iniciarmusica();
}

// Função para avançar para a próxima música na playlist
function avançarmusica() {
    // Calcula o índice da próxima música, considerando o ciclo da playlist
    index = (index + 1) % playlistordem.length;
    
    // Inicia a música selecionada
    iniciarmusica();
}

// Função para embaralhar a playlist
function embaralharmusica() {
    if (isShuffled === false) {
        // Se a playlist não está embaralhada, embaralha a playlist e altera o estado para embaralhado
        isShuffled = true;
        arrayembaralhar(playlistordem);
        embaralharButton.classList.add('button-ativado');
    } else {
        // Se a playlist já está embaralhada, retorna à ordem original e altera o estado para não embaralhado
        isShuffled = false;
        playlistordem = [...playlist];
        embaralharButton.classList.remove('button-ativado');
    }
    
    // Reinicia o índice para a primeira música e inicia a nova música com a playlist (embaralhada ou não)
    index = 0;
    iniciarmusica();
}

// Função para embaralhar o array usando o algoritmo Fisher-Yates
function arrayembaralhar(array) {
    let tamanho = array.length;
    while (tamanho > 0) {
        // Gera um índice aleatório
        let randomIndex = Math.floor(Math.random() * tamanho);
        tamanho--;
        
        // Troca os elementos
        [array[tamanho], array[randomIndex]] = [array[randomIndex], array[tamanho]];
    }
}

// Inicializa a primeira música da playlist ao carregar a página
iniciarmusica();

// Adiciona event listeners aos botões
playButton.addEventListener('click', playpause); // Event listener para o botão de play/pause
voltarButton.addEventListener('click', voltarmusica); // Event listener para o botão de voltar música
avançarButton.addEventListener('click', avançarmusica); // Event listener para o botão de avançar música
embaralharButton.addEventListener('click', embaralharmusica); // Event listener para o botão de embaralhar
