import { Router } from 'express'
import path from 'path'
const router = Router()
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
// router.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'dist', 'index.html'));
//   });
router.get('/', (req, res) => {
    res.redirect('/')
})
router.get('/admin', (req, res) => {
    res.redirect('/admin')
})
router.get('/miembro', (req, res) => {
    res.redirect('/miembro')
})
router.get('/generar-venta', (req, res) => {
    res.redirect('/generar-venta')
})
router.get('/about-us', (req, res) => {
    res.redirect('/about-us')
})
router.get('/learn', (req, res) => {
    res.send('funciono')
})
router.get('/choose', (req, res) => {
    res.redirect('/choose')
})
router.get('/importacion', (req, res) => {
    res.redirect('/importacion')
})
router.get('/meta', (req, res) => {
    res.redirect('/meta')
})
router.get('/print', (req, res) => {
    res.redirect('/print')
})
router.get('/exportacion', (req, res) => {
    res.redirect('/exportacion')
})
router.get('/diseñar-factura', (req, res) => {
    res.redirect('/diseñar-factura')
})
router.get('/video-tutorial', (req, res) => {
    res.redirect('/video-tutorial')
})



export default router