const dados = {
    filmes: [
      {
        id: 1,
        titulo: "Matrix Resurrections",
        descricao: "Neo retorna para descobrir a verdade sobre sua realidade.",
        imagem: "./assets/img/imagematrix.png",
        destaque: true,
        elenco: "Keanu Reeves, Carrie-Anne Moss",
        diretor: "Lana Wachowski",
        genero: "Ação, Ficção Científica",
        ano: "2021",
        imagens_complementares: [
          {
            id: 1,
            src: "https://upload.wikimedia.org/wikipedia/pt/7/70/The_Matrix_Resurrections.jpg",
            descricao: "Capa"
          }
        ]
      },
      {
        id: 2,
        titulo: "Oppenheimer",
        descricao: "A história de J. Robert Oppenheimer e o Projeto Manhattan.",
        imagem: "./assets/img/imageoppen.png",
        destaque: false,
        elenco: "Cillian Murphy, Emily Blunt",
        diretor: "Christopher Nolan",
        genero: "Drama, História",
        ano: "2023",
        imagens_complementares: []
      },
      {
        id: 3,
        titulo: "Duna: Parte Dois",
        descricao: "Paul Atreides se junta aos Fremen para vingar sua família.",
        imagem: "./assets/img/imageduna.png",
        destaque: false,
        elenco: "Timothée Chalamet, Zendaya",
        diretor: "Denis Villeneuve",
        genero: "Ficção Científica",
        ano: "2024",
        imagens_complementares: []
      },
      {
        id: 4,
        titulo: "John Wick 4",
        descricao: "John enfrenta o Conselho Supremo em sua luta final.",
        imagem: "./assets/img/imagejohn.png",
        destaque: false,
        elenco: "Keanu Reeves, Donnie Yen",
        diretor: "Chad Stahelski",
        genero: "Ação",
        ano: "2023",
        imagens_complementares: []
      },
      {
        id: 5,
        titulo: "Interestelar",
        descricao: "Uma jornada épica além da galáxia para salvar a humanidade.",
        imagem: "https://upload.wikimedia.org/wikipedia/pt/3/3a/Interstellar_Filme.png",
        destaque: true,
        elenco: "Matthew McConaughey, Anne Hathaway",
        diretor: "Christopher Nolan",
        genero: "Ficção Científica",
        ano: "2014",
        imagens_complementares: []
      }
    ]
  };
  
  // Verificar se estamos na página de detalhes e se o parâmetro 'id' está presente
  const urlParams = new URLSearchParams(window.location.search);
  const idFilme = urlParams.get("id");
  
  if (window.location.pathname.includes("index.html")) {
    const destaqueEl = document.getElementById("destaqueCarousel");
    const listaFilmes = document.getElementById("listaFilmes");
  
    dados.filmes.forEach((filme, index) => {
      // Carregar filmes em destaque no carrossel
      if (filme.destaque) {
        destaqueEl.innerHTML += `
          <div class="carousel-item ${index === 0 ? 'active' : ''}">
            <img src="${filme.imagem}" class="d-block w-100" alt="${filme.titulo}">
            <div class="carousel-caption d-none d-md-block">
              <h5>${filme.titulo}</h5>
              <p>${filme.descricao}</p>
            </div>
          </div>
        `;
      }
  
      // Exibir os filmes na lista com link para detalhes
      listaFilmes.innerHTML += `
        <div class="col-md-4 mb-4">
          <div class="card h-100">
            <img src="${filme.imagem}" class="card-img-top" alt="${filme.titulo}">
            <div class="card-body">
              <h5 class="card-title">${filme.titulo}</h5>
              <p class="card-text">${filme.descricao}</p>
              <a href="detalhe.html?id=${filme.id}" class="btn btn-danger">Ver Detalhes</a>
            </div>
          </div>
        </div>
      `;
    });
  }
  
  // Verificar se estamos na página de detalhes e o id foi passado corretamente
  if (window.location.pathname.includes("detalhe.html") && idFilme) {
    const filme = dados.filmes.find(f => f.id == idFilme);
    const container = document.getElementById("detalheFilme");
  
    if (filme) {
      container.innerHTML = `
        <h2>${filme.titulo}</h2>
        <img src="${filme.imagem}" class="img-fluid mb-4" style="max-height: 500px;">
        <p><strong>Descrição:</strong> ${filme.descricao}</p>
        <p><strong>Elenco:</strong> ${filme.elenco}</p>
        <p><strong>Diretor:</strong> ${filme.diretor}</p>
        <p><strong>Gênero:</strong> ${filme.genero}</p>
        <p><strong>Ano:</strong> ${filme.ano}</p>
        ${filme.imagens_complementares.map(img => `
          <div class="my-3">
            <img src="${img.src}" alt="${img.descricao}" class="img-fluid"/>
            <p>${img.descricao}</p>
          </div>
        `).join('')}
      `;
    } else {
      container.innerHTML = "<p>Filme não encontrado!</p>";
    }
  }