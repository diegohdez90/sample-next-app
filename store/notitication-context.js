import { createContext, useState, useEffect } from 'react';

const NotificationContext = createContext({
    notification: null,
    showNotification: function(data) {},
    hideNotification: function() {}
});


export function NotificationContextProvider(props) {

    const [activeNotification, setActiveNotification] = useState();

    useEffect(() => {
        if(activeNotification) {
            const timer = setTimeout(() => {
                hideNotificationHandler()
            }, 5000);
            return () => {
                clearTimeout(timer)
            }
        }
    }, [activeNotification]);

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
