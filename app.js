const floors = [
  {
    name: "Timber Flooring Installation",
    price: "From $85 / m²",
    image: "img/timber.jpg",
    description: "Precision installation of solid and engineered timber flooring."
  },
  {
    name: "Laminate Flooring Installation",
    price: "From $45 / m²",
    image: "img/laminate.jpg",
    description: "Cost-effective, clean installation with professional finish."
  },
  {
    name: "Vinyl Plank Installation",
    price: "From $55 / m²",
    image: "img/vinyl.jpg",
    description: "Water-resistant vinyl plank installation, perfect for modern homes."
  },
  {
    name: "Tile Flooring Installation",
    price: "From $70 / m²",
    image: "img/tile.jpg",
    description: "Accurate tile installation for kitchens, bathrooms & laundries."
  }
];

const grid = document.getElementById("floorGrid");

floors.forEach(floor => {
  grid.innerHTML += `
    <div class="col-md-6 col-lg-3">
      <div class="card h-100 shadow-sm">
        <img src="${floor.image}" class="card-img-top" alt="${floor.name}">
        <div class="card-body">
          <h5 class="card-title">${floor.name}</h5>
          <p class="card-text small">${floor.description}</p>
          <div class="price">${floor.price}</div>
        </div>
      </div>
    </div>
  `;
});
