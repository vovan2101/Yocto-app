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
            <h2>What's your first and last name?</h2>
          </div>
          <div class="button-left-container">
            <button @click="openModal('first_name')" class="button-scroll">Which investors require this information?</button>
          </div>
          <input class="input-field" v-model="formData.first_name" placeholder="John" required />
          <input class="input-field" v-model="formData.last_name" placeholder="Doe" required />
          <div class="button-container">
            <button class="button" @click="nextStep">Next</button>
            <p class="enter-text">press Enter ↵</p>
          </div>
        </div>

        <div v-if="currentStep === 3">
          <div class="header-container">
            <p class="step-indicator">b.</p>
            <h2>What is your e-mail address?</h2>
          </div>
          <div class="button-left-container">
            <button @click="openModal('email')" class="button-scroll">Which investors require this information?</button>
          </div>
          <input class="input-field" type="email" placeholder="name@example.com" v-model="formData.email" required />
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
          <div class="button-left-container">
            <button @click="openModal('phone_number')" class="button-scroll">Which investors require this information?</button>
          </div>
          <input class="input-field" type="tel" placeholder="Type your answer here..." v-model="formData.phone_number" required />
          <div class="button-container">
            <button class="button" @click="nextStep">Next</button>
            <p class="enter-text">press Enter ↵</p>
          </div>
        </div>

        <div v-if="currentStep === 5">
          <div class="header-container">
            <p class="step-indicator">c.</p>
            <h2>What is your relationship to the company?</h2>
          </div>
          <div class="button-left-container">
            <button @click="openModal('relationship')" class="button-scroll">Which investors require this information?</button>
          </div>
          <div class="radio-group">
            <label class="custom-radio">
              <input type="radio" id="founder" value="Founder" v-model="formData.relationship" required @change="checkOtherRelationship" />
              <span class="radio-button">
                <span class="radio-key">A</span> Founder
                <span class="checkmark">&#10003;</span>
              </span>
            </label>
            <label class="custom-radio">
              <input type="radio" id="other" value="Other" v-model="formData.relationship" required @change="checkOtherRelationship" />
              <span class="radio-button">
                <span class="radio-key">B</span> Other
                <span class="checkmark">&#10003;</span>
              </span>
            </label>
          </div>
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
            <h2>Are you working on this full time (40+ hours/week)?</h2>
          </div>
          <div class="button-left-container">
            <button @click="openModal('working_full_time')" class="button-scroll">Which investors require this information?</button>
          </div>
          <div class="radio-group">
            <label class="custom-radio">
              <input type="radio" name="full_time" value="Yes" v-model="formData.working_full_time" @change="showAdditionalQuestion">
              <span class="radio-button">
                <span class="radio-key">A</span> Yes
                <span class="checkmark">&#10003;</span>
              </span>
            </label>
            <label class="custom-radio">
              <input type="radio" name="full_time" value="No" v-model="formData.working_full_time" @change="hideAdditionalQuestion">
              <span class="radio-button">
                <span class="radio-key">B</span> No
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
                  <span class="radio-key">A</span> 0-6 Months
                  <span class="checkmark">&#10003;</span>
                </span>
              </label>
              <label class="custom-radio">
                <input type="radio" value="6-12 Months" v-model="formData.full_time_duration" required>
                <span class="radio-button">
                  <span class="radio-key">B</span> 6-12 Months
                  <span class="checkmark">&#10003;</span>
                </span>
              </label>
              <label class="custom-radio">
                <input type="radio" value="12-18 Months" v-model="formData.full_time_duration" required>
                <span class="radio-button">
                  <span class="radio-key">C</span> 12-18 Months
                  <span class="checkmark">&#10003;</span>
                </span>
              </label>
              <label class="custom-radio">
                <input type="radio" value="18-24 Months" v-model="formData.full_time_duration" required>
                <span class="radio-button">
                  <span class="radio-key">D</span> 18-24 Months
                  <span class="checkmark">&#10003;</span>
                </span>
              </label>
              <label class="custom-radio">
                <input type="radio" value="24-36 Months" v-model="formData.full_time_duration" required>
                <span class="radio-button">
                  <span class="radio-key">E</span> 24-36 Months
                  <span class="checkmark">&#10003;</span>
                </span>
              </label>
              <label class="custom-radio">
                <input type="radio" value="36 Months or More" v-model="formData.full_time_duration" required>
                <span class="radio-button">
                  <span class="radio-key">F</span> 36 Months or More
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
              <h2>What's the name of your company?</h2>
            </div>
            <p>No corporate suffixes needed - EG. Inc, LLC, etc.</p>
            <div class="button-left-container">
              <button @click="openModal('company_name')" class="button-scroll">Which investors require this information?</button>
            </div>
            <input class="input-field" placeholder="Type your answer here..." v-model="formData.company_name" required />
            <div class="button-container">
              <button class="button" @click="nextStep">Next</button>
              <p class="enter-text">press Enter ↵</p>
            </div>
          </div>

          <!-- Step 9 -->
          <div v-if="currentStep === 9">
            <div class="header-container">
              <p class="step-indicator">b.</p>
              <h2>What's the one-liner description of your company?</h2>
            </div>
            <p>(Keep it simple - eg "We're the Uber for babysitters")</p>
            <div class="button-left-container">
              <button @click="openModal('one_line_description')" class="button-scroll">Which investors require this information?</button>
            </div>
            <textarea class="input-field" placeholder="Type your answer here..." v-model="formData.one_line_description"></textarea>
            <div class="button-container">
              <button class="button" @click="nextStep">Next</button>
              <p class="enter-text">press Enter ↵</p>
            </div>
          </div>

          <!-- Step 10 -->
          <div v-if="currentStep === 10">
            <div class="header-container">
              <p class="step-indicator">c.</p>
              <h2>In one to two sentences, what is the problem you are trying to solve?</h2>
            </div>
            <div class="button-left-container">
              <button @click="openModal('company_description')" class="button-scroll">Which investors require this information?</button>
            </div>
            <textarea class="input-field" placeholder="Type your answer here..." v-model="formData.company_description" required></textarea>
            <div class="button-container">
              <button class="button" @click="nextStep">Next</button>
              <p class="enter-text">press Enter ↵</p>
            </div>
          </div>

          <!-- Step 11 -->
          <div v-if="currentStep === 11">
            <div class="header-container">
              <p class="step-indicator">c.</p>
              <h2>In one to two sentences, what is your solution?</h2>
            </div>
            <p>Tip - tell us what your business does and how you are unique.</p>
            <div class="button-left-container">
              <button @click="openModal('company_solution')" class="button-scroll">Which investors require this information?</button>
            </div>
            <textarea class="input-field" placeholder="Type your answer here..." v-model="formData.company_solution" required></textarea>
            <div class="button-container">
              <button class="button" @click="nextStep">Next</button>
              <p class="enter-text">press Enter ↵</p>
            </div>
          </div>

          <!-- Step 12 -->
          <div v-if="currentStep === 12">
            <div class="header-container">
              <p class="step-indicator">c.</p>
              <h2>In 2-3 sentences, what is the elevator pitch of your company?</h2>
            </div>
            <div class="button-left-container">
              <button @click="openModal('pitch_description')" class="button-scroll">Which investors require this information?</button>
            </div>
            <textarea class="input-field" placeholder="Type your answer here..." v-model="formData.pitch_description" required></textarea>
            <div class="button-container">
              <button class="button" @click="nextStep">Next</button>
              <p class="enter-text">press Enter ↵</p>
            </div>
          </div>

          <!-- Step 13 -->
          <div v-if="currentStep === 13">
            <div class="header-container">
              <p class="step-indicator">c.</p>
              <h2>Who is your target customer & how are you going to acquire them?</h2>
            </div>
            <p>Pro tip: We're specifically looking for info around how you think about customer acquisition (now and at scale) and revenue.</p>
            <div class="button-left-container">
              <button @click="openModal('target_customer')" class="button-scroll">Which investors require this information?</button>
            </div>
            <textarea class="input-field" placeholder="Type your answer here..." v-model="formData.target_customer" required></textarea>
            <div class="button-container">
              <button class="button" @click="nextStep">Next</button>
              <p class="enter-text">press Enter ↵</p>
            </div>
          </div>

          <!-- Step 14 -->
          <div v-if="currentStep === 14">
            <div class="header-container">
              <p class="step-indicator">c.</p>
              <h2>How do you plan on acquiring your customers?</h2>
            </div>
            <p>Please select the options that apply to your business the most - the fewer the better!</p>
            <div class="button-left-container">
              <button @click="openModal('customer_acquisition')" class="button-scroll">Which investors require this information?</button>
            </div>
            <div class="choices">
              Make between 1 and 3 choices
            </div>
            
            <!-- Контейнер с прокруткой -->
            <div class="scrollable-content">
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
            </div>

            <div class="button-container">
              <button class="button" @click="prepareCustomerAcquisitionData(); nextStep()">Next</button>
              <p class="enter-text">press Enter ↵</p>
            </div>
          </div>

          <!-- Step 15 -->
          <div v-if="currentStep === 15">
            <div class="header-container">
              <p class="step-indicator">d.</p>
              <h2>Date Founded.</h2>
            </div>
            <p>Approximately, when did you start the company?</p>
            <div class="button-left-container">
              <button @click="openModal('date_founded')" class="button-scroll">Which investors require this information?</button>
            </div>
            <input class="input-field" type="date" v-model="formData.date_founded" />
            <div class="button-container">
              <button class="button" @click="nextStep">Next</button>
              <p class="enter-text">press Enter ↵</p>
            </div>
          </div>

          <!-- Step 16 -->
          <div v-if="currentStep === 16">
            <div class="header-container">
              <p class="step-indicator">j.</p>
              <h2>What is the status of your product?</h2>
            </div>
            <div class="button-left-container">
              <button @click="openModal('product_status')" class="button-scroll">Which investors require this information?</button>
            </div>
            <div class="radio-group">
              <label class="custom-radio">
                <input type="radio" value="Idea/Prototype Stage" v-model="formData.product_status" />
                <span class="radio-button">
                  <span class="radio-key">A</span> Idea/Prototype Stage
                  <span class="checkmark">&#10003;</span>
                </span>
              </label>
              <label class="custom-radio">
                <input type="radio" value="Currently building MVP" v-model="formData.product_status" />
                <span class="radio-button">
                  <span class="radio-key">B</span> Currently building MVP
                  <span class="checkmark">&#10003;</span>
                </span>
              </label>
              <label class="custom-radio">
                <input type="radio" value="MVP built, < 3 months in market" v-model="formData.product_status" />
                <span class="radio-button">
                  <span class="radio-key">C</span> MVP built, &lt; 3 months in market
                  <span class="checkmark">&#10003;</span>
                </span>
              </label>
              <label class="custom-radio">
                <input type="radio" value="MVP built with > 3 months in the market" v-model="formData.product_status" />
                <span class="radio-button">
                  <span class="radio-key">D</span> MVP built with &gt; 3 months in the market
                  <span class="checkmark">&#10003;</span>
                </span>
              </label>
              <label class="custom-radio">
                <input type="radio" value="Full-fledged product built, < 3 months in market" v-model="formData.product_status" />
                <span class="radio-button">
                  <span class="radio-key">E</span> Full-fledged product built, &lt; 3 months in market
                  <span class="checkmark">&#10003;</span>
                </span>
              </label>
              <label class="custom-radio">
                <input type="radio" value="Full-fledged product built, > 3 months in market" v-model="formData.product_status" />
                <span class="radio-button">
                  <span class="radio-key">F</span> Full-fledged product built, &gt; 3 months in market
                  <span class="checkmark">&#10003;</span>
                </span>
              </label>
            </div>
            <div class="button-container">
              <button class="button" @click="nextStep">Next</button>
              <p class="enter-text">press Enter ↵</p>
            </div>
          </div>

          <!-- Step 17 -->
          <div v-if="currentStep === 17">
            <div class="header-container">
              <p class="step-indicator">k.</p>
              <h2>Does your product have active users or customers?</h2>
            </div>
            <div class="button-left-container">
              <button @click="openModal('active_customers')" class="button-scroll">Which investors require this information?</button>
            </div>
            <div class="radio-group">
              <label class="custom-radio">
                <input type="radio" value="No" v-model="formData.active_customers" />
                <span class="radio-button">
                  <span class="radio-key">A</span> No
                  <span class="checkmark">&#10003;</span>
                </span>
              </label>
              <label class="custom-radio">
                <input type="radio" value="No, but we have a wait list" v-model="formData.active_customers" />
                <span class="radio-button">
                  <span class="radio-key">B</span> No, but we have a wait list
                  <span class="checkmark">&#10003;</span>
                </span>
              </label>
              <label class="custom-radio">
                <input type="radio" value="Yes" v-model="formData.active_customers" />
                <span class="radio-button">
                  <span class="radio-key">C</span> Yes
                  <span class="checkmark">&#10003;</span>
                </span>
              </label>
            </div>
            <div class="button-container">
              <button class="button" @click="nextStep">Next</button>
              <p class="enter-text">press Enter ↵</p>
            </div>
          </div>


          <!-- Step 18 -->
          <div v-if="currentStep === 18">
            <div class="header-container">
              <p class="step-indicator">k.</p>
              <h2>How many users do you have?</h2>
            </div>
            <p>Including wait list if applicable.</p>
            <div class="button-left-container">
              <button @click="openModal('how_many_users')" class="button-scroll">Which investors require this information?</button>
            </div>
            <div class="scrollable-content">
            <div class="radio-group">
              <label class="custom-radio">
                <input type="radio" value="1-5" v-model="formData.how_many_users" />
                <span class="radio-button">
                  <span class="radio-key">A</span> 1-5
                  <span class="checkmark">&#10003;</span>
                </span>
              </label>
              <label class="custom-radio">
                <input type="radio" value="6-10" v-model="formData.how_many_users" />
                <span class="radio-button">
                  <span class="radio-key">B</span> 6-10
                  <span class="checkmark">&#10003;</span>
                </span>
              </label>
              <label class="custom-radio">
                <input type="radio" value="11-20" v-model="formData.how_many_users" />
                <span class="radio-button">
                  <span class="radio-key">C</span> 11-20
                  <span class="checkmark">&#10003;</span>
                </span>
              </label>
              <label class="custom-radio">
                <input type="radio" value="21-50" v-model="formData.how_many_users" />
                <span class="radio-button">
                  <span class="radio-key">D</span> 21-50
                  <span class="checkmark">&#10003;</span>
                </span>
              </label>
              <label class="custom-radio">
                <input type="radio" value="51-100" v-model="formData.how_many_users" />
                <span class="radio-button">
                  <span class="radio-key">E</span> 51-100
                  <span class="checkmark">&#10003;</span>
                </span>
              </label>
              <label class="custom-radio">
                <input type="radio" value="101-300" v-model="formData.how_many_users" />
                <span class="radio-button">
                  <span class="radio-key">F</span> 101-300
                  <span class="checkmark">&#10003;</span>
                </span>
              </label>
              <label class="custom-radio">
                <input type="radio" value="301-500" v-model="formData.how_many_users" />
                <span class="radio-button">
                  <span class="radio-key">G</span> 301-500
                  <span class="checkmark">&#10003;</span>
                </span>
              </label>
              <label class="custom-radio">
                <input type="radio" value="501-1k" v-model="formData.how_many_users" />
                <span class="radio-button">
                  <span class="radio-key">H</span> 501-1k
                  <span class="checkmark">&#10003;</span>
                </span>
              </label>
              <label class="custom-radio">
                <input type="radio" value="1-5k" v-model="formData.how_many_users" />
                <span class="radio-button">
                  <span class="radio-key">I</span> 1-5k
                  <span class="checkmark">&#10003;</span>
                </span>
              </label>
              <label class="custom-radio">
                <input type="radio" value="5-10k" v-model="formData.how_many_users" />
                <span class="radio-button">
                  <span class="radio-key">J</span> 5-10k
                  <span class="checkmark">&#10003;</span>
                </span>
              </label>
              <label class="custom-radio">
                <input type="radio" value="10k+" v-model="formData.how_many_users" />
                <span class="radio-button">
                  <span class="radio-key">K</span> 10k+
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
          <!-- Step 19 -->
          <div v-if="currentStep === 19">
            <div class="header-container">
              <p class="step-indicator">e.</p>
              <h2>What industry are you in?</h2>
            </div>
            <p>Please select the options that apply to your business the most - the fewer the better!</p>
            <div class="button-left-container">
              <button @click="openModal('industry')" class="button-scroll">Which investors require this information?</button>
            </div>
            <div class="choices">
              Make between 1 and 3 choices
            </div>
            <div class="scrollable-content">
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


          <!-- Step 20 -->
          <div v-if="currentStep === 20">
            <div class="header-container">
              <p class="step-indicator">e.</p>
              <h2>What industry are you in (Liberty Ventures)?</h2>
            </div>
            <div class="button-left-container">
              <button @click="openModal('liberty_ventures_industry')" class="button-scroll">Which investors require this information?</button>
            </div>
            <div class="scrollable-content">
            <div class="radio-group">
              <label class="custom-radio" v-for="option in snapshotIndustryOptions" :key="option.value">
                <input 
                  type="radio" 
                  :id="option.value" 
                  :value="option.value" 
                  v-model="formData.liberty_ventures_industry" 
                />
                <span class="radio-button">
                  <span class="radio-key">{{ option.key }}</span> {{ option.label }}
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
          <!-- Step 21 -->
          <div v-if="currentStep === 21">
            <div class="header-container">
              <p class="step-indicator">f.</p>
              <h2>What is the primary product your company is providing?</h2>
            </div>
            <p>Please select the options that apply to your business the most - the fewer the better!</p>
            <div class="button-left-container">
              <button @click="openModal('product')" class="button-scroll">Which investors require this information?</button>
            </div>
            <div class="choices">
              Make between 1 and 2 choices
            </div>
            <div class="scrollable-content">
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

          <!-- Step 22 -->
          <div v-if="currentStep === 22">
            <div class="header-container">
              <p class="step-indicator">c.</p>
              <h2>What is your Business Model?</h2>
            </div>
            <p>Please select the options that apply to your business the most - the fewer the better!</p>
            <p>(If you are a Marketplace/Network, please specify the types of users interacting on your platform. )</p>
            <div class="button-left-container">
              <button @click="openModal('business_model')" class="button-scroll">Which investors require this information?</button>
            </div>
            <div class="choices">
              You can choose up to 2
            </div>
            <div class="scrollable-content">
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

          <!-- Step 23 -->
          <div v-if="currentStep === 23">
            <div class="header-container">
              <p class="step-indicator">f.</p>
              <h2>What is your company website?</h2>
            </div>
            <div class="button-left-container">
              <button @click="openModal('company_website')" class="button-scroll">Which investors require this information?</button>
            </div>
            <input class="input-field" type="url" placeholder="https://website.com" v-model="formData.company_website" />
            <div class="button-container">
              <button class="button" @click="nextStep">Next</button>
              <p class="enter-text">press Enter ↵</p>
            </div>
          </div>

          <!-- Step 24 -->
          <div v-if="currentStep === 24">
            <div class="header-container">
              <p class="step-indicator">g.</p>
              <h2>Add a link to your pitch deck.</h2>
            </div>
            <div class="button-left-container">
              <button @click="openModal('pitch_deck')" class="button-scroll">Which investors require this information?</button>
            </div>
            <input class="input-field" type="url" placeholder="https://pitch.com" v-model="formData.pitch_deck" required />
            <div class="button-container">
              <button class="button" @click="nextStep">Next</button>
              <p class="enter-text">press Enter ↵</p>
            </div>
          </div>

          <!-- Step 25 -->
          <div v-if="currentStep === 25">
            <div class="header-container">
              <p class="step-indicator">h.</p>
              <h2>Add a file to your pitch deck.</h2>
            </div>
            <div class="button-left-container">
              <button @click="openModal('pitch_deck_file')" class="button-scroll">Which investors require this information?</button>
            </div>
            <div class="file-upload-container">
              <label class="custom-file-upload">
                <input type="file" @change="handlePitchDeckUpload" />
                Upload File
              </label>
              <p v-if="formData.pitch_deck_file" class="file-name">File: {{ formData.pitch_deck_file.name }} uploaded successfully.</p>
            </div>
            <div class="button-container">
              <button class="button" @click="nextStep">Next</button>
              <p class="enter-text">press Enter ↵</p>
            </div>
          </div>
          <!-- Step 26 -->
          <div v-if="currentStep === 26">
            <div class="header-container">
              <p class="step-indicator">i.</p>
              <h2>Where is your business incorporated?</h2>
            </div>
            <div class="button-left-container">
              <button @click="openModal('headquartered')" class="button-scroll">Which investors require this information?</button>
            </div>
            <div class="scrollable-content">
            <div class="radio-group">
              <label class="custom-radio">
                <input type="radio" value="US" v-model="formData.headquartered" />
                <span class="radio-button">
                  <span class="radio-key">A</span> US
                  <span class="checkmark">&#10003;</span>
                </span>
              </label>
              <label class="custom-radio">
                <input type="radio" value="Canada" v-model="formData.headquartered" />
                <span class="radio-button">
                  <span class="radio-key">B</span> Canada
                  <span class="checkmark">&#10003;</span>
                </span>
              </label>
              <label class="custom-radio">
                <input type="radio" value="Mexico" v-model="formData.headquartered" />
                <span class="radio-button">
                  <span class="radio-key">C</span> Mexico
                  <span class="checkmark">&#10003;</span>
                </span>
              </label>
              <label class="custom-radio">
                <input type="radio" value="Asia - East" v-model="formData.headquartered" />
                <span class="radio-button">
                  <span class="radio-key">D</span> Asia - East
                  <span class="checkmark">&#10003;</span>
                </span>
              </label>
              <label class="custom-radio">
                <input type="radio" value="Asia - India / Pakistan / Bangladesh" v-model="formData.headquartered" />
                <span class="radio-button">
                  <span class="radio-key">E</span> Asia - India / Pakistan / Bangladesh
                  <span class="checkmark">&#10003;</span>
                </span>
              </label>
              <label class="custom-radio">
                <input type="radio" value="Asia - Southeast Asia" v-model="formData.headquartered" />
                <span class="radio-button">
                  <span class="radio-key">F</span> Asia - Southeast Asia
                  <span class="checkmark">&#10003;</span>
                </span>
              </label>
              <label class="custom-radio">
                <input type="radio" value="Australia / New Zealand" v-model="formData.headquartered" />
                <span class="radio-button">
                  <span class="radio-key">G</span> Australia / New Zealand
                  <span class="checkmark">&#10003;</span>
                </span>
              </label>
              <label class="custom-radio">
                <input type="radio" value="Europe" v-model="formData.headquartered" />
                <span class="radio-button">
                  <span class="radio-key">H</span> Europe
                  <span class="checkmark">&#10003;</span>
                </span>
              </label>
              <label class="custom-radio">
                <input type="radio" value="Latin America" v-model="formData.headquartered" />
                <span class="radio-button">
                  <span class="radio-key">I</span> Latin America
                  <span class="checkmark">&#10003;</span>
                </span>
              </label>
              <label class="custom-radio">
                <input type="radio" value="Middle East" v-model="formData.headquartered" />
                <span class="radio-button">
                  <span class="radio-key">J</span> Middle East
                  <span class="checkmark">&#10003;</span>
                </span>
              </label>
              <label class="custom-radio">
                <input type="radio" value="Africa" v-model="formData.headquartered" />
                <span class="radio-button">
                  <span class="radio-key">K</span> Africa
                  <span class="checkmark">&#10003;</span>
                </span>
              </label>
              <label class="custom-radio">
                <input type="radio" value="Other" v-model="formData.headquartered" />
                <span class="radio-button">
                  <span class="radio-key">L</span> Other
                  <span class="checkmark">&#10003;</span>
                </span>
              </label>
            </div>
            </div>

            <div v-if="formData.headquartered === 'US'" class="additional-question">
              <h3>Are you a Delaware C Corp?</h3>
              <div class="radio-group">
                <label class="custom-radio">
                  <input type="radio" value="Yes" v-model="formData.is_delaware_corp" />
                  <span class="radio-button">
                    <span class="radio-key">A</span> Yes
                    <span class="checkmark">&#10003;</span>
                  </span>
                </label>
                <label class="custom-radio">
                  <input type="radio" value="No" v-model="formData.is_delaware_corp" />
                  <span class="radio-button">
                    <span class="radio-key">B</span> No
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

          <!-- Step 27 -->
          <div v-if="currentStep === 27">
            <div class="header-container">
              <p class="step-indicator">i.</p>
              <h2>Where are your main customers based?</h2>
            </div>
            <div class="button-left-container">
              <button @click="openModal('customers_based')" class="button-scroll">Which investors require this information?</button>
            </div>
            <div class="scrollable-content">
            <div class="radio-group">
              <label class="custom-radio">
                <input type="radio" value="US" v-model="formData.customers_based" />
                <span class="radio-button">
                  <span class="radio-key">A</span> US
                  <span class="checkmark">&#10003;</span>
                </span>
              </label>
              <label class="custom-radio">
                <input type="radio" value="Canada" v-model="formData.customers_based" />
                <span class="radio-button">
                  <span class="radio-key">B</span> Canada
                  <span class="checkmark">&#10003;</span>
                </span>
              </label>
              <label class="custom-radio">
                <input type="radio" value="Mexico" v-model="formData.customers_based" />
                <span class="radio-button">
                  <span class="radio-key">C</span> Mexico
                  <span class="checkmark">&#10003;</span>
                </span>
              </label>
              <label class="custom-radio">
                <input type="radio" value="Asia - East" v-model="formData.customers_based" />
                <span class="radio-button">
                  <span class="radio-key">D</span> Asia - East
                  <span class="checkmark">&#10003;</span>
                </span>
              </label>
              <label class="custom-radio">
                <input type="radio" value="Asia - Central" v-model="formData.customers_based" />
                <span class="radio-button">
                  <span class="radio-key">E</span> Asia - Central
                  <span class="checkmark">&#10003;</span>
                </span>
              </label>
              <label class="custom-radio">
                <input type="radio" value="Asia - India / Pakistan / Bangladesh" v-model="formData.customers_based" />
                <span class="radio-button">
                  <span class="radio-key">F</span> Asia - India / Pakistan / Bangladesh
                  <span class="checkmark">&#10003;</span>
                </span>
              </label>
              <label class="custom-radio">
                <input type="radio" value="Asia - Southeast Asia" v-model="formData.customers_based" />
                <span class="radio-button">
                  <span class="radio-key">G</span> Asia - Southeast Asia
                  <span class="checkmark">&#10003;</span>
                </span>
              </label>
              <label class="custom-radio">
                <input type="radio" value="Australia / New Zealand" v-model="formData.customers_based" />
                <span class="radio-button">
                  <span class="radio-key">H</span> Australia / New Zealand
                  <span class="checkmark">&#10003;</span>
                </span>
              </label>
              <label class="custom-radio">
                <input type="radio" value="Europe" v-model="formData.customers_based" />
                <span class="radio-button">
                  <span class="radio-key">I</span> Europe
                  <span class="checkmark">&#10003;</span>
                </span>
              </label>
              <label class="custom-radio">
                <input type="radio" value="Latin America" v-model="formData.customers_based" />
                <span class="radio-button">
                  <span class="radio-key">J</span> Latin America
                  <span class="checkmark">&#10003;</span>
                </span>
              </label>
              <label class="custom-radio">
                <input type="radio" value="Middle East" v-model="formData.customers_based" />
                <span class="radio-button">
                  <span class="radio-key">K</span> Middle East
                  <span class="checkmark">&#10003;</span>
                </span>
              </label>
              <label class="custom-radio">
                <input type="radio" value="Africa" v-model="formData.customers_based" />
                <span class="radio-button">
                  <span class="radio-key">L</span> Africa
                  <span class="checkmark">&#10003;</span>
                </span>
              </label>
              <label class="custom-radio">
                <input type="radio" value="Global" v-model="formData.customers_based" />
                <span class="radio-button">
                  <span class="radio-key">M</span> Global
                  <span class="checkmark">&#10003;</span>
                </span>
              </label>
              <label class="custom-radio">
        <input type="radio" value="Other" v-model="formData.customers_based" @change="handleCustomersBasedChange" />
        <span class="radio-button">
          <span class="radio-key">N</span> Other
          <span class="checkmark">&#10003;</span>
        </span>
      </label>
    </div>
  </div>
  <!-- Появляется поле для ввода, если выбрано 'Other' -->
  <div v-if="formData.customers_based === 'Other'" class="other-product-input">
    <input 
      class="input-field" 
      v-model="formData.other_customers_based" 
      placeholder="Please specify" 
      required 
    />
  </div>
            <div class="button-container">
              <button class="button" @click="nextStep">Next</button>
              <p class="enter-text">press Enter ↵</p>
            </div>
          </div>
          <!-- Step 28 -->
          <div v-if="currentStep === 28">
            <div class="header-container">
              <p class="step-indicator">j.</p>
              <h2>Where are you located?</h2>
            </div>
            <p>Hint: if your company is remote, that's totally fine, just pick the geo where you are physically located.</p>
            <div class="button-left-container">
              <button @click="openModal('specific_location')" class="button-scroll">Which investors require this information?</button>
            </div>
            <div class="scrollable-content">
            <div class="radio-group">
              <label class="custom-radio" v-for="(location, index) in locations" :key="index">
                <input 
                  type="radio" 
                  :id="location.value" 
                  :value="location.value" 
                  v-model="formData.specific_location" 
                  @change="checkOtherLocation" 
                  required
                />
                <span class="radio-button">
                  <span class="radio-key">{{ location.key }}</span> {{ location.label }}
                  <span class="checkmark">&#10003;</span>
                </span>
              </label>
            </div>
            </div>
            <div v-if="['US - Other', 'Canada - Other', 'Asia - Other', 'Asia - India', 'Latin America', 'Europe', 'Africa'].includes(formData.specific_location)" class="other-location-input">
              <p>Please specify your location? (City, State, Country)</p>
              <input class="input-field" v-model="formData.other_specific_location" placeholder="Please specify" required />
            </div>
            <div class="button-container">
              <button class="button" @click="nextStep">Next</button>
              <p class="enter-text">press Enter ↵</p>
            </div>
          </div>

          <!-- Step 29 -->
          <div v-if="currentStep === 29">
            <div class="header-container">
              <p class="step-indicator">k.</p>
              <h2>What is the current or intended legal structure of the company?</h2>
            </div>
            <div class="button-left-container">
              <button @click="openModal('legal_structure')" class="button-scroll">Which investors require this information?</button>
            </div>
            <div class="radio-group">
              <label class="custom-radio">
                <input type="radio" id="delaware_c_corp" value="Delaware C-Corp" v-model="formData.legal_structure" />
                <span class="radio-button">
                  <span class="radio-key">A</span> Delaware C-Corp
                  <span class="checkmark">&#10003;</span>
                </span>
              </label>
              <label class="custom-radio">
                <input type="radio" id="canadian_company" value="Canadian company" v-model="formData.legal_structure" />
                <span class="radio-button">
                  <span class="radio-key">B</span> Canadian company
                  <span class="checkmark">&#10003;</span>
                </span>
              </label>
              <label class="custom-radio">
                <input type="radio" id="b_corp" value="B-Corp" v-model="formData.legal_structure" />
                <span class="radio-button">
                  <span class="radio-key">C</span> B-Corp
                  <span class="checkmark">&#10003;</span>
                </span>
              </label>
              <label class="custom-radio">
                <input type="radio" id="pbc" value="Public Benefit Corporation (PBC)" v-model="formData.legal_structure" />
                <span class="radio-button">
                  <span class="radio-key">D</span> Public Benefit Corporation (PBC)
                  <span class="checkmark">&#10003;</span>
                </span>
              </label>
              <label class="custom-radio">
                <input type="radio" id="llc" value="LLC" v-model="formData.legal_structure" />
                <span class="radio-button">
                  <span class="radio-key">E</span> LLC
                  <span class="checkmark">&#10003;</span>
                </span>
              </label>
              <label class="custom-radio">
                <input type="radio" id="s_corp" value="S-Corp" v-model="formData.legal_structure" />
                <span class="radio-button">
                  <span class="radio-key">F</span> S-Corp
                  <span class="checkmark">&#10003;</span>
                </span>
              </label>
              <label class="custom-radio">
                <input type="radio" id="non_profit" value="Non-profit" v-model="formData.legal_structure" />
                <span class="radio-button">
                  <span class="radio-key">G</span> Non-profit
                  <span class="checkmark">&#10003;</span>
                </span>
              </label>
              <label class="custom-radio">
                <input type="radio" id="other" value="Other" v-model="formData.legal_structure" @change="checkOtherLegalStructure"/>
                <span class="radio-button">
                  <span class="radio-key">H</span> Other
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
          <h2>What round are you raising?</h2>
        </div>
        <div class="button-left-container">
          <button @click="openModal('raising_round')" class="button-scroll">Which investors require this information?</button>
        </div>
        <div class="radio-group">
          <label class="custom-radio">
            <input type="radio" value="Friends and Family" v-model="formData.raising_round" @change="checkBeyondSeriesA" />
            <span class="radio-button">
              <span class="radio-key">A</span> Friends and Family
              <span class="checkmark">&#10003;</span>
            </span>
          </label>
          <label class="custom-radio">
            <input type="radio" value="Angel" v-model="formData.raising_round" @change="checkBeyondSeriesA" />
            <span class="radio-button">
              <span class="radio-key">B</span> Angel
              <span class="checkmark">&#10003;</span>
            </span>
          </label>
          <label class="custom-radio">
            <input type="radio" value="Pre-Seed" v-model="formData.raising_round" @change="checkBeyondSeriesA" />
            <span class="radio-button">
              <span class="radio-key">C</span> Pre-Seed
              <span class="checkmark">&#10003;</span>
            </span>
          </label>
          <label class="custom-radio">
            <input type="radio" value="Pre-Seed extension" v-model="formData.raising_round" @change="checkBeyondSeriesA" />
            <span class="radio-button">
              <span class="radio-key">D</span> Pre-Seed extension
              <span class="checkmark">&#10003;</span>
            </span>
          </label>
          <label class="custom-radio">
            <input type="radio" value="Seed" v-model="formData.raising_round" @change="checkBeyondSeriesA" />
            <span class="radio-button">
              <span class="radio-key">E</span> Seed
              <span class="checkmark">&#10003;</span>
            </span>
          </label>
          <label class="custom-radio">
            <input type="radio" value="Seed extension" v-model="formData.raising_round" @change="checkBeyondSeriesA" />
            <span class="radio-button">
              <span class="radio-key">F</span> Seed extension
              <span class="checkmark">&#10003;</span>
            </span>
          </label>
          <label class="custom-radio">
            <input type="radio" value="Series A" v-model="formData.raising_round" @change="checkBeyondSeriesA" />
            <span class="radio-button">
              <span class="radio-key">G</span> Series A
              <span class="checkmark">&#10003;</span>
            </span>
          </label>
          <label class="custom-radio">
            <input type="radio" value="Beyond Series A" v-model="formData.raising_round" @change="checkBeyondSeriesA" />
            <span class="radio-button">
              <span class="radio-key">H</span> Beyond Series A
              <span class="checkmark">&#10003;</span>
            </span>
          </label>
        </div>

        <div v-if="formData.raising_round === 'Beyond Series A'">
          <div class="header-container">
            <h2>Please specify</h2>
          </div>
          <div class="radio-group">
            <label class="custom-radio">
              <input type="radio" value="Series B" v-model="formData.beyond_series_a_round" />
              <span class="radio-button">
                <span class="radio-key">I</span> Series B
                <span class="checkmark">&#10003;</span>
              </span>
            </label>
            <label class="custom-radio">
              <input type="radio" value="Series C" v-model="formData.beyond_series_a_round" />
              <span class="radio-button">
                <span class="radio-key">J</span> Series C
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

