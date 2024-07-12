const musicaElement = document.getElementById("musica"); // Seleciona o elemento com id "musica"
const bandaElement = document.getElementById("banda"); // Seleciona o elemento com id "banda"
const audioElement = document.getElementById("audio"); // Seleciona o elemento com id "audio"
const capaElement = document.getElementById("capa"); // Seleciona o elemento com id "capa"
const playButton = document.getElementById("play"); // Seleciona o elemento com id "play"
const voltarButton = document.getElementById("voltar"); // Seleciona o elemento com id "voltar"
const avançarButton = document.getElementById("avançar"); // Seleciona o elemento com id "avançar"

// Definição das músicas da playlist com seus respectivos detalhes
const AsYouHere = {
    musica: 'AsYouHere',
    banda: 'TrackTribe',
    file: 'As_You_Here'
};
const boomBapFlick = {
    musica: 'boomBapFlick',
    banda: 'quincas moreira',
    file: 'boom_Bap_Flick'
};
const cantHide = {
    musica: 'cantHide',
    banda: 'TrackTribe',
    file: 'cant_Hide'
};

let isPlaying = false; // Variável para controlar o estado de reprodução
let index = 0; // Índice inicial da música que será reproduzida
const playlist = [AsYouHere, boomBapFlick, cantHide]; // Array que contém todas as músicas da playlist

// Função para iniciar a reprodução da música
function playsong() {
    playButton.querySelector('.bi').classList.add('bi-pause-circle-fill'); // Altera o ícone do botão de play para indicar que a música está tocando
    playButton.querySelector('.bi').classList.remove('bi-play-circle'); // Remove o ícone de play
    playButton.querySelector('.bi').classList.add('bi-pause-circle'); // Adiciona o ícone de pause
    audioElement.play(); // Inicia a reprodução do áudio
    isPlaying = true; // Atualiza o estado de reprodução para verdadeiro
}

// Função para pausar a música
function pausesong() {
    playButton.querySelector('.bi').classList.remove('bi-pause-circle-fill'); // Remove o ícone de pause
    playButton.querySelector('.bi').classList.add('bi-play-circle'); // Adiciona o ícone de play
    audioElement.pause(); // Pausa a reprodução do áudio
    isPlaying = false; // Atualiza o estado de reprodução para falso
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
    capaElement.src = `img/${playlist[index].file}.jpg`; // Define a capa da música atual
    audioElement.src = `audio/${playlist[index].file}.mp3`; // Define o arquivo de áudio da música atual
    musicaElement.innerText = playlist[index].musica; // Define o nome da música no elemento com id "musica"
    bandaElement.innerText = playlist[index].banda; // Define o nome da banda/artista no elemento com id "banda"
    
    // Inicia a reprodução se já estiver tocando
    if (isPlaying) {
        audioElement.play();
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

iniciarmusica(); // Inicializa a primeira música da playlist ao carregar a página

// Adiciona event listeners aos botões
playButton.addEventListener('click', playpause); // Event listener para o botão de play/pause
voltarButton.addEventListener('click', voltarmusica); // Event listener para o botão de voltar música
avançarButton.addEventListener('click', avançarmusica); // Event listener para o botão de avançar música
