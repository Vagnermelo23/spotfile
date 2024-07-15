// Seleção dos elementos no DOM
const musicaElement = document.getElementById("musica"); // Elemento para exibir o nome da música
const bandaElement = document.getElementById("banda"); // Elemento para exibir o nome da banda/artista
const audioElement = document.getElementById("audio"); // Elemento de áudio para reprodução
const capaElement = document.getElementById("capa"); // Elemento de imagem da capa
const playButton = document.getElementById("play"); // Botão de play/pause
const voltarButton = document.getElementById("voltar"); // Botão para voltar para a música anterior
const avançarButton = document.getElementById("avançar"); // Botão para avançar para a próxima música

// Variáveis de controle
let isPlaying = false; // Estado de reprodução do áudio
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
    // Define a capa da música atual
    capaElement.src = `img/${playlist[index].file}.jpg`;
    // Define o arquivo de áudio da música atual
    audioElement.src = `audio/${playlist[index].file}.mp3`;
    // Define o nome da música no elemento correspondente
    musicaElement.innerText = playlist[index].musica;
    // Define o nome da banda/artista no elemento correspondente
    bandaElement.innerText = playlist[index].banda;

    // Altera a cor de fundo do body com base na música atual
   

    // Inicia a reprodução se já estiver tocando
    if (isPlaying === false) {
        audioElement.play();
        document.body.classList.add('start');
        playButton.querySelector('.bi').classList.add('bi-pause-circle-fill');
        playButton.querySelector('.bi').classList.remove('bi-play-circle');
        playButton.querySelector('.bi').classList.add('bi-pause-circle');
        isPlaying = true;
    }
}

// Função para voltar para a música anterior na playlist
function voltarmusica() {
    index = (index - 1 + playlist.length) % playlist.length; // Calcula o índice da música anterior
    iniciarmusica(); // Inicia a música selecionada
}

// Função para avançar para a próxima música na playlist
function avançarmusica() {
    index = (index + 1) % playlist.length; // Calcula o índice da próxima música
    iniciarmusica(); // Inicia a música selecionada
}

// Inicializa a primeira música da playlist ao carregar a página
iniciarmusica();

// Adiciona event listeners aos botões
playButton.addEventListener('click', playpause); // Event listener para o botão de play/pause
voltarButton.addEventListener('click', voltarmusica); // Event listener para o botão de voltar música
avançarButton.addEventListener('click', avançarmusica); // Event listener para o botão de avançar música