<div v-if="currentStep === 32">
    <div class="header-container">
      <p class="step-indicator">b.</p>
      <h2>How much are you raising? (in USD)</h2>
    </div>
    <div class="button-left-container">
      <button @click="openModal('raising_amount')" class="button-scroll">Which investors require this information?</button>
    </div>
    <input class="input-field" type="text" placeholder="Type your answer here..." v-model="formData.raising_amount" required />
    <div class="button-container">
      <button class="button" @click="nextStep">Next</button>
      <p class="enter-text">press Enter ↵</p>
    </div>
</div>

<div v-if="currentStep === 33">
  <div class="header-container">
    <p class="step-indicator">k.</p>
    <h2>Is your startup currently earning revenue?</h2>
  </div>
  <div class="button-left-container">
    <button @click="openModal('earning_revenue')" class="button-scroll">Which investors require this information?</button>
  </div>
  <div class="radio-group">
    <label class="custom-radio">
      <input type="radio" value="Yes" v-model="formData.earning_revenue" />
      <span class="radio-button">
        <span class="radio-key">A</span> Yes
        <span class="checkmark">&#10003;</span>
      </span>
    </label>
    <label class="custom-radio">
      <input type="radio" value="No" v-model="formData.earning_revenue" />
      <span class="radio-button">
        <span class="radio-key">B</span> No
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
    <h2>Approximately how much revenue are you earning per month (in USD)?</h2>
  </div>
  <div class="button-left-container">
    <button @click="openModal('earning_amount')" class="button-scroll">Which investors require this information?</button>
  </div>
  <div class="radio-group">
    <label class="custom-radio">
      <input type="radio" value="1-$999" v-model="formData.earning_amount" />
      <span class="radio-button">
        <span class="radio-key">A</span> $1 - $999
        <span class="checkmark">&#10003;</span>
      </span>
    </label>
    <label class="custom-radio">
      <input type="radio" value="$1000-$4,999" v-model="formData.earning_amount" />
      <span class="radio-button">
        <span class="radio-key">B</span> $1000 - $4,999
        <span class="checkmark">&#10003;</span>
      </span>
    </label>
    <label class="custom-radio">
      <input type="radio" value="$5,000-$10,000" v-model="formData.earning_amount" />
      <span class="radio-button">
        <span class="radio-key">C</span> $5,000 - $10,000
        <span class="checkmark">&#10003;</span>
      </span>
    </label>
    <label class="custom-radio">
      <input type="radio" value="$10,001+" v-model="formData.earning_amount" />
      <span class="radio-button">
        <span class="radio-key">D</span> $10,001 +
        <span class="checkmark">&#10003;</span>
      </span>
    </label>
  </div>
  <div class="button-container">
    <button class="button" @click="nextStep">Next</button>
    <p class="enter-text">press Enter ↵</p>
  </div>
