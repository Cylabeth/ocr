module.exports = app => {

    // Base URLS
    app.use('/api/rodex', require('./rodex.routes.js')) //esto tiene que ser asi?
    app.use('/api', require('./auth.routes.js'))
    app.use('/api/ocr',require('./ocr.routes.js'))
    app.use('/admin', require('./admin.routes.js'))
    
}