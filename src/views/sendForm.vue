<template>
  <div class="outer-container">
    <transition name="fade" mode="out-in">
      <div v-if="titleText" key="titleText" class="fixed-title">{{ titleText }}</div>
    </transition>
    <router-link to="/" class="home-logo">Yocto</router-link>
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
          <li>- Your companie's name & if this is the first time you have submitted</li>
          <li>- Where your company is based</li>
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
          <h2>What's your first and last name?*</h2>
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
            <p class="step-indicator">b.</p>
            <h2>What is your phone number?</h2>
        </div>
        <input class="input-field" type="tel" placeholder="Enter your phone number*" v-model="formData.phone_number" required />
        <div class="button-container">
            <button class="button" @click="nextStep">Next</button>
            <p class="enter-text">press Enter ↵</p>
        </div>
    </div>
      <div v-if="currentStep === 5">
        <div class="header-container">
          <p class="step-indicator">c.</p>
          <h2>What is your relationship to the company?*</h2>
        </div>
        <div class="radio-group">
          <label class="custom-radio">
            <input type="radio" id="founder" value="Founder" v-model="formData.relationship" required @change="checkOtherRelationship" />
            <span class="radio-button">
              <span class="radio-key">F</span> Founder
              <span class="checkmark">&#10003;</span>
            </span>
          </label>
          <label class="custom-radio">
            <input type="radio" id="other" value="Other" v-model="formData.relationship" required @change="checkOtherRelationship" />
            <span class="radio-button">
              <span class="radio-key">O</span> Other
              <span class="checkmark">&#10003;</span>
            </span>
          </label>
        </div>
        
        <!-- Поле ввода для уточнения, появляется только при выборе "Other" -->
        <div v-if="formData.relationship === 'Other'" class="other-relationship-input">
          <input class="input-field" v-model="formData.other_relationship" placeholder="Please specify" required />
        </div>
        
        <div class="button-container">
          <button class="button" @click="nextStep">Next</button>
          <p class="enter-text">press Enter ↵</p>
        </div>
      </div>
      <div v-if="currentStep === 6">
      <div class="header-container">
        <p class="step-indicator">h.</p>
        <h2>Are you working on this full time (40+ hours/week)?*</h2>
      </div>
      <div class="radio-group">
        <label class="custom-radio">
          <input type="radio" name="full_time" value="Yes" v-model="formData.working_full_time" @change="showAdditionalQuestion">
          <span class="radio-button">
            <span class="radio-key">Y</span> Yes
            <span class="checkmark">&#10003;</span>
          </span>
        </label>
        <label class="custom-radio">
          <input type="radio" name="full_time" value="No" v-model="formData.working_full_time" @change="hideAdditionalQuestion">
          <span class="radio-button">
            <span class="radio-key">N</span> No
            <span class="checkmark">&#10003;</span>
          </span>
        </label>
      </div>
      <div v-if="showFullTimeDuration">
        <div class="header-container">
          <h3>How long have you been working on this full-time?</h3>
        </div>
        <div class="radio-group">
          <label class="custom-radio">
            <input type="radio" value="0-6 Months" v-model="formData.full_time_duration" required>
            <span class="radio-button">
              0-6 Months
              <span class="checkmark">&#10003;</span>
            </span>
          </label>
          <label class="custom-radio">
            <input type="radio" value="6-12 Months" v-model="formData.full_time_duration" required>
            <span class="radio-button">
              6-12 Months
              <span class="checkmark">&#10003;</span>
            </span>
          </label>
          <label class="custom-radio">
            <input type="radio" value="12-18 Months" v-model="formData.full_time_duration" required>
            <span class="radio-button">
              12-18 Months
              <span class="checkmark">&#10003;</span>
            </span>
          </label>
          <label class="custom-radio">
            <input type="radio" value="18-24 Months" v-model="formData.full_time_duration" required>
            <span class="radio-button">
              18-24 Months
              <span class="checkmark">&#10003;</span>
            </span>
          </label>
          <label class="custom-radio">
            <input type="radio" value="24-36 Months" v-model="formData.full_time_duration" required>
            <span class="radio-button">
              24-36 Months
              <span class="checkmark">&#10003;</span>
            </span>
          </label>
          <label class="custom-radio">
            <input type="radio" value="36 Months or More" v-model="formData.full_time_duration" required>
            <span class="radio-button">
              36 Months or More
              <span class="checkmark">&#10003;</span>
            </span>
          </label>
        </div>
      </div>
      <div class="button-container">
        <button class="button" @click="nextStep">Next</button>
        <p class="enter-text">press Enter ↵</p>
      </div>
    </div>
      <transition name="fade" mode="out-in">
      <div v-if="titleText" key="titleText" class="fixed-title">{{ titleText }}</div>
    </transition>
        <div :key="currentStep">
      <div v-if="currentStep === 7">
        <div class="header-container">
          <p class="step-indicator">2 →</p>
          <h2>Tell us more about your company</h2>
        </div>
        <p>We will ask for:</p>
        <ul>
          <li>- Your company name & company website</li>
          <li>- Company description & pitch deck & founder video</li>
          <li>- What country you operating in & what is your curent location</li>
          <li>- what industry & legal structure is your company in</li>
        </ul>
        <div class="button-container">
          <button class="button" @click="nextStep">Continue</button>
          <p class="enter-text">press Enter ↵</p>
        </div>
      </div>
    </div>
    <div v-if="currentStep === 8">
        <div class="header-container">
          <p class="step-indicator">a.</p>
          <h2>What is your company name?*</h2>
        </div>
        <input class="input-field" placeholder="Company name*" v-model="formData.company_name" required />
        <div class="button-container">
          <button class="button" @click="nextStep">Next</button>
          <p class="enter-text">press Enter ↵</p>
        </div>
      </div>
      <div v-if="currentStep === 9">
        <div class="header-container">
          <p class="step-indicator">b.</p>
          <h2>One-line Description</h2>
        </div>
        <textarea class="input-field" placeholder="One-line description" v-model="formData.one_line_description"></textarea>
        <div class="button-container">
          <button class="button" @click="nextStep">Next</button>
          <p class="enter-text">press Enter ↵</p>
        </div>
      </div>
      <div v-if="currentStep === 10">
        <div class="header-container">
          <p class="step-indicator">c.</p>
          <h2>In one to two sentences, what is the problem you are trying to solve?*</h2>
        </div>
        <textarea class="input-field" placeholder="What is the problem you are trying to solve?*" v-model="formData.company_description" required></textarea>
        <div class="button-container">
          <button class="button" @click="nextStep">Next</button>
          <p class="enter-text">press Enter ↵</p>
        </div>
      </div>
      <div v-if="currentStep === 11">
        <div class="header-container">
          <p class="step-indicator">c.</p>
          <h2>In one to two sentences, what is your solution?*</h2>
        </div>
        <textarea class="input-field" placeholder="what is your solution?*" v-model="formData.company_solution" required></textarea>
        <div class="button-container">
          <button class="button" @click="nextStep">Next</button>
          <p class="enter-text">press Enter ↵</p>
        </div>
      </div>
      <div v-if="currentStep === 12">
        <div class="header-container">
          <p class="step-indicator">c.</p>
          <h2>In 2-3 sentences, what is the elevator pitch of your company?*</h2>
        </div>
        <textarea class="input-field" placeholder="what is the elevator pitch of your company?*" v-model="formData.pitch_description" required></textarea>
        <div class="button-container">
          <button class="button" @click="nextStep">Next</button>
          <p class="enter-text">press Enter ↵</p>
        </div>
      </div>
      <div v-if="currentStep === 13">
        <div class="header-container">
          <p class="step-indicator">c.</p>
          <h2>Who is your target customer & how are you going to acquire them?*</h2>
        </div>
        <textarea class="input-field" placeholder="how you think about customer acquisition*" v-model="formData.target_customer" required></textarea>
        <div class="button-container">
          <button class="button" @click="nextStep">Next</button>
          <p class="enter-text">press Enter ↵</p>
        </div>
      </div>
      <div v-if="currentStep === 14">
          <div class="header-container">
              <p class="step-indicator">c.</p>
              <h2>How do you plan on acquiring your customers?*</h2>
          </div>
          <div class="checkbox-group">
              <label class="custom-checkbox" v-for="option in acquisitionOptions" :key="option.value">
                  <input 
                      type="checkbox" 
                      :value="option.value" 
                      v-model="formData.customer_acquisition" 
                      :disabled="isCustomerAcquisitionDisabled(option.value, formData.customer_acquisition)" 
                      @change="handleCustomerAcquisitionChange" 
                      required
                  />
                  <span class="checkbox-button">
                      <span class="checkbox-key">{{ option.key }}</span> {{ option.label }}
                      <span class="checkmark">&#10003;</span>
                  </span>
              </label>
          </div>
          <div v-if="formData.customer_acquisition.includes('Other')" class="other-customer-acquisition-input">
              <input 
                  class="input-field" 
                  v-model="formData.other_customer_acquisition" 
                  placeholder="Please specify" 
                  required 
              />
          </div>
          <div class="button-container">
              <button class="button" @click="prepareCustomerAcquisitionData(); nextStep()">Next</button>
              <p class="enter-text">press Enter ↵</p>
          </div>
      </div>
      <div v-if="currentStep === 15">
    <div class="header-container">
      <p class="step-indicator">d.</p>
      <h2>Date Founded</h2>
    </div>
    <input class="input-field" type="date" v-model="formData.date_founded" />
    <div class="button-container">
      <button class="button" @click="nextStep">Next</button>
      <p class="enter-text">press Enter ↵</p>
    </div>
    </div>
    <div v-if="currentStep === 16">
          <div class="header-container">
              <p class="step-indicator">j.</p>
              <h2>What is the status of your product?*</h2>
          </div>
          <select class="input-field" v-model="formData.product_status" required>
              <option value="Idea/Prototype Stage" class="option-blue">Idea/Prototype Stage</option>
              <option value="Currently building MVP" class="option-blue">Currently building MVP</option>
              <option value="MVP built, < 3 months in market" class="option-green">MVP built, &lt; 3 months in market</option>
              <option value="MVP built with > 3 months in the market" class="option-orange">MVP built with &gt; 3 months in the market</option>
              <option value="Full-fledged product built, < 3 months in market" class="option-green">Full-fledged product built, &lt; 3 months in market</option>
              <option value="Full-fledged product built, > 3 months in market" class="option-green">Full-fledged product built, &gt; 3 months in market</option>
          </select>
          <div class="button-container">
              <button class="button" @click="nextStep">Next</button>
              <p class="enter-text">press Enter ↵</p>
          </div>
      </div>
      <div v-if="currentStep === 17">
        <div class="header-container">
          <p class="step-indicator">k.</p>
          <h2>Does your product have active users or customers?*</h2>
        </div>
        <div class="radio-group">
          <label class="custom-radio">
            <input type="radio" value="No" v-model="formData.active_customers" />
            <span class="radio-button">
              No
              <span class="checkmark">&#10003;</span>
            </span>
          </label>
          <label class="custom-radio">
            <input type="radio" value="No, but we have a wait list" v-model="formData.active_customers" />
            <span class="radio-button">
              No, but we have a wait list
              <span class="checkmark">&#10003;</span>
            </span>
          </label>
          <label class="custom-radio">
            <input type="radio" value="Yes" v-model="formData.active_customers" />
            <span class="radio-button">
              Yes
              <span class="checkmark">&#10003;</span>
            </span>
          </label>
        </div>
        <div class="button-container">
          <button class="button" @click="nextStep">Next</button>
          <p class="enter-text">press Enter ↵</p>
        </div>
      </div>
      <div v-if="currentStep === 18">
        <div class="header-container">
          <p class="step-indicator">k.</p>
          <h2>How many users do you have?*</h2>
        </div>
        <div class="radio-group">
          <label class="custom-radio">
            <input type="radio" value="1-5" v-model="formData.how_many_users" />
            <span class="radio-button">
              1-5
              <span class="checkmark">&#10003;</span>
            </span>
          </label>
          <label class="custom-radio">
            <input type="radio" value="6-10" v-model="formData.how_many_users" />
            <span class="radio-button">
              6-10
              <span class="checkmark">&#10003;</span>
            </span>
          </label>
          <label class="custom-radio">
            <input type="radio" value="11-20" v-model="formData.how_many_users" />
            <span class="radio-button">
              11-20
              <span class="checkmark">&#10003;</span>
            </span>
          </label>
          <label class="custom-radio">
            <input type="radio" value="21-50" v-model="formData.how_many_users" />
            <span class="radio-button">
              21-50
              <span class="checkmark">&#10003;</span>
            </span>
          </label>
          <label class="custom-radio">
            <input type="radio" value="51-100" v-model="formData.how_many_users" />
            <span class="radio-button">
              51-100
              <span class="checkmark">&#10003;</span>
            </span>
          </label>
          <label class="custom-radio">
            <input type="radio" value="101-300" v-model="formData.how_many_users" />
            <span class="radio-button">
              101-300
              <span class="checkmark">&#10003;</span>
            </span>
          </label>
          <label class="custom-radio">
            <input type="radio" value="301-500" v-model="formData.how_many_users" />
            <span class="radio-button">
              301-500
              <span class="checkmark">&#10003;</span>
            </span>
          </label>
          <label class="custom-radio">
            <input type="radio" value="501-1k" v-model="formData.how_many_users" />
            <span class="radio-button">
              501-1k
              <span class="checkmark">&#10003;</span>
            </span>
          </label>
          <label class="custom-radio">
            <input type="radio" value="1-5k" v-model="formData.how_many_users" />
            <span class="radio-button">
              1-5k
              <span class="checkmark">&#10003;</span>
            </span>
          </label>
          <label class="custom-radio">
            <input type="radio" value="5-10k" v-model="formData.how_many_users" />
            <span class="radio-button">
              5-10k
              <span class="checkmark">&#10003;</span>
            </span>
          </label>
          <label class="custom-radio">
            <input type="radio" value="10k+" v-model="formData.how_many_users" />
            <span class="radio-button">
              10k+
              <span class="checkmark">&#10003;</span>
            </span>
          </label>
        </div>
        <div class="button-container">
          <button class="button" @click="nextStep">Next</button>
          <p class="enter-text">press Enter ↵</p>
        </div>
      </div>
      <div v-if="currentStep === 19">
          <div class="header-container">
              <p class="step-indicator">e.</p>
              <h2>What industry is your company in?*</h2>
          </div>
          <div class="checkbox-group">
              <label class="custom-checkbox" v-for="option in industryOptions" :key="option.value">
                  <input 
                      type="checkbox" 
                      :value="option.value" 
                      v-model="formData.industry" 
                      :disabled="isIndustryDisabled(option.value, formData.industry)"
                      @change="handleIndustryChange"
                  />
                  <span class="checkbox-button">
                      <span class="checkbox-key">{{ option.key }}</span> {{ option.label }}
                      <span class="checkmark">&#10003;</span>
                  </span>
              </label>
          </div>
          <div v-if="formData.industry.includes('Other')" class="other-product-input">
              <input 
                  class="input-field" 
                  v-model="formData.other_industry" 
                  placeholder="Please specify" 
                  required 
              />
          </div>
          <div class="button-container">
              <button class="button" @click="prepareIndustryData(); nextStep()">Next</button>
              <p class="enter-text">press Enter ↵</p>
          </div>
      </div>
      <div v-if="currentStep === 20">
        <div class="header-container">
            <p class="step-indicator">e.</p>
            <h2>What industry is your company in?*</h2>
        </div>
        <div class="radio-group">
            <label class="custom-radio" v-for="option in snapshotIndustryOptions" :key="option.value">
                <input 
                    type="radio" 
                    :id="option.value" 
                    :value="option.value" 
                    v-model="formData.liberty_ventures_industry" 
                />
                <span class="radio-button">
                    {{ option.label }}
                    <span class="checkmark">&#10003;</span>
                </span>
            </label>
        </div>
        <div class="button-container">
            <button class="button" @click="nextStep">Next</button>
            <p class="enter-text">press Enter ↵</p>
        </div>
    </div>
      <div v-if="currentStep === 21">
          <div class="header-container">
              <p class="step-indicator">f.</p>
              <h2>What is the primary product your company is providing?*</h2>
          </div>
          <div class="checkbox-group">
              <label class="custom-checkbox" v-for="option in productOptions" :key="option.value">
                  <input 
                      type="checkbox" 
                      :value="option.value" 
                      v-model="formData.product" 
                      :disabled="isDisabled(option.value, formData.product)"
                      @change="handleProductChange"
                  />
                  <span class="checkbox-button">
                      <span class="checkbox-key">{{ option.key }}</span> {{ option.label }}
                      <span class="checkmark">&#10003;</span>
                  </span>
              </label>
          </div>
          <div v-if="formData.product.includes('Other')" class="other-product-input">
              <input 
                  class="input-field" 
                  v-model="formData.other_product" 
                  placeholder="Please specify" 
                  required 
              />
          </div>
          <div class="button-container">
              <button class="button" @click="prepareProductData(); nextStep()">Next</button>
              <p class="enter-text">press Enter ↵</p>
          </div>
      </div>
      <div v-if="currentStep === 22">
          <div class="header-container">
              <p class="step-indicator">c.</p>
              <h2>What is your Business Model?*</h2>
          </div>
          <div class="checkbox-group">
              <label class="custom-checkbox" v-for="model in businessModelOptions" :key="model.value">
                  <input 
                      type="checkbox" 
                      :value="model.value" 
                      v-model="formData.business_model" 
                      :disabled="isDisabled(model.value, formData.business_model)"
                      @change="handleBusinessModelChange" 
                      required
                  />
                  <span class="checkbox-button">
                      <span class="checkbox-key">{{ model.key }}</span> {{ model.label }}
                      <span class="checkmark">&#10003;</span>
                  </span>
              </label>
          </div>
          <div v-if="formData.business_model.includes('Other')" class="other-business-model-input">
              <input 
                  class="input-field" 
                  v-model="formData.other_business_model" 
                  placeholder="Please specify" 
                  required 
              />
          </div>
          <div class="button-container">
              <button class="button" @click="prepareBusinessModelData(); nextStep()">Next</button>
              <p class="enter-text">press Enter ↵</p>
          </div>
      </div>
      <div v-if="currentStep === 23">
        <div class="header-container">
          <p class="step-indicator">f.</p>
          <h2>What is your company website?</h2>
        </div>
        <input class="input-field" type="url" placeholder="Company website" v-model="formData.company_website" />
        <div class="button-container">
          <button class="button" @click="nextStep">Next</button>
          <p class="enter-text">press Enter ↵</p>
        </div>
      </div>
      <div v-if="currentStep === 24">
        <div class="header-container">
          <p class="step-indicator">g.</p>
          <h2>Add a link to your pitch deck*</h2>
        </div>
        <input class="input-field" type="url" placeholder="Pitch deck link*" v-model="formData.pitch_deck" required />
        <div class="button-container">
          <button class="button" @click="nextStep">Next</button>
          <p class="enter-text">press Enter ↵</p>
        </div>
      </div>
      <div v-if="currentStep === 25">
      <div class="header-container">
        <p class="step-indicator">h.</p>
        <h2>Add a file to your pitch deck</h2>
      </div>
      <input class="input-field" type="file" @change="handlePitchDeckUpload" />
      <div class="button-container">
        <button class="button" @click="nextStep">Next</button>
        <p class="enter-text">press Enter ↵</p>
      </div>
    </div>
    <div v-if="currentStep === 26">
        <div class="header-container">
          <p class="step-indicator">i.</p>
          <h2>Where is your company headquartered?*</h2>
        </div>
        <select class="input-field" v-model="formData.headquartered" required>
          <option value="US">US</option>
          <option value="Canada">Canada</option>
          <option value="Mexico">Mexico</option>
          <option value="Asia - East">Asia - East</option>
          <option value="Asia - India / Pakistan / Bangladesh">Asia - India / Pakistan / Bangladesh</option>
          <option value="Asia - Southeast Asia">Asia - Southeast Asia</option>
          <option value="Australia / New Zealand">Australia / New Zealand</option>
          <option value="Europe">Europe</option>
          <option value="Latin America">Latin America</option>
          <option value="Middle East">Middle East</option>
          <option value="Africa">Africa</option>
          <option value="Other">Other</option>
        </select>
        <div v-if="formData.headquartered === 'US'" class="additional-question">
          <h3>Are you a Delaware C Corp?</h3>
          <div class="radio-group">
            <label class="custom-radio">
              <input type="radio" value="Yes" v-model="formData.is_delaware_corp" />
              <span class="radio-button">
                Yes
                <span class="checkmark">&#10003;</span>
              </span>
            </label>
            <label class="custom-radio">
              <input type="radio" value="No" v-model="formData.is_delaware_corp" />
              <span class="radio-button">
                No
                <span class="checkmark">&#10003;</span>
              </span>
            </label>
          </div>
        </div>
        <div class="button-container">
          <button class="button" @click="nextStep">Next</button>
          <p class="enter-text">press Enter ↵</p>
        </div>
      </div>
      <div v-if="currentStep === 27">
        <div class="header-container">
          <p class="step-indicator">i.</p>
          <h2>Where are your main customers based?*</h2>
        </div>
        <select class="input-field" v-model="formData.customers_based" required>
          <option value="US">US</option>
          <option value="Canada">Canada</option>
          <option value="Mexico">Mexico</option>
          <option value="Asia - East">Asia - East</option>
          <option value="Asia - Central">Asia - Central</option>
          <option value="Asia - India / Pakistan / Bangladesh">Asia - India / Pakistan / Bangladesh</option>
          <option value="Asia - Southeast Asia">Asia - Southeast Asia</option>
          <option value="Australia / New Zealand">Australia / New Zealand</option>
          <option value="Europe">Europe</option>
          <option value="Latin America">Latin America</option>
          <option value="Middle East">Middle East</option>
          <option value="Africa">Africa</option>
          <option value="Global">Global</option>
          <option value="Other">Other</option>
        </select>
        <div class="button-container">
          <button class="button" @click="nextStep">Next</button>
          <p class="enter-text">press Enter ↵</p>
        </div>
      </div>
      <div v-if="currentStep === 28">
        <div class="header-container">
          <p class="step-indicator">j.</p>
          <h2>Where are you located? (City, State, Country)*</h2>
        </div>
        <input class="input-field" placeholder="Where are you located?*" v-model="formData.specific_location" required />
        <div class="button-container">
          <button class="button" @click="nextStep">Next</button>
          <p class="enter-text">press Enter ↵</p>
        </div>
      </div>
      <div v-if="currentStep === 29">
        <div class="header-container">
          <p class="step-indicator">k.</p>
          <h2>What is the current or intended legal structure of the company?*</h2>
        </div>
        <div class="radio-group">
          <label class="custom-radio">
            <input type="radio" id="delaware_c_corp" value="Delaware C-Corp" v-model="formData.legal_structure" />
            <span class="radio-button">
              Delaware C-Corp
              <span class="checkmark">&#10003;</span>
            </span>
          </label>
          <label class="custom-radio">
            <input type="radio" id="canadian_company" value="Canadian company" v-model="formData.legal_structure" />
            <span class="radio-button">
              Canadian company
              <span class="checkmark">&#10003;</span>
            </span>
          </label>
          <label class="custom-radio">
            <input type="radio" id="b_corp" value="B-Corp" v-model="formData.legal_structure" />
            <span class="radio-button">
              B-Corp
              <span class="checkmark">&#10003;</span>
            </span>
          </label>
          <label class="custom-radio">
            <input type="radio" id="pbc" value="Public Benefit Corporation (PBC)" v-model="formData.legal_structure" />
            <span class="radio-button">
              Public Benefit Corporation (PBC)
              <span class="checkmark">&#10003;</span>
            </span>
          </label>
          <label class="custom-radio">
            <input type="radio" id="llc" value="LLC" v-model="formData.legal_structure" />
            <span class="radio-button">
              LLC
              <span class="checkmark">&#10003;</span>
            </span>
          </label>
          <label class="custom-radio">
            <input type="radio" id="s_corp" value="S-Corp" v-model="formData.legal_structure" />
            <span class="radio-button">
              S-Corp
              <span class="checkmark">&#10003;</span>
            </span>
          </label>
          <label class="custom-radio">
            <input type="radio" id="non_profit" value="Non-profit" v-model="formData.legal_structure" />
            <span class="radio-button">
              Non-profit
              <span class="checkmark">&#10003;</span>
            </span>
          </label>
          <label class="custom-radio">
            <input type="radio" id="other" value="Other" v-model="formData.legal_structure" @change="checkOtherLegalStructure"/>
            <span class="radio-button">
              Other
              <span class="checkmark">&#10003;</span>
            </span>
          </label>
          <div v-if="formData.legal_structure === 'Other'">
            <input class="input-field" v-model="formData.other_legal_structure" placeholder="Please specify" />
          </div>
        </div>
        <div class="button-container">
          <button class="button" @click="nextStep">Next</button>
          <p class="enter-text">press Enter ↵</p>
        </div>
      </div>

      <transition name="fade" mode="out-in">
      <div v-if="titleText" key="titleText" class="fixed-title">{{ titleText }}</div>
    </transition>
        <div :key="currentStep">
      <div v-if="currentStep === 30">
        <div class="header-container">
          <p class="step-indicator">3 →</p>
          <h2>Tell us more about your financing</h2>
        </div>
        <p>We will ask for:</p>
        <ul>
          <li>- Raising round & raising amount</li>
          <li>- Your pre-money valuation</li>
          <li>- What country you operating in & what is your curent location</li>
          <li>- what industry & legal structure is your company in</li>
        </ul>
        <div class="button-container">
          <button class="button" @click="nextStep">Continue</button>
          <p class="enter-text">press Enter ↵</p>
        </div>
      </div>
    </div>
      <div v-if="currentStep === 31">
        <div class="header-container">
          <p class="step-indicator">a.</p>
          <h2>What round are you raising?*</h2>
        </div>
        <select class="input-field" v-model="formData.raising_round" required @change="checkBeyondSeriesA">
          <option value="Friends and Family">Friends and Family</option>
          <option value="Angel">Angel</option>
          <option value="Pre-Seed">Pre-Seed</option>
          <option value="Pre-Seed extension">Pre-Seed extension</option>
          <option value="Seed">Seed</option>
          <option value="Seed extension">Seed extension</option>
          <option value="Series A">Series A</option>
          <option value="Beyond Series A">Beyond Series A</option>
        </select>
        <div v-if="formData.raising_round === 'Beyond Series A'">
        <div class="header-container">
            <h2>Please specify</h2>
        </div>
        <select class="input-field" v-model="formData.beyond_series_a_round" required>
            <option value="Series B">Series B</option>
            <option value="Series C">Series C</option>
        </select>
        </div>
        <div class="button-container">
          <button class="button" @click="nextStep">Next</button>
          <p class="enter-text">press Enter ↵</p>
        </div>
      </div>
      <div v-if="currentStep === 32">
        <div class="header-container">
          <p class="step-indicator">b.</p>
          <h2>How much are you raising? (in USD)*</h2>
        </div>
        <input class="input-field" type="text" placeholder="Raising amount*" v-model="formData.raising_amount" required />
        <div class="button-container">
          <button class="button" @click="nextStep">Next</button>
          <p class="enter-text">press Enter ↵</p>
        </div>
      </div>
      <div v-if="currentStep === 33">
        <div class="header-container">
          <p class="step-indicator">k.</p>
          <h2>Is your startup currently earning revenue?*</h2>
        </div>
        <div class="radio-group">
          <label class="custom-radio">
            <input type="radio" value="Yes" v-model="formData.earning_revenue" />
            <span class="radio-button">
              Yes
              <span class="checkmark">&#10003;</span>
            </span>
          </label>
          <label class="custom-radio">
            <input type="radio" value="No" v-model="formData.earning_revenue" />
            <span class="radio-button">
              No
              <span class="checkmark">&#10003;</span>
            </span>
          </label>
        </div>
        <div class="button-container">
          <button class="button" @click="nextStep">Next</button>
          <p class="enter-text">press Enter ↵</p>
        </div>
      </div>
      <div v-if="currentStep === 34">
        <div class="header-container">
          <p class="step-indicator">i.</p>
          <h2>Approximately how much revenue is your company earning per month (in USD)?*</h2>
        </div>
        <select class="input-field" v-model="formData.earning_amount" required>
          <option value="1-$999">$1 - $999</option>
          <option value="$1000-$4,999">$1000 - $4,999</option>
          <option value="$5,000-$10,000">$5,000 - $10,000</option>
          <option value="$10,001+">$10,001 +</option>
        </select>
        <div class="button-container">
          <button class="button" @click="nextStep">Next</button>
          <p class="enter-text">press Enter ↵</p>
        </div>
      </div>
      <div v-if="currentStep === 35">
        <div class="header-container">
          <p class="step-indicator">k.</p>
          <h2>What do you expect your main source of revenue to be?*</h2>
        </div>

        <!-- Группа радиокнопок для выбора источника дохода -->
        <div class="radio-group">
          <label class="custom-radio">
            <input type="radio" value="Ads / Sponsors" v-model="formData.source_of_revenue" @change="handleSourceChange" />
            <span class="radio-button">
              Ads / Sponsors
              <span class="checkmark">&#10003;</span>
            </span>
          </label>
          <label class="custom-radio">
            <input type="radio" value="Affiliate" v-model="formData.source_of_revenue" @change="handleSourceChange" />
            <span class="radio-button">
              Affiliate
              <span class="checkmark">&#10003;</span>
            </span>
          </label>
          <label class="custom-radio">
            <input type="radio" value="Commission (percentage of sale)" v-model="formData.source_of_revenue" @change="handleSourceChange" />
            <span class="radio-button">
              Commission (percentage of sale)
              <span class="checkmark">&#10003;</span>
            </span>
          </label>
          <label class="custom-radio">
            <input type="radio" value="Purchases" v-model="formData.source_of_revenue" @change="handleSourceChange" />
            <span class="radio-button">
              Purchases
              <span class="checkmark">&#10003;</span>
            </span>
          </label>
          <label class="custom-radio">
            <input type="radio" value="Subscription" v-model="formData.source_of_revenue" @change="handleSourceChange" />
            <span class="radio-button">
              Subscription
              <span class="checkmark">&#10003;</span>
            </span>
          </label>

          <!-- Добавление варианта Other -->
          <label class="custom-radio">
            <input type="radio" value="Other" v-model="formData.source_of_revenue" @change="handleSourceChange" />
            <span class="radio-button">
              Other
              <span class="checkmark">&#10003;</span>
            </span>
          </label>
        </div>

        <!-- Поле ввода для уточнения, появляется только при выборе "Other" -->
        <div v-if="formData.source_of_revenue === 'Other'" class="other-source-input">
          <input class="input-field" v-model="formData.other_source_of_revenue" placeholder="Please specify" required />
        </div>

        <div class="button-container">
          <button class="button" @click="nextStep">Next</button>
          <p class="enter-text">press Enter ↵</p>
        </div>
      </div>
      <div v-if="currentStep === 36">
        <div class="header-container">
          <p class="step-indicator">c.</p>
          <h2>What is your pre-money valuation? (in USD)</h2>
        </div>
        <input class="input-field" type="text" placeholder="Pre-money valuation" v-model="formData.pre_money_valuation" />
        <div class="button-container">
          <button class="button" @click="nextStep">Next</button>
          <p class="enter-text">press Enter ↵</p>
        </div>
      </div>
      <div v-if="currentStep === 37">
        <div class="header-container">
          <p class="step-indicator">c.</p>
          <h2>What is your post-money valuation? (in USD)</h2>
        </div>
        <input class="input-field" type="text" placeholder="Post-money valuation" v-model="formData.post_money_valuation" />
        <div class="button-container">
          <button class="button" @click="nextStep">Next</button>
          <p class="enter-text">press Enter ↵</p>
        </div>
      </div>
      <div v-if="currentStep === 38">
        <div class="header-container">
          <p class="step-indicator">d.</p>
          <h2>How much capital do you want to raise now (USD)?</h2>
        </div>
        <input class="input-field" type="url" placeholder="How much capital do you want to raise now?" v-model="formData.capital_to_raise" />
        <div class="button-container">
          <button class="button" @click="nextStep">Next</button>
          <p class="enter-text">press Enter ↵</p>
        </div>
      </div>
      <transition name="fade" mode="out-in">
      <div v-if="titleText" key="titleText" class="fixed-title">{{ titleText }}</div>
    </transition>
        <div :key="currentStep">
      <div v-if="currentStep === 39">
        <div class="header-container">
          <p class="step-indicator">4 →</p>
          <h2>Tell us more about you and your team</h2>
        </div>
        <p>We will ask for:</p>
        <ul>
          <li>- 2-3 sentences, why you / your team are awesome</li>
          <li>- Linkedin profiles</li>
          <li>- Vision of your company in 5 - 7 years</li>
          <li>- Founder video</li>
        </ul>
        <div class="button-container">
          <button class="button" @click="nextStep">Continue</button>
          <p class="enter-text">press Enter ↵</p>
        </div>
      </div>
    </div>
    <div v-if="currentStep === 40">
      <div class="header-container">
        <p class="step-indicator">a.</p>
        <h2>What is your previous entrepreneurial experience?*</h2>
      </div>
      <select class="input-field" v-model="formData.prev_experience" required>
        <option disabled value="">Select your experience:</option>
        <option value="First startup">First company</option>
        <option value="Second startup">Second company</option>
        <option value="Third startup">Third company</option>
        <option value="Created more than 3 startups">Created more than 3 companies</option>
      </select>
      <div class="button-container">
        <button class="button" @click="nextStep">Next</button>
        <p class="enter-text">press Enter ↵</p>
      </div>
    </div>
    <div v-if="currentStep === 41">
        <div class="header-container">
          <p class="step-indicator">b.</p>
          <h2>In 2-3 sentences, why you / your team are awesome.*</h2>
        </div>
        <textarea class="input-field" placeholder="why you / your team are awesome?*" v-model="formData.team_description" required></textarea>
        <div class="button-container">
          <button class="button" @click="nextStep">Next</button>
          <p class="enter-text">press Enter ↵</p>
        </div>
      </div>
      <div v-if="currentStep === 42">
        <div class="header-container">
          <p class="step-indicator">c.</p>
          <h2>Founder LinkedIn</h2>
        </div>
        <input class="input-field" type="url" placeholder="CEO LinkedIn profile" v-model="formData.ceo_linkedin" />
        <div class="button-container">
          <button class="button" @click="nextStep">Next</button>
          <p class="enter-text">press Enter ↵</p>
        </div>
      </div>
      <div v-if="currentStep === 43">
        <div class="header-container">
          <p class="step-indicator">d.</p>
          <h2>CTO LinkedIn</h2>
        </div>
        <input class="input-field" type="url" placeholder="CTO LinkedIn profile" v-model="formData.cto_linkedin" />
        <div class="button-container">
          <button class="button" @click="nextStep">Next</button>
          <p class="enter-text">press Enter ↵</p>
        </div>
      </div>
      <div v-if="currentStep === 44">
        <div class="header-container">
          <p class="step-indicator">e.</p>
          <h2>Your team's LinkedIn profiles.*</h2>
        </div>
        <input class="input-field" type="url" placeholder="Team LinkedIn profiles" v-model="formData.linkedin_profiles" />
        <div class="button-container">
          <button class="button" @click="nextStep">Next</button>
          <p class="enter-text">press Enter ↵</p>
        </div>
      </div>
      <div v-if="currentStep === 45">
        <div class="header-container">
          <p class="step-indicator">f.</p>
          <h2>Founder video URL</h2>
        </div>
        <input class="input-field" type="url" placeholder="Founder video URL" v-model="formData.founder_video_url" />
        <div class="button-container">
          <button class="button" @click="nextStep">Next</button>
          <p class="enter-text">press Enter ↵</p>
        </div>
      </div>
      <div v-if="currentStep === 46">
      <div class="header-container">
        <p class="step-indicator">g.</p>
        <h2>Upload short video about team and the company</h2>
      </div>
      <input class="input-field" type="file" @change="handleVideoUpload" />
      <div class="button-container">
        <button class="button" @click="nextStep">Next</button>
        <p class="enter-text">press Enter ↵</p>
      </div>
    </div>
    <div v-if="currentStep === 47">
        <div class="header-container">
          <p class="step-indicator">h.</p>
          <h2>Vision</h2>
        </div>
        <input class="input-field" type="url" placeholder="Vision" v-model="formData.vision" />
        <div class="button-container">
          <button class="button" @click="nextStep">Next</button>
          <p class="enter-text">press Enter ↵</p>
        </div>
      </div>
      <div v-if="currentStep === 48">
        <div class="header-container">
          <p class="step-indicator">k.</p>
          <h2>Would you be interested in pitching live in front of a virtual audience? This would involve asking you a series of questions about your business, then walking the audience through our decision-making process.</h2>
        </div>
        <div class="radio-group">
          <label class="custom-radio">
            <input type="radio" value="yes" v-model="formData.pitching_live" />
            <span class="radio-button">
              Yes
              <span class="checkmark">&#10003;</span>
            </span>
          </label>
          <label class="custom-radio">
            <input type="radio" value="no" v-model="formData.pitching_live" />
            <span class="radio-button">
              No
              <span class="checkmark">&#10003;</span>
            </span>
          </label>
        </div>
        <div class="button-container">
          <button class="button" @click="nextStep">Next</button>
          <p class="enter-text">press Enter ↵</p>
        </div>
      </div>
      <div v-if="currentStep === 49">
        <div class="header-container">
          <p class="step-indicator">k.</p>
          <h2>Sometimes we meet companies that aren't a fit for us, but may be a fit for other venture firms we work with. If this is the case, would you like us to share your submission with them?</h2>
        </div>
        <div class="radio-group">
          <label class="custom-radio">
            <input type="radio" value="Yes" v-model="formData.share_submission" />
            <span class="radio-button">
              Yes
              <span class="checkmark">&#10003;</span>
            </span>
          </label>
          <label class="custom-radio">
            <input type="radio" value="No" v-model="formData.share_submission" />
            <span class="radio-button">
              No
              <span class="checkmark">&#10003;</span>
            </span>
          </label>
        </div>
        <div class="button-container">
          <button class="button" @click="nextStep">Next</button>
          <p class="enter-text">press Enter ↵</p>
        </div>
      </div>
      <div v-if="currentStep === 50">
        <div class="header-container">
          <p class="step-indicator">b.</p>
          <h2>(Optional) Anything else you want investors to know?</h2>
        </div>
        <textarea class="input-field" placeholder="Type your answer here..." v-model="formData.want_us_to_know" required></textarea>
        <div class="button-container">
          <button class="button" @click="nextStep">Next</button>
          <p class="enter-text">press Enter ↵</p>
        </div>
      </div>
      <div v-if="currentStep === 51">
        <div class="header-container">
          <p class="step-indicator">b.</p>
          <h2>How do the values of your team align with those of Liberty Ventures?</h2>
        </div>
        <p>Check our website for more information on our values: https://libertyventures.xyz/values</p>
        <textarea class="input-field" placeholder="Type your answer here..." v-model="formData.value_of_team" required></textarea>
        <div class="button-container">
          <button class="button" @click="submitForm">Submit</button>
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
      snapshotIndustryOptions: [
            { value: 'Smart Cities/Urban Tech', label: 'Smart Cities/Urban Tech' },
            { value: 'Logistics', label: 'Logistics' },
            { value: 'Airlines and Aviation', label: 'Airlines and Aviation' },
            { value: 'Architecture & Planning', label: 'Architecture & Planning' },
            { value: 'Graphic Design', label: 'Graphic Design' },
            { value: 'Accounting', label: 'Accounting' },
            { value: 'Business Supplies & Equipment', label: 'Business Supplies & Equipment' },
            { value: 'Environmental Services', label: 'Environmental Services' },
            { value: 'Events Services', label: 'Events Services' },
            { value: 'Executive Office', label: 'Executive Office' },
            { value: 'Facilities Services', label: 'Facilities Services' },
            { value: 'Human Resources', label: 'Human Resources' },
            { value: 'Management Consulting', label: 'Management Consulting' },
            { value: 'Outsourcing/Offshoring', label: 'Outsourcing/Offshoring' },
            { value: 'Professional Training & Coaching', label: 'Professional Training & Coaching' },
            { value: 'Security & Investigations', label: 'Security & Investigations' },
            { value: 'Staffing & Recruiting', label: 'Staffing & Recruiting' },
            { value: 'Retail', label: 'Retail' },
            { value: 'Supermarkets', label: 'Supermarkets' },
            { value: 'Wholesale', label: 'Wholesale' },
            { value: 'Mining & Metals', label: 'Mining & Metals' },
            { value: 'Utilities', label: 'Utilities' },
            { value: 'Aviation & Aerospace', label: 'Aviation & Aerospace' },
            { value: 'Chemicals', label: 'Chemicals' },
            { value: 'Defense & Space', label: 'Defense & Space' },
            { value: 'Electrical & Electronic Manufacturing', label: 'Electrical & Electronic Manufacturing' },
            { value: 'Food Production', label: 'Food Production' },
            { value: 'Glass', label: 'Glass' },
            { value: 'Ceramics & Concrete', label: 'Ceramics & Concrete' },
            { value: 'Industrial Automation', label: 'Industrial Automation' },
            { value: 'Machinery', label: 'Machinery' },
            { value: 'Mechanical or Industrial Engineering', label: 'Mechanical or Industrial Engineering' },
            { value: 'Packaging & Containers', label: 'Packaging & Containers' },
            { value: 'Paper & Forest Products', label: 'Paper & Forest Products' },
            { value: 'Plastics', label: 'Plastics' },
            { value: 'Railroad Manufacture', label: 'Railroad Manufacture' },
            { value: 'Shipbuilding', label: 'Shipbuilding' },
            { value: 'Textiles', label: 'Textiles' },
            { value: 'Banking', label: 'Banking' },
            { value: 'Capital Markets', label: 'Capital Markets' },
            { value: 'Investment Banking', label: 'Investment Banking' },
            { value: 'Investment Management', label: 'Investment Management' },
            { value: 'Venture Capital & Private Equity', label: 'Venture Capital & Private Equity' },
            { value: 'Gambling & Casinos', label: 'Gambling & Casinos' },
            { value: 'Hospitality', label: 'Hospitality' },
            { value: 'Leisure', label: 'Leisure' },
            { value: 'Travel & Tourism', label: 'Travel & Tourism' },
            { value: 'Restaurants', label: 'Restaurants' },
            { value: 'Recreational Facilities & Services', label: 'Recreational Facilities & Services' },
            { value: 'Sports', label: 'Sports' },
            { value: 'Arts & Crafts', label: 'Arts & Crafts' },
            { value: 'Fine Art', label: 'Fine Art' },
            { value: 'Performing Arts', label: 'Performing Arts' },
            { value: 'Photography', label: 'Photography' },
            { value: 'Biotechnology', label: 'Biotechnology' },
            { value: 'Mental Healthcare', label: 'Mental Healthcare' },
            { value: 'Veterinary', label: 'Veterinary' },
            { value: 'Computer Hardware', label: 'Computer Hardware' },
            { value: 'Computer Networking', label: 'Computer Networking' },
            { value: 'Semiconductors', label: 'Semiconductors' },
            { value: 'Telecommunications', label: 'Telecommunications' },
            { value: 'Wireless', label: 'Wireless' },
            { value: 'Commercial Real Estate', label: 'Commercial Real Estate' },
            { value: 'Alternative Dispute Resolution', label: 'Alternative Dispute Resolution' },
            { value: 'Law Practice', label: 'Law Practice' },
            { value: 'Legal Services', label: 'Legal Services' },
            { value: 'Apparel & Fashion', label: 'Apparel & Fashion' },
            { value: 'Consumer Electronics', label: 'Consumer Electronics' },
            { value: 'Consumer Services', label: 'Consumer Services' },
            { value: 'Cosmetics', label: 'Cosmetics' },
            { value: 'Furniture', label: 'Furniture' },
            { value: 'Luxury Goods & Jewelry', label: 'Luxury Goods & Jewelry' },
            { value: 'Sporting Goods', label: 'Sporting Goods' },
            { value: 'Tobacco', label: 'Tobacco' },
            { value: 'Wine and Spirits', label: 'Wine and Spirits' },
            { value: 'Dairy', label: 'Dairy' },
            { value: 'Farming', label: 'Farming' },
            { value: 'Fishery', label: 'Fishery' },
            { value: 'Ranching', label: 'Ranching' },
            { value: 'Newspapers', label: 'Newspapers' },
            { value: 'Online Media', label: 'Online Media' },
            { value: 'Printing', label: 'Printing' },
            { value: 'Public Relations & Communications', label: 'Public Relations & Communications' },
            { value: 'Publishing', label: 'Publishing' },
            { value: 'Translation & Localization', label: 'Translation & Localization' },
            { value: 'Writing & Editing', label: 'Writing & Editing' },
            { value: 'Civic & Social Organization', label: 'Civic & Social Organization' },
            { value: 'Fundraising', label: 'Fundraising' },
            { value: 'Libraries', label: 'Libraries' },
            { value: 'Museums & Institutions', label: 'Museums & Institutions' },
            { value: 'Non-Profit Organization Management', label: 'Non-Profit Organization Management' },
            { value: 'Philanthropy', label: 'Philanthropy' },
            { value: 'Program Development', label: 'Program Development' },
            { value: 'Religious Institutions', label: 'Religious Institutions' },
            { value: 'Think Tanks', label: 'Think Tanks' },
            { value: 'Computer & Network Security', label: 'Computer & Network Security' },
            { value: 'Information Technology & Services', label: 'Information Technology & Services' },
            { value: 'Import & Export', label: 'Import & Export' },
            { value: 'Maritime', label: 'Maritime' },
            { value: 'Package/Freight Delivery', label: 'Package/Freight Delivery' },
            { value: 'Transportation/Trucking/Railroad', label: 'Transportation/Trucking/Railroad' },
            { value: 'Warehousing', label: 'Warehousing' },
            { value: 'Animation', label: 'Animation' },
            { value: 'Broadcast Media', label: 'Broadcast Media' },
            { value: 'Computer Games', label: 'Computer Games' },
            { value: 'Entertainment', label: 'Entertainment' },
            { value: 'Media Production', label: 'Media Production' },
            { value: 'Mobile Games', label: 'Mobile Games' },
            { value: 'Motion Pictures & Film', label: 'Motion Pictures & Film' },
            { value: 'Music', label: 'Music' },
            { value: 'Alternative Medicine', label: 'Alternative Medicine' },
            { value: 'Law Enforcement', label: 'Law Enforcement' },
            { value: 'Public Safety', label: 'Public Safety' },
            { value: 'Government Administration', label: 'Government Administration' },
            { value: 'Government Relations', label: 'Government Relations' },
            { value: 'International Affairs', label: 'International Affairs' },
            { value: 'Judiciary', label: 'Judiciary' },
            { value: 'Legislative Office', label: 'Legislative Office' },
            { value: 'Political Organization', label: 'Political Organization' },
            { value: 'Public Policy', label: 'Public Policy' },
            { value: 'Information and Internet', label: 'Information and Internet' },
            { value: 'Defense and Space Manufacturing', label: 'Defense and Space Manufacturing' },
            { value: 'Civic and Social Organizations', label: 'Civic and Social Organizations' },
            { value: 'Marine Transport', label: 'Marine Transport' },
            { value: 'Public Relations and Communications Services', label: 'Public Relations and Communications Services' },
            { value: 'Online Audio and Video Media', label: 'Online Audio and Video Media' },
            { value: 'Research Services', label: 'Research Services' },
            { value: 'IT Services and IT Consulting', label: 'IT Services and IT Consulting' },
            { value: 'Food and Beverage Retail', label: 'Food and Beverage Retail' }
        ],
      industryOptions: [
            { value: '3D printing', label: '3D printing' },
            { value: 'AdTech', label: 'AdTech' },
            { value: 'Agtech', label: 'Agtech' },
            { value: 'Advertising / Marketing', label: 'Advertising / Marketing' },
            { value: 'Audiotech', label: 'Audiotech' },
            { value: 'Autonomous cars', label: 'Autonomous cars' },
            { value: 'AI / ML', label: 'AI / ML' },
            { value: 'Augmented reality (AR)', label: 'Augmented reality (AR)' },
            { value: 'Beauty / Fashion Products', label: 'Beauty / Fashion Products' },
            { value: 'B2B Marketplace', label: 'B2B Marketplace' },
            { value: 'B2B SaaS', label: 'B2B SaaS' },
            { value: 'B2B payments', label: 'B2B payments' },
            { value: 'Biotech', label: 'Biotech' },
            { value: 'Big Data', label: 'Big Data' },
            { value: 'Blockchain / Crypto / NFT / Web3', label: 'Blockchain / Crypto / NFT / Web3' },
            { value: 'Cannabis', label: 'Cannabis' },
            { value: 'Carsharing', label: 'Carsharing' },
            { value: 'Cleantech / Climate / Sustainability', label: 'Cleantech / Climate / Sustainability' },
            { value: 'Cloudtech and DevOps', label: 'Cloudtech and DevOps' },
            { value: 'Communications / Collaboration / Productivity', label: 'Communications / Collaboration / Productivity' },
            { value: 'Consumer', label: 'Consumer' },
            { value: 'Consumer Goods', label: 'Consumer Goods' },
            { value: 'Consumer Tech', label: 'Consumer Tech' },
            { value: 'Construction / Materials', label: 'Construction / Materials' },
            { value: 'Cyber Security', label: 'Cyber Security' },
            { value: 'Data / Analytics', label: 'Data / Analytics' },
            { value: 'Developer Tools', label: 'Developer Tools' },
            { value: 'Digital health', label: 'Digital health' },
            { value: 'Ecommerce Enablement', label: 'Ecommerce Enablement' },
            { value: 'eCommerce', label: 'eCommerce' },
            { value: 'Education / Personal and professional development', label: 'Education / Personal and professional development' },
            { value: 'Electronics / IOT', label: 'Electronics / IOT' },
            { value: 'Enterprise', label: 'Enterprise' },
            { value: 'Femtech', label: 'Femtech' },
            { value: 'Future of Work', label: 'Future of Work' },
            { value: 'Family / Parenting / Relationships / ElderTech', label: 'Family / Parenting / Relationships / ElderTech' },
            { value: 'Finance - banking / payments / lending', label: 'Finance - banking / payments / lending' },
            { value: 'Finance - Insurance', label: 'Finance - Insurance' },
            { value: 'Finance - Other', label: 'Finance - Other' },
            { value: 'FinTech', label: 'FinTech' },
            { value: 'Food / Beverages / agriculture', label: 'Food / Beverages / agriculture' },
            { value: 'Gaming', label: 'Gaming' },
            { value: 'General / Industry agnostic', label: 'General / Industry agnostic' },
            { value: 'GovTech', label: 'GovTech' },
            { value: 'Hardware', label: 'Hardware' },
            { value: 'Health / Fitness / Wellness', label: 'Health / Fitness / Wellness' },
            { value: 'Healthcare', label: 'Healthcare' },
            { value: 'HR / hiring / employment', label: 'HR / hiring / employment' },
            { value: 'Impact investing', label: 'Impact investing' },
            { value: 'Industrials', label: 'Industrials' },
            { value: 'Legal / government / regulation', label: 'Legal / government / regulation' },
            { value: 'Longevity', label: 'Longevity' },
            { value: 'Lifestyles of Health and Sustainability (LOHAS) and wellness', label: 'Lifestyles of Health and Sustainability (LOHAS) and wellness' },
            { value: 'Manufacturing', label: 'Manufacturing' },
            { value: 'MarTech', label: 'MarTech' },
            { value: 'Medical devices', label: 'Medical devices' },
            { value: 'Mobility / Transportation', label: 'Mobility / Transportation' },
            { value: 'Micro-mobility', label: 'Micro-mobility' },
            { value: 'Mobility tech', label: 'Mobility tech' },
            { value: 'Mobile', label: 'Mobile' },
            { value: 'Mortgage tech', label: 'Mortgage tech' },
            { value: 'Nanotechnology', label: 'Nanotechnology' },
            { value: 'Oil and gas', label: 'Oil and gas' },
            { value: 'Personal and Professional Services', label: 'Personal and Professional Services' },
            { value: 'Pets / animals', label: 'Pets / animals' },
            { value: 'Physical infrastructure / Utilities', label: 'Physical infrastructure / Utilities' },
            { value: 'Real Estate / Housing', label: 'Real Estate / Housing' },
            { value: 'Robotics / drones', label: 'Robotics / drones' },
            { value: 'Restaurant tech', label: 'Restaurant tech' },
            { value: 'SaaS', label: 'SaaS' },
            { value: 'Sales / Operations / Customer Service', label: 'Sales / Operations / Customer Service' },
            { value: 'Science / deep tech', label: 'Science / deep tech' },
            { value: 'SMB SaaS', label: 'SMB SaaS' },
            { value: 'Social Media / Community / Networking', label: 'Social Media / Community / Networking' },
            { value: 'Space Tech', label: 'Space Tech' },
            { value: 'Supply Chain: Logistics / Shipping / Delivery', label: 'Supply Chain: Logistics / Shipping / Delivery' },
            { value: 'Travel / Hospitality', label: 'Travel / Hospitality' },
            { value: 'Vertical Saas', label: 'Vertical Saas' },
            { value: 'Virtual reality (VR)', label: 'Virtual reality (VR)' },
            { value: 'Wearables and quantified self', label: 'Wearables and quantified self' },
            { value: 'Other', label: 'Other' }
        ],

      businessModelOptions: [
        { key: 'A', value: 'B2B', label: 'B2B' },
        { key: 'B', value: 'B2C', label: 'B2C / D2C' },
        { key: 'C', value: 'B2G', label: 'B2G' },
        { key: 'D', value: 'B2B2C', label: 'B2B2C' },
        { key: 'E', value: 'C2C', label: 'C2C' },
        { key: 'F', value: 'C2B', label: 'C2B' },
        { key: 'G', value: 'P2P', label: 'P2P' },
        { key: 'H', value: 'Other', label: 'Other' }
      ],
      acquisitionOptions: [
        { value: 'Affiliate', label: 'Affiliate' },
        { value: 'Community Engagement & Referrals', label: 'Community Engagement & Referrals' },
        { value: 'Content Marketing', label: 'Content Marketing' },
        { value: 'Direct Sales', label: 'Direct Sales' },
        { value: 'Events', label: 'Events' },
        { value: 'Paid Advertisement', label: 'Paid Advertisement' },
        { value: 'Partnerships', label: 'Partnerships' },
        { value: 'SEO', label: 'SEO' },
        { value: 'Social Media', label: 'Social Media' },
        { value: 'Other', label: 'Other' }
      ],
      productOptions: [
        { value: 'Software - Service (SaaS)', label: 'Software - Service (SaaS)' },
        { value: 'Software - Marketplace / Network', label: 'Software - Marketplace / Network' },
        { value: 'Software - AI/ML', label: 'Software - AI/ML' },
        { value: 'Software - Dev Tools', label: 'Software - Dev Tools' },
        { value: 'Software - Infrastructure (API, cloud, etc.)', label: 'Software - Infrastructure (API, cloud, etc.)' },
        { value: 'Software - Other', label: 'Software - Other' },
        { value: 'Hardware', label: 'Hardware' },
        { value: 'Physical Goods', label: 'Physical Goods' },
        { value: 'Services', label: 'Services' },
        { value: 'Digital Goods / Content', label: 'Digital Goods / Content' },
        { value: 'Experiences', label: 'Experiences' },
        { value: 'Software - AI/ML, Hardware', label: 'Software - AI/ML, Hardware' },
        { value: 'Software - AI/ML, Software - Infrastructure (API, cloud, etc.)', label: 'Software - AI/ML, Software - Infrastructure (API, cloud, etc.)' },
        { value: 'Software - Marketplace / Network, Software - Service (SaaS)', label: 'Software - Marketplace / Network, Software - Service (SaaS)' },
        { value: 'Physical Goods, Digital Goods / Content', label: 'Physical Goods, Digital Goods / Content' },
        { value: 'Software - Infrastructure (API, cloud, etc.), Software - Marketplace / Network', label: 'Software - Infrastructure (API, cloud, etc.), Software - Marketplace / Network' },
        { value: 'Software - Marketplace / Network, Digital Goods / Content', label: 'Software - Marketplace / Network, Digital Goods / Content' },
        { value: 'Software - Marketplace / Network, Services', label: 'Software - Marketplace / Network, Services' },
        { value: 'Software - Marketplace / Network, Software - Service (SaaS), Software - Dev Tools', label: 'Software - Marketplace / Network, Software - Service (SaaS), Software - Dev Tools' },
        { value: 'Software - Service (SaaS), Software - Infrastructure (API, cloud, etc.), Hardware', label: 'Software - Service (SaaS), Software - Infrastructure (API, cloud, etc.), Hardware' },
        { value: 'Services, Physical Goods, Experiences, Digital Goods / Content', label: 'Services, Physical Goods, Experiences, Digital Goods / Content' },
        { value: 'Software - Service (SaaS), Software - Marketplace / Network, Software - AI/ML', label: 'Software - Service (SaaS), Software - Marketplace / Network, Software - AI/ML' },
        { value: 'Software - Other, Services', label: 'Software - Other, Services' },
        { value: 'Services, Other, Software - Infrastructure (API, cloud, etc.)', label: 'Services, Other, Software - Infrastructure (API, cloud, etc.)' },
        { value: 'Experiences, Software - Marketplace / Network', label: 'Experiences, Software - Marketplace / Network' },
        { value: 'Other, Software - Service (SaaS)', label: 'Other, Software - Service (SaaS)' },
        { value: 'Other', label: 'Other' }
      ],
      formData: {
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        relationship: '',
        other_relationship: '',
        working_full_time: '',
        full_time_duration: '',
        company_name: '',
        one_line_description: '',
        company_description: '',
        company_solution: '',
        pitch_description: '',
        target_customer: '',
        customer_acquisition: [],
        other_customer_acquisition: '',
        date_founded: '',
        product_status: '',
        active_customers: '',
        how_many_users: '',
        industry: [],
        liberty_ventures_industry: '',
        other_industry: '',
        product: [],
        other_product: '',
        business_model: [],
        other_business_model: '',
        company_website: '',
        pitch_deck: '',
        pitch_deck_file: null,
        headquartered: '',
        is_delaware_corp: '',
        customers_based: '',
        specific_location: '',
        legal_structure: '',
        other_legal_structure: '',
        raising_round: '',
        beyond_series_a_round: '',
        earning_amount: '',
        raising_amount: '',
        earning_revenue: '',
        source_of_revenue: '',
        other_source_of_revenue: '',
        pre_money_valuation: '',
        post_money_valuation: '',
        capital_to_raise: '',
        prev_experience: '',
        team_description: '',
        ceo_linkedin: '',
        cto_linkedin: '',
        linkedin_profiles: '',
        founder_video_url: '',
        founder_video_file: null,
        vision: '',
        pitching_live: '',
        share_submission: '',
        want_us_to_know: '',
        value_of_team: '',
      },
      successMessage: '',
      errorMessage: ''
    };
  },
  methods: {
    handleIndustryChange() {
        // Если значение 'Other' не выбрано, сбрасываем значение поля other_industry
        if (!this.formData.industry.includes('Other')) {
            this.formData.other_industry = '';
        }
        if (this.formData.industry.length > 3) {
            this.formData.industry.pop();
        }
    },
    prepareIndustryData() {
        // Формируем строку из выбранных значений индустрий
        this.formData.industryString = this.formData.industry.join('; ');
    },
    prepareCustomerAcquisitionData() {
            // Формируем строку из выбранных значений перед отправкой на сервер
            this.formData.customer_acquisitionString = this.formData.customer_acquisition.join('; ');
        },
    handleProductChange() {
        // Если значение 'Other' не выбрано, сбрасываем значение поля other_product
        if (!this.formData.product.includes('Other')) {
            this.formData.other_product = '';
        }
    },
    handleSourceChange() {
        // Если значение 'Other' не выбрано, сбрасываем значение поля other_product
        if (!this.formData.source_of_revenue.includes('Other')) {
            this.formData.other_source_of_revenue = '';
        }
    },
    prepareProductData() {
        // Формируем строку из выбранных значений перед отправкой на сервер
        this.formData.productString = this.formData.product.join('; ');
    },
    prepareBusinessModelData() {
        this.formData.businessModelString = this.formData.business_model.join('; ');
    },
    showAdditionalQuestion() {
      this.showFullTimeDuration = true;
    },
    hideAdditionalQuestion() {
      this.showFullTimeDuration = false;
      this.formData.full_time_duration = ''; 
    },
    handleCustomerAcquisitionChange() {
      if (!this.formData.customer_acquisition.includes('Other')) {
        this.formData.other_customer_acquisition = '';
      }
    },
    checkOtherRelationship() {
      if (this.formData.relationship !== 'Other') {
        this.formData.other_relationship = '';
      }
    },
    checkOtherBusinessModel() {
   if (!this.formData.business_model.includes('Other')) {
     this.formData.other_business_model = '';
   }
},
    isDisabled(value, array, maxSelections = 2) {
        // Блокируем остальные поля, если выбрано уже максимальное количество вариантов
        return (
            array.length >= maxSelections &&
            !array.includes(value)
        );
    },
    isIndustryDisabled(value, array) {
        // Для поля "industry" устанавливаем максимум 3 выбора
        return array.length >= 3 && !array.includes(value);
    },
    isCustomerAcquisitionDisabled(value, array) {
            // Для поля "customer acquisition" устанавливаем максимум 3 выбора
            return this.isDisabled(value, array, 3);
        },
    checkOtherLegalStructure() {
    if (!this.formData.legal_structure.includes('Other')) {
      this.formData.other_legal_structure = '';
    }
  },
    checkIndustry() {
      if (this.formData.industry !== 'FinTech') {
        this.formData.fintech_type = '';
      }
    },
    checkBeyondSeriesA() {
      if (this.formData.raising_round !== 'Beyond Series A') {
        this.formData.beyond_series_a_round = '';
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
      if (this.currentStep < 51) {
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

      if (this.formData.business_model === 'Other' && !this.formData.other_business_model) {
        this.errorMessage = 'Please specify your business model.';
        this.successMessage = '';
        return;
      }

      if (this.formData.product === 'Other' && !this.formData.other_product) {
        this.errorMessage = 'Please specify your product.';
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
  },
  computed: {
  titleText() {
    if (this.currentStep >= 38 && this.currentStep <= 48) {
      return '4 → Tell us more about you and your team';
    } else if (this.currentStep >= 29 && this.currentStep <= 36) {
      return '3 → Tell us more about your financing';
    } else if (this.currentStep >= 7 && this.currentStep <= 27) {
      return '2 → Tell us more about your company';
    } else if (this.currentStep >= 2 && this.currentStep <= 5) {
      return "1 → First let's start with the basics";
    }
    return null;
  }
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
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Центрируем заголовок по вертикали */
  height: 100vh; /* Высота контейнера на весь экран */
  background-color: #27272D;
}
h2 {
  color: #ffffff;
  font-size: 2.5em; /* Увеличим размер шрифта заголовков */
  margin-bottom: 20px;
  font-family: Inter;
}

h3 {
  color: #ffffff;
  font-size: 1.5em; /* Увеличим размер шрифта заголовков */
  margin-bottom: 20px;
  font-family: Inter;
  margin-top: 20px;
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
  width: 70%; /* Увеличим ширину полей ввода */
  padding: 10px 15px; /* Увеличим внутренние отступы */
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

.checkbox-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 300px;
  overflow-y: auto; /* Добавляем прокрутку, если элементы не помещаются */
  max-height: 60vh; /* Ограничиваем высоту группы чекбоксов, чтобы они не вытесняли заголовок */
}
.radio-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 300px;
  overflow-y: auto; /* Добавляем прокрутку, если элементы не помещаются */
  max-height: 60vh; /* Ограничиваем высоту группы радио-кнопок, чтобы они не вытесняли заголовок */
}
.custom-radio {
  display: flex;
  align-items: center;
  background-color: #f3f3f3;
  padding: 4px 8px;
  border: 2px solid #ccc;
  cursor: pointer;
  position: relative;
  width: 100%;
}

.custom-radio:hover {
  background-color: #acacac; /* Цвет при наведении мыши */
}

.custom-radio input[type="radio"] {
  display: none;
}

.radio-button {
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  width: 100%;
}
.custom-checkbox {
  display: flex;
  align-items: center;
  background-color: #f3f3f3;
  padding: 4px 8px;
  border: 2px solid #ccc;
  cursor: pointer;
  position: relative;
  width: 100%;
}

.custom-checkbox input[type="checkbox"] {
  display: none;
}


.custom-checkbox input[type="checkbox"]:checked + .checkbox-button {
  background-color: #ffffff;
  border-color: #000;
}

.custom-checkbox input[type="checkbox"]:checked + .checkbox-button .checkbox-key {
  background-color: #ff538c;
  color: #fff;
  border-color: #ff538c;
}
.checkbox-button {
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  position: relative;
  width: 100%;
  justify-content: space-between; /* Растягиваем содержимое по ширине */
}
.custom-checkbox input[type="checkbox"]:checked + .checkbox-button .checkmark {
  display: inline;
}

.custom-checkbox:hover {
  background-color: #e0e0e0;
}

.custom-checkbox:hover .checkbox-button {
  color: #333;
}

.checkbox-key {
  display: none; /* Скрываем розовую букву */
}


.custom-checkbox:hover .checkbox-key {
  background-color: #d0d0d0;
}

.radio-key {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px; /* Уменьшили размер ключа */
  height: 18px; /* Уменьшили размер ключа */
  background-color: #fff;
  margin-right: 10px;
  font-weight: bold;
  font-size: 12px; /* Уменьшили размер шрифта */
  color: #000;
}

.custom-radio input[type="radio"]:checked + .radio-button {
  background-color: #ffffff;
  border-color: #000;
}

.custom-radio input[type="radio"]:checked + .radio-button .radio-key {
  background-color: #ff538c;
  color: #fff;
  border-color: #ff538c;
}
.checkmark {
  display: none;
  margin-left: auto;
  color: #000;
}

.custom-radio input[type="radio"]:checked + .radio-button .checkmark {
  display: inline;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.35s ease;
}

.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
.home-logo {
  position: absolute; /* Или fixed, если хотите, чтобы текст был зафиксирован на экране */
  top: 60px; /* Задайте отступ от верхней части после фиксированного заголовка */
  left: 20px; /* Отступ от левой части экрана */
  color: #ff538c;
  font-size: 52px;
  font-style: normal;
  font-weight: 600;
  text-shadow: 1px 1px 0 #000, 2px 2px 0 #000000, 3px 3px 0 #000000;
  z-index: 2; /* Этот элемент будет выше других элементов на странице */
}
.other-relationship-input {
  margin-top: 15px; /* Добавляем отступ сверху, чтобы поле не прилипало к радио-кнопкам */
}
</style>
