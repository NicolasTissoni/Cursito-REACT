import React, { useContext } from "react";
import Context from "../../context/NotificationContext";

import './notification.scss';

const Notification = () => {
    const { notification, setNotification } = useContext(Context);

    if (notification.severity === '' || notification.message === '') {
        return null;
    };

    return (
        <div className='notification' onClick={() => setNotification('')}>
            <h1 className={notification.severity}>{notification.message}</h1>
        </div>
    );
};

export default Notification;