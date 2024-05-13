import CardProduct from "../Fragments/CardProduct";

const ProductsPage = () => {
    return (
        <div className="flex justify-center py-5">
            <CardProduct>
                <CardProduct.Header image="/images/shoes-1.jpg"/>
                <CardProduct.Body title="Sepatu baru">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae corporis veniam labore sapiente culpa eaque in enim mollitia ullam. Eius ipsa eum inventore qui eaque pariatur, perspiciatis laborum omnis et!.
                </CardProduct.Body> 
                <CardProduct.Footer price="1000000"/> 
            </CardProduct>
            <CardProduct>
                <CardProduct.Header image="/images/shoes-1.jpg"/>
                <CardProduct.Body title="Sepatu baru">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae corporis veniam labore sapiente culpa eaque in enim mollitia ullam. Eius ipsa eum inventore qui eaque pariatur, perspiciatis laborum omnis et!.
                </CardProduct.Body> 
                <CardProduct.Footer price="1000000"/> 
            </CardProduct>
            
        </div>
    )
}

export default ProductsPage;