</div>

<div v-if="currentStep === 35">
  <div class="header-container">
    <p class="step-indicator">k.</p>
    <h2>What do you expect your main source of revenue to be?</h2>
  </div>
  <p>Please use "other" for sources you don't see below or if your business has multiple sources.</p>
  <div class="button-left-container">
    <button @click="openModal('source_of_revenue')" class="button-scroll">Which investors require this information?</button>
  </div>
  <div class="radio-group">
    <label class="custom-radio">
      <input type="radio" value="Ads / Sponsors" v-model="formData.source_of_revenue" @change="handleSourceChange" />
      <span class="radio-button">
        <span class="radio-key">A</span> Ads / Sponsors
        <span class="checkmark">&#10003;</span>
      </span>
    </label>
    <label class="custom-radio">
      <input type="radio" value="Affiliate" v-model="formData.source_of_revenue" @change="handleSourceChange" />
      <span class="radio-button">
        <span class="radio-key">B</span> Affiliate
        <span class="checkmark">&#10003;</span>
      </span>
    </label>
    <label class="custom-radio">
      <input type="radio" value="Commission (percentage of sale)" v-model="formData.source_of_revenue" @change="handleSourceChange" />
      <span class="radio-button">
        <span class="radio-key">C</span> Commission (percentage of sale)
        <span class="checkmark">&#10003;</span>
      </span>
    </label>
    <label class="custom-radio">
      <input type="radio" value="Purchases" v-model="formData.source_of_revenue" @change="handleSourceChange" />
      <span class="radio-button">
        <span class="radio-key">D</span> Purchases
        <span class="checkmark">&#10003;</span>
      </span>
    </label>
    <label class="custom-radio">
      <input type="radio" value="Subscription" v-model="formData.source_of_revenue" @change="handleSourceChange" />
      <span class="radio-button">
        <span class="radio-key">E</span> Subscription
        <span class="checkmark">&#10003;</span>
      </span>
    </label>
    <label class="custom-radio">
      <input type="radio" value="Other" v-model="formData.source_of_revenue" @change="handleSourceChange" />
      <span class="radio-button">
        <span class="radio-key">F</span> Other
        <span class="checkmark">&#10003;</span>
      </span>
    </label>
  </div>
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
    <div class="button-left-container">
      <button @click="openModal('pre_money_valuation')" class="button-scroll">Which investors require this information?</button>
    </div>
    <input class="input-field" type="text" placeholder="Type your answer here..." v-model="formData.pre_money_valuation" />
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
    <div class="button-left-container">
      <button @click="openModal('post_money_valuation')" class="button-scroll">Which investors require this information?</button>
    </div>
    <input class="input-field" type="text" placeholder="Type your answer here..." v-model="formData.post_money_valuation" />
    <div class="button-container">
      <button class="button" @click="nextStep">Next</button>
      <p class="enter-text">press Enter ↵</p>
    </div>
