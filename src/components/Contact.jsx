import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!formData.name || !formData.email || !formData.message) {
      setError('All fields are required.');
      return;
    }

    emailjs
      .send(
        'your_service_id',
        'your_template_id',
        formData,
        'your_user_id'
      )
      .then(
        () => setSuccess('Message sent successfully!'),
        () => setError('Failed to send message. Please try again later.')
      );
  };

  return (
    <div className="bg-lightGray dark:bg-deepBlue text-deepBlue dark:text-lightGray min-h-screen p-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="bg-white dark:bg-slateGray p-6 rounded shadow-md">
          {error && <p className="text-red-500 mb-4">{error}</p>}
          {success && <p className="text-green-500 mb-4">{success}</p>}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 bg-lightGray dark:bg-slateGray text-deepBlue dark:text-lightGray"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 bg-lightGray dark:bg-slateGray text-deepBlue dark:text-lightGray"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 bg-lightGray dark:bg-slateGray text-deepBlue dark:text-lightGray"
              rows="5"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-skyBlue text-white px-6 py-2 rounded font-semibold hover:bg-deepBlue"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8 text-center">
          <h3 className="text-xl font-bold mb-4">Connect with me</h3>
          <div className="flex justify-center gap-6">
            <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} className="text-skyBlue hover:text-deepBlue" />
            </a>
            <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} className="text-skyBlue hover:text-deepBlue" />
            </a>
            <a href="https://twitter.com/your-handle" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={30} className="text-skyBlue hover:text-deepBlue" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;