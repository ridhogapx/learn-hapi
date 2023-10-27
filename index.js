const hapi = require("@hapi/hapi")
const routes = require("./routes.js")

const init = async() => {
    const server = await hapi.Server({
        port: 5000,
        host: "localhost"
    })

    server.route(routes)

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`)

}

init()