import express from 'express'
const app = express()


const main = async () => {
    app.post('/api/csv-upload', (req, res) => {
        console.log('csv upload...')
        req.pipe(request.post("http://myakka-http-server/csv-upload")).pipe(res)
    })
}

main().catch(err => console.error(err))