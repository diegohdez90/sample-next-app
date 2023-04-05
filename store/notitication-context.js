import { createContext, useState } from 'react';

const NotificationContext = createContext({
    notification: null,
    showNotification: function(data) {},
    hideNotification: function() {}
});


export function NotificationContextProvider(props) {

    const [activeNotification, setActiveNotification] = useState();

    function showNotificationHandler(data) {
        setActiveNotification(data)
    }

    function hideNotificationHandler() {
        setActiveNotification(null);
    }

    const context = {
        notification: activeNotification,
        showNotification: showNotificationHandler,
        hideNotification: hideNotificationHandler,
    };

    return <NotificationContext.Provider value={context}>
        {props.children}
    </NotificationContext.Provider>
}

export default NotificationContext;
