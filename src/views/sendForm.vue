<template>
  <div class="outer-container">
    <transition name="fade" mode="out-in">
      <div v-if="currentStep > 1" class="fixed-title">1 → First let's start with the basics</div>
    </transition>
    <div ref="steps">
      <transition name="fade" mode="out-in">
        <div :key="currentStep">
      <div v-if="currentStep === 1">
        <div class="header-container">
          <p class="step-indicator">1 →</p>
          <h2>First let's start with the basics</h2>
        </div>
        <p>We will ask for:</p>
        <ul>
          <li>- Your name & e-mail address</li>
          <li>- Your startup's name & if this is the first time you have submitted</li>
          <li>- Where your startup is based</li>
          <li>- If you are working on this full-time</li>
        </ul>
        <div class="button-container">
          <button class="button" @click="nextStep">Continue</button>
          <p class="enter-text">press Enter ↵</p>
        </div>
      </div>
      <div v-if="currentStep === 2">
        <div class="header-container">
          <p class="step-indicator">a.</p>
          <h2>What's your full name?*</h2>
        </div>
        <input class="input-field" v-model="formData.first_name" placeholder="First Name*" required />
        <input class="input-field" v-model="formData.last_name" placeholder="Last Name*" required />
        <div class="button-container">
          <button class="button" @click="nextStep">Next</button>
          <p class="enter-text">press Enter ↵</p>
        </div>
      </div>
      <div v-if="currentStep === 3">
        <div class="header-container">
          <p class="step-indicator">b.</p>
          <h2>What is your e-mail address?*</h2>
        </div>
        <input class="input-field" type="email" placeholder="Email address*" v-model="formData.email" required />
        <div class="button-container">
          <button class="button" @click="nextStep">Next</button>
          <p class="enter-text">press Enter ↵</p>
        </div>
      </div>
      <div v-if="currentStep === 4">
        <div class="header-container">
          <p class="step-indicator">c.</p>
          <h2>What is your relationship to the company?*</h2>
        </div>
        <div class="radio-group">
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
        </div>
        <div class="button-container">
          <button class="button" @click="nextStep">Next</button>
          <p class="enter-text">press Enter ↵</p>
        </div>
      </div>
      <div v-if="currentStep === 5">
        <div class="header-container">
          <p class="step-indicator">d.</p>
          <h2>What is your company name?*</h2>
        </div>
        <input class="input-field" placeholder="Company name*" v-model="formData.company_name" required />
        <div class="button-container">
          <button class="button" @click="nextStep">Next</button>
          <p class="enter-text">press Enter ↵</p>
        </div>
      </div>
      <div v-if="currentStep === 6">
        <div class="header-container">
          <p class="step-indicator">e.</p>
          <h2>In 2-3 sentences, what does your company do?*</h2>
        </div>
        <textarea class="input-field" placeholder="What does your company do?*" v-model="formData.company_description" required></textarea>
        <div class="button-container">
          <button class="button" @click="nextStep">Next</button>
          <p class="enter-text">press Enter ↵</p>
        </div>
      </div>
      <div v-if="currentStep === 7">
        <div class="header-container">
          <p class="step-indicator">f.</p>
          <h2>In 2-3 sentences, why you / your team are awesome.*</h2>
        </div>
        <textarea class="input-field" placeholder="What does your company do?*" v-model="formData.team_description" required></textarea>
        <div class="button-container">
          <button class="button" @click="nextStep">Next</button>
          <p class="enter-text">press Enter ↵</p>
        </div>
      </div>
      <div v-if="currentStep === 8">
        <div class="header-container">
          <p class="step-indicator">g.</p>
          <h2>What industry is your company in?*</h2>
        </div>
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
        <div class="button-container">
          <button class="button" @click="nextStep">Next</button>
          <p class="enter-text">press Enter ↵</p>
        </div>
      </div>
      <div v-if="currentStep === 9">
        <div class="header-container">
          <p class="step-indicator">h.</p>
          <h2>What is your company website?</h2>
        </div>
        <input class="input-field" type="url" placeholder="Company website" v-model="formData.company_website" />
        <div class="button-container">
          <button class="button" @click="nextStep">Next</button>
          <p class="enter-text">press Enter ↵</p>
        </div>
      </div>
      <div v-if="currentStep === 10">
        <div class="header-container">
          <p class="step-indicator">i.</p>
          <h2>Add a link to your pitch deck*</h2>
        </div>
        <input class="input-field" type="url" placeholder="Pitch deck link*" v-model="formData.pitch_deck" required />
        <div class="button-container">
          <button class="button" @click="nextStep">Next</button>
          <p class="enter-text">press Enter ↵</p>
        </div>
      </div>
      <div v-if="currentStep === 11">
        <div class="header-container">
          <p class="step-indicator">j.</p>
          <h2>Where is your company headquartered?*</h2>
        </div>
        <select class="input-field" v-model="formData.headquartered" required>
          <option value="North America">North America</option>
          <option value="Outside of North America">Outside of North America</option>
        </select>
        <div class="button-container">
          <button class="button" @click="nextStep">Next</button>
          <p class="enter-text">press Enter ↵</p>
        </div>
      </div>
      <div v-if="currentStep === 12">
        <div class="header-container">
          <p class="step-indicator">k.</p>
          <h2>Where are you located? (City, State, Country)*</h2>
        </div>
        <input class="input-field" placeholder="Operating country*" v-model="formData.operating_country" required />
        <div class="button-container">
          <button class="button" @click="nextStep">Next</button>
          <p class="enter-text">press Enter ↵</p>
        </div>
      </div>
      <div v-if="currentStep === 13">
        <div class="header-container">
          <p class="step-indicator">l.</p>
          <h2>What is the current or intended legal structure of the company?*</h2>
        </div>
        <div class="checkbox-group">
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
        <div class="button-container">
          <button class="button" @click="nextStep">Next</button>
          <p class="enter-text">press Enter ↵</p>
        </div>
      </div>
      <div v-if="currentStep === 14">
        <div class="header-container">
          <p class="step-indicator">m.</p>
          <h2>What round are you raising?*</h2>
        </div>
        <select class="input-field" v-model="formData.raising_round" required>
          <option value="Pre-Seed">Pre-Seed</option>
          <option value="Pre-Seed extension">Pre-Seed extension</option>
          <option value="Seed">Seed</option>
          <option value="Seed extension">Seed extension</option>
          <option value="Series A">Series A</option>
          <option value="Beyond Series A">Beyond Series A</option>
        </select>
        <div class="button-container">
          <button class="button" @click="nextStep">Next</button>
          <p class="enter-text">press Enter ↵</p>
        </div>
      </div>
      <div v-if="currentStep === 15">
        <div class="header-container">
          <p class="step-indicator">n.</p>
          <h2>How much are you raising? (in USD)*</h2>
        </div>
        <input class="input-field" type="text" placeholder="Raising amount*" v-model="formData.raising_amount" required />
        <div class="button-container">
          <button class="button" @click="nextStep">Next</button>
          <p class="enter-text">press Enter ↵</p>
        </div>
      </div>
      <div v-if="currentStep === 16">
        <div class="header-container">
          <p class="step-indicator">o.</p>
          <h2>What is your pre-money valuation? (in USD)</h2>
        </div>
        <input class="input-field" type="text" placeholder="Pre-money valuation" v-model="formData.pre_money_valuation" />
        <div class="button-container">
          <button class="button" @click="nextStep">Next</button>
          <p class="enter-text">press Enter ↵</p>
        </div>
      </div>
      <div v-if="currentStep === 17">
        <div class="header-container">
          <p class="step-indicator">p.</p>
          <h2>Founder LinkedIn</h2>
        </div>
        <input class="input-field" type="url" placeholder="LinkedIn profile" v-model="formData.linkedin_profiles" />
        <div class="button-container">
          <button class="button" @click="nextStep">Next</button>
          <p class="enter-text">press Enter ↵</p>
        </div>
      </div>
      <div v-if="currentStep === 18">
        <div class="header-container">
          <p class="step-indicator">q.</p>
          <h2>Your team's LinkedIn profiles.*</h2>
        </div>
        <input class="input-field" type="url" placeholder="LinkedIn profile" v-model="formData.ceo_linkedin" />
        <div class="button-container">
          <button class="button" @click="nextStep">Next</button>
          <p class="enter-text">press Enter ↵</p>
        </div>
      </div>
      <div v-if="currentStep === 19">
        <div class="header-container">
          <p class="step-indicator">r.</p>
          <h2>One-line Description</h2>
        </div>
        <textarea class="input-field" placeholder="One-line description" v-model="formData.one_line_description"></textarea>
        <div class="button-container">
          <button class="button" @click="nextStep">Next</button>
          <p class="enter-text">press Enter ↵</p>
        </div>
      </div>
      <div v-if="currentStep === 20">
        <div class="header-container">
          <p class="step-indicator">s.</p>
          <h2>Video pitch URL</h2>
        </div>
        <input class="input-field" type="url" placeholder="Video pitch URL" v-model="formData.founder_video_url" />
        <div class="button-container">
          <button class="button" @click="nextStep">Next</button>
          <p class="enter-text">press Enter ↵</p>
        </div>
      </div>
      <div v-if="currentStep === 21">
      <div class="header-container">
        <p class="step-indicator">t.</p>
        <h2>Pitch deck file</h2>
      </div>
      <input class="input-field" type="file" @change="handlePitchDeckUpload" />
      <div class="button-container">
        <button class="button" @click="nextStep">Next</button>
        <p class="enter-text">press Enter ↵</p>
      </div>
    </div>
      <div v-if="currentStep === 22">
      <div class="header-container">
        <p class="step-indicator">u.</p>
        <h2>Upload short video about team and the company</h2>
      </div>
      <input class="input-field" type="file" @change="handleVideoUpload" />
      <div class="button-container">
        <button class="button" @click="submitForm">Send</button>
        <p class="enter-text">press Enter ↵</p>
      </div>
    </div>


      <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </div>
    </transition>
    </div>
    <div class="nav-buttons">
      <button class="nav-button" :disabled="currentStep === 1" @click="prevStep">↑</button>
      <button class="nav-button" @click="nextStep">↓</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentStep: 1,
      showTitle: false,
      formData: {
        first_name: '',
        last_name: '',
        email: '',
        relationship: '',
        other_relationship: '',
        company_name: '',
        company_description: '',
        team_description: '',
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
        linkedin_profiles: '',
        one_line_description: '',
        founder_video_url: '',
        founder_video_file: null,
        pitch_deck_file: null,
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
    handleVideoUpload(event) {
      const file = event.target.files[0];
      this.formData.founder_video_file = file;
    },
    handlePitchDeckUpload(event) {
      const file = event.target.files[0];
      this.formData.pitch_deck_file = file;
    },
    nextStep() {
      if (this.currentStep < 22) {
        this.currentStep++;
        this.scrollToCurrentStep();
        if (this.currentStep !== 1) {
          this.showTitle = true;
        }
      }
    },
    prevStep() {
      if (this.currentStep > 1) {
        this.currentStep--;
        this.scrollToCurrentStep();
      }
    },
    scrollToCurrentStep() {
      this.$nextTick(() => {
        const stepElement = this.$refs.steps;
        if (stepElement) {
          stepElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
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
        const formData = new FormData();
        for (const key in this.formData) {
          formData.append(key, this.formData[key]);
        }

        const response = await fetch('http://localhost:3002/send-forms', {
          method: 'POST',
          body: formData
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
    },
    handleKeydown(event) {
      if (event.key === 'Enter') {
        this.nextStep();
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.showTitle = true;
    }, 500); // Задержка для плавного появления заголовка
    document.addEventListener('keydown', this.handleKeydown);
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.handleKeydown);
  }
};
</script>

<style scoped>
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #faf9f6;
  padding: 20px;
}

.step-indicator {
  font-size: 1.6em; /* Увеличим размер шрифта для индикатора шага */
  color: #ffffff;
}

.outer-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #27272D;
}

h2 {
  color: #ffffff;
  font-size: 2.5em; /* Увеличим размер шрифта заголовков */
  margin-bottom: 20px;
  font-family: Inter;
}

.header-container {
  display: flex;
  align-items: center;
  gap: 20px; /* Отступ между элементами */
}


p {
  color: #e0e0e0;
  font-size: 1.5em; /* Увеличим размер шрифта для параграфов */
  margin-bottom: 20px;
  line-height: 1.5;
}

.input-field {
  width: 90%; /* Увеличим ширину полей ввода */
  padding: 15px 25px; /* Увеличим внутренние отступы */
  margin: 10px 0; /* Увеличим внешние отступы */
  box-sizing: border-box;
  border: none;
  border-bottom: 2px solid #e0e0e0;
  font-size: 1.5em; /* Увеличим размер шрифта */
}

.input-field:focus {
  border-bottom: 2px solid #333;
  outline: none;
}
.fixed-title {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgb(255, 207, 119);
  color: #333;
  padding: 10px 20px;
  text-align: center;
  font-size: 1.5em;
  z-index: 1;
}


.button-container {
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 25px; /* Увеличим расстояние между кнопками */
  margin-top: 3vh; /* Увеличим отступ сверху */
}


.nav-buttons {
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.nav-button {
  color: var(--dl-color-gray-black);
  cursor: pointer;
  display: inline-block;
  padding: 0.5rem 1rem;
  font-size: 18px;
  box-shadow: 5px 6px 0px 0px #000000;
  font-style: normal;
  transition: 0.3s;
  font-weight: 500;
  padding-top: var(--dl-space-space-unit);
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  padding-left: var(--dl-space-space-oneandhalfunits);
  border-radius: 0px;
  padding-right: var(--dl-space-space-oneandhalfunits);
  padding-bottom: var(--dl-space-space-unit);
  background-color: rgb(255, 207, 119);
}



.nav-button:hover {
  opacity: 0.5;
  background-color: rgb(218, 177, 101);
}

.success-message {
  color: #4caf50;
  font-weight: bold;
}

.error-message {
  color: #f44336;
  font-weight: bold;
}

.enter-text {
  font-size: 1.5em; /* Увеличим размер шрифта */
  color: #ffffff;
  margin-top: 10px;
}

ul {
  color: #e0e0e0;
  list-style-type: none;
  font-size: 1.3em;
}

button:focus {
  outline: 2px solid #f0c14b;
}

.checkbox-group,
.radio-group {
  color: #ffffff;
}

.checkbox-group label,
.radio-group label {
  margin-left: 8px; 
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.35s ease;
}

.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}

</style>
