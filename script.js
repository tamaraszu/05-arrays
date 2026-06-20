// Set up event listener for when the user selects a genre
document.getElementById("genre").addEventListener("change", function() {
  // Get the selected genre
  const selectedGenre = document.getElementById("genre").value;

  let movieList = [];

  // Push movies to the movieList based on the selected genre
  if (selectedGenre === "Comedy") {
    movieList.push("Superbad", "Bridesmaids", "The Hangover", "Step Brothers");
  } else if (selectedGenre === "Action") {
    movieList.push("Die Hard", "Mad Max: Fury Road", "John Wick", "The Dark Knight");
  } else if (selectedGenre === "Drama") {
    movieList.push("The Shawshank Redemption", "Forrest Gump", "The Godfather", "Fences");
  } else if (selectedGenre === "Sci-Fi") {
    movieList.push("Inception", "Interstellar", "Blade Runner", "The Matrix");
  }

  // Pick a random movie from the list
  const randomMovie = movieList[Math.floor(Math.random() * movieList.length)];

  // Display the list of movies on the page
  document.getElementById("movieRecommendations").innerText = `Enjoy: ${randomMovie}!`;
});