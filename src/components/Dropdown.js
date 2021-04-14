import { useSelector } from "react-redux";

const Dropwdown = () => {
  const { user } = useSelector((state) => state.userData);
  return (
    <div className="dropdown">
      <img className='round' src="/imgs/user-icon-image-22.jpg" alt="default-user" />
      {user.username}
      <span>Dashboard</span>
      <span>Notifications</span>
      <span>Messages</span>
      <span>Friends </span>
      <span>Statistic</span>
      <div className="help">
        <span>Help</span>
        <span>Log Out</span>
      </div>
    </div>
  );
};

export default Dropwdown;
