// Define the Movie class
class Movie {
  // title, cast, description, rating
  #title;
  #cast;
  #description;
  #rating;

  constructor(title, cast, description, rating) {
    this.#title = title;
    this.#cast = cast;
    this.#description = description;
    this.#rating = rating;
  }

  // Method to update the rating of the movie
  updateRating(newRating) {
    this.#rating = newRating;
  }

  // Method to display the movie's information
  displayInfo() {
    const movieInfoDiv = document.getElementById("movie-info");
    movieInfoDiv.innerHTML = `
      <h2>Title: ${this.#title}</h2>
      <p><strong>Cast:</strong> ${this.#cast.join(", ")}</p>
      <p><strong>Description:</strong> ${this.#description}</p>
      <p><strong>Rating:</strong> ${this.#rating}</p>
    `;
  }

  // Getter for title (to be used for searching in the collection)
  getTitle() {
    return this.#title;
  }
}

// Test your implementation

// Create a collection (array) called "movies"
const movies = [];

// Create new movie object using the Movie class created in the steps above.
const movie1 = new Movie(
  "The Shawshank Redemption",
  ["Tim Robbins", "Morgan Freeman"],
  "Two imprisoned men bond over a number of years, finding eventual redemption through acts of common decency.",
  9.3
);

// Display the initial information of the movie
movies.push(movie1);
movie1.displayInfo();

// Update the rating of the movie
function updateMovieRating(title, newRating) {
  // Find the movie by title
  const movie = movies.find((m) => m.getTitle() === title);
  if (movie) {
    movie.updateRating(newRating);
    movie.displayInfo(); // Display updated info
  } else {
    console.error("Movie not found!");
  }
}

// Display the updated information of the movie
setTimeout(() => {
  updateMovieRating("The Shawshank Redemption", 9.5);
}, 3000);
