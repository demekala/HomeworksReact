const places = document.getElementById("seat");
const priceDisplay = document.getElementById("totalPrice");

let totalPrice = 0;

places.innerHTML = "";
const seats = [
  {
    seat: "seat1",
    price: "25GEL",
    taken: true,
  },
  {
    seat: "seat2",
    price: "25GEL",
    taken: true,
  },
  {
    seat: "seat3",
    price: "25GEL",
    taken: false,
  },
  {
    seat: "seat4",
    price: "25GEL",
    taken: false,
  },
  {
    seat: "seat5",
    price: "25GEL",
    taken: true,
  },
];

seats.forEach((seat) => {
  // totalPrice += parseInt(seat.price);
  const seatEl = document.createElement("div");
  seatEl.classList.add("seat_places");
  seatEl.classList.add(`${GetIfSeatTakenClassColor(seat.taken)}`);
  seatEl.innerHTML = `
          <h1>${seat.seat}</h1>
          <h2>${seat.price}</h2>
      `;

  // Add a click event listener to each seat element
  seatEl.addEventListener("click", () => {
    if (!seat.taken) {
      seat.taken = true;
      seatEl.classList.add(`green`);
      seatEl.classList.remove("red");
      totalPrice += parseInt(seat.price);
      DisplayTotalPrice(); // Update the displayed total price
    } else {
      seat.taken = false;
      seatEl.classList.add(`red`);
      seatEl.classList.remove("green");
      totalPrice -= parseInt(seat.price);
      DisplayTotalPrice(); // Update the displayed total price
    }
  });

  places.appendChild(seatEl);
});

function GetIfSeatTakenClassColor(taken) {
  return taken ? "green" : "red";
}

function DisplayTotalPrice() {
  priceDisplay.innerHTML = `
        totalPrice: ${parseInt(totalPrice)}GEL </br>
        <button id="buyButton"> Buy </button>
    `;

  // Add event listener to the Buy button
  const buyButton = document.getElementById("buyButton");
  buyButton.addEventListener("click", function () {
    // Redirect to the specified link
    window.location.href = "./../View/home.html";
  });
}
