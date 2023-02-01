import PropTypes from 'prop-types';
//import s from './Notification.module.css';

const Notification = ({ message }) => <p className="notification">{message}</p>;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
