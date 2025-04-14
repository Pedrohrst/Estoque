// Função para carregar os produtos da sua API backend
async function carregarProdutos() {
    try {
      // Requisição para o seu servidor (backend)
      const resposta = await fetch('http://localhost:8080/products'); 
      const produtos = await resposta.json();
  
      const productsList = document.getElementById('products-list');
  
      // Criar e exibir os produtos na página
      produtos.forEach(produto => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
  
        productCard.innerHTML = `
          <img src="${produto.image}" alt="${produto.title}">
          <h3>${produto.title}</h3>
          <p>${produto.description}</p>
          <p class="price">$${produto.price}</p>
        `;
  
        productsList.appendChild(productCard);
      });
    } catch (error) {
      console.error("Erro ao carregar produtos: ", error);
    }
  }
  
  // Carregar os produtos assim que a página for carregada
  document.addEventListener('DOMContentLoaded', carregarProdutos);
  