const productList = {
  products: [
    {
      title: "A Pillow",
      imageUrl:
        "http://dl.maxpixel.freegreatpicture.com/?f=antelope-7951562_1920.jpg&type=View&token=97fd2632754a790ce281d40d23c053e9&pid=7951562",
      price: 19.99,
      description: "A soft pillow!",
    },
    {
      title: "A Carpet",
      imageUrl:
        "http://dl.maxpixel.freegreatpicture.com/?f=bald-eagle-3955951_1920.jpg&type=View&token=355c9f4b606fd34877ce0ebdee5bde5b&pid=3955951",
      price: 89.99,
      description: "A carpet which you might like - or not.",
    },
  ],
  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const prodEl = document.createElement("li");
      prodEl.className = "product-item";
      prodEl.innerHTML = `
         <div>
          <img src="${prod.imageUrl}" alt="${prod.title}"/>
          <div class="product-item__content">
            <h2>${prod.title}</h2>
            <h3>\$${prod.price}</h3>
            <p>${prod.description}</p>
            <button>Add to cart</button>
          </div>
         </div>
      `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  },
};

productList.render();
