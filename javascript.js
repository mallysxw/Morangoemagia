const perguntas = [
    {
        pergunta: "Qual sua cor favorita?",
        opcoes: [
            {texto: "Vermelho", personagem: "Moranguinho"},
            {texto: "Rosa", personagem: "Cerejinha"},
            {texto: "Roxo", personagem: "Ameixinha"},
            {texto: "Laranja", personagem: "Laranjinha"}
        ]
    },
    {
        pergunta: "O que você mais gosta de fazer?",
        opcoes: [
            {texto: "Ajudar os amigos", personagem: "Moranguinho"},
            {texto: "Se divertir e dançar", personagem: "Cerejinha"},
            {texto: "Inventar coisas novas", personagem: "Ameixinha"},
            {texto: "Cozinhar e criar receitas", personagem: "Laranjinha"}
        ]
    },
    {
        pergunta: "Qual seu estilo de roupa?",
        opcoes: [
            {texto: "Vestido fofo e vermelho", personagem: "Moranguinho"},
            {texto: "Roupas coloridas e animadas", personagem: "Cerejinha"},
            {texto: "Roupas criativas e diferentes", personagem: "Ameixinha"},
            {texto: "Roupas confortáveis e laranjas", personagem: "Laranjinha"}
        ]
    }
];

let perguntaAtual = 0;
let pontuacao = {
    Moranguinho: 0,
    Cerejinha: 0,
    Ameixinha: 0,
    Laranjinha: 0
};

const perguntaEl = document.getElementById("pergunta");
const opcoesEl = document.getElementById("opcoes");
const resultadoEl = document.getElementById("resultado");

function mostrarPergunta() {
    const atual = perguntas[perguntaAtual];
    perguntaEl.textContent = atual.pergunta;
    opcoesEl.innerHTML = "";

    atual.opcoes.forEach(opcao => {
        const botao = document.createElement("button");
        botao.textContent = opcao.texto;
        botao.classList.add("opcao");
        botao.onclick = () => {
            pontuacao[opcao.personagem]++;
            proximo();
        };
        opcoesEl.appendChild(botao);
    });
}

function proximo() {
    perguntaAtual++;
    if(perguntaAtual < perguntas.length) {
        mostrarPergunta();
    } else {
        mostrarResultado();
    }
}

function mostrarResultado() {
    const personagem = Object.keys(pontuacao).reduce((a, b) => pontuacao[a] > pontuacao[b] ? a : b);
    quiz.style.display = "none";
    document.getElementById("proximo").style.display = "none";
    resultadoEl.innerHTML = `<h2>Você seria: ${personagem}!</h2>`;
}

mostrarPergunta();
