(() => {
  const refs = {
    openPriceBtn: document.querySelector('[data-price-open-one]'),
    closePriceBtn: document.querySelector('[data-price-close-one]'),
    price: document.querySelector('[data-price-one]'),
  };

  refs.openPriceBtn.addEventListener('click', togglePrice);
  refs.closePriceBtn.addEventListener('click', togglePrice);

  function togglePrice() {
    refs.price.classList.toggle('is-hidden');
  }
})();
