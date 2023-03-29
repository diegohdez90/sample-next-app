import { useRouter } from "next/router";

const BlogEntry = () => {
    const router = useRouter();
    console.log(router.query);
    return (<div>
        <h1>Blog Entry</h1>
    </div>)
}

export default BlogEntry;
