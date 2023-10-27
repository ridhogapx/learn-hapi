const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (req, h) => {
            return 'homepage'
        },
    },
    {
        method: 'GET',
        path: '/about',
        handler: (req, h) => {
            return 'about page'
        },
    },
    {
        method: 'GET',
        path: '/greet/{name?}',
        handler: (req, h) => {
            const { name = "Orang asing" } = req.params
            return `Selamat malam, ${ name }`
        }
    },
    {
        method: 'GET',
        path: '/{any*}',
        handler: (req, h) => {
            return "Halaman tidak ditemukan"
        }
    }
]

module.exports = routes;