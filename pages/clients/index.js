import Link from "next/link";

const Clients = () => {

    const clients = [{
        id: 1,
        name: 'John Doe'
    } ,{
        id: 2,
        name: 'Diego Arturo'
    }]
    return (<div>
        <h1>Clients Main Page</h1>
        <ul>
            {clients.map(client => (
                <li
                    key={client.id}
                >
                    <Link
                        href={`/clients/${client.id}`}
                    >
                        {client.name}
                    </Link>
                </li>
            ))}
        </ul>
    </div>)
}

export default Clients;
