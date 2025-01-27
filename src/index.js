import validator from "./validator.js";

const books = [
  {
    title: "Jesús en rojo",
    img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1573636860l/48762854._SX318_.jpg",
    price: 49.85,
    category: "jovenes",
  },
  {
    title: "Hechos científicos en la biblia",
    img: "https://images-na.ssl-images-amazon.com/images/I/81PCitNxx2L.jpg",
    price: 58.6,
    category: "historia",
  },
  {
    title: "Mi consuelo es Jesús",
    img: "https://m.media-amazon.com/images/I/41U4YIUOmbL.jpg",
    price: 45.55,
    category: "padres",
  },
  {
    title: "Lo que muestra tu nariz",
    img: "https://images-na.ssl-images-amazon.com/images/I/51NiNVLGgQL._SX356_BO1,204,203,200_.jpg",
    price: 49.85,
    category: "jovenes",
  },
  {
    title: "Dios tiene un plan maravilloso para tu vida",
    img: "https://cdn.slidesharecdn.com/ss_thumbnails/diostieneunplanmaravillosoparatuvida-raycomfort-130831003449-phpapp02-thumbnail-4.jpg?cb=1377909453",
    price: 49.85,
    category: "padres",
  },
  {
    title: "Vence tu temor y comparte tu fe",
    img: "https://g.christianbook.com/dg/product/web/f450/16542EB.jpg",
    price: 58.6,
    category: "jovenes",
  },
  {
    title: "Dios no cree en los ateos",
    img: "https://pictures.abebooks.com/isbn/9780882709222-es-300.jpg",
    price: 45.55,
    category: "jovenes",
  },
  {
    title: "La Verdadera Bellleza",
    img: "https://images-na.ssl-images-amazon.com/images/I/41aWIMTtmvL._SX342_SY445_QL70_ML2_.jpg",
    price: 45.55,
    category: "padres",
  },
  {
    title: "Hittler, Dios y la Biblia",
    img: "https://images-na.ssl-images-amazon.com/images/I/61BiUEQu5cL.jpg",
    price: 45.55,
    category: "historia",
  },
];

// Elementos del DOM
const containerBooks = document.querySelector(".main__books");
const mainPayment = document.querySelector(".main__payment");
const navLinks = document.querySelectorAll(".menu-item__link");
const cartCounter = document.querySelector(".menu-item__cart-counter");
const cartIcon = document.querySelector(".menu-item__cart-icon");
const paymentButton = document.getElementById("pagar");
const validationMessage = document.querySelector(
  ".payment-form__validation-message"
);

let cartCount = 0;

// Función para limpiar y mostrar libros
function displayBooks(category) {
  containerBooks.innerHTML = "";
  const booksToDisplay =
    category === "all"
      ? books
      : books.filter((book) => book.category === category);

  booksToDisplay.forEach(({ title, img, price }) => {
    const card = createBookCard(title, img, price);
    containerBooks.appendChild(card);
  });
}

function createBookCard(title, img, price) {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("main__books-card");

  const imgElement = document.createElement("img");
  imgElement.src = img;
  imgElement.alt = title;

  const titleElement = document.createElement("h3");
  titleElement.textContent = title;

  const priceElement = document.createElement("p");
  priceElement.textContent = `$${price.toFixed(2)}`;

  const button = document.createElement("button");
  button.textContent = "Añadir";
  button.addEventListener("click", () => updateCartCount());

  cardDiv.append(imgElement, titleElement, priceElement, button);
  return cardDiv;
}

// Función para actualizar el contador del carrito
function updateCartCount() {
  cartCount++;
  cartCounter.textContent = cartCount;
}

// Manejar clics en enlaces de navegación
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const category = link.dataset.category;
    mainPayment.style.display = "none";
    containerBooks.style.display = "grid";
    displayBooks(category);
  });
});

//Función para validar y procesar el pago
function processPayment(event) {
  event.preventDefault();
  const cardNumber = document.getElementById("tarjeta").value;
  const email = document.getElementById("email").value;
  const expiryDate = document.getElementById("date").value;
  const cvv = document.getElementById("cvv").value;
  const isValidCard = validator.isValid(cardNumber);
  const maskedCard = validator.maskify(cardNumber);

  // Verificar si los campos están vacíos
  if (!email || !cardNumber || !expiryDate || !cvv) {
    validationMessage.innerText = "Por favor, complete todos los campos.";
    return;
  }

  // Validar que la tarjeta y el CVV contengan solo números
  if (isNaN(cardNumber) || isNaN(cvv)) {
    validationMessage.innerText =
      "La tarjeta y el CVV deben contener solo números.";
    return;
  }

  // Validación de la tarjeta
  validationMessage.innerText = isValidCard
    ? "¡¡Tarjeta válida!! Su pago fue exitoso!!!"
    : "Tarjeta inválida";

  // Aplicar máscara
  document.getElementById("tarjeta").value = maskedCard;
}
// Mostrar el formulario de pago
cartIcon.addEventListener("click", () => {
  containerBooks.style.display = "none";
  mainPayment.style.display = "flex";
});

// Manejar el evento del botón de pago
paymentButton.addEventListener("click", processPayment);

// Mostrar todos los libros por defecto
displayBooks("all");
