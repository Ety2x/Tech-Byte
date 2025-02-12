const fishData = [
    {
        name: "দেশি রুই",
        price: 500,
        imageUrl: "rohi.jpg"
    },
    {
        name: "ইলিশ মাছ",
        price: 1200,
        imageUrl: "ilish.jpg"
    },
    {
        name: "কাতলা মাছ",
        price: 600,
        imageUrl: "katla.jpg"
    },
    {
        name: "পাঙ্গাস মাছ",
        price: 350,
        imageUrl: "pangas.jpg"
    },
    {
        name: "টেংরা মাছ",
        price: 450,
        imageUrl: "tengra.jpg"
    },
    {
        name: "পুঁটি মাছ",
        price: 200,
        imageUrl: "puti.jpg"
    },
    {
        name: "মাগুর মাছ",
        price: 800,
        imageUrl: "magur.jpg"
    },
    {
        name: "শিং মাছ",
        price: 700,
        imageUrl: "shing.jpg"
    },
    {
        name: "চিংড়ি মাছ",
        price: 1000,
        imageUrl: "chingri.jpg"
    },
    {
        name: "কৈ মাছ",
        price: 400,
        imageUrl: "koip.jpg"
    }
];


const productContainer = document.getElementById('my_product');

fishData.forEach(fish => {
    const fishHTML = `
        <div class="col-sm-6 col-md-4 col-lg-3">
            <div class="box" style="padding:0px">
                <div class="option_container">
                    <div class="options">
                        <a href="#" class="option1">
                            দেশি মাছের
                        </a>
                        <a href="#" class="option2">
                            Buy Now
                        </a>
                    </div>
                </div>
                <div class="img-box">
                    <img src="images/fish_img/${fish.imageUrl}" alt="${fish.name}">
                </div>
                <div class="detail-box">
                    <h5>
                        ${fish.name}
                    </h5>
                    <h6>
                        ${fish.price} BDT
                    </h6>
                </div>
            </div>
        </div>
    `;
    productContainer.innerHTML += fishHTML;
});