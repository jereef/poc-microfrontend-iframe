const eventBus = new EventBus();
new Vue({
  el: "#main",
  data: {
    products: {
      product1: 0,
      product2: 0,
      product3: 0
    }
  },
  methods: {
    add: function(product) {
      this.products[product]++;
    }
  },
  beforeMount() {
    eventBus.subscribe("productToCart", this.add);
  },
  beforeDestroy() {
    eventBus.unsubscribe("productToCart", this.add);
  }
});
