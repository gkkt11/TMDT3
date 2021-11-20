const product_01_image_01 = require('../images/products/product-01 (1).jpg').default
const product_01_image_02 = require('../images/products/product-01 (2).jpg').default
// const product_01_image_03 = require('../images/products/product-01 (3).jpg').default

const product_02_image_01 = require('../images/products/product-02 (1).jpg').default
const product_02_image_02 = require('../images/products/product-02 (2).jpg').default

const product_03_image_01 = require('../images/products/product-03 (1).jpg').default
const product_03_image_02 = require('../images/products/product-03 (2).jpg').default

const product_04_image_01 = require('../images/products/product-04 (1).jpg').default
const product_04_image_02 = require('../images/products/product-04 (2).jpg').default

const product_05_image_01 = require('../images/products/product-05 (1).jpg').default
const product_05_image_02 = require('../images/products/product-05 (2).jpg').default

const product_06_image_01 = require('../images/products/product-06 (1).jpg').default
const product_06_image_02 = require('../images/products/product-06 (2).jpg').default

const product_07_image_01 = require('../images/products/product-07 (1).jpg').default
const product_07_image_02 = require('../images/products/product-07 (2).jpg').default

const product_08_image_01 = require('../images/products/product-08 (1).jpg').default
const product_08_image_02 = require('../images/products/product-08 (2).jpg').default

const product_09_image_01 = require('../images/products/product-09 (1).jpg').default
const product_09_image_02 = require('../images/products/product-09 (2).jpg').default

const product_10_image_01 = require('../images/products/product-10 (1).jpg').default
const product_10_image_02 = require('../images/products/product-10 (2).jpg').default

const product_11_image_01 = require('../images/products/product-11 (1).jpg').default
const product_11_image_02 = require('../images/products/product-11 (2).jpg').default

const product_12_image_01 = require('../images/products/product-12 (1).jpg').default
const product_12_image_02 = require('../images/products/product-12 (2).jpg').default