</div>

<div v-if="currentStep === 38">
    <div class="header-container">
      <p class="step-indicator">d.</p>
      <h2>What is the amount of money you are looking to raise in your current round? (USD)</h2>
    </div>
    <p>Please provide the total round size.</p>
    <div class="button-left-container">
      <button @click="openModal('capital_to_raise')" class="button-scroll">Which investors require this information?</button>
    </div>
    <input class="input-field" type="text" placeholder="Type your answer here..." v-model="formData.capital_to_raise" />
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
    <h2>What is your previous entrepreneurial experience?</h2>
  </div>
  <div class="button-left-container">
    <button @click="openModal('prev_experience')" class="button-scroll">Which investors require this information?</button>
  </div>
  <div class="radio-group">
    <label class="custom-radio">
      <input type="radio" value="First startup" v-model="formData.prev_experience" />
      <span class="radio-button">
        <span class="radio-key">A</span> First company
        <span class="checkmark">&#10003;</span>
      </span>
    </label>
    <label class="custom-radio">
      <input type="radio" value="Second startup" v-model="formData.prev_experience" />
      <span class="radio-button">
        <span class="radio-key">B</span> Second company
        <span class="checkmark">&#10003;</span>
      </span>
    </label>
    <label class="custom-radio">
      <input type="radio" value="Third startup" v-model="formData.prev_experience" />
      <span class="radio-button">
        <span class="radio-key">C</span> Third company
        <span class="checkmark">&#10003;</span>
      </span>
    </label>
    <label class="custom-radio">
      <input type="radio" value="Created more than 3 startups" v-model="formData.prev_experience" />
      <span class="radio-button">
        <span class="radio-key">D</span> Created more than 3 companies
        <span class="checkmark">&#10003;</span>
      </span>
    </label>
  </div>
  <div class="button-container">
    <button class="button" @click="nextStep">Next</button>
    <p class="enter-text">press Enter ↵</p>
  </div>
</div>


<div v-if="currentStep === 41">
  <div class="header-container">
    <p class="step-indicator">b.</p>
    <h2>In 2-3 sentences, why you / your team are awesome.</h2>
  </div>
  <div class="button-left-container">
    <button @click="openModal('team_description')" class="button-scroll">Which investors require this information?</button>
  </div>
  <textarea class="input-field" placeholder="Type your answer here..." v-model="formData.team_description" required></textarea>
  <div class="button-container">
    <button class="button" @click="nextStep">Next</button>
    <p class="enter-text">press Enter ↵</p>
  </div>
</div>

<div v-if="currentStep === 42">
  <div class="header-container">
    <p class="step-indicator">c.</p>
    <h2>What's your company's LinkedIn?</h2>
  </div>
  <div class="button-left-container">
    <button @click="openModal('company_linkedin')" class="button-scroll">Which investors require this information?</button>
  </div>
  <input class="input-field" type="url" placeholder="https://" v-model="formData.company_linkedin" />
  <div class="button-container">
    <button class="button" @click="nextStep">Next</button>
    <p class="enter-text">press Enter ↵</p>
  </div>
