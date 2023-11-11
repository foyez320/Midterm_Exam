function calculatePrice(productId) {
            const price1 = 3500;
            const price2 = 2000;
            const price3 = 1750;

            const quantity = parseInt(document.getElementById(`quantity${productId}`).value);

            let total = 0;
            if (productId === 1) {
                total = price1 * quantity;
                document.getElementById("total1").textContent = total;
            } else if (productId === 2) {
                total = price2 * quantity;
                document.getElementById("total2").textContent = total;
            } else if (productId === 3) {
                total = price3 * quantity;
                document.getElementById("total3").textContent = total;
            }
        }