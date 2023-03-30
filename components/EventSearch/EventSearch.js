import { Fragment, useRef } from "react";
import Button from "../Button";

const EventSearch = (props) => {

    const year = useRef();
    const month = useRef();

    const onSubmit = (e) => {
        e.preventDefault();
        const y = year.current.value;
        const m = month.current.value;

        props.onSearch(y, m);
    }
    return (<Fragment>
        <div>
            <form onSubmit={onSubmit}>
                <label>
                    <span>Year</span>
                    <select ref={year}>
                        <option value={2021}>2021</option>
                        <option value={2022}>2022</option>
                    </select>
                </label>
                <label>
                    <span>Month</span>
                    <select ref={month}>
                        <option value="1">January</option>
                        <option value="2">February</option>
                        <option value="3">March</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                    </select>
                </label>
                <div>
                    <Button>Filter</Button>
                </div>
            </form>
        </div>
    </Fragment>);
}

export default EventSearch;
