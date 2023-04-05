import { useContext } from "react";
import NotificationContext from "../../../store/notitication-context";

const Notification = (props) => {
    const context = useContext(NotificationContext);

    return (<div onClick={(e) => {
        context.hideNotification();
    }}>
        <h3>{props.status}</h3>
        <div>{props.title}</div>
        <div>{props.message}</div>
    </div>)
}

export default Notification;
