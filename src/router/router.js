import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
    res.send('funciono')
})
router.get('/admin', (req, res) => {
    res.json('funciono')
})
router.get('/miembro', (req, res) => {
    res.send('funciono')
})
router.get('/generar-venta', (req, res) => {
    res.send('funciono')
})
router.get('/about-us', (req, res) => {
    res.send('funciono')
})
router.get('/learn', (req, res) => {
    res.send('funciono')
})
router.get('/choose', (req, res) => {
    res.send('funciono')
})
router.get('/importacion', (req, res) => {
    res.send('funciono')
})
router.get('/meta', (req, res) => {
    res.send('funciono')
})
router.get('/print', (req, res) => {
    res.send('funciono')
})
router.get('/exportacion', (req, res) => {
    res.send('funciono')
})
router.get('/diseñar-factura', (req, res) => {
    res.send('funciono')
})
router.get('/video-tutorial', (req, res) => {
    res.send('funciono')
})



export default router