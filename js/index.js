// ITERATION 1

function updateSubtotal(product) {
 
  const subtotalElement = product.querySelector('.subtotal span');
  const priceElement = product.querySelector('.price span');
  const quantityElement = product.querySelector('.quantity input');


  const price = parseFloat(priceElement.innerHTML);
  const quantity = parseInt(quantityElement.value);

  
  const subtotal = price * quantity;

  
  subtotalElement.textContent = `$${subtotal.toFixed(2)}`;

  
  return subtotal;
}


  // ITERATION 2
  
  function calculateAll() {
    
    const productRows = document.getElementsByClassName('product');
  
    for (const productRow of productRows) {
      updateSubtotal(productRow);
    }
  }
  

  // ITERATION 3
  function calculateAll() {
    const subtotals = [];
    const productRows = document.getElementsByClassName('product');

    for (const productRow of productRows) {
      const subtotal = updateSubtotal(productRow);
      subtotals.push(subtotal); 
    }  
    const totalPrice = subtotals.reduce((acc, curr) => acc + curr, 0);

    const totalElement = document.getElementById('total-value');
    totalElement.textContent = `$${totalPrice.toFixed(2)}`;
  }



// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
