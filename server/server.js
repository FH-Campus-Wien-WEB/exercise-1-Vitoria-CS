const express = require('express')
const path = require('path')
const app = express()

// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')));

// Configure a 'get' endpoint for data..
app.get('/movies', function (req, res) {
  // Part 1: Remove the next line and replace with your code
  
    const movies = [
        {
            Title: "Barbie",
            Released: "2023-07-21",
            Runtime: 114,
            Genres: ["Adventure", "Comedy", "Fantasy"],
            Directors: ["Greta Gerwig"],
            Writers: ["Greta Gerwig", "Noah Baumbach"],
            Actors: ["Margot Robbie", "Ryan Gosling", "America Ferrera"],
            Plot: "Barbie suffers a crisis that leads her to question her world and her existence.",
            Poster: "/images/barbie.jpg",
            Metascore: 80,
            imdbRating: 6.8
        },
        {
            Title: "La La Land",
            Released: "2016-12-09",
            Runtime: 128,
            Genres: ["Comedy", "Drama", "Music"],
            Directors: ["Damien Chazelle"],
            Writers: ["Damien Chazelle"],
            Actors: ["Ryan Gosling", "Emma Stone", "John Legend"],
            Plot: "A jazz musician and an aspiring actress fall in love while pursuing their dreams in Los Angeles.",
            Poster: "/images/lalaland.jpg",
            Metascore: 94,
            imdbRating: 8
        },
        {
            Title: "Wicked",
            Released: "2024-11-27",
            Runtime: 160,
            Genres: ["Fantasy", "Musical"],
            Directors: ["Jon M. Chu"],
            Writers: ["Winnie Holzman", "Dana Fox"],
            Actors: ["Cynthia Erivo", "Ariana Grande", "Jonathan Bailey"],
            Plot: "The story of the witches of Oz and their unlikely friendship before Dorothy arrives.",
            Poster: "/images/wicked.webp",
            Metascore: 0,
            imdbRating: 0
        }
    ]

    res.json(movies)
})


app.listen(3000)

console.log("Server now listening on http://localhost:3000/")

