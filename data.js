const movies = [
    {
        id: "101",
        title: "Inception",
        poster: "https://image.url/inception.jpg",
        genre: "Sci-Fi",
        description: "A skilled thief, the absolute best in the dangerous art of extraction.",
        link: "https://www.imdb.com/title/tt1375666/"
    },
    {
        id: "102",
        title: "Avengers: Endgame",
        poster: "https://image.url/avengers.jpg",
        genre: "Action",
        description: "The Avengers assemble once more to undo Thanos' destruction.",
        link: "https://www.imdb.com/title/tt4154796/"
    },
    {
        id: "103",
        title: "Interstellar",
        poster: "https://image.url/interstellar.jpg",
        genre: "Sci-Fi",
        description: "A team of explorers travel beyond this galaxy to discover another habitable planet.",
        link: "https://www.imdb.com/title/tt0816692/"
    },
    {
        id: "104",
        title: "The Dark Knight",
        poster: "https://image.url/darkknight.jpg",
        genre: "Action",
        description: "Batman faces his toughest enemy yet, the Joker, in Gotham City.",
        link: "https://www.imdb.com/title/tt0468569/"
    }
];

const logoUrl = "https://image.url/logo.png"; // Add your actual logo URL here

// Export data for use in other files
if (typeof module !== "undefined") {
    module.exports = { movies, logoUrl };
}
