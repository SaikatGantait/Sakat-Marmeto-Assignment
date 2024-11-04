function updateTotal() {
    const price = 250000; // price of Asgaard sofa
    const quantity = document.getElementById('quantity').value;
    const subtotal = price * quantity;
    
    document.getElementById('subtotal').innerText = `Rs. ${subtotal.toLocaleString()}.00`;
    document.getElementById('subtotalDisplay').innerText = `Rs. ${subtotal.toLocaleString()}.00`;
    document.getElementById('total').innerText = `Rs. ${subtotal.toLocaleString()}.00`;
}

function removeItem() {
    document.querySelector('.cart-items tbody').innerHTML = '';
    
    document.getElementById('subtotalDisplay').innerText = 'Rs. 0.00';
    document.getElementById('total').innerText = 'Rs. 0.00';
}
