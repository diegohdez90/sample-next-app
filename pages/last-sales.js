import { Fragment, useEffect, useState } from "react";

const LastSales = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://nextjs-course-fc71e-default-rtdb.firebaseio.com/sales.json')
            .then(res => {
                return res.json()
            })
            .then(data => {
                const sales = [];
                console.log(data);
                for (let key in data) {
                    sales.push({
                        id: key,
                        username: data[key].username,
                        volume: data[key].volume
                    });
                }
                setData(sales);
                setIsLoading(false);
            })
            .catch(err => {
                setIsLoading(false);
            })
    }, [])

    if(isLoading) {
        return (<Fragment>
            <p>Loading...</p>
        </Fragment>);
    }

    if(data.length === 0) {
        return (<Fragment>
            <p>No data found</p>
        </Fragment>)
    }
    return <Fragment>
        <div>
            {data.length} Products available
            <ul>
                {
                    data.map(item => (
                        <li key={item.id}>{item.username}: {item.volume}</li>
                    ))
                }
            </ul>
        </div>
    </Fragment>;
}

export default LastSales;

