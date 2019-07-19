import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const { addContact, current } = contactContext;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({ name: '', email: '', phone: '', type: 'personal' });
    }
  }, [contactContext, current]);

  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal'
  });
  const { name, email, phone, type } = contact;
  const onChange = e =>
    setContact({ ...contact, [e.target.name]: e.target.value });
  const onSumbit = e => {
    e.preventDefault();
    addContact(contact);
    setContact({ name: '', email: '', phone: '', type: 'personal' });
  };
  return (
    <form onSubmit={onSumbit}>
      <h2 className='text-primary'>Add Contact</h2>
      <input
        type='text'
        name='name'
        placeholder='Name'
        value={name}
        onChange={onChange}
      />
      <input
        type='email'
        name='email'
        placeholder='Email'
        value={email}
        onChange={onChange}
      />
      <input
        type='text'
        name='phone'
        placeholder='Phone'
        value={phone}
        onChange={onChange}
      />
      <h5>Contact Type</h5>
      <input
        type='radio'
        name='type'
        value='personal'
        id='personal'
        checked={type === 'personal'}
        onChange={onChange}
      />{' '}
      <label htmlFor='personal'>Personal</label>{' '}
      <input
        type='radio'
        name='type'
        value='professional'
        id='professional'
        checked={type === 'professional'}
        onChange={onChange}
      />{' '}
      <label htmlFor='professional'>Personal</label>
      <div>
        <input
          type='submit'
          value='Add Contact'
          className='btn btn-primary btn-block'
        />
      </div>
    </form>
  );
};

export default ContactForm;
