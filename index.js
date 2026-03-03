// 1) Use npm to install ejs in the terminal


// 2) create a views and a public folder



// 3) In your public folder create an index.html and add your code from the planning document 
// You can also add your CSS files here too if applicable 




// 4) Now in your views folder create your EJS file and add your HTML code from your planning document



const express = require('express')
const app = express()

app.use((req, res, next) => {
    console.log(req.method, req.url)
    next()
})


// 5) Paste in your data array of objects from the planning documents here. 
const travelBlogs ={
  // --- JAPAN ---
 blogs: [
  {
    id: 1,
    country: "Japan",
    title: "Sunrise at Mt. Fuji",
    description: "An early morning hike that ended with the most iconic view in the world.",
    image: "https://res-1.cloudinary.com/dbm1qiew0/image/upload/q_auto/v1/blog-images/Mt.Fuji-Sunrise.jpg"
  },
  {
    id: 2,
    country: "Japan",
    title: "Street Food in Osaka",
    description: "From Takoyaki to Okonomiyaki, exploring the kitchen of Japan.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2KJgT726tj33H8SjsPH3tG7HoFuvHkHgYRQ&s"
  },
  {
    id: 3,
    country: "Japan",
    title: "The Temples of Kyoto",
    description: "Finding peace among the thousand vermillion torii gates.",
    image: "https://boutiquejapan.com/wp-content/uploads/2014/01/Kinkakuji-Golden-Pavilion-Kyoto-Japan-1140.png"
  },
  {
    id: 4,
    country: "Japan",
    title: "Neon Nights in Tokyo",
    description: "Getting lost in the organized chaos of Shinjuku and Shibuya.",
    image: "https://media.istockphoto.com/id/534804751/photo/kabuki-cho-district-shinjuku-tokyo-japan.jpg?s=612x612&w=0&k=20&c=x2SD2J8GjTpZHnZTP-KwjxkAmUytj1eEha1p8ZTi4xc="
  },
  {
    id: 5,
    country: "Japan",
    title: "Snow Monkeys of Nagano",
    description: "Watching macaques relax in the natural hot springs.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQheowiJ9w6KaS1PaJn0dlGQvO61zncZf_m_w&s"
  },

  // --- ITALY ---
  {
    id: 6,
    country: "Italy",
    title: "Gondolas of Venice",
    description: "Navigating the floating city one canal at a time.",
    image: "https://gobargingwp-s3.s3.eu-west-1.amazonaws.com/wp-content/uploads/2017/03/venice.jpg"
  },
  {
    id: 7,
    country: "Italy",
    title: "The Roman Colosseum",
    description: "Stepping back in time to the days of gladiators and emperors.",
    image: "https://cdn.britannica.com/36/162636-050-932C5D49/Colosseum-Rome-Italy.jpg"
  },
  {
    id: 8,
    country: "Italy",
    title: "Tuscan Wine Tasting",
    description: "Rolling hills, cypress trees, and the finest Chianti.",
    image: "https://armchairsommelier.com/wp-content/uploads/2022/11/tuscany-feature.jpeg"
  },
  {
    id: 9,
    country: "Italy",
    title: "Coastal Magic in Positano",
    description: "Colorful houses stacked on cliffs overlooking the blue sea.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb6b4m9B2LwwnINcS-g8HGWDVq9e61i0gMbA&s"
  },
  {
    id: 10,
    country: "Italy",
    title: "Florence Art Tour",
    description: "Seeing Michelangelo's David and the birth of the Renaissance.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlVpa7aOk-RrBD9uZ1x7wnCEgAv8eRf1VezA&s"
  },

  // --- FRANCE ---
  {
    id: 11,
    country: "France",
    title: "Eiffel Tower Picnic",
    description: "Baguettes, brie, and the best view in Paris.",
    image: "https://media.cntraveler.com/photos/58de89946c3567139f9b6cca/master/pass/GettyImages-468366251.jpg"
  },
  {
    id: 12,
    country: "France",
    title: "Lavender Fields of Provence",
    description: "Walking through endless purple rows in the French countryside.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH7JC9Lnlu_WN4REpQ-S3Z1W_Cw9hpWBH_1w&s"
  },
  {
    id: 13,
    country: "France",
    title: "The Louvre After Dark",
    description: "Seeing the glass pyramid glow under the moonlight.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJOD7kYKUxKEe6PAlstcsfB4nXbRTPKxjlxA&s"
  },
  {
    id: 14,
    country: "France",
    title: "Skiing the French Alps",
    description: "Fresh powder and cozy fondue in Chamonix.",
    image: "https://www.revigorate.com/images/Val-dIsere-french-alps.jpg"
  },
  {
    id: 15,
    country: "France",
    title: "Riviera Sunsets in Nice",
    description: "Blue chairs and pebble beaches along the Promenade des Anglais.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoHH_Syl2s-iVMj-Wx2P9kVhx_EeMMhiXJfg&s"
  },

  // --- GREECE ---
  {
    id: 16,
    country: "Greece",
    title: "Santorini’s Blue Domes",
    description: "Watching the sun set over the caldera in Oia.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2DhLxLpl32YSUnfoafBgMw_ymz3dnwx5rCg&s"
  },
  {
    id: 17,
    country: "Greece",
    title: "Exploring the Acropolis",
    description: "Standing in the shadow of the Parthenon in ancient Athens.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoN3yWUVU5UYthtuD4ia3VG-QsHgGkhMY5qQ&s"
  },
  {
    id: 18,
    country: "Greece",
    title: "The Shipwreck of Zakynthos",
    description: "Turquoise waters and the famous Navagio beach.",
    image: "https://aboardtheworld.com/wp-content/uploads/2016/11/shipwreck-2.jpg"
  },
  {
    id: 19,
    country: "Greece",
    title: "Meteora’s Floating Monasteries",
    description: "Monasteries perched precariously atop giant rock pillars.",
    image: "https://idsb.tmgrup.com.tr/ly/uploads/images/2024/01/16/310379.jpg"
  },
  {
    id: 20,
    country: "Greece",
    title: "Hidden Alleys of Mykonos",
    description: "Getting lost in the white-washed streets and pink bougainvillea.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8V7X3_GA6tyzDl9MMh-fOX_7zJwJxS8Ealw&s"
  },

  // --- ICELAND ---
  {
    id: 21,
    country: "Iceland",
    title: "Chasing the Northern Lights",
    description: "Waiting for the green dance in the sky near Reykjavik.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlKTwHpVqCxOgupSwj5tnQkfBpG8thtV5J4A&s"
  },
  {
    id: 22,
    country: "Iceland",
    title: "Black Sand Beaches",
    description: "The moody basalt columns and crashing waves of Reynisfjara.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1uMFZAHPOypOuP2-qZzhUU8tSyhh1VYkelQ&s"
  },
  {
    id: 23,
    country: "Iceland",
    title: "Soaking in the Blue Lagoon",
    description: "The ultimate geothermal spa experience in a lava field.",
    image: "https://content.icelandtravel.is/wp-content/uploads/2019/03/1200px-Blue_Lagoon_Iceland_22360145156.jpg"
  },
  {
    id: 24,
    country: "Iceland",
    title: "Skógafoss Waterfall Hike",
    description: "Feeling the mist of one of Iceland’s biggest waterfalls.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSJ-_-SQO4aDPCxewVYI00BFlOlAD_7e-2mw&s"
  },
  {
    id: 25,
    country: "Iceland",
    title: "Glacier Trekking in Vatnajökull",
    description: "Walking on ancient blue ice in Europe’s largest glacier.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG-Ge59oU2h8GF8goCc6himQhyCDUle8nE-A&s"
  }
]
}

// 6) Add static file middleware here
app.use(express.static(__dirname + '/public'))

// 7) Set the view engine to ejs here
app.set('view engine', 'ejs')

// 8) Create a route handler to path / and send your index.html 
// run your server with node index.js to test it
app.get('/',(req,res)=>{
res.sendFile(__dirname + '/public/home.html')

})


// 9) Create a route handler to your overview route from your planning document
// Pass in your data array

app.get('/overview', (req,res)=>{
res.render('home.ejs', travelBlogs)
})


// 10) Go to your EJS file and turn the HTML into EJS
// Test and run your server then submit if working (git add . git commit -m 'message' git push)


app.listen(3000, ()=> {
    console.log("Server Started")
})