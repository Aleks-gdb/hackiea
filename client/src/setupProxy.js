const proxy = require('http-proxy-middleware');

/**
 * Dependencies: http-proxy-middleware
 * Uses 'http-proxy-middleware' to connect the client (frontend)
 * to the backend
 */

module.exports = function (app) {
    app.use(proxy('/api',
        {
            "target": "http://localhost:5000/"
        })
    );
}