</div>

<div v-if="currentStep === 43">
  <div class="header-container">
    <p class="step-indicator">c.</p>
    <h2>Founder LinkedIn</h2>
  </div>
  <div class="button-left-container">
    <button @click="openModal('ceo_linkedin')" class="button-scroll">Which investors require this information?</button>
  </div>
  <input class="input-field" type="url" placeholder="https://" v-model="formData.ceo_linkedin" />

  <div class="header-container">
    <h2>Founder 2 LinkedIn</h2>
  </div>
  <input class="input-field" type="url" placeholder="https://" v-model="formData.founder2_linkedin" />

  <div class="header-container">
    <h2>Founder 3 LinkedIn</h2>
  </div>
  <input class="input-field" type="url" placeholder="https://" v-model="formData.founder3_linkedin" />

  <div class="button-container">
    <button class="button" @click="nextStep">Next</button>
    <p class="enter-text">press Enter ↵</p>
  </div>
</div>

<div v-if="currentStep === 44">
  <div class="header-container">
    <p class="step-indicator">d.</p>
    <h2>CTO LinkedIn</h2>
  </div>
  <div class="button-left-container">
    <button @click="openModal('cto_linkedin')" class="button-scroll">Which investors require this information?</button>
  </div>
  <input class="input-field" type="url" placeholder="https://" v-model="formData.cto_linkedin" />
  <div class="button-container">
    <button class="button" @click="nextStep">Next</button>
    <p class="enter-text">press Enter ↵</p>
  </div>
</div>

<div v-if="currentStep === 45">
  <div class="header-container">
    <p class="step-indicator">e.</p>
    <h2>Your team's LinkedIn profiles.</h2>
  </div>
  <div class="button-left-container">
    <button @click="openModal('linkedin_profiles')" class="button-scroll">Which investors require this information?</button>
  </div>
  <input class="input-field" type="url" placeholder="https://" v-model="formData.linkedin_profiles" />
  <div class="button-container">
    <button class="button" @click="nextStep">Next</button>
    <p class="enter-text">press Enter ↵</p>
  </div>
</div>

<div v-if="currentStep === 46">
  <div class="header-container">
    <p class="step-indicator">f.</p>
    <h2>Founder video URL</h2>
  </div>
  <div class="button-left-container">
    <button @click="openModal('founder_video_url')" class="button-scroll">Which investors require this information?</button>
  </div>
  <input class="input-field" type="url" placeholder="https://" v-model="formData.founder_video_url" />
  <div class="button-container">
    <button class="button" @click="nextStep">Next</button>
    <p class="enter-text">press Enter ↵</p>
  </div>
</div>

<div v-if="currentStep === 47">
  <div class="header-container">
    <p class="step-indicator">g.</p>
    <h2>Upload short video about team and the company.</h2>
  </div>
  <div class="button-left-container">
    <button @click="openModal('team_video_upload')" class="button-scroll">Which investors require this information?</button>
  </div>
  <div class="file-upload-container">
    <label class="custom-file-upload">
      <input type="file" @change="handleVideoUpload" />
      Upload Video
    </label>
    <p v-if="formData.founder_video_file" class="file-name">File: {{ formData.founder_video_file }} uploaded successfully.</p>
  </div>
  <div class="button-container">
    <button class="button" @click="nextStep">Next</button>
    <p class="enter-text">press Enter ↵</p>
  </div>
</div>

<div v-if="currentStep === 48">
  <div class="header-container">
    <p class="step-indicator">h.</p>
    <h2>Vision</h2>
  </div>
  <p>In 5-7 years, what is the world dominating vision for your company? </p>
  <div class="button-left-container">
    <button @click="openModal('vision')" class="button-scroll">Which investors require this information?</button>
  </div>
  <input class="input-field" type="input-field" placeholder="Type your answer here..." v-model="formData.vision" />
  <div class="button-container">
    <button class="button" @click="nextStep">Next</button>
    <p class="enter-text">press Enter ↵</p>
  </div>
</div>

<div v-if="currentStep === 49">
  <div class="header-container">
    <p class="step-indicator">k.</p>
    <h2>Would you be interested in pitching live in front of a virtual audience?</h2>
  </div>
  <ul>
    <li>- This would involve asking you a series of questions about your business</li>
    <li>- Then walking the audience through our decision-making process</li>
  </ul>
  <div class="button-left-container">
    <button @click="openModal('pitching_live')" class="button-scroll">Which investors require this information?</button>
  </div>
  <div class="radio-group">
    <label class="custom-radio">
      <input type="radio" value="yes" v-model="formData.pitching_live" />
      <span class="radio-button">
        <span class="radio-key">A</span> Yes
        <span class="checkmark">&#10003;</span>
      </span>
    </label>
    <label class="custom-radio">
      <input type="radio" value="no" v-model="formData.pitching_live" />
      <span class="radio-button">
        <span class="radio-key">B</span> No
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
    <p class="step-indicator">k.</p>
    <h2>Would you like us to share your submission with other companies?</h2>
  </div>
  <p>Sometimes we meet companies that aren't a fit for us, but may be a fit for other venture firms we work with.</p>
  <div class="button-left-container">
    <button @click="openModal('share_submission')" class="button-scroll">Which investors require this information?</button>
  </div>
  <div class="radio-group">
    <label class="custom-radio">
      <input type="radio" value="Yes" v-model="formData.share_submission" />
      <span class="radio-button">
        <span class="radio-key">A</span> Yes
        <span class="checkmark">&#10003;</span>
      </span>
    </label>
    <label class="custom-radio">
      <input type="radio" value="No" v-model="formData.share_submission" />
      <span class="radio-button">
        <span class="radio-key">B</span> No
        <span class="checkmark">&#10003;</span>
      </span>
    </label>
  </div>
  <div class="button-container">
    <button class="button" @click="nextStep">Next</button>
    <p class="enter-text">press Enter ↵</p>
  </div>
</div>

<div v-if="currentStep === 51">
  <div class="header-container">
    <p class="step-indicator">b.</p>
    <h2>Investors participating in the current round (if any).</h2>
  </div>
  <div class="button-left-container">
    <button @click="openModal('investors_participating')" class="button-scroll">Which investors require this information?</button>
  </div>
  <textarea class="input-field" placeholder="Type your answer here..." v-model="formData.investors_participating" required></textarea>
  <div class="button-container">
    <button class="button" @click="nextStep">Next</button>
    <p class="enter-text">press Enter ↵</p>
  </div>
</div>

<div v-if="currentStep === 52">
  <div class="header-container">
    <p class="step-indicator">b.</p>
    <h2>Anything else you want investors to know?</h2>
  </div>
  <div class="button-left-container">
    <button @click="openModal('want_us_to_know')" class="button-scroll">Which investors require this information?</button>
  </div>
  <textarea class="input-field" placeholder="Type your answer here..." v-model="formData.want_us_to_know" required></textarea>
  <div class="button-container">
    <button class="button" @click="nextStep">Next</button>
    <p class="enter-text">press Enter ↵</p>
  </div>
</div>

<div v-if="currentStep === 53">
  <div class="header-container">
    <p class="step-indicator">b.</p>
    <h2>How do the values of your team align with those of Liberty Ventures?</h2>
  </div>
  <p>Check their website for more information on their values: https://libertyventures.xyz/values</p>
  <div class="button-left-container">
    <button @click="openModal('value_of_team')" class="button-scroll">Which investors require this information?</button>
  </div>
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
    <div class="nav-buttons-left">
  <button class="nav-button" @click="goToFirstStep">Back to Start</button> <!-- Кнопка для перехода к первому шагу -->
    </div>
    <div class="nav-buttons-right">
      <button class="nav-button" :disabled="currentStep === 1" @click="prevStep">←</button>
      <button class="nav-button" @click="nextStep">→</button>
    </div>
        <!-- Модальное окно -->
        <FormInfoModal
        v-if="isModalOpen"
        :isModalOpen="isModalOpen"
        :field="currentField"
        @close="closeModal"
      />
  </div>
</template>

