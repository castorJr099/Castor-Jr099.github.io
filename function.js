const cartItems = document.querySelector('.cart-items');
const totalElement = document.getElementById('total');
let total = 0;

document.querySelectorAll('.animated-button').forEach(button => {
    button.addEventListener('click', (e) => {
        const product = e.target.parentElement;
        const productName = product.querySelector('span').textContent;
        const productPrice = parseInt(product.querySelector('span:nth-child(3)').textContent.replace('Q', ''));

        const cartItem = document.createElement('li');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `<span>${productName}</span><span>Q${productPrice}</span>`;
        cartItems.appendChild(cartItem);

        total += productPrice;
        totalElement.textContent = `Q${total}`;
    });
});
document.getElementById('enviar-pedido').addEventListener('click', () => {
    const items = [...cartItems.children].map(item => item.textContent).join(', ');
    const whatsappUrl = `https://wa.me/${+50247628037}?text=Pedido:%20${encodeURIComponent(items)}%20Total:%20Q${total}`;
    window.open(whatsappUrl, '_blank');
});
