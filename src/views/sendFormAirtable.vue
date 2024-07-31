<template>
    <div class="form-container">
      <h1>Startup Submission to Airtable</h1>
      <p>* indicates required field.</p>
      <form @submit.prevent="submitForm">
        <div>
          <label>Your name *</label>
          <input v-model="formData.first_name" required />
        </div>
        <div>
          <label>Your email *</label>
          <input type="email" v-model="formData.email" required />
        </div>
        <div>
          <label>Name of your company *</label>
          <input v-model="formData.company_name" required />
        </div>
        <div>
          <label>Vertical *</label>
          <select v-model="formData.vertical" required>
            <option value="AI / ML">AI / ML</option>
            <!-- Add more options if needed -->
          </select>
        </div>
        <div>
          <label>Company Website *</label>
          <input type="url" v-model="formData.company_website" required />
        </div>
        <div>
          <label>Twitter-length description of your company *</label>
          <textarea v-model="formData.twitter_description" required></textarea>
        </div>
        <div>
          <label>Deck Link *</label>
          <input type="url" v-model="formData.pitch_deck" required />
        </div>
        <div>
          <label>CEO LinkedIn *</label>
          <input type="url" v-model="formData.ceo_linkedin" required />
        </div>
        <div>
          <label>CTO LinkedIn</label>
          <input type="url" v-model="formData.cto_linkedin" />
        </div>
        <div>
          <label>Link to founder video *</label>
          <input type="url" v-model="formData.founder_video" required />
        </div>
        <div>
          <label>Date Founded *</label>
          <input type="date" v-model="formData.date_founded" required />
        </div>
        <div>
          <label>Vision *</label>
          <textarea v-model="formData.vision" required></textarea>
        </div>
        <div>
          <label>Where are you located? *</label>
          <select v-model="formData.location" required>
            <option value="New York">New York</option>
            <!-- Add more options if needed -->
          </select>
        </div>
        <div>
          <label>How much capital have you raised? *</label>
          <input type="text" v-model="formData.raised_capital" required />
        </div>
        <div>
          <label>How much capital do you want to raise now? *</label>
          <input type="text" v-model="formData.raising_amount" required />
        </div>
        <button type="submit">Send</button>
      </form>
      <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          first_name: '',
          email: '',
          company_name: '',
          vertical: '',
          business_verticals: '',
          company_website: '',
          twitter_description: '',
          pitch_deck: '',
          ceo_linkedin: '',
          cto_linkedin: '',
          founder_video: '',
          date_founded: '',
          vision: '',
          location: '',
          raised_capital: '',
          raising_amount: ''
        },
        successMessage: '',
        errorMessage: ''
      };
    },
    methods: {
      async submitForm() {
        try {
          const response = await fetch('http://localhost:3002/send-airtable-form', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.formData)
          });
  
          if (response.ok) {
            this.successMessage = 'Form submitted successfully!';
            this.errorMessage = '';
          } else {
            this.errorMessage = 'Failed to submit form.';
            this.successMessage = '';
          }
        } catch (error) {
          this.errorMessage = 'An error occurred while submitting the form.';
          this.successMessage = '';
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .form-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  form div {
    margin-bottom: 15px;
  }
  
  form label {
    display: block;
    margin-bottom: 5px;
  }
  
  form input,
  form textarea,
  form select {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    box-sizing: border-box;
  }
  
  form button {
    padding: 10px 15px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  form button:hover {
    background-color: #0056b3;
  }
  
  .success-message {
    color: green;
    font-weight: bold;
  }
  
  .error-message {
    color: red;
    font-weight: bold;
  }
  </style>
  