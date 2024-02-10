document.getElementById('clickAqui').addEventListener('click', function(event) {
    event.preventDefault(); // Impedindo o comportamento padrão do link
    trocarFoto(); // Chamando a função para trocar a foto
});

function trocarFoto() {
    var img = document.getElementById('clickAqui');
    var pastaFotos = "./imgs/"; // Caminho para a pasta de fotos
    var fotos = ["foto1.jpg", "foto2.jpg", "foto3.jpg"]; // Lista de nomes das fotos na pasta

    // Gerar um número aleatório para selecionar uma foto diferente
    var indice = Math.floor(Math.random() * fotos.length);
    
    // Montar o caminho completo para a nova foto
    var novaFoto = pastaFotos + fotos[indice];
    
    // Alterar o src da imagem para a nova foto
    img.src = novaFoto;
}

document.getElementById('clickAqui').addEventListener('click', function(event) {
    event.preventDefault(); // Impedindo o comportamento padrão do link
    exibirEmoji(); // Chamando a função para exibir o emoji de coração
});

function exibirEmoji() {
    var emojis = ["❤️", "💖", "💕", "💗", "💞", "😍"]; // Lista de emojis de coração
    var indice = Math.floor(Math.random() * emojis.length); // Selecionar um emoji aleatório da lista
    var emoji = emojis[indice]; // Obtendo o emoji aleatório
    
    var divEmoji = document.getElementById('emojiCoracao');
    divEmoji.textContent = emoji; // Exibindo o emoji na div

    // Definindo uma classe CSS para animar o emoji
    divEmoji.classList.add('animated');

    // Removendo a classe CSS após um tempo para que a animação possa ser repetida
    setTimeout(function() {
        divEmoji.classList.remove('animated');
    }, 1000);
}

