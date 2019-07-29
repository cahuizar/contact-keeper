import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/contactContext';

const ContactIteem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrent, clearCurrent } = contactContext;
  const { _id, name, email, phone, type } = contact;

  const onDelete = () => {
    deleteContact(_id);
    clearCurrent();
  };
  const onEdit = () => {
    setCurrent(contact);
  };
  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>
        {name}{' '}
        <span
          style={{ float: 'right' }}
          className={
            'badge ' +
            (type === 'professional' ? 'badge-success' : 'badge-primary')
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul>
        {email && (
          <li style={{ marginTop: '.5rem' }}>
            <i className='fas fa-envelope-open' /> {email}
          </li>
        )}
        {phone && (
          <li style={{ marginTop: '.5rem' }}>
            <i className='fas fa-phone' /> {phone}
          </li>
        )}
      </ul>
      <p style={{ marginTop: '.5rem' }}>
        <button className='btn btn-dark btn-sm' onClick={onEdit}>
          Edit
        </button>
        <button className='btn btn-danger btn-sm' onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

ContactIteem.propTypes = {
  contact: PropTypes.object.isRequired
};

export default ContactIteem;
