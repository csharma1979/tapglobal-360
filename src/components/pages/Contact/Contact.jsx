'use client';

import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.scss';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const address = "7106 Marble Springs Dr, Katy, TX 77494";

  const handleDirectionsClick = () => {
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
    window.open(googleMapsUrl, '_blank', 'noopener,noreferrer');
  };

  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      phoneno: '',
      countryCode: '',
      message: '',
      formType: 'contact',
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required('First name is required'),
      lastname: Yup.string().required('Last name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      phoneno: Yup.string().required('Phone number is required'),
      countryCode: Yup.string().required('Country code is required'),
      message: Yup.string().min(10, 'Message must be at least 10 characters').required('Message is required'),
    }),
    onSubmit: async (values, { resetForm }) => {
      setIsSubmitting(true);
      try {
        const response = await axios.post("/api/contact", values, {
          headers: { "Content-Type": "application/json" },
        });
        toast.success(response.data.message || 'Message sent successfully!');
        resetForm();
      } catch (error) {
        toast.error(error.response?.data?.error || 'Something went wrong!');
      } finally {
        setIsSubmitting(false);
      }
    }
  });

  return (
    <>
      <Header />
      <div className="contact-page">
        <div className="contact-hero">
          <div className="container">
            <h1>Connect with Us</h1>
            <p>We help our clients renew their business</p>
          </div>
        </div>

        <div className="contact-content">
          <div className="container">
            <div className="contact-grid">
              <div className="contact-card">
                <FiPhone className="contact-icon" />
                <h3>CALL 24/7</h3>
                <a href="tel:+18323125501">+1-832-312-5501</a>
              </div>

              <div className="contact-card">
                <FiMail className="contact-icon" />
                <h3>MORE INFO</h3>
                <a href="mailto:support@tapglobal360.com">support@tapglobal360.com</a>
              </div>

              <div className="contact-card clickable" onClick={handleDirectionsClick}>
                <FiMapPin className="contact-icon" />
                <h3>Just Drop By</h3>
                <p>7106 Marble Springs Dr<br />Katy, TX 77494</p>
              </div>
            </div>

            <div className="contact-form-section">
              <h2>Send Us a Message</h2>
              <form className="contact-form" onSubmit={formik.handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    {...formik.getFieldProps('firstname')}
                  />
                  {formik.touched.firstname && formik.errors.firstname && (
                    <div className="error-message">{formik.errors.firstname}</div>
                  )}
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    {...formik.getFieldProps('lastname')}
                  />
                  {formik.touched.lastname && formik.errors.lastname && (
                    <div className="error-message">{formik.errors.lastname}</div>
                  )}
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    {...formik.getFieldProps('email')}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div className="error-message">{formik.errors.email}</div>
                  )}
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    name="phoneno"
                    placeholder="Phone Number"
                    {...formik.getFieldProps('phoneno')}
                  />
                  {formik.touched.phoneno && formik.errors.phoneno && (
                    <div className="error-message">{formik.errors.phoneno}</div>
                  )}
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    name="countryCode"
                    placeholder="Country Code (e.g., +1)"
                    {...formik.getFieldProps('countryCode')}
                  />
                  {formik.touched.countryCode && formik.errors.countryCode && (
                    <div className="error-message">{formik.errors.countryCode}</div>
                  )}
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    {...formik.getFieldProps('message')}
                  />
                  {formik.touched.message && formik.errors.message && (
                    <div className="error-message">{formik.errors.message}</div>
                  )}
                </div>

                <button type="submit" className="submit-button" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-right" />
    </>
  );
};

export default Contact;
