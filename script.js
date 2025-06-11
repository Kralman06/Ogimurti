
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("button");
    let cart = [];

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const productName = button.parentElement.querySelector("h3").innerText;
            cart.push(productName);
            alert(`${productName} sepete eklendi! (Demo)`);
            console.log("Sepet: ", cart);
        });
    });
});
