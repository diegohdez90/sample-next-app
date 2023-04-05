
const Notification = (props) => {
    return (<div>
        <h3>{props.status}</h3>
        <div>{props.title}</div>
        <div>{props.message}</div>
    </div>)
}

export default Notification;
