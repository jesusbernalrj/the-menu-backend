import express from 'express'

const app = express()

const port = process.env.PORT || 8080

app.get('/admin', (req, res) => {
    res.send('funciono')
})
app.get('/miembro', (req, res) => {
    res.send('funciono')
})
app.get('/generar-venta', (req, res) => {
    res.send('funciono')
})
app.get('/about-us', (req, res) => {
    res.send('funciono')
})
app.get('/learn', (req, res) => {
    res.send('funciono')
})
app.get('/choose', (req, res) => {
    res.send('funciono')
})
app.get('/importacion', (req, res) => {
    res.send('funciono')
})
app.get('/meta', (req, res) => {
    res.send('funciono')
})
app.get('/print', (req, res) => {
    res.send('funciono')
})
app.get('/exportacion', (req, res) => {
    res.send('funciono')
})
app.get('/diseñar-factura', (req, res) => {
    res.send('funciono')
})

app.listen(port, () => {
    console.log('servidor escuchando puerto', + port)
})