const products = Array.from(document.querySelectorAll('.product'));
const defaultBuyText = `Чего сидишь? Порадуй котэ, <span class="product-last-call-link"><span class="product-last-call-link-underline">купи</span>.</span>`

function setProductSelect(product) {
    product.classList.add('product-selected');
    product.classList.remove('product-available');
    product.classList.add('block-hover');
    product.querySelector('.product-last-call').innerHTML = product.dataset.selectedText;
}

function removeProductSelect(product) {
    product.classList.remove('product-selected');
    product.classList.add('product-available');
    product.querySelector('.product-last-call').innerHTML = defaultBuyText;
}

products.forEach(product => {
    if (!product.classList.contains('product-disable')) {
        
        product.addEventListener('click', () => {
            if (product.classList.contains('product-selected')) {
                removeProductSelect(product);
            } else {
                setProductSelect(product);
            }
        });
    
        product.addEventListener('mouseout', () => {
                product.classList.remove('block-hover');
        });
    }
});