const products = [
    {
        title: "Air Jordan XXXVI 'First Light' PF",
        price: '5.439.000₫',
        image01: product_01_image_01,
        image02: product_01_image_02,
        categorySlug: "nike",
        colors: ["white", "black"],
        slug: "Air-Jordan-FL",
        size: ["35", "36", "37", "38", "39", "40"],
        description: "Since 1985, Jordan Brand has always done things that have never been seen before.Almost 40 years later, Jordan continues to bring new light to the game with international athletes that are redefining the blueprint once again.Beaming with talent, it's about the shine within that makes the new faces of the game radiant on the court.Drawing inspiration from ultraviolet rays, the Air Jordan XXXVI 'First Light' celebrates the future of Jordan—the ones who will brighten the way for the next generation of global superstars all across the world.This PF version uses an extra-durable outsole that's designed for outdoor courts."
    },
    {
        title: "Kyrie 8 EP",
        price: '3.829.000₫',
        image01: product_02_image_01,
        image02: product_02_image_02,
        categorySlug: "nike",
        colors: ["blue"],
        slug: "kyrie-EP",
        size: ["35", "36", "37", "38", "39", "40"],
        description: "The faster Kyrie slows down, the quicker he can speed up or change direction. His ability to control his movement keeps defenders guessing—and him in control. The Kyrie 8 EP provides a cushioned, custom fit and traction up the sides, allowing players to accelerate and decelerate on demand and take advantage of the separation they create."
    },
    {
        title: "Chuck 70 High - Midnight Clover",
        price: '2.000.000₫',
        image01: product_03_image_01,
        image02: product_03_image_02,
        categorySlug: "converse",
        colors: ["green"],
        slug: "chuck-70-high",
        size: ["35", "36", "37", "38", "39", "40"],
        description: "These sneakers feature a high-top silhouette and conventional materials, and incorporate three new elements that improve comfort and design: a wider rubber lining, a padded insole and a larger rubber toe box.The rest of the model remains true to the original 70's version."
    },
    {
        title: "Run Star Hike",
        price: '2.500.000₫',
        image01: product_04_image_01,
        image02: product_04_image_02,
        categorySlug: "converse",
        colors: ["black"],
        slug: "run-star-hike",
        size: ["35", "36", "37", "38", "39", "40"],
        description: "Details like a canvas build, rubber toe cap and Chuck Taylor ankle patch stay true to the original, while a molded platform, two-tone outsole and rounded heel give off futuristic vibes."
    },
    {
        title: "ULTRABOOST 21",
        price: '4.250.000₫',
        image01: product_05_image_01,
        image02: product_05_image_02,
        categorySlug: "nike",
        colors: ["grey"],
        slug: "ultraboost-21",
        size:["35", "36", "37", "38", "39", "40"],
        description: "Prototype after prototype. Innovation after innovation. Testing after testing. Meet us in the hot pursuit of the pinnacle harmonization of weight, cushioning, and responsiveness. Ultraboost 21. Say hello to incredible energy return."
    },
    {
        title: "ULTRABOOST DNA X LEGO® COLORS",
        price: '5.000.000₫',
        image01: product_06_image_01,
        image02: product_06_image_02,
        categorySlug: "adidas",
        colors: ["yellow"],
        slug: "ultraboost-dna-x-lego-color",
        size: ["35", "36", "37", "38", "39", "40"],
        description: "adidas and LEGO add a new chapter to their collaborative relationship with this colorful edition of the Ultraboost DNA that perfectly combines fun and sport.The sneakers are crafted on the upper with a white textile base and overlays in yellow, red, green and primary blue with textured detailing inspired by LEGO building blocks. Underfoot, it features a BOOST™ midsole backed by the Torsion stability system and Continental™ outsole so nothing gets in your way."
    },
    {
        title: "ZX 8000 J Lego GZ8214",
        price: '2.266.000₫',
        image01: product_07_image_01,
        image02: product_07_image_02,
        categorySlug: "adidas",
        colors: [ "red"],
        slug: "zx-8000-j-lego-gz8214",
        size: ["35", "36", "37", "38", "39", "40"],
        description: "adidas renews the ZX 8000 in collaboration with LEGO, the Danish brand founded in 1932 by Ole Kirk famous for its interlocking plastic bricks. The shoes emanate the playful spirit of the toy factory through their monochromatic look in vibrant red, while their construction retains the original details of the ZX saga, such as the nylon mesh base, the suede overlays and the TORSION stability bar, located in the underfoot."
    },
    {
        title: "ZX 8000 Lego sneakers",
        price: '3.400.000₫',
        image01: product_08_image_01,
        image02: product_08_image_02,
        categorySlug: "adidas",
        colors: ["white"],
        slug: "zx-8000-logo",
        size: ["35", "36", "37", "38", "39", "40"],
        description: "These new ZX 8000 created in collaboration with LEGO - the famous Danish brand of interlocking bricks founded in 1932 by Ole Kirk. The sneaker evokes the playful spirit of the toy factory through a bold colour palette and textured inserts based on the iconic pieces."
    },
    {
        title: "Chuck Taylor All Star Basketweave Low Top Sneaker",
        price: '1.700.000đ',
        image01: product_09_image_01,
        image02: product_09_image_02,
        categorySlug: "converse",
        colors: ["grey"],
        slug: "basket-weave-low-top",
        size: ["35", "36", "37", "38", "39", "40"],
        description: "CLASSIC CHUCK. PLUSH NEW TEXTURE. Chuck constructed in French terry fabric. It delivers comfort and an eye-catching new texture. An OrthoLite insole continues to cushion every step."
    },
    {
        title: "Chuck 70",
        price: '1.800.000₫',
        image01: product_10_image_01,
        image02: product_10_image_02,
        categorySlug: "converse",
        colors: ["black"],
        slug: "chuck-70",
        size: ["35", "36", "37", "38", "39", "40"],
        description: "More cushioning, tougher canvas, same versatility. The Chuck 70 High Top is built off of the original 1970s design, with premium materials and an extraordinary attention to detail. We added an extra cushy insole for arch support and stability, and used wing tongue stitching on 12oz canvas for durability. No reason not to wear them all day, every day."
    },
    {
        title: "Nike Air Force 1 Shadow",
        price: '3,519,000₫',
        image01: product_11_image_01,
        image02: product_11_image_02,
        categorySlug: "nike",
        colors: ["orange"],
        slug: "AF1",
        size:["35", "36", "37", "38", "39", "40"],
        description: "The Nike Air Force 1 Shadow puts a playful twist on a classic b-ball design.Using a layered approach, doubling the branding and giving an exaggerated midsole, it highlights AF-1 DNA with a bold look."
    },
    {
        title: "Nike Air Force 1 Shadow",
        price: '3,519,000₫',
        image01: product_12_image_01,
        image02: product_12_image_02,
        categorySlug: "nike",
        colors: ["white"],
        slug: "AF1-2",
        size: ["35", "36", "37", "38", "39", "40"],
        description: "The Nike Air Force 1 Shadow puts a playful twist on a classic b-ball design.Using a layered approach, doubling the branding and exaggerating the midsole, it highlights AF-1 DNA with a bold, new look."
    },
    {
        title: "Air Jordan XXXVI 'First Light' PF",
        price: '5.439.000₫',
        image01: product_01_image_01,
        image02: product_01_image_02,
        categorySlug: "nike",
        colors: ["white", "red"],
        slug: "air-jordan",
        size: ["35", "36", "37", "38", "39", "40"],
        description: "Since 1985, Jordan Brand has always done things that have never been seen before.Almost 40 years later, Jordan continues to bring new light to the game with international athletes that are redefining the blueprint once again.Beaming with talent, it's about the shine within that makes the new faces of the game radiant on the court.Drawing inspiration from ultraviolet rays, the Air Jordan XXXVI 'First Light' celebrates the future of Jordan—the ones who will brighten the way for the next generation of global superstars all across the world.This PF version uses an extra-durable outsole that's designed for outdoor courts."
    },
    {
        title: "Kyrie 8 EP",
        price: '3.829.000₫',
        image01: product_02_image_01,
        image02: product_02_image_02,
        categorySlug: "nike",
        colors: [ "blue"],
        slug: "kyrie-8-rp",
        size: ["35", "36", "37", "38", "39", "40"],
        description: "The faster Kyrie slows down, the quicker he can speed up or change direction. His ability to control his movement keeps defenders guessing—and him in control. The Kyrie 8 EP provides a cushioned, custom fit and traction up the sides, allowing players to accelerate and decelerate on demand and take advantage of the separation they create."
    },
    {
        title: "Chuck 70 High - Midnight Clover",
        price: '2.000.000₫',
        image01: product_03_image_01,
        image02: product_03_image_02,
        categorySlug: "converse",
        colors: ["green"],
        slug: "chuck-70",
        size: ["35", "36", "37", "38", "39", "40"],
        description: "These sneakers feature a high-top silhouette and conventional materials, and incorporate three new elements that improve comfort and design: a wider rubber lining, a padded insole and a larger rubber toe box.The rest of the model remains true to the original 70's version."
    },
    {
        title: "ZX 8000 Lego sneakers",
        price: '3.400.000₫',
        image01: product_08_image_01,
        image02: product_08_image_02,
        categorySlug: "adidas",
        colors: ["white"],
        slug: "zx-8000-lego",
        size:["35", "36", "37", "38", "39", "40"],
        description: "These new ZX 8000 created in collaboration with LEGO - the famous Danish brand of interlocking bricks founded in 1932 by Ole Kirk. The sneaker evokes the playful spirit of the toy factory through a bold colour palette and textured inserts based on the iconic pieces."
    },
    {
        title: "Chuck Taylor All Star Basketweave Low Top Sneaker",
        price: '1.700.000đ',
        image01: product_09_image_01,
        image02: product_09_image_02,
        categorySlug: "converse",
        colors: ["grey"],
        slug: "chuck-taylor",
        size:["35", "36", "37", "38", "39", "40"],
        description: "CLASSIC CHUCK. PLUSH NEW TEXTURE. Chuck constructed in French terry fabric. It delivers comfort and an eye-catching new texture. An OrthoLite insole continues to cushion every step."
    },
    {
        title: "Chuck 70",
        price: '1.800.000₫',
        image01: product_10_image_01,
        image02: product_10_image_02,
        categorySlug: "converse",
        colors: [ "black"],
        slug: "chuck-70",
        size: ["35", "36", "37", "38", "39", "40"],
        description: "More cushioning, tougher canvas, same versatility. The Chuck 70 High Top is built off of the original 1970s design, with premium materials and an extraordinary attention to detail. We added an extra cushy insole for arch support and stability, and used wing tongue stitching on 12oz canvas for durability. No reason not to wear them all day, every day."
    },
    // 18 products
]

const getAllProducts = () => products

const getProducts = (count) => {
    const max = products.length - count
    const min = 0
    const start = Math.floor(Math.random() * (max - min) + min)
    return products.slice(start, start + count)
}

const getProductBySlug = (slug) => products.find(e => e.slug === slug)

const getCartItemsInfo = (cartItems) => {
    let res = []
    if (cartItems.length > 0) {
        cartItems.forEach(e => {
            let product = getProductBySlug(e.slug)
            res.push({
                ...e,
                product: product
            })
        })
    }
    // console.log(res)
    // console.log('sorted')
    // console.log(res.sort((a, b) => a.slug > b.slug ? 1 : (a.slug < b.slug ? -1 : 0)))
    return res.sort((a, b) => a.id > b.id ? 1 : (a.id < b.id ? -1 : 0))
}

const productData = {
    getAllProducts,
    getProducts,
    getProductBySlug,
    getCartItemsInfo
}

export default productData