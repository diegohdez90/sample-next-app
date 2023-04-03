import { Fragment } from "react";

const UserId = (props) => {
    return (<Fragment>
        <h1>Profile {props.id}</h1>
    </Fragment>)
}

export async function getServerSideProps(context) {
    const { params } = context;

    const uid = params.uid;

    return {
        props: {
            id: `userid-${uid}`
        }
    }
}

export default UserId;

