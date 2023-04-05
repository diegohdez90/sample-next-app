import { Fragment, useContext } from "react"
import Header from "./Header"
import Notification from "../ui/Notification";
import NotificationContext from "../../store/notitication-context";



const Layout = (props) => {

    const context = useContext(NotificationContext);

    const active = context.notification;

    return (<Fragment>
        <Header />
        {props.children}
        {active && <Notification
            title={active.title}
            message={active.message}
            status={active.status}
             />}
    </Fragment>)
}

export default Layout;
