const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

const main = document.getElementById("main");
const places = document.getElementById("seat");

const data = localStorage.getItem("movieData");

const movie = JSON.parse(data);

console.log(movie);
getRelatedMovies(SEARCH_API + movie.title);

async function getRelatedMovies(url) {
  const res = await fetch(url);
  //console.log(res);
  const data = await res.json();
  //console.log(data);
  showMovies(data.results);
}

function showMovies(movies) {
  const relatedMovesEl = document.getElementById("relatedMoves");

  if (movies.length == 1) {
    relatedMovesEl.remove();
    return;
  }
  console.log(movies);

  relatedMovesEl.innerHTML = "";

  movies.forEach((movie, index) => {
    if (index === 0 || index > 4) return;
    const { title, poster_path, vote_average, overview } = movie;

    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");

    movieEl.innerHTML = `
        <img src="${IMG_PATH + poster_path}" alt="${title}">
        <div class="movie_info">
            <h3>${title}</h3>
        </div>
    `;

    relatedMovesEl.appendChild(movieEl);

    movieEl.addEventListener("click", (e) => {
      localStorage.setItem("movieData", JSON.stringify(movie));
      window.location.href = "./movie.html";
    });
  });
}

console.log(movie);

places.innerHTML = "";
main.innerHTML = "";

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

const movieEl = document.createElement("div");

movieEl.classList.add("single_movie_info");

movieEl.innerHTML = `
<div class="banner_img">
    <img src="${IMG_PATH + movie.backdrop_path}" alt="${movie.title}">
</div>
<div class="row">
    <div class="col-6">
    <img src="${IMG_PATH + movie.poster_path}" alt="${movie.title}">
    </div>
    <div class="col-6">
            <div class="single_movie_info">
                <h3>${movie.title}</h3>
                <p>
                    ${movie.vote_average}
                </p>
                <p>
                    ${movie.overview}
                </p>
                <p>
                ${movie.original_language}
                </p>
                <p>
                ${movie.release_date}
                </p>
            </div>
    </div>
</div>
`;
main.appendChild(movieEl);

seats.forEach((seat) => {
  const seatEl = document.createElement("div");
  seatEl.classList.add("seat_places");
  seatEl.classList.add(`${GetIfSeatTakenClassColor(seat.taken)}`);
  seatEl.innerHTML = `
        <h1>${seat.seat}</h1>
        <h2>${seat.price}</h2>
    `;

  // Add a click event listener to each seat element
  seatEl.addEventListener("click", () => {
    window.location = "./../View/seats.html";
    console.log("hi");
  });

  places.appendChild(seatEl);
});

function GetIfSeatTakenClassColor(taken) {
  return taken ? "green" : "red";
}
