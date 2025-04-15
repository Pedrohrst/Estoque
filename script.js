function displayProducts(products) {
  const productsList = document.getElementById('products-list');
  productsList.innerHTML = '';

  const limitedProducts = products.slice(0, 7);  // Pega os 7 primeiros produtos

  for (let i = 0; i < limitedProducts.length; i++) {
    const product = limitedProducts[i];

    const productElement = document.createElement('div');
    productElement.classList.add('product');

    productElement.innerHTML = `
      <div class="product-card">
        <img src="${product.image}" alt="${product.title}" class="product-image">
        <h3>${product.title}</h3>
        <p><strong>Descrição:</strong> ${product.description}</p>
        <p><strong>Categoria:</strong> ${product.category}</p>
        <span><strong>Preço:</strong> R$ ${product.price.toFixed(2)}</span>
      </div>
    `;
    
    productsList.appendChild(productElement);
  }
}

async function fetchProducts() {
  try {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const apiUrl = 'https://stzcorpestoque-fcd7db50b02e.herokuapp.com/products';
    const response = await fetch(proxyUrl + apiUrl); 
    const data = await response.json();
    displayProducts(data);
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
  }
}

document.addEventListener('DOMContentLoaded', fetchProducts);
