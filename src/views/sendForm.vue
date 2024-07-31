<template>
  <div class="container">
    <div v-if="currentStep === 1">
      <h2>First let's start with the basics</h2>
      <p>We will ask for:</p>
      <ul>
        <li>Your name & e-mail address</li>
        <li>Your startup's name & if this is the first time you have submitted</li>
        <li>Where your startup is based</li>
        <li>If you are working on this full-time</li>
      </ul>
      <button class="nav-button" @click="nextStep">Continue</button>
    </div>
    <div v-if="currentStep === 2">
      <h2>What's your full name?*</h2>
      <p>First and last name, please!</p>
      <input class="input-field" v-model="formData.first_name" placeholder="First Name" required />
      <input class="input-field" v-model="formData.last_name" placeholder="Last Name" required />
      <button class="nav-button" @click="prevStep">Back</button>
      <button class="button" @click="nextStep">Next</button>
    </div>
    <div v-if="currentStep === 3">
      <h2>What is your e-mail address?*</h2>
      <input class="input-field" type="email" v-model="formData.email" required />
      <button class="nav-button" @click="prevStep">Back</button>
      <button class="button" @click="nextStep">Next</button>
    </div>
    <div v-if="currentStep === 4">
      <h2>What is your relationship to the company?*</h2>
      <div>
        <input type="radio" id="founder" value="Founder" v-model="formData.relationship" required @change="checkOtherRelationship" />
        <label for="founder">Founder</label>
      </div>
      <div>
        <input type="radio" id="other" value="Other" v-model="formData.relationship" required @change="checkOtherRelationship" />
        <label for="other">Other</label>
        <div v-if="formData.relationship === 'Other'">
          <input class="input-field" v-model="formData.other_relationship" placeholder="Please specify" required />
        </div>
      </div>
      <button class="nav-button" @click="prevStep">Back</button>
      <button class="button" @click="nextStep">Next</button>
    </div>
    <div v-if="currentStep === 5">
      <h2>What is your company name?*</h2>
      <input class="input-field" v-model="formData.company_name" required />
      <button class="nav-button" @click="prevStep">Back</button>
      <button class="button" @click="nextStep">Next</button>
    </div>
    <div v-if="currentStep === 6">
      <h2>In 2-3 sentences, what does your company do?*</h2>
      <textarea class="input-field" v-model="formData.company_description" required></textarea>
      <button class="nav-button" @click="prevStep">Back</button>
      <button class="button" @click="nextStep">Next</button>
    </div>
    <div v-if="currentStep === 7">
      <h2>What industry is your company in?*</h2>
      <select class="input-field" v-model="formData.industry" required>
        <option value="AdTech">AdTech</option>
        <option value="EdTech">EdTech</option>
        <option value="AI / Machine Learning">AI / Machine Learning</option>
        <option value="MarTech">MarTech</option>
        <option value="eCommerce">eCommerce</option>
        <option value="SaaS">SaaS</option>
        <option value="FinTech">FinTech</option>
        <option value="Digital Health">Digital Health</option>
        <option value="Hardware">Hardware</option>
        <option value="HR Tech">HR Tech</option>
        <option value="GovTech">GovTech</option>
        <option value="Financial Tech">Financial Tech</option>
        <option value="Property Tech">Property Tech</option>
        <option value="Legal Tech">Legal Tech</option>
        <option value="Consumer Tech">Consumer Tech</option>
        <option value="B2B SaaS">B2B SaaS</option>
        <option value="Consumer Goods">Consumer Goods</option>
        <option value="Other">Other</option>
      </select>
      <button class="nav-button" @click="prevStep">Back</button>
      <button class="button" @click="nextStep">Next</button>
    </div>
    <div v-if="currentStep === 8">
      <h2>What is your company website?</h2>
      <input class="input-field" type="url" v-model="formData.company_website" />
      <button class="nav-button" @click="prevStep">Back</button>
      <button class="button" @click="nextStep">Next</button>
    </div>
    <div v-if="currentStep === 9">
      <h2>Add a link to your pitch deck*</h2>
      <input class="input-field" type="url" v-model="formData.pitch_deck" required />
      <button class="nav-button" @click="prevStep">Back</button>
      <button class="button" @click="nextStep">Next</button>
    </div>
    <div v-if="currentStep === 10">
      <h2>Where is your company headquartered?*</h2>
      <select class="input-field" v-model="formData.headquartered" required>
        <option value="North America">North America</option>
        <option value="Outside of North America">Outside of North America</option>
      </select>
      <button class="nav-button" @click="prevStep">Back</button>
      <button class="button" @click="nextStep">Next</button>
    </div>
    <div v-if="currentStep === 11">
      <h2>What country do you currently operate in?*</h2>
      <input class="input-field" v-model="formData.operating_country" required />
      <button class="nav-button" @click="prevStep">Back</button>
      <button class="button" @click="nextStep">Next</button>
    </div>
    <div v-if="currentStep === 12">
      <h2>What is the current or intended legal structure of the company?*</h2>
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
      <button class="nav-button" @click="prevStep">Back</button>
      <button class="button" @click="nextStep">Next</button>
    </div>
    <div v-if="currentStep === 13">
      <h2>What round are you raising?*</h2>
      <select class="input-field" v-model="formData.raising_round" required>
        <option value="Pre-Seed">Pre-Seed</option>
        <option value="Pre-Seed extension">Pre-Seed extension</option>
        <option value="Seed">Seed</option>
        <option value="Seed extension">Seed extension</option>
        <option value="Series A">Series A</option>
        <option value="Beyond Series A">Beyond Series A</option>
      </select>
      <button class="nav-button" @click="prevStep">Back</button>
      <button class="button" @click="nextStep">Next</button>
    </div>
    <div v-if="currentStep === 14">
      <h2>How much are you raising? (in USD)*</h2>
      <input class="input-field" type="text" v-model="formData.raising_amount" required />
      <button class="nav-button" @click="prevStep">Back</button>
      <button class="button" @click="nextStep">Next</button>
    </div>
    <div v-if="currentStep === 15">
      <h2>What is your pre-money valuation? (in USD)</h2>
      <input class="input-field" type="text" v-model="formData.pre_money_valuation" />
      <button class="nav-button" @click="prevStep">Back</button>
      <button class="button" @click="nextStep">Next</button>
    </div>
    <div v-if="currentStep === 16">
      <h2>Founder LinkedIn</h2>
      <input class="input-field" type="url" v-model="formData.ceo_linkedin" />
      <button class="nav-button" @click="prevStep">Back</button>
      <button class="button" @click="nextStep">Next</button>
    </div>
    <div v-if="currentStep === 17">
      <h2>One-line Description</h2>
      <textarea class="input-field" v-model="formData.one_line_description"></textarea>
      <button class="nav-button" @click="prevStep">Back</button>
      <button class="button" @click="nextStep">Next</button>
    </div>
    <div v-if="currentStep === 18">
      <h2>Video pitch URL (optional)</h2>
      <input class="input-field" type="url" v-model="formData.founder_video" />
      <button class="nav-button" @click="prevStep">Back</button>
      <button class="button" @click="submitForm">Send</button>
    </div>

    <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentStep: 1,
      formData: {
        first_name: '',
        last_name: '',
        email: '',
        relationship: '',
        other_relationship: '',
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
        pre_money_valuation: '',
        ceo_linkedin: '',
        one_line_description: '',
        founder_video: ''
      },
      successMessage: '',
      errorMessage: ''
    };
  },
  methods: {
    checkOtherRelationship() {
      if (this.formData.relationship !== 'Other') {
        this.formData.other_relationship = '';
      }
    },
    nextStep() {
      this.currentStep++;
      this.scrollToCurrentStep();
    },
    prevStep() {
      this.currentStep--;
      this.scrollToCurrentStep();
    },
    scrollToCurrentStep() {
      this.$nextTick(() => {
        const stepElement = this.$refs.steps[this.currentStep - 1];
        if (stepElement) {
          stepElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    },
    async submitForm() {
      if (this.formData.relationship === 'Other' && !this.formData.other_relationship) {
        this.errorMessage = 'Please specify your relationship to the company.';
        this.successMessage = '';
        return;
      }

      try {
        const response = await fetch('http://localhost:3002/send-forms', {
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
body {
  font-family: Arial, Helvetica, sans-serif;
  background-color: #f2f2f2;
  padding: 20px;
}

.container {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #333;
  margin-bottom: 10px;
}

p {
  margin-bottom: 15px;
}

.input-field {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.button {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.button:hover {
  background-color: #45a049;
}

.nav-button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 15px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.nav-button:hover {
  background-color: #45a049;
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
