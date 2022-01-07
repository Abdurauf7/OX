// Third part
import { notification } from "antd";

// Custom Notifivation

export const openNotification = (message, type) => {
  return notification[type]({
    message: message,
    duration: 2,
  });
};
