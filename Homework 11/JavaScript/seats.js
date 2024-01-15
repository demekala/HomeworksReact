const places = document.getElementById("seat");
const priceDisplay = document.getElementById("totalPrice");

let totalPrice = 0;

places.innerHTML = "";

const seats = [
  { seat: "seat1", price: 25, purchased: false, taken: true },
  { seat: "seat2", price: 25, purchased: false, taken: true },
  { seat: "seat3", price: 25, purchased: false, taken: false },
  { seat: "seat4", price: 25, purchased: false, taken: false },
  { seat: "seat5", price: 25, purchased: false, taken: true },
];

const seatElements = seats.map((seat) => {
  const seatEl = document.createElement("div");
  seatEl.classList.add("seat_places", GetIfSeatTakenClassColor(seat.taken));
  seatEl.innerHTML = `
    <h1>${seat.seat}</h1>
    <h2>${seat.price}GEL</h2>
  `;

  seatEl.addEventListener("click", () => {
    if (!seat.taken) {
      seat.purchased = !seat.purchased;
      seatEl.classList.toggle("green", seat.purchased);
      seatEl.classList.toggle("red", !seat.purchased);
      totalPrice += seat.purchased ? seat.price : -seat.price;
      DisplayTotalPrice();
    }
  });

  places.appendChild(seatEl);
  return seatEl;
});

function GetIfSeatTakenClassColor(taken) {
  return taken ? "green" : "red";
}

function DisplayTotalPrice() {
  priceDisplay.textContent = `Total Price: ${totalPrice}GEL \n`;
  priceDisplay.innerHTML += `<button id="buyButton"> Buy </button>`;

  const buyButton = document.getElementById("buyButton");
  buyButton.addEventListener("click", () => {
    window.location.href = "./../View/Checkout.html";
  });
}
