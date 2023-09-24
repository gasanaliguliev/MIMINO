(() => {
  const refs = {
    openPriceBtn: document.querySelector('[data-price-open-third]'),
    closePriceBtn: document.querySelector('[data-price-close-third]'),
    price: document.querySelector('[data-price-third]'),
  };

  refs.openPriceBtn.addEventListener('click', togglePrice);
  refs.closePriceBtn.addEventListener('click', togglePrice);

  function togglePrice() {
    refs.price.classList.toggle('is-hidden');
  }
})();
