import CardProduct from "../Fragments/CardProduct";

const products = [
    {
        id: 1,
        name: "Sepatu baru",
        price: "Rp 1.000.000",
        image: "/images/shoes-1.jpg",
        description: `lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae corporis veniam labore sapiente culpa eaque in enim mollitia ullam. Eius ipsa eum inventore qui eaque pariatur, perspiciatis laborum omnis et!.`

    },
    {
        id: 2,
        name: "Sepatu lama",
        price: "Rp 500.000",
        image: "/images/shoes-1.jpg",
        description: `lorem ipsum dolor sit amet consectetur adipisicing elit.  perspiciatis laborum omnis et!.`

    },
]

const ProductsPage = () => {
    return (
        <div className="flex justify-center py-5">

            {products.map((product) => (
                <CardProduct>
                    <CardProduct.Header image={product.image}/>
                    <CardProduct.Body name={product.name}>
                        {product.description}
                    </CardProduct.Body> 
                    <CardProduct.Footer price={product.price}/> 
                </CardProduct>
            ))}
           
            
        </div>
    )
}

export default ProductsPage;