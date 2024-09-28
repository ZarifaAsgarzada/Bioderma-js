const products = [
    {
        imgSrc: 'images/sensib.png',
        altText: 'Bioderma Sensibio Micellar Water',
        title: 'Bioderma Sensibio Micellar Water',
        size: '1L',
        price: '14.00 AZN'
    },
    {
        imgSrc: 'images/sebium.png',
        altText: 'Bioderma Hydrabio H2O',
        title: 'Bioderma Hydrabio H2O',
        size: '1L',
        price: '14.00 AZN'
    },
    {
        imgSrc: 'images/cream.png',
        altText: 'Bioderma Photoderm Max 50+',
        title: 'Bioderma Photoderm Max 50+',
        size: '1L',
        price: '14.00 AZN'
    },
    {
        imgSrc: 'images/shower.png',
        altText: 'Bioderma ABCDerm H2O',
        title: 'Bioderma ABCDerm H2O',
        size: '1L',
        price: '14.00 AZN'
    }
];
let additionalProductsVisible = false;
document.getElementById('toggleButton').addEventListener('click', function() {
    const productContainer = document.getElementById('productContainer');
    if (!additionalProductsVisible) {
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `
                <img src="${product.imgSrc}" alt="${product.altText}">
                <h3>${product.title}</h3>
                <p>${product.size}</p>
                <p>${product.price}</p>
                <button class="button" onclick="addToCart('${product.title}')">Add to Cart</button>
            `;
            productContainer.appendChild(productDiv);
        });
        this.textContent = 'Gizlə';
    } else {
        const allProducts = productContainer.querySelectorAll('.product');
        allProducts.forEach((product, index) => {
            if (index >= 4) {
                product.remove();
            }
        });
        this.textContent = 'Hamısına bax';
    }
    additionalProductsVisible = !additionalProductsVisible;
});
function addToCart(productName) {
    alert(`${productName} added to cart!`);
}

function addToCart(productName) {
    alert(`${productName} added to cart!`);
}
let sepet = [];
let toplamFiyat = 0; 
let cartVisible = false;
function addToCart(urun, fiyat) {
    sepet.push({ urun: urun, fiyat: fiyat });
    toplamFiyat += fiyat; 
    updateCartCount();
    displayCartItems();
}

function updateCartCount() {
    document.getElementById('cart-count').innerText = sepet.length;
}
function toggleCartView() {
    const cartView = document.getElementById('cart-view');
    cartVisible = !cartVisible;
    if (cartVisible) {
        cartView.style.display = 'block';
    } else {
        cartView.style.display = 'none';
    }
}

function displayCartItems() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = ''; 
    sepet.forEach((item, index) => {
        const li = document.createElement('li');
        li.className = 'cart-item';
        li.textContent = item.urun + " - " + item.fiyat.toFixed(2) + " AZN";
        const silButonu = document.createElement('button');
        silButonu.className = 'remove-btn';
        silButonu.textContent = 'Sil';
        silButonu.onclick = function() {
            removeFromCart(index);
        };

        li.appendChild(silButonu);
        cartItems.appendChild(li);
    });
    document.getElementById('total-price').textContent = toplamFiyat.toFixed(2);
}
function removeFromCart(index) {
    toplamFiyat -= sepet[index].fiyat;
    sepet.splice(index, 1);
    updateCartCount();
    displayCartItems();
}
function clearCart() {
    sepet = [];
    toplamFiyat = 0;
    updateCartCount();
    displayCartItems();
    document.getElementById('cart-view').style.display = 'none';
    cartVisible = false;
}