let listProducts = [];

const renderProducts = (listProducts) => {
    let containerProducts = document.querySelector('.produto-linha');
    let template = "";

    listProducts.forEach(prod => {
        template += ` 
            <div class="produto">
                <article>
                    <a href="">
                        <img src=${prod.prodImg} alt="${prod.alt}">
                        <div class="item-description">
                            <div class="title">
                                <h3>${prod.title}
                                </h3>
                            </div>
                            <div class="pricing">
                                <div class="old-price">
                                    <span>R$ ${(prod.price).toFixed(2)}
                                    </span>
                                </div>
                                <div class="price">
                                    <span>R$ ${( prod.price * (100 - prod.discount) / 100 ).toFixed(2)}</span> <div class="percentage-disc text-xs">-${prod.discount}%</div>
                                </div>
                                <div class="price-promo">
                                    Para assinantes
                                    <span class="text-xs">
                                        ou até
                                        <b>
                                        3x de R$ ${(prod.price / 3).toFixed(2)} sem juros
                                        </b>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </a>
                </article>
            </div>`
    });

    containerProducts.innerHTML += template;
}

const loadingProducts = () => {
    fetch("produtos.json")
    .then ( (res) => res.json() )
    .then ( (processedData) => {
        console.log(processedData);
        listProducts = processedData;
        renderProducts(listProducts);
    })
}

document.addEventListener( "DOMContentLoaded", () => {
    loadingProducts();
})