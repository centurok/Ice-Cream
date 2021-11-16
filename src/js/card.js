(() => {


  const refs = {
    openIceCream: document.querySelector('.js-open-ice-cream'),
    openIceCoffee: document.querySelector('.js-open-coffee'),
    openMilkshake: document.querySelector('.js-open-milkshake'),
    
    closeCardBtnCream: document.querySelector('.js-close-card-ice-cream'),
    closeCardBtnCoffee: document.querySelector('.js-close-card-coffee'),
    closeCardBtnMilkshake: document.querySelector('.js-close-card-milkshake'),

    cardIceCream: document.querySelector('.card-text__ice-cream'),
    cardIceCoffee: document.querySelector('.card-text__ice-coffee'),
    cardMilkShake: document.querySelector('.card-text__milkshake'),
  };

    refs.openIceCream.addEventListener('click', toggleCardIceCream);
    refs.openIceCoffee.addEventListener('click', toggleCardСoffee);
    refs.openMilkshake.addEventListener('click', toggleCardMilkshake);
    
    refs.closeCardBtnCream.addEventListener('click', toggleCardIceCream);
    refs.closeCardBtnCoffee.addEventListener('click', toggleCardСoffee);
    refs.closeCardBtnMilkshake.addEventListener('click', toggleCardMilkshake);

    function toggleCardIceCream() {
        refs.cardIceCream.classList.toggle("is-hidden-ice-cream");
    }

    function toggleCardСoffee() {
        refs.cardIceCoffee.classList.toggle("is-hidden-ice-coffee");
    }

    function toggleCardMilkshake() {
        refs.cardMilkShake.classList.toggle("is-hidden-milkshake");
    }
 
})();