import { Fragment } from "react"

const Profile = (props) => {
    return (<Fragment>
        <h1>Profile {props.username}</h1>
    </Fragment>)
}

export async function getServerSideProps (context) {
    const { params, req, res } = context;
    return {
        props: {
            username: 'diego'
        }
    }
}


export default Profile;
