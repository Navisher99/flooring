const floors = [
  {
    name: "Timber Flooring",
    price: "From $85 / m²",
    image: "img/first.jpg",
    description: "High-end timber installation with perfect alignment and finish."
  },
  {
    name: "Laminate Flooring",
    price: "From $45 / m²",
    image: "img/second.jpg",
    description: "Clean, efficient installation with attention to detail."
  },
  {
    name: "Vinyl Plank Flooring",
    price: "From $55 / m²",
    image: "img/third.jpg",
    description: "Modern vinyl plank installation, durable and stylish."
  },
  {
    name: "Tile Flooring",
    price: "From $70 / m²",
    image: "img/forth.jpg",
    description: "Precision tile installation for wet areas and living spaces."
  }
];

const grid = document.getElementById("floorGrid");

floors.forEach((floor, index) => {
  grid.innerHTML += `
    <div class="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="${index * 120}">
      <div class="card floor-card h-100">
        <img src="${floor.image}" alt="${floor.name}">
        <div class="card-body">
          <h5 class="fw-semibold">${floor.name}</h5>
          <p class="small text-muted">${floor.description}</p>
          <div class="price mt-2">${floor.price}</div>
        </div>
      </div>
    </div>
  `;
});


