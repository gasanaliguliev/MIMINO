(() => {
  const refs = {
    openPriceBtn: document.querySelector('[data-price-open-two]'),
    closePriceBtn: document.querySelector('[data-price-close-two]'),
    price: document.querySelector('[data-price-two]'),
  };

  refs.openPriceBtn.addEventListener('click', togglePrice);
  refs.closePriceBtn.addEventListener('click', togglePrice);

  function togglePrice() {
    refs.price.classList.toggle('is-hidden');
  }
})();
