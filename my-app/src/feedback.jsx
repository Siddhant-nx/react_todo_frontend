import React, { useState } from 'react';

function FeedbackForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => { e.preventDefault();
    if (name && email && message) {
      console.log('Feedback submitted:', { name, email, message });
      setSubmitted(true);
    }
  };

  return (
    <div className="feedback-form">
      <h2>Feedback Form</h2>
      {submitted ? (
        <p>Thank you for your feedback!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input type="text" value={name}  onChange={(e) => setName(e.target.value)}  required  />
          </div>
          <div>
            <label>Email:</label>
            <input  type="email" value={email}  onChange={(e) => setEmail(e.target.value)} required/>
          </div>
          <div>
            <label>Message:</label>
            <textarea
              value={message} onChange={(e) => setMessage(e.target.value)}  required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default FeedbackForm;
