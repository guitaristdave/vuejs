Vue.component('product', {
    props: ['product'],


    template: `
    <div>
          <h3>{{ product.productName }}</h3>
          <p>Цена: {{ product.price }} $</p>
        </div>
    `,
});