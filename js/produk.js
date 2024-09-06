document.addEventListener("DOMContentLoaded", () => {
  const products = [
    {
      img: "img/ijo.jpg",
      title: "Dadar Gulung Kelapa",
      price: "Rp 2.500",
    },
    {
      img: "img/risol_sosis.jpg",
      title: "Risol Mayu",
      price: "Rp 3.000",
    },
    {
      img: "img/pastel.jpg",
      title: "Pastel",
      price: "Rp 3.500",
    },
    {
      img: "img/banana_milk_pie.jpg",
      title: "Banana Milk Pie",
      price: "Rp 3.500",
    },
    {
      img: "img/pink.jpg",
      title: "Kue Lapis",
      price: "Rp 2.500",
    },
    {
      img: "img/bakpao.jpg",
      title: "BakPao",
      price: "Rp 3.000",
    },
    {
      img: "img/bomboloni.jpg",
      title: "Bomboloni",
      price: "Rp 3.000",
    },
    {
      img: "img/sosis_solo.jpg",
      title: "Sosis Solo",
      price: "Rp 4.000",
    },
    {
      img: "img/nastar_jumbo.jpg",
      title: "Nastar Jumbo",
      price: "Rp 6.000",
    },
    {
      img: "img/yulia.jpg",
      title: "Nastar",
      price: "Rp 90.000 set Kilo",
    },
    {
      img: "img/gabin_tape.jpg",
      title: "Gabin Tape",
      price: "Rp 2.500",
    },
    {
      img: "img/risol.jpg",
      title: "Risol",
      price: "Rp 3.500",
    },
  ];

  const container = document.querySelector(".container .row");

  products.forEach((product) => {
    const productHtml = `
        <div class="col-md-4 col-6">
                <div class="card">
                    <img src="${
                      product.img
                    }" class="card-img-top img-fluid" alt="${product.title}" />
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <h4 class="card-title">Yulia Snack</h4>
                        <p class="card-text">Harga: ${product.price}</p>
                        <a href="checkout.html?title=${encodeURIComponent(
                          product.title
                        )}&price=${encodeURIComponent(
      product.price
    )}&img=${encodeURIComponent(
      product.img
    )}" class="btn w-100 btn-success fw-semibold btn-buy-now">Beli Sekarang</a>
                    </div>
                </div>
            </div>
      `;
    container.innerHTML += productHtml;
  });
});
