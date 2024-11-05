"use client";

import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nama: '',
    komentar: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClear = () => {
    setFormData({
      nama: '',
      komentar: '',
    });
    setSubmitted(false);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
      {submitted ? (
        <div style={{ textAlign: 'center' }}>
          <h2>Data berhasil dikirim!</h2>
          <p>
            Nama: {formData.nama}, <br />
            Komentar: {formData.komentar}
          </p>
          <p>Data di atas akan segera di input ke database. Terima kasih!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ width: '300px', border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}>
          <h2>Contact Form</h2>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="nama" style={{ color: 'gray' }}>Nama:</label>
            <input
              type="text"
              id="nama"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', marginTop: '5px', color: 'gray' }}
              required
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="komentar" style={{ color: 'gray' }}>Komentar:</label>
            <textarea
              id="komentar"
              name="komentar"
              value={formData.komentar}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', marginTop: '5px', color: 'gray' }}
              required
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
              Submit
            </button>
            <button type="button" onClick={handleClear} style={{ padding: '10px 20px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
              Clear
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
