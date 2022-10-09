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
            <h2 className={notification.severity}>{notification.message}</h2>
        </div>
    );
};

export default Notification;