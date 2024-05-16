import { Fragment } from "react";
import CardProduct from "../Fragments/CardProduct";
import Button from "../Elements/Button";

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

const email = localStorage.getItem("email");
const ProductsPage = () => {
    const handleLogout = () => {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        window.location.href = "/login"
    }
    return (
        <Fragment>
            <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
                {email}
                <Button classname="ml-5 bg-black" onClick={handleLogout}>Logout</Button>
                </div>
            
             <div className="flex justify-center py-5">
            {products.map((product) => (
                <CardProduct key={product.id}>
                    <CardProduct.Header image={product.image}/>
                    <CardProduct.Body name={product.name}>
                        {product.description}
                    </CardProduct.Body> 
                    <CardProduct.Footer price={product.price}/> 
                </CardProduct>
            ))}
        </div>
        </Fragment>
    )
}

export default ProductsPage;