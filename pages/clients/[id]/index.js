import { useRouter } from "next/router";

const ClientProjects = () => {
    const router = useRouter();

    const loadProjectHandler = () => {
        // router.replace(`/clients/${router.query.id}/1`);
        router.push({
            pathname: '/clients/[id]/[projectId]',
            query: {
                id: router.query.id,
                projectId: 1,
            }
        })
    }

    return (<div>
        <h1>Client {router.query.id} Projects</h1>
        <button onClick={loadProjectHandler}>Load Project A</button>
    </div>)
}

export default ClientProjects;
