const products = [
    {
        id: 1,
        name: "Spicy Chicken",
        price: 135,
        category: "chicken",
        image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086"
    },
    {
        id: 2,
        name: "Classic Burger",
        price: 150,
        category: "burgers",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
    },
    {
        id: 3,
        name: "Double Burger",
        price: 190,
        category: "burgers",
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349"
    },
    {
        id: 4,
        name: "Chicken Meal",
        price: 180,
        category: "meals",
        image: "https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb"
    },
    {
        id: 5,
        name: "French Fries",
        price: 55,
        category: "sides",
        image: "https://bazookaegy.com/public/uploads/meals/s_1738096813222359.jpg"
    }, 
     {
        id: 6,
        name: "Chicken Burger",
        price: 105,
        category: "burgers",
        image: "https://bazookaegy.com/public/uploads/meals/s_1738171934559242.jpg"
    },
    {
        id: 7,
        name: "Beef Burger",
        price: 110,
        category: "burgers",
        image: "https://bazookaegy.com/public/uploads/meals/s_1738165561310277.jpg"
    },
        {
        id: 8,
        name: "Double Wrap Burger",
        price: 190,
        category: "burgers",
        image: "https://bazookaegy.com/public/uploads/meals/s_1742921727746479.jpg"
    },
      {
        id: 9,
        name: "Crispy strips",
        price: 160,
        category: "meals",
        image: "https://bazookaegy.com/public/uploads/meals/s_1738104302158513.jpg"
    },
      {
        id: 10,
        name: "Super Crispy Strips",
        price: 250,
        category: "meals",
        image: "https://bazookaegy.com/public/uploads/meals/s_1738104072163156.jpg"
    },
     {
        id: 11,
        name: "Bazooka Extreme Box",
        price: 300,
        category: "meals",
        image: "https://bazookaegy.com/public/uploads/meals/s_1743928248115632.jpg"
    },
    {
        id: 12,
        name: "Classic Super Bazooka",
        price: 145,
        category: "chicken",
        image: "https://bazookaegy.com/public/uploads/meals/s_174877572841797.jpg"
    },
    {
        id: 13,
        name: "Fire Super Bazooka",
        price: 145,
        category: "chicken",
        image: "https://bazookaegy.com/public/uploads/meals/s_1745152157559374.jpg"
    },
    {
        id: 14,
        name: "Big Fire Bazooka",
        price: 205,
        category: "chicken",
        image: "https://bazookaegy.com/public/uploads/meals/s_1738838922277693.jpg"
    },
    {
        id: 15,
        name: "Rizo",
        price: 110,
        category: "sides",
        image: "https://bazookaegy.com/public/uploads/meals/s_1738098052328604.jpg"
    },
     {
        id: 16,
        name: "Cheese Jar",
        price: 70,
        category: "sides",
        image: "https://bazookaegy.com/public/uploads/meals/s_1738098177275619.jpg"
    },
    {
        id: 17,
        name: "Mozzarella Sticks",
        price: 55,
        category: "sides",
        image: "https://bazookaegy.com/public/uploads/meals/s_1738098338496995.jpg"
    },
    {
        id: 18,
        name: "Coleslaw",
        price: 50,
        category: "sides",
        image: "https://bazookaegy.com/public/uploads/meals/s_1738096526631782.jpg"
    },
     {
        id: 19,
        name: "Bazooka King Box",
        price: 260,
        category: "meals",
        image: "https://bazookaegy.com/public/uploads/meals/s_1738105165947347.jpg"
    },
     {
        id: 20,
        name: "Bazooka Golden Box",
        price: 310,
        category: "meals",
        image: "https://bazookaegy.com/public/uploads/meals/s_1738105236248020.jpg"
    },
    {
        id: 21,
        name: "Cola",
        price: 35,
        category: "drinks",
        image: "https://images.unsplash.com/photo-1629203849820-fdd70d49c38e"
    },
     {
        id: 22,
        name: "Juice",
        price: 30,
        category: "drinks",
        image: "https://bazookaegy.com/public/uploads/meals/s_1738101973964005.jpg"
    },
     {
        id: 23,
        name: "Small Water",
        price: 15,
        category: "drinks",
        image: "https://bazookaegy.com/public/uploads/meals/s_1738101309792892.jpg"
    }
];

let cart = [];

const productsBox = document.querySelector("#products");
const cartItems = document.querySelector("#cartItems");
const cartCount = document.querySelector("#cartCount");
const cartTotal = document.querySelector("#cartTotal");

function showProducts(list) {
    productsBox.innerHTML = list.map(product => `
        <div class="product-card">
            <img class="product-image" src="${product.image}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="description">Delicious and fresh meal</p>
                <div class="product-bottom">
                    <span class="price">${product.price} EGP</span>
                    <button class="add-btn" onclick="addToCart(${product.id})">+</button>
                </div>
            </div>
        </div>
    `).join("");
}
showProducts(products);

function addToCart(id) {
    let item = cart.find(item => item.id === id);

    if (item) {
        item.qty++;
    } else {
        let product = products.find(item => item.id === id);
        cart.push({ ...product, qty: 1 });
    }

    updateCart();
}

function updateCart() {
    cartItems.innerHTML = cart.length ? cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <span class="cart-price">${item.price} EGP</span>
                <div class="quantity">
                    <button onclick="changeQty(${item.id}, -1)">-</button>
                    <span>${item.qty}</span>
                    <button onclick="changeQty(${item.id}, 1)">+</button>
                </div>
            </div>
        </div>
    `).join("") : `<p class="empty">Your cart is empty</p>`;

    let count = cart.reduce((sum, item) => sum + item.qty, 0);
    let total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

    cartCount.textContent = count;
    cartTotal.textContent = total + " EGP";
}

function changeQty(id, amount) {
    let item = cart.find(item => item.id === id);

    item.qty += amount;

    if (item.qty <= 0) {
        cart = cart.filter(item => item.id !== id);
    }

    updateCart();
}

document.querySelectorAll(".category").forEach(btn => {
    btn.onclick = () => {
        document.querySelector(".category.active")
            ?.classList.remove("active");

        btn.classList.add("active");

        let category = btn.dataset.category;

        showProducts(
            category === "all"
                ? products
                : products.filter(item => item.category === category)
        );
    };
});

document.querySelector("#searchInput").oninput = e => {
    let text = e.target.value.toLowerCase();

    showProducts(
        products.filter(item =>
            item.name.toLowerCase().includes(text)
        )
    );
};

const cartBox = document.querySelector("#cart");
const overlay = document.querySelector("#overlay");

document.querySelector("#openCart").onclick = () => {
    cartBox.classList.add("open");
    overlay.classList.add("show");
};

function closeCart() {
    cartBox.classList.remove("open");
    overlay.classList.remove("show");
}

document.querySelector("#closeCart").onclick = closeCart;
overlay.onclick = closeCart;