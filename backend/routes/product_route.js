const { addProduct, getProduct, getProductById, updateProduct, deleteProduct, getAllProductByUserId } = require('../controller/product_logic')

const router = require('express').Router()

router.post('/add',addProduct)
router.get('/getAll',getProduct)
router.get('/get/:id',getProductById)
router.get('/getByUser/:id',getAllProductByUserId)
router.put('/update/:id',updateProduct)
router.delete('/delete/:id',deleteProduct)

module.exports = router