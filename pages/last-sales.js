import { Fragment, useEffect, useState } from "react";
import useSwr from 'swr';
import { fetcher } from "../utils/fetcher";

const LastSales = () => {

    // const [isLoading, setIsLoading] = useState(true);
    const [sales, setSales] = useState([]);

    const { data, error } = useSwr('https://nextjs-course-fc71e-default-rtdb.firebaseio.com/sales.json', fetcher);
    

    console.log('data', data);
    console.log('error', error);

    useEffect(() => {
        console.log(data);
        if (data) {
            console.log(data);
            const transformedSales = [];
            for (let key in data) {
                transformedSales.push({
                    id: key,
                    username: data[key].username,
                    volume: data[key].volume
                });
            }
            setSales(transformedSales);
        }
    }, [data])

    //useEffect(() => {
    //    fetch('https://nextjs-course-fc71e-default-rtdb.firebaseio.com/sales.json')
    //        .then(res => {
    //            return res.json()
    //        })
    //        .then(data => {
    //            const sales = [];
    //            console.log(data);
    //            for (let key in data) {
    //                sales.push({
    //                    id: key,
    //                    username: data[key].username,
    //                    volume: data[key].volume
    //                });
    //            }
    //            setSales(sales);
    //            setIsLoading(false);
    //        })
    //        .catch(err => {
    //            setIsLoading(false);
    //        })
    //}, [])

    if(!data || !sales) {
        return (<Fragment>
            <p>Loading...</p>
        </Fragment>);
    }

    if(error) {
        return (<Fragment>
            <p>No data found</p>
        </Fragment>)
    }

    return <Fragment>
        <div>
            {sales.length} Products available
            <ul>
                {
                    sales.map(item => (
                        <li key={item.id}>{item.username}: {item.volume}</li>
                    ))
                }
            </ul>
        </div>
    </Fragment>;
}

export default LastSales;

