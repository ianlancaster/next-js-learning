/**
 * Parameterized Routing with next-route
 *
 * Benefits: Less code, and easily handles complex url structures
 **/
const routes = require('next-routes')()

routes.add('blog/entry', '/blog/:id')

module.exports = routes
