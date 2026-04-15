const projetosCustomizados = {
    "project-memory-simulator": {
        imagem: "imagens/projeto1.png",
        descricao: `Simulador visual do funcionamento da memória RAM feito em C++, desenvolvido para fins educacionais.`
    },
    "JogosJava": {
        imagem: "imagens/projeto2.png",
        descricao: `2 mini jogos desenvolvidos em Java, incluindo caça-palavras e lógica de interação com o usuário.`
    },
    "sistema-de-gestao-de-frota": {
        imagem: "imagens/projeto3.png",
        descricao: `Aplicação Java com Maven e integração com banco de dados para gestão de frota.`
    },
    "JogoMemoria": {
        imagem: "imagens/projeto4.png",
        descricao: `Jogo da memória com API em PHP e uso de fetch(). Requer servidor local como XAMPP.`
    },
    "gerenciador-tarefa": {
        imagem: "imagens/projeto5.png",
        descricao: `Gerenciador de tarefas com API em PHP para salvar e carregar dados. Requer servidor local.`
    },
    "gestao_frota": {
        imagem: "imagens/projeto6.png",
        descricao: `Aplicação mobile em Dart/ Flutter baseada em sistema de gestão de frota, focada no gerenciamento de veículos e operações.Projeto em desenvolvimento.`
    }
};

async function carregarProjetos() {
    const usuario = "GabrielLucim";

    const response = await fetch(`https://api.github.com/users/${usuario}/repos`);
    const repos = await response.json();

    const container = document.getElementById("projetos-container");

    repos.forEach(repo => {
        if (projetosCustomizados[repo.name]) {

            const dados = projetosCustomizados[repo.name];

            const card = document.createElement("div");
            card.className = "projeto-card";

            card.innerHTML = `
                <img src="${dados.imagem}" alt="${repo.name}">
                <h3>${repo.name}</h3>
                <p>${dados.descricao}</p>
                <a href="${repo.html_url}" target="_blank">Acessar</a>
            `;

            container.appendChild(card);
        }
    });
}

carregarProjetos();


/* INTERNACIONALIZAÇÃO */

const textos = {
    pt: {
        menu_sobre: "Sobre",
        menu_habilidades: "Habilidades",
        menu_educacao: "Educação",
        menu_contato: "Contato",
        menu_projetos: "Projetos",

        perfil_texto: "Sou estudante do Instituto Federal do Paraná, atuo na área de Tecnologia da Informação como desenvolvedor em projetos.",

        sobre_titulo: "Sobre mim",
        sobre_texto: "Tenho 19 anos, estudo programação desde 2021, possuo ótima comunicação, conhecimento e experiência pedagógica com a aplicação de minicursos, além de experiência como desenvolvedor",

        habilidades_titulo: "Habilidades",
        habilidades_linguagens: "<strong>Linguagens com experiência e em estudo:</strong><br>Java, Python, Dart/Flutter, SQL, HTML, JavaScript, CSS, React e C++",
        habilidades_ferramentas: "<strong>Ferramentas e Tecnologias:</strong><br>Git, GitHub, Maven, XAMPP, Flutter, VS Code, Eclipse e PostgreSQL",
        habilidades_conhecimentos: "<strong>Conhecimentos:</strong><br>Programação Orientada a Objetos, Estruturas de Dados, Desenvolvimento Web, Integração com APIs, Desenvolvimento para Dispositivos Móveis e Construção de Software",

        educacao_titulo: "Educação",
        educacao_ifpr: "Instituto Federal do Paraná (IFPR) – Campus Paranavaí<br>Engenharia de Software (Integral)<br>Cursando",
        educacao_colegio: "Colégio Paroquial<br>Ensino Médio Completo",

        contato_titulo: "Contato",
        projetos_titulo: "Projetos"
    },

    en: {
        menu_sobre: "About",
        menu_habilidades: "Skills",
        menu_educacao: "Education",
        menu_contato: "Contact",
        menu_projetos: "Projects",

        perfil_texto: "I am a student at Instituto Federal do Paraná, working in Information Technology as a developer.",

        sobre_titulo: "About me",
        sobre_texto: "I am 19 years old, studying programming since 2021 with experience as a developer.",

        habilidades_titulo: "Skills",
        habilidades_linguagens: "<strong>Languages:</strong><br>Java, Python, Dart/Flutter, SQL, HTML, JavaScript, CSS, React and C++",
        habilidades_ferramentas: "<strong>Tools and Technologies:</strong><br>Git, GitHub, Maven, XAMPP, Flutter, VS Code, Eclipse and PostgreSQL",
        habilidades_conhecimentos: "<strong>Knowledge:</strong><br>Object-Oriented Programming, Data Structures, Web Development, API Integration, Mobile Development and Software Engineering",

        educacao_titulo: "Education",
        educacao_ifpr: "Federal Institute of Paraná (IFPR)<br>Software Engineering<br>In progress",
        educacao_colegio: "Paroquial School<br>High School",

        contato_titulo: "Contact",
        projetos_titulo: "Projects"
    }
};

function trocarIdioma(idioma) {
    localStorage.setItem("idioma", idioma);

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const chave = el.getAttribute("data-i18n");
        if (textos[idioma][chave]) {
            el.innerHTML = textos[idioma][chave];
        }
    });
}

/* carregar idioma salvo */
window.onload = () => {
    const idiomaSalvo = localStorage.getItem("idioma") || "pt";
    trocarIdioma(idiomaSalvo);
};