import { useRouter } from "next/router";

const ClientProjects = () => {
    const router = useRouter();
    return (<div>
        <h1>Client {router.query.id} Projects</h1>
    </div>)
}

export default ClientProjects;
