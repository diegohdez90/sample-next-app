import { useRouter } from "next/router";

const ProductId = () => {

    const router = useRouter();

    console.log(router.pathname);
    console.log(router.query);
    return (<div>
        <h1>Product Detail</h1>
    </div>)
}

export default ProductId;
