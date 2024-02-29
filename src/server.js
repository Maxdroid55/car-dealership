import { createServer, Model } from "miragejs"

createServer({
  models: {
    cars: Model,
  },

  seeds(server) {
    server.create("car", {
      id: 1,
      make: "Ferrari",
      model: "LaFerrari",
      year: 2023,
      horsepower: 963,
      topSpeed: 217,
      acceleration: 2.5,
      imgUrl: "https://i.pinimg.com/originals/17/27/0f/17270fb6b3c174daae51ec6ba0415c4d.png"
    })

    server.create("car", {
      id: 2,
      make: "Lamborghini",
      model: "Aventador SVJ",
      year: 2024,
      horsepower: 759,
      topSpeed: 220,
      acceleration: 2.8,
      imgUrl: "https://www.ccarprice.com/products/Lamborghini_Aventador_SVJ_Roadster_2024.jpg"
    })

    server.create("car", {
      id: 3,
      make: "Porsche",
      model: "911 GT2 RS",
      year: 2023,
      horsepower: 700,
      topSpeed: 211,
      acceleration: 2.7,
      imgUrl: "https://i.pinimg.com/originals/c4/26/37/c4263799e748b1a1dc5662bdbeab7fe1.png "
    })

    server.create("car", {
      id: 4,
      make: "McLaren",
      model: "720S",
      year: 2024,
      horsepower: 710,
      topSpeed: 212,
      acceleration: 2.8,
      imgUrl: "https://mclaren.scene7.com/is/image/mclaren/720S_Coupe:crop-2x1?fmt=png-alpha&wid=1920&hei=960"
    })

    server.create("car", {
      id: 5,
      make: "Bugatti",
      model: "Chiron",
      year: 2023,
      horsepower: 1479,
      topSpeed: 261,
      acceleration: 2.5,
      imgUrl: "https://pngimg.com/d/bugatti_PNG30.png"
    })
    server.create("car", {
      id: 6,
      make: "Aston Martin",
      model: "Valkyrie",
      year: 2024,
      horsepower: 1160,
      topSpeed: 250,
      acceleration: 2.5,
      imgUrl: "https://cdn.grange.co.uk/assets/new-cars/aston-martin/valkyrie/coupe/pbpvi5c5xfp.webp"
    })
    server.create("car", {
      id: 7,
      make: "Koenigsegg",
      model: "Jesko Absolut",
      year: 2023,
      horsepower: 1600,
      topSpeed: 330,
      acceleration: 2.8,
      imgUrl: "https://cdn.carbuzz.com/car-thumbnails/700x375/8000/700/8774.jpg"
    })
    server.create("car", {
      id: 8,
      make: "Pagani",
      model: "Huayra Roadster BC",
      year: 2024,
      horsepower: 791,
      topSpeed: 238,
      acceleration: 2.8,
      imgUrl: "https://cdn.carbuzz.com/car-thumbnails/700x375/9000/900/9937.jpg"
    })
    server.create("car", {
      id: 9,
      make: "Porsche",
      model: "911 GT3 RS",
      year: 2023,
      horsepower: 525,
      topSpeed: 296,
      acceleration: 3.2,
      imgUrl: "https://files.porsche.com/filestore/image/multimedia/none/992-gt3-rs-modelimage-sideshot/model/cfbb8ed3-1a15-11ed-80f5-005056bbdc38/porsche-model.png"
    })
    server.create("car", {
      id: 10,
      make: "Mclaren",
      model: "Senna",
      year: 2024,
      horsepower: 789,
      topSpeed: 335,
      acceleration: 2.8,
      imgUrl: "https://img2.cgtrader.com/items/3920284/dde1f4920d/large/mclaren-senna-lm-3d-model-obj-fbx-c4d-blend-dae.jpg"
    })
  },

  routes() {
    this.namespace = "api"
    this.logging = false

    this.get("/cars", (schema) => {
      return schema.cars.all()
    })

    this.get("/cars/:id", (schema, request) => {
      const id = request.params.id
      return schema.cars.find(id)
    })
  }
})