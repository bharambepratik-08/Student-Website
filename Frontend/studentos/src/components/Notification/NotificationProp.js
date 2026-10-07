import React, { useContext } from "react";
import NotificationContext from "../../context/Notification/NotificationContext";

const NotificationProp = (props) => {
  const context = useContext(NotificationContext);
  const { deleteNotification } = context;

  const { title, description, priority, color, time, date, id, type } = props;

  const logoSel = (e) => {
    switch (e) {
      case "task":
        return <i className="fa-solid fa-list-check"></i>;
      
      case 'goal':
        return <i className="fa-solid fa-bullseye"></i>;

      default:
        break; 
    }
  }

  console.log(props)

  const formattedDue = new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const formattedTime = (() => {
    if (!time) return "";

    const [hours, minutes] = time.split(":");
    let h = parseInt(hours, 10);

    const period = h >= 12 ? "PM" : "AM";
    h = h % 12 || 12;

    return `${String(h).padStart(2, "0")}:${minutes} ${period}`;
  })();

  return (
    <div className="NotificationProp padding-24 display alignItemsC borderRadius-16 gap-24">
      <div className="LogoNotification padding-24 display alignItemsC justifyItemsC">
        {logoSel(type)}
      </div>
      <div className="NotificationRest padding-12 display displayColumn gap-4">
        <div className="UpperLook display alignItemsC justifyItemsSpaceBtw ">
          <div className="NotificationDeadline"><strong>Date</strong>:  {formattedDue}</div>
          <div className="NotificationTime"><strong>Time</strong>:  {formattedTime}</div>
        </div>
        <div className="display justifyItemsSpaceBtw">
          <div className="display displayColumn gap-4">
            <div className="NotificationBoxTitle"><strong>Title</strong>:  {title}</div>
            <div className="NotificationBoxDescription"><strong>Description</strong>:  {description}</div>
          </div>
          <button className="padding-8 btnOutlineBorder borderRadius-8 deleteNotificationBtn" onClick={ () => { deleteNotification(id) }}>
          <i className="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationProp;
