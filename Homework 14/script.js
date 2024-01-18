const poke_container = document.getElementById("poke-container");
const chosen_pokemons = document.getElementById("chosen-pokemons");
let numberOfPokemonChosen = 0;

const pokemon_count = 24;

const colors = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};

const main_types = Object.keys(colors);

const fetchPokemon = async () => {
  for (let i = 1; i <= pokemon_count; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const data = await res.json();

  createPokemonCard(data);
};

const createPokemonCard = (pokemon) => {
  const pokemonEl = document.createElement("div");
  pokemonEl.classList.add("pokemon");

  const id = pokemon.id.toString().padStart(3, "0");
  const name = pokemon.name;

  const poke_type = pokemon.types.map((type) => type.type.name);

  const type = main_types.find((type) => poke_type.indexOf(type) > -1);

  const color = colors[type];

  pokemonEl.style.backgroundColor = color;

  pokemonEl.innerHTML = `
  <span class="number">#${id}</span>
          <div class="img_container">
              <img src="${pokemon?.sprites?.other?.dream_world?.front_default}" >
          </div>
          <div class="info">
              <h3 class="name">${name}</h3>
              <small class="type">type : ${type}</small>
          </div>
  `;

  poke_container?.appendChild(pokemonEl);

  pokemonEl.addEventListener("contextmenu", (event) =>
    RightMouseClick(event, pokemonEl)
  );
};

fetchPokemon();

async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const res = await fetch("https://icanhazdadjoke.com/", config);
  const data = await res.json();

  console.log(data.joke);
}

function RightMouseClick(event, pokemonEl) {
  event.preventDefault();

  const contextMenu = document.createElement("div");
  contextMenu.classList.add("context-menu");

  const option1 = document.createElement("div");
  option1.innerText = "Add to Team";
  option1.classList.add("option");
  option1.addEventListener("click", () => {
    AddPokemonToTeam(pokemonEl);
    console.log("Add to Team clicked");
  });

  const option2 = document.createElement("div");
  option2.innerText = "See Details";
  option2.classList.add("option");
  option2.addEventListener("click", () => {
    GetFullDescription(pokemonEl);
    console.log("See Details clicked");
  });

  contextMenu.appendChild(option1);
  contextMenu.appendChild(option2);

  // Position the context menu
  contextMenu.style.position = "absolute";
  contextMenu.style.left = event.clientX + "px";
  contextMenu.style.top = event.clientY + "px";

  document.body.appendChild(contextMenu);

  // Close the context menu when clicking outside of it
  const closeContextMenu = () => {
    document.body.removeChild(contextMenu);
    document.removeEventListener("click", closeContextMenu);
  };

  document.addEventListener("click", closeContextMenu);
}

function AddPokemonToTeam(pokemonEl) {
  if (numberOfPokemonChosen < 5) {
    const image = pokemonEl.querySelector("img");
    const clonedImage = image.cloneNode(true);
    const chosenPokemonEl = document.createElement("div");
    chosenPokemonEl.classList.add("chosen-poke");
    chosenPokemonEl.appendChild(clonedImage);
    chosen_pokemons.appendChild(chosenPokemonEl);
    numberOfPokemonChosen++;
  }
}

async function GetFullDescription(pokemonEl) {
  const name = pokemonEl.querySelector(".name");
  const extractedName = name.textContent;
  const url = `https://pokeapi.co/api/v2/pokemon/${extractedName}`;
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
}

generateJoke();

function ChoosePokemons() {
  window.location.href = "./randomPokemons.html";
}
