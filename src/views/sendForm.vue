<template>
  <div class="form-container">
    <h1>Startup Submission to Airtable</h1>
    <p>* indicates required field.</p>
    <form @submit.prevent="submitForm">
      <div>
        <label>What is your first and last name?*</label>
        <input v-model="formData.first_name" placeholder="First Name" required />
        <input v-model="formData.last_name" placeholder="Last Name" required />
      </div>
      <div>
        <label>What is your e-mail address?*</label>
        <input type="email" v-model="formData.email" required />
      </div>
      <div>
        <label>What is your relationship to the company?*</label>
        <div>
          <input type="radio" id="founder" value="Founder" v-model="formData.relationship" required />
          <label for="founder">Founder</label>
        </div>
        <div>
          <input type="radio" id="other" value="Other" v-model="formData.relationship" required />
          <label for="other">Other</label>
        </div>
      </div>
      <div>
        <label>What is your company name?*</label>
        <input v-model="formData.company_name" required />
      </div>
      <div>
        <label>In 2-3 sentences, what does your company do?*</label>
        <textarea v-model="formData.company_description" required></textarea>
      </div>
      <div>
        <label>What industry is your company in?*</label>
        <select v-model="formData.industry" required>
          <option value="AdTech">AdTech</option>
          <option value="EdTech">EdTech</option>
        </select>
      </div>
      <div>
        <label>What is your company website?</label>
        <input type="url" v-model="formData.company_website" />
      </div>
      <div>
        <label>Add a link to your pitch deck*</label>
        <input type="url" v-model="formData.pitch_deck" required />
      </div>
      <div>
        <label>Where is your company headquartered?*</label>
        <select v-model="formData.headquartered" required>
          <option value="North America">North America</option>
          <option value="Outside of North America">Outside of North America</option>
        </select>
      </div>
      <div>
        <label>What country do you currently operate in?*</label>
        <input v-model="formData.operating_country" required />
      </div>
      <div>
        <label>What is the current or intended legal structure of the company?*</label>
        <div>
          <input type="checkbox" id="delaware_c_corp" value="Delaware C-Corp" v-model="formData.legal_structure" />
          <label for="delaware_c_corp">Delaware C-Corp</label>
        </div>
        <div>
          <input type="checkbox" id="canadian_company" value="Canadian company" v-model="formData.legal_structure" />
          <label for="canadian_company">Canadian company</label>
        </div>
        <div>
          <input type="checkbox" id="b_corp" value="B-Corp" v-model="formData.legal_structure" />
          <label for="b_corp">B-Corp</label>
        </div>
        <div>
          <input type="checkbox" id="pbc" value="Public Benefit Corporation (PBC)" v-model="formData.legal_structure" />
          <label for="pbc">Public Benefit Corporation (PBC)</label>
        </div>
        <div>
          <input type="checkbox" id="llc" value="LLC" v-model="formData.legal_structure" />
          <label for="llc">LLC</label>
        </div>
        <div>
          <input type="checkbox" id="s_corp" value="S-Corp" v-model="formData.legal_structure" />
          <label for="s_corp">S-Corp</label>
        </div>
        <div>
          <input type="checkbox" id="non_profit" value="Non-profit" v-model="formData.legal_structure" />
          <label for="non_profit">Non-profit</label>
        </div>
      </div>
      <div>
        <label>What round are you raising?*</label>
        <select v-model="formData.raising_round" required>
          <option value="Seed">Seed</option>
          <option value="Series A">Series A</option>
        </select>
      </div>
      <div>
        <label>How much are you raising? (in USD)*</label>
        <input type="text" v-model="formData.raising_amount" required />
      </div>
      <div>
        <label>What is your pre-money valuation? (in USD)</label>
        <input type="text" v-model="formData.pre_money_valuation" />
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
        last_name: '',
        email: '',
        relationship: '',
        company_name: '',
        company_description: '',
        industry: '',
        company_website: '',
        pitch_deck: '',
        headquartered: '',
        operating_country: '',
        legal_structure: [],
        raising_round: '',
        raising_amount: '',
        pre_money_valuation: ''
      },
      successMessage: '',
      errorMessage: ''
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await fetch('http://localhost:3002/send-form', {
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

form input, form textarea, form select {
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