<script>
import FormInfoModal from '../components/FormInfoModal.vue';
export default {
  components: {
    FormInfoModal  // Регистрация компонента
  },
  data() {
    return {
      currentStep: 1,
      showTitle: false,
      isModalOpen: false, // Для управления видимостью модального окна
      currentField: '',   // Поле, для которого будет показана информация
      snapshotIndustryOptions: [
          { key: 'A', value: 'Accounting', label: 'Accounting' },
          { key: 'B', value: 'Airlines and Aviation', label: 'Airlines and Aviation' },
          { key: 'C', value: 'Alternative Dispute Resolution', label: 'Alternative Dispute Resolution' },
          { key: 'D', value: 'Alternative Medicine', label: 'Alternative Medicine' },
          { key: 'E', value: 'Animation', label: 'Animation' },
          { key: 'F', value: 'Apparel & Fashion', label: 'Apparel & Fashion' },
          { key: 'G', value: 'Architecture & Planning', label: 'Architecture & Planning' },
          { key: 'H', value: 'Arts & Crafts', label: 'Arts & Crafts' },
          { key: 'I', value: 'Aviation & Aerospace', label: 'Aviation & Aerospace' },
          { key: 'J', value: 'Banking', label: 'Banking' },
          { key: 'K', value: 'Biotechnology', label: 'Biotechnology' },
          { key: 'L', value: 'Broadcast Media', label: 'Broadcast Media' },
          { key: 'M', value: 'Business Supplies & Equipment', label: 'Business Supplies & Equipment' },
          { key: 'N', value: 'Capital Markets', label: 'Capital Markets' },
          { key: 'O', value: 'Ceramics & Concrete', label: 'Ceramics & Concrete' },
          { key: 'P', value: 'Chemicals', label: 'Chemicals' },
          { key: 'Q', value: 'Civic & Social Organization', label: 'Civic & Social Organization' },
          { key: 'R', value: 'Commercial Real Estate', label: 'Commercial Real Estate' },
          { key: 'S', value: 'Computer & Network Security', label: 'Computer & Network Security' },
          { key: 'T', value: 'Computer Games', label: 'Computer Games' },
          { key: 'U', value: 'Computer Hardware', label: 'Computer Hardware' },
          { key: 'V', value: 'Computer Networking', label: 'Computer Networking' },
          { key: 'W', value: 'Consumer Electronics', label: 'Consumer Electronics' },
          { key: 'X', value: 'Consumer Services', label: 'Consumer Services' },
          { key: 'Y', value: 'Cosmetics', label: 'Cosmetics' },
          { key: 'Z', value: 'Dairy', label: 'Dairy' },
          { key: 'AA', value: 'Defense & Space', label: 'Defense & Space' },
          { key: 'AB', value: 'Electrical & Electronic Manufacturing', label: 'Electrical & Electronic Manufacturing' },
          { key: 'AC', value: 'Entertainment', label: 'Entertainment' },
          { key: 'AD', value: 'Environmental Services', label: 'Environmental Services' },
          { key: 'AE', value: 'Events Services', label: 'Events Services' },
          { key: 'AF', value: 'Executive Office', label: 'Executive Office' },
          { key: 'AG', value: 'Facilities Services', label: 'Facilities Services' },
          { key: 'AH', value: 'Farming', label: 'Farming' },
          { key: 'AI', value: 'Film Production', label: 'Film Production' },
          { key: 'AJ', value: 'Finance - Banking', label: 'Finance - Banking' },
          { key: 'AK', value: 'Fine Art', label: 'Fine Art' },
          { key: 'AL', value: 'Fishery', label: 'Fishery' },
          { key: 'AM', value: 'Food and Beverage Retail', label: 'Food and Beverage Retail' },
          { key: 'AN', value: 'Food Production', label: 'Food Production' },
          { key: 'AO', value: 'Furniture', label: 'Furniture' },
          { key: 'AP', value: 'Gambling & Casinos', label: 'Gambling & Casinos' },
          { key: 'AQ', value: 'Glass', label: 'Glass' },
          { key: 'AR', value: 'Government Administration', label: 'Government Administration' },
          { key: 'AS', value: 'Government Relations', label: 'Government Relations' },
          { key: 'AT', value: 'Graphic Design', label: 'Graphic Design' },
          { key: 'AU', value: 'Healthcare', label: 'Healthcare' },
          { key: 'AV', value: 'Hospitality', label: 'Hospitality' },
          { key: 'AW', value: 'Human Resources', label: 'Human Resources' },
          { key: 'AX', value: 'Import & Export', label: 'Import & Export' },
          { key: 'AY', value: 'Industrial Automation', label: 'Industrial Automation' },
          { key: 'AZ', value: 'Information Technology & Services', label: 'Information Technology & Services' },
          { key: 'BA', value: 'Insurance', label: 'Insurance' },
          { key: 'BB', value: 'Investment Banking', label: 'Investment Banking' },
          { key: 'BC', value: 'Investment Management', label: 'Investment Management' },
          { key: 'BD', value: 'Judiciary', label: 'Judiciary' },
          { key: 'BE', value: 'Law Practice', label: 'Law Practice' },
          { key: 'BF', value: 'Legal Services', label: 'Legal Services' },
          { key: 'BG', value: 'Leisure', label: 'Leisure' },
          { key: 'BH', value: 'Libraries', label: 'Libraries' },
          { key: 'BI', value: 'Logistics', label: 'Logistics' },
          { key: 'BJ', value: 'Luxury Goods & Jewelry', label: 'Luxury Goods & Jewelry' },
          { key: 'BK', value: 'Machinery', label: 'Machinery' },
          { key: 'BL', value: 'Management Consulting', label: 'Management Consulting' },
          { key: 'BM', value: 'Manufacturing', label: 'Manufacturing' },
          { key: 'BN', value: 'Marine Transport', label: 'Marine Transport' },
          { key: 'BO', value: 'Maritime', label: 'Maritime' },
          { key: 'BP', value: 'Media Production', label: 'Media Production' },
          { key: 'BQ', value: 'Mechanical or Industrial Engineering', label: 'Mechanical or Industrial Engineering' },
          { key: 'BR', value: 'Mental Healthcare', label: 'Mental Healthcare' },
          { key: 'BS', value: 'Mining & Metals', label: 'Mining & Metals' },
          { key: 'BT', value: 'Mobile Games', label: 'Mobile Games' },
          { key: 'BU', value: 'Motion Pictures & Film', label: 'Motion Pictures & Film' },
          { key: 'BV', value: 'Museums & Institutions', label: 'Museums & Institutions' },
          { key: 'BW', value: 'Music', label: 'Music' },
          { key: 'BX', value: 'Newspapers', label: 'Newspapers' },
          { key: 'BY', value: 'Non-Profit Organization Management', label: 'Non-Profit Organization Management' },
          { key: 'BZ', value: 'Online Media', label: 'Online Media' },
          { key: 'CA', value: 'Outsourcing/Offshoring', label: 'Outsourcing/Offshoring' },
          { key: 'CB', value: 'Packaging & Containers', label: 'Packaging & Containers' },
          { key: 'CC', value: 'Paper & Forest Products', label: 'Paper & Forest Products' },
          { key: 'CD', value: 'Performing Arts', label: 'Performing Arts' },
          { key: 'CE', value: 'Philanthropy', label: 'Philanthropy' },
          { key: 'CF', value: 'Photography', label: 'Photography' },
          { key: 'CG', value: 'Plastics', label: 'Plastics' },
          { key: 'CH', value: 'Political Organization', label: 'Political Organization' },
          { key: 'CI', value: 'Printing', label: 'Printing' },
          { key: 'CJ', value: 'Professional Training & Coaching', label: 'Professional Training & Coaching' },
          { key: 'CK', value: 'Program Development', label: 'Program Development' },
          { key: 'CL', value: 'Public Policy', label: 'Public Policy' },
          { key: 'CM', value: 'Public Relations & Communications', label: 'Public Relations & Communications' },
          { key: 'CN', value: 'Publishing', label: 'Publishing' },
          { key: 'CO', value: 'Railroad Manufacture', label: 'Railroad Manufacture' },
          { key: 'CP', value: 'Ranching', label: 'Ranching' },
          { key: 'CQ', value: 'Recreational Facilities & Services', label: 'Recreational Facilities & Services' },
          { key: 'CR', value: 'Religious Institutions', label: 'Religious Institutions' },
          { key: 'CS', value: 'Research Services', label: 'Research Services' },
          { key: 'CT', value: 'Restaurants', label: 'Restaurants' },
          { key: 'CU', value: 'Retail', label: 'Retail' },
          { key: 'CV', value: 'Security & Investigations', label: 'Security & Investigations' },
          { key: 'CW', value: 'Semiconductors', label: 'Semiconductors' },
          { key: 'CX', value: 'Shipbuilding', label: 'Shipbuilding' },
          { key: 'CY', value: 'Smart Cities/Urban Tech', label: 'Smart Cities/Urban Tech' },
          { key: 'CZ', value: 'Sports', label: 'Sports' },
          { key: 'DA', value: 'Staffing & Recruiting', label: 'Staffing & Recruiting' },
          { key: 'DB', value: 'Supermarkets', label: 'Supermarkets' },
          { key: 'DC', value: 'Telecommunications', label: 'Telecommunications' },
          { key: 'DD', value: 'Textiles', label: 'Textiles' },
          { key: 'DE', value: 'Think Tanks', label: 'Think Tanks' },
          { key: 'DF', value: 'Tobacco', label: 'Tobacco' },
          { key: 'DG', value: 'Translation & Localization', label: 'Translation & Localization' },
          { key: 'DH', value: 'Transportation/Trucking/Railroad', label: 'Transportation/Trucking/Railroad' },
          { key: 'DI', value: 'Utilities', label: 'Utilities' },
          { key: 'DJ', value: 'Venture Capital & Private Equity', label: 'Venture Capital & Private Equity' },
          { key: 'DK', value: 'Veterinary', label: 'Veterinary' },
          { key: 'DL', value: 'Warehousing', label: 'Warehousing' },
          { key: 'DM', value: 'Wholesale', label: 'Wholesale' },
          { key: 'DN', value: 'Wine and Spirits', label: 'Wine and Spirits' },
          { key: 'DO', value: 'Wireless', label: 'Wireless' },
          { key: 'DP', value: 'Writing & Editing', label: 'Writing & Editing' }
        ],

                industryOptions: [
          { key: 'A', value: '3D printing', label: '3D printing' },
          { key: 'B', value: 'AdTech', label: 'AdTech' },
          { key: 'C', value: 'Agtech', label: 'Agtech' },
          { key: 'D', value: 'Advertising / Marketing', label: 'Advertising / Marketing' },
          { key: 'E', value: 'Audiotech', label: 'Audiotech' },
          { key: 'F', value: 'Autonomous cars', label: 'Autonomous cars' },
          { key: 'G', value: 'AI / ML', label: 'AI / ML' },
          { key: 'H', value: 'Augmented reality (AR)', label: 'Augmented reality (AR)' },
          { key: 'I', value: 'Beauty / Fashion Products', label: 'Beauty / Fashion Products' },
          { key: 'J', value: 'B2B Marketplace', label: 'B2B Marketplace' },
          { key: 'K', value: 'B2B SaaS', label: 'B2B SaaS' },
          { key: 'L', value: 'B2B payments', label: 'B2B payments' },
          { key: 'M', value: 'Biotech', label: 'Biotech' },
          { key: 'N', value: 'Big Data', label: 'Big Data' },
          { key: 'O', value: 'Blockchain / Crypto / NFT / Web3', label: 'Blockchain / Crypto / NFT / Web3' },
          { key: 'P', value: 'Cannabis', label: 'Cannabis' },
          { key: 'Q', value: 'Carsharing', label: 'Carsharing' },
          { key: 'R', value: 'Cleantech / Climate / Sustainability', label: 'Cleantech / Climate / Sustainability' },
          { key: 'S', value: 'Cloudtech and DevOps', label: 'Cloudtech and DevOps' },
          { key: 'T', value: 'Communications / Collaboration / Productivity', label: 'Communications / Collaboration / Productivity' },
          { key: 'U', value: 'Consumer', label: 'Consumer' },
          { key: 'V', value: 'Consumer Goods', label: 'Consumer Goods' },
          { key: 'W', value: 'Consumer Tech', label: 'Consumer Tech' },
          { key: 'X', value: 'Construction / Materials', label: 'Construction / Materials' },
          { key: 'Y', value: 'Cyber Security', label: 'Cyber Security' },
          { key: 'Z', value: 'Data / Analytics', label: 'Data / Analytics' },
          { key: 'AA', value: 'Developer Tools', label: 'Developer Tools' },
          { key: 'AB', value: 'Digital health', label: 'Digital health' },
          { key: 'AC', value: 'Ecommerce Enablement', label: 'Ecommerce Enablement' },
          { key: 'AD', value: 'eCommerce', label: 'eCommerce' },
          { key: 'AE', value: 'Education / Personal and professional development', label: 'Education / Personal and professional development' },
          { key: 'AF', value: 'Electronics / IOT', label: 'Electronics / IOT' },
          { key: 'AG', value: 'Enterprise', label: 'Enterprise' },
          { key: 'AH', value: 'Femtech', label: 'Femtech' },
          { key: 'AI', value: 'Future of Work', label: 'Future of Work' },
          { key: 'AJ', value: 'Family / Parenting / Relationships / ElderTech', label: 'Family / Parenting / Relationships / ElderTech' },
          { key: 'AK', value: 'Finance - banking / payments / lending', label: 'Finance - banking / payments / lending' },
          { key: 'AL', value: 'Finance - Insurance', label: 'Finance - Insurance' },
          { key: 'AM', value: 'Finance - Other', label: 'Finance - Other' },
          { key: 'AN', value: 'FinTech', label: 'FinTech' },
          { key: 'AO', value: 'Food / Beverages / agriculture', label: 'Food / Beverages / agriculture' },
          { key: 'AP', value: 'Gaming', label: 'Gaming' },
          { key: 'AQ', value: 'General / Industry agnostic', label: 'General / Industry agnostic' },
          { key: 'AR', value: 'GovTech', label: 'GovTech' },
          { key: 'AS', value: 'Hardware', label: 'Hardware' },
          { key: 'AT', value: 'Health / Fitness / Wellness', label: 'Health / Fitness / Wellness' },
          { key: 'AU', value: 'Healthcare', label: 'Healthcare' },
          { key: 'AV', value: 'HR / hiring / employment', label: 'HR / hiring / employment' },
          { key: 'AW', value: 'Impact investing', label: 'Impact investing' },
          { key: 'AX', value: 'Industrials', label: 'Industrials' },
          { key: 'AY', value: 'Legal / government / regulation', label: 'Legal / government / regulation' },
          { key: 'AZ', value: 'Longevity', label: 'Longevity' },
          { key: 'BA', value: 'Lifestyles of Health and Sustainability (LOHAS) and wellness', label: 'Lifestyles of Health and Sustainability (LOHAS) and wellness' },
          { key: 'BB', value: 'Manufacturing', label: 'Manufacturing' },
          { key: 'BC', value: 'MarTech', label: 'MarTech' },
          { key: 'BD', value: 'Medical devices', label: 'Medical devices' },
          { key: 'BE', value: 'Mobility / Transportation', label: 'Mobility / Transportation' },
          { key: 'BF', value: 'Micro-mobility', label: 'Micro-mobility' },
          { key: 'BG', value: 'Mobility tech', label: 'Mobility tech' },
          { key: 'BH', value: 'Mobile', label: 'Mobile' },
          { key: 'BI', value: 'Mortgage tech', label: 'Mortgage tech' },
          { key: 'BJ', value: 'Nanotechnology', label: 'Nanotechnology' },
          { key: 'BK', value: 'Oil and gas', label: 'Oil and gas' },
          { key: 'BL', value: 'Personal and Professional Services', label: 'Personal and Professional Services' },
          { key: 'BM', value: 'Pets / animals', label: 'Pets / animals' },
          { key: 'BN', value: 'Physical infrastructure / Utilities', label: 'Physical infrastructure / Utilities' },
          { key: 'BO', value: 'Real Estate / Housing', label: 'Real Estate / Housing' },
          { key: 'BP', value: 'Robotics / drones', label: 'Robotics / drones' },
          { key: 'BQ', value: 'Restaurant tech', label: 'Restaurant tech' },
          { key: 'BR', value: 'SaaS', label: 'SaaS' },
          { key: 'BS', value: 'Sales / Operations / Customer Service', label: 'Sales / Operations / Customer Service' },
          { key: 'BT', value: 'Science / deep tech', label: 'Science / deep tech' },
          { key: 'BU', value: 'SMB SaaS', label: 'SMB SaaS' },
          { key: 'BV', value: 'Social Media / Community / Networking', label: 'Social Media / Community / Networking' },
          { key: 'BW', value: 'Space Tech', label: 'Space Tech' },
          { key: 'BX', value: 'Supply Chain: Logistics / Shipping / Delivery', label: 'Supply Chain: Logistics / Shipping / Delivery' },
          { key: 'BY', value: 'Travel / Hospitality', label: 'Travel / Hospitality' },
          { key: 'BZ', value: 'Vertical Saas', label: 'Vertical Saas' },
          { key: 'CA', value: 'Virtual reality (VR)', label: 'Virtual reality (VR)' },
          { key: 'CB', value: 'Wearables and quantified self', label: 'Wearables and quantified self' },
          { key: 'CC', value: 'Other', label: 'Other' }
        ],
        locations: [
        { key: 'A', label: 'San Francisco / Bay Area', value: 'San Francisco / Bay Area' },
        { key: 'B', label: 'New York', value: 'New York' },
        { key: 'C', label: 'Boston', value: 'Boston' },
        { key: 'D', label: 'Toronto', value: 'Toronto' },
        { key: 'E', label: 'Montreal', value: 'Montreal' },
        { key: 'F', label: 'Los Angeles', value: 'Los Angeles' },
        { key: 'G', label: 'Austin', value: 'Austin' },
        { key: 'H', label: 'Denver', value: 'Denver' },
        { key: 'I', label: 'Utah', value: 'Utah' },
        { key: 'J', label: 'Chicago', value: 'Chicago' },
        { key: 'K', label: 'Seattle', value: 'Seattle' },
        { key: 'L', label: 'Atlanta', value: 'Atlanta' },
        { key: 'M', label: 'Philadelphia', value: 'Philadelphia' },
        { key: 'N', label: 'US - Other', value: 'US - Other' },
        { key: 'O', label: 'Canada - Other', value: 'Canada - Other' },
        { key: 'P', label: 'Latin America', value: 'Latin America' },
        { key: 'Q', label: 'Europe', value: 'Europe' },
        { key: 'R', label: 'Asia - India', value: 'Asia - India' },
        { key: 'S', label: 'Asia - Other', value: 'Asia - Other' },
        { key: 'T', label: 'Africa', value: 'Africa' },
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
        { key: 'A', value: 'Affiliate', label: 'Affiliate' },
        { key: 'B', value: 'Community Engagement & Referrals', label: 'Community Engagement & Referrals' },
        { key: 'C', value: 'Content Marketing', label: 'Content Marketing' },
        { key: 'D', value: 'Direct Sales', label: 'Direct Sales' },
        { key: 'E', value: 'Events', label: 'Events' },
        { key: 'F', value: 'Paid Advertisement', label: 'Paid Advertisement' },
        { key: 'G', value: 'Partnerships', label: 'Partnerships' },
        { key: 'H', value: 'SEO', label: 'SEO' },
        { key: 'I', value: 'Social Media', label: 'Social Media' },
        { key: 'J', value: 'Other', label: 'Other' }
      ],
      productOptions: [
        { key: 'A', value: 'Software - Service (SaaS)', label: 'Software - Service (SaaS)' },
        { key: 'B', value: 'Software - Marketplace / Network', label: 'Software - Marketplace / Network' },
        { key: 'C', value: 'Software - AI/ML', label: 'Software - AI/ML' },
        { key: 'D', value: 'Software - Dev Tools', label: 'Software - Dev Tools' },
        { key: 'E', value: 'Software - Infrastructure (API, cloud, etc.)', label: 'Software - Infrastructure (API, cloud, etc.)' },
        { key: 'F', value: 'Software - Other', label: 'Software - Other' },
        { key: 'G', value: 'Hardware', label: 'Hardware' },
        { key: 'H', value: 'Physical Goods', label: 'Physical Goods' },
        { key: 'I', value: 'Services', label: 'Services' },
        { key: 'J', value: 'Digital Goods / Content', label: 'Digital Goods / Content' },
        { key: 'K', value: 'Experiences', label: 'Experiences' },
        { key: 'L', value: 'Software - AI/ML, Hardware', label: 'Software - AI/ML, Hardware' },
        { key: 'M', value: 'Software - AI/ML, Software - Infrastructure (API, cloud, etc.)', label: 'Software - AI/ML, Software - Infrastructure (API, cloud, etc.)' },
        { key: 'N', value: 'Software - Marketplace / Network, Software - Service (SaaS)', label: 'Software - Marketplace / Network, Software - Service (SaaS)' },
        { key: 'O', value: 'Physical Goods, Digital Goods / Content', label: 'Physical Goods, Digital Goods / Content' },
        { key: 'P', value: 'Software - Infrastructure (API, cloud, etc.), Software - Marketplace / Network', label: 'Software - Infrastructure (API, cloud, etc.), Software - Marketplace / Network' },
        { key: 'Q', value: 'Software - Marketplace / Network, Digital Goods / Content', label: 'Software - Marketplace / Network, Digital Goods / Content' },
        { key: 'R', value: 'Software - Marketplace / Network, Services', label: 'Software - Marketplace / Network, Services' },
        { key: 'S', value: 'Software - Marketplace / Network, Software - Service (SaaS), Software - Dev Tools', label: 'Software - Marketplace / Network, Software - Service (SaaS), Software - Dev Tools' },
        { key: 'T', value: 'Software - Service (SaaS), Software - Infrastructure (API, cloud, etc.), Hardware', label: 'Software - Service (SaaS), Software - Infrastructure (API, cloud, etc.), Hardware' },
        { key: 'U', value: 'Services, Physical Goods, Experiences, Digital Goods / Content', label: 'Services, Physical Goods, Experiences, Digital Goods / Content' },
        { key: 'V', value: 'Software - Service (SaaS), Software - Marketplace / Network, Software - AI/ML', label: 'Software - Service (SaaS), Software - Marketplace / Network, Software - AI/ML' },
        { key: 'W', value: 'Software - Other, Services', label: 'Software - Other, Services' },
        { key: 'X', value: 'Services, Other, Software - Infrastructure (API, cloud, etc.)', label: 'Services, Other, Software - Infrastructure (API, cloud, etc.)' },
        { key: 'Y', value: 'Experiences, Software - Marketplace / Network', label: 'Experiences, Software - Marketplace / Network' },
        { key: 'Z', value: 'Other, Software - Service (SaaS)', label: 'Other, Software - Service (SaaS)' },
        { key: 'AA', value: 'Other', label: 'Other' }
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
        other_customers_based: '',
        specific_location: '',
        other_specific_location: '',
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
        company_linkedin: '',
        ceo_linkedin: '',
        founder2_linkedin: '',
        founder3_linkedin: '',
        cto_linkedin: '',
        linkedin_profiles: '',
        founder_video_url: '',
        founder_video_file: null,
        vision: '',
        pitching_live: '',
        share_submission: '',
        investors_participating: '',
        want_us_to_know: '',
        value_of_team: '',
      },
      successMessage: '',
      errorMessage: ''
    };
  },
  methods: {
    handleCustomersBasedChange() {
    // Если значение 'Other' не выбрано, сбрасываем значение поля other_customers_based
    if (this.formData.customers_based !== 'Other') {
      this.formData.other_customers_based = '';
    }
  },
    goToFirstStep() {
      this.currentStep = 1; // Переход к первому шагу
    },
    openModal(field) {
      this.currentField = field;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    checkOtherLocation() {
    if (!['US - Other', 'Canada - Other', 'Asia - Other'].includes(this.formData.specific_location)) {
      this.formData.other_location = '';
      }
    },
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
      if (this.currentStep < 53) {
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

        const response = await fetch('http://localhost/api/send-forms', {
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
    if (this.currentStep >= 40 && this.currentStep <= 53) {
      return '4 → Tell us more about you and your team';
    } else if (this.currentStep >= 31 && this.currentStep <= 38) {
      return '3 → Tell us more about your financing';
    } else if (this.currentStep >= 8 && this.currentStep <= 29) {
      return '2 → Tell us more about your company';
    } else if (this.currentStep >= 2 && this.currentStep <= 6) {
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

.choices {
  color: #ffffff;
  margin-bottom: 5px;
}

p {
  color: #e0e0e0;
  font-size: 1.2em; /* Увеличим размер шрифта для параграфов */
  margin-bottom: 20px;
  line-height: 1.5;
}

.input-field {
  width: 80%; /* Увеличим ширину полей ввода */
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

.nav-buttons-left {
  position: fixed;
  bottom: 20px;
  left: 20px; /* Исправлено с right на left */
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.nav-buttons-right {
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: row;
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
  margin-bottom: 35px;
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
  background-color: #ffffff; /* Цвет фона по умолчанию — белый */
  padding: 4px 8px;
  border: 2px solid transparent; /* Убираем рамку */
  cursor: pointer;
  position: relative;
  width: 100%;
  transition: background-color 0.3s, border-color 0.3s; /* Плавные переходы */
}

.custom-radio:hover {
  background-color: #808080; /* Цвет при наведении мыши */
  border-color: #000; /* Цвет рамки при наведении */
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
  background-color: #ffffff; /* Цвет фона по умолчанию — белый */
  padding: 4px 8px;
  border: 2px solid transparent; /* Убираем рамку */
  cursor: pointer;
  position: relative;
  width: 100%;
  transition: background-color 0.3s, border-color 0.3s; /* Плавные переходы */
}

.custom-checkbox input[type="checkbox"] {
  display: none;
}

.custom-checkbox input[type="checkbox"]:checked + .checkbox-button {
  background-color: #808080; /* Цвет фона при выборе */
  color: #ffffff; /* Цвет текста при выборе */
}

.custom-checkbox input[type="checkbox"]:checked + .checkbox-button .checkbox-key {
  background-color: #000000; /* Темный фон ключа */
  color: #ffffff; /* Белый текст для ключа */
}

.checkbox-button {
  display: flex;
  align-items: center;
  justify-content: flex-start; /* Выравниваем содержимое по левому краю */
  font-size: 16px;
  font-weight: 500;
  position: relative;
  width: 100%;
  gap: 10px; /* Добавим отступ между ключом и текстом */
}

.custom-checkbox input[type="checkbox"]:checked + .checkbox-button .checkmark {
  display: inline; /* Показываем галочку */
  color: #ffffff; /* Белая галочка */
  margin-left: auto;
}

.custom-checkbox:hover {
  background-color: #808080; /* Цвет при наведении мыши */
  border-color: #000; /* Цвет рамки при наведении */
}

.custom-checkbox:hover .checkbox-button {
  color: #000000;
}

.checkbox-key {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  background-color: #fff; /* Цвет фона буквы */
  margin-right: 10px;
  font-weight: bold;
  font-size: 12px;
  color: #000;
}

.custom-checkbox:hover .checkbox-key {
  background-color: #ffffff;
}

.radio-key {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  background-color: #fff; /* Белый цвет ключа по умолчанию */
  margin-right: 10px;
  font-weight: bold;
  font-size: 12px;
  color: #000;
}

.custom-radio input[type="radio"]:checked + .radio-button {
  background-color: #808080; /* Серый цвет при выборе */
  border-color: transparent !important; /* Убираем рамку при выборе */
  color: #ffffff; /* Белый текст при выборе */
}

.custom-radio input[type="radio"]:checked + .radio-button .radio-key {
  background-color: #000000; /* Темный фон ключа */
  color: #ffffff; /* Белый текст для ключа */
}

.custom-radio input[type="radio"]:checked + .radio-button .checkmark {
  display: inline; /* Показываем галочку */
  color: #ffffff; /* Белая галочка */
  margin-left: auto;
}

.checkmark {
  display: none;
  margin-left: auto;
  color: #000;
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

.button-left-container {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 10px; /* Добавляет немного отступа снизу */
}

.button-left-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10px; /* Добавляем немного отступа сверху */
  margin-bottom: 10px; /* Добавляем немного отступа снизу */
}

.button-scroll {
  color: var(--dl-color-gray-black);
  cursor: pointer;
  display: inline-block;
  padding: 0.5rem 1rem;
  font-size: 18px;
  box-shadow: 5px 6px 0px 0px #000000;
  font-style: normal;
  transition: 0.3s;
  font-weight: 500;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  border-radius: 0px;
  background-color: #ff538c;
  margin-left: 0; /* Перемещаем кнопку в левую часть */
  outline: none; /* Убираем стандартное выделение */
}

.button-scroll:active,
.button-scroll:focus {
  outline: none; /* Убираем стандартное выделение */
  border-color: var(--dl-color-gray-black); /* Убираем изменение цвета рамки */
}

.button-scroll:hover {
  opacity: 0.5;
}

.file-upload-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 10px;
}

.custom-file-upload {
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  color: #e04d80;
  box-shadow: 5px 6px 0px 0px #000000;
  background-color: #ffffff;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.custom-file-upload:hover {
  background-color: #b1b1b1;
}

.custom-file-upload input[type="file"] {
  display: none;
}

.file-name {
  margin-top: 10px;
  font-size: 14px;
  color: #ffffff;
}

/* Медиазапросы для адаптации под мобильные устройства */

/* Стили для устройств с разрешением до 1024px */
@media (max-width: 1024px) {

.header-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h2 {
  font-size: 2.2em;
  text-align: center;
}

h3 {
  font-size: 1.7em;
  text-align: center;
}

.step-indicator {
  display: none;
}

p {
  font-size: 1.2em;
  text-align: center;
}

.fixed-title {
    font-size: 1.4em; /* Уменьшаем размер шрифта */
    padding: 5px 10px; /* Уменьшаем отступы */
  }


.file-upload-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  text-align: center;
}

.choices {
  margin-top: 20px;
  text-align: center;
}

.input-field {
  width: 65%; 
  font-size: 1.3em;
  margin: 20px auto 0;
  display: block;
  text-align: left;
}

.button-container {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 1.5vh;
  text-align: center;
}

.nav-button {
  font-size: 18px;
  padding: 0.5rem 1rem;
}

ul {
  font-size: 1.2em;
  margin-bottom: 30px;
  text-align: center;
}

.home-logo {
  font-size: 45px;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
}

.button-left-container {
  max-width: 75%; 
  margin: 0 auto; /* Центрируем контейнер по горизонтали */
  text-align: center; /* Центрируем текст внутри контейнера */
  display: flex; /* Используем Flexbox для центрирования */
  justify-content: center; /* Центрируем элементы внутри контейнера по горизонтали */
  align-items: center; /* Центрируем элементы внутри контейнера по вертикали */
  flex-direction: column; /* Обеспечиваем, чтобы элементы внутри контейнера располагались вертикально */
}

.custom-file-upload {
  padding: 10px 20px;
  font-size: 16px;
}

.file-name {
  font-size: 14px;
}

.radio-group,
.checkbox-group {
  max-width: 75%;
  max-height: none;
  margin: 30px auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.scrollable-content {
  max-height: 40vh; 
  overflow-y: auto;
  margin-top: 10px;
}
}

@media (max-width: 768px) {

.header-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h2 {
  font-size: 2em;
  text-align: center;
}

h3 {
  font-size: 1.5em;
  text-align: center;
}

.step-indicator {
  display: none;
}

p {
  font-size: 1.1em;
  text-align: center;
}

.fixed-title {
    font-size: 1.3em; /* Уменьшаем размер шрифта */
    padding: 5px 10px; /* Уменьшаем отступы */
  }


.file-upload-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  text-align: center;
}

.choices {
  margin-top: 20px;
  text-align: center;
}

.input-field {
  width: 70%; 
  font-size: 1.2em;
  margin: 20px auto 0;
  display: block;
  text-align: left;
}

.button-container {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 1.5vh;
  text-align: center;
}

.nav-button {
  font-size: 16px;
  padding: 0.4rem 0.8rem;
}

ul {
  font-size: 1.1em;
  margin-bottom: 25px;
  text-align: center;
}

.home-logo {
  font-size: 40px;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
}

.button-left-container {
  max-width: 75%; 
  margin: 0 auto; /* Центрируем контейнер по горизонтали */
  text-align: center; /* Центрируем текст внутри контейнера */
  display: flex; /* Используем Flexbox для центрирования */
  justify-content: center; /* Центрируем элементы внутри контейнера по горизонтали */
  align-items: center; /* Центрируем элементы внутри контейнера по вертикали */
  flex-direction: column; /* Обеспечиваем, чтобы элементы внутри контейнера располагались вертикально */
}

.custom-file-upload {
  padding: 8px 16px;
  font-size: 14px;
}

.file-name {
  font-size: 12px;
}

.radio-group,
.checkbox-group {
  max-width: 75%;
  max-height: none;
  margin: 25px auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.scrollable-content {
  max-height: 35vh; 
  overflow-y: auto;
  margin-top: 10px;
}
}


@media (max-width: 480px) {
  
  .header-container {
  display: flex;
  flex-direction: column;
  align-items: center; /* Выравниваем содержимое по центру */
}

  h2 {
    font-size: 1.8em;
    text-align: center;
  }

  h3 {
    font-size: 1.2em;
    text-align: center;
  }

  .step-indicator {
    display: none;
  }

  p {
    font-size: 0.9em;
    text-align: center;
  }

  .fixed-title {
    font-size: 1.2em; /* Уменьшаем размер шрифта */
    padding: 5px 10px; /* Уменьшаем отступы */
  }


  .file-upload-container {
  display: flex;
  flex-direction: column;
  align-items: center; /* Центрируем элементы по горизонтали */
  justify-content: center; /* Центрируем элементы по вертикали, если необходимо */
  margin-top: 10px;
  text-align: center; /* Центрируем текст внутри контейнера */
}

  .choices {
    margin-top: 20px;
    text-align: center;
  }

  .input-field {
    width: 75%; /* Ограничиваем ширину до 75% */
    font-size: 1em;
    margin: 20px auto 0;
    display: block; /* Позволяет полю быть центровкой */
    text-align: left; /* Текст внутри поля начинается с левой стороны */
}

.button-container {
    display: flex; /* Включаем Flexbox */
    justify-content: center; /* Выровнять элементы по горизонтали по центру */
    gap: 10px;
    margin-top: 1.5vh;
    text-align: center; /* Это сохранит текст выравненным по центру */
}


  .nav-button {
    font-size: 14px;
    padding: 0.3rem 0.6rem;
  }

  ul {
    font-size: 1em;
    margin-bottom: 20px;
    text-align: center;
  }

  .home-logo {
    font-size: 35px;
    top: 40px;
    left: 50%; /* Сместить логотип на середину экрана */
    transform: translateX(-50%); /* Смещение на половину ширины логотипа, чтобы он был по центру */
    position: absolute; /* Убедитесь, что логотип всё ещё в абсолютном позиционировании */
}

.button-left-container {
    max-width: 75%; /* Ограничиваем максимальную ширину до 75% только на телефонах */
    margin: 0 auto; /* Центрируем контейнер по горизонтали */
    text-align: center; /* Центрируем текст внутри контейнера */
}

  .custom-file-upload {
    padding: 6px 12px;
    font-size: 12px;
  }

  .file-name {
    font-size: 10px;
  }

  .radio-group,
  .checkbox-group {
    max-width: 75%;
    max-height: none;
    margin: 20px auto 0; /* Центрирование по горизонтали */
    display: flex;
    flex-direction: column;
    align-items: center; /* Выровнять элементы внутри групп по центру */
}

.scrollable-content {
  max-height: 30vh; /* Ограничиваем высоту контейнера */
  overflow-y: auto; /* Добавляем вертикальную прокрутку */
  margin-top: 10px; /* Отступ сверху, чтобы отделить от остальных элементов */
}
}
</style>
