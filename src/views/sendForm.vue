<template>
  <div class="outer-container">
    <transition name="fade" mode="out-in">
      <div v-if="titleText" key="titleText" class="fixed-title">{{ titleText }}</div>
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
      <transition name="fade" mode="out-in">
      <div v-if="titleText" key="titleText" class="fixed-title">{{ titleText }}</div>
    </transition>
        <div :key="currentStep">
      <div v-if="currentStep === 5">
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
    <div v-if="currentStep === 6">
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
      <div v-if="currentStep === 7">
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
      <div v-if="currentStep === 8">
        <div class="header-container">
          <p class="step-indicator">c.</p>
          <h2>In 2-3 sentences, what does your company do?*</h2>
        </div>
        <textarea class="input-field" placeholder="What does your company do?*" v-model="formData.company_description" required></textarea>
        <div class="button-container">
          <button class="button" @click="nextStep">Next</button>
          <p class="enter-text">press Enter ↵</p>
        </div>
      </div>
      <div v-if="currentStep === 9">
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
      <div v-if="currentStep === 10">
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
    <div v-if="currentStep === 11">
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
      <div v-if="currentStep === 12">
            <div class="header-container">
              <p class="step-indicator">e.</p>
              <h2>What industry is your company in?*</h2>
            </div>
            <select class="input-field" v-model="formData.industry" @change="checkIndustry" required>
              <option value="AdTech">AdTech</option>
              <option value="Advertising / Marketing">Advertising / Marketing</option>
              <option value="AI / ML">AI / ML</option>
              <option value="Metaverse - AR/VR/ Other">Metaverse - AR/VR/ Other</option>
              <option value="Beauty / Fashion Products">Beauty / Fashion Products</option>
              <option value="B2B Marketplace">B2B Marketplace</option>
              <option value="B2B SaaS">B2B SaaS</option>
              <option value="Biotech">Biotech</option>
              <option value="Blockchain / Crypto / NFT / Web3">Blockchain / Crypto / NFT / Web3</option>
              <option value="Cannabis">Cannabis</option>
              <option value="Cleantech / Climate / Sustainability">Cleantech / Climate / Sustainability</option>
              <option value="Cloud Infrastructure">Cloud Infrastructure</option>
              <option value="Communications / Collaboration / Productivity">Communications / Collaboration / Productivity</option>
              <option value="Consumer">Consumer</option>
              <option value="Consumer Goods">Consumer Goods</option>
              <option value="Consumer Tech">Consumer Tech</option>
              <option value="Construction / Materials">Construction / Materials</option>
              <option value="Cyber Security">Cyber Security</option>
              <option value="Data / Analytics">Data / Analytics</option>
              <option value="Developer Tools">Developer Tools</option>
              <option value="Digital Health">Digital Health</option>
              <option value="Ecommerce Enablement">Ecommerce Enablement</option>
              <option value="eCommerce">eCommerce</option>
              <option value="Education / Personal and professional development">Education / Personal and professional development</option>
              <option value="Electronics / IOT">Electronics / IOT</option>
              <option value="Enterprise">Enterprise</option>
              <option value="Family / Parenting / Relationships / ElderTech">Family / Parenting / Relationships / ElderTech</option>
              <option value="Finance - banking / payments / lending">Finance - banking / payments / lending</option>
              <option value="Finance - Insurance">Finance - Insurance</option>
              <option value="Finance - Other">Finance - Other</option>
              <option value="FinTech">FinTech</option>
              <option value="Food / Beverages / agriculture">Food / Beverages / agriculture</option>
              <option value="Gaming">Gaming</option>
              <option value="General / Industry agnostic">General / Industry agnostic</option>
              <option value="GovTech">GovTech</option>
              <option value="Hardware">Hardware</option>
              <option value="Health / Fitness / Wellness">Health / Fitness / Wellness</option>
              <option value="Healthcare">Healthcare</option>
              <option value="HR / hiring / employment">HR / hiring / employment</option>
              <option value="Legal / government / regulation">Legal / government / regulation</option>
              <option value="Longevity">Longevity</option>
              <option value="Manufacturing">Manufacturing</option>
              <option value="MarTech">MarTech</option>
              <option value="Medical devices">Medical devices</option>
              <option value="Metaverse - AR/VR/ Other">Metaverse - AR/VR/ Other</option>
              <option value="Mobility / Transportation">Mobility / Transportation</option>
              <option value="Personal and Professional Services">Personal and Professional Services</option>
              <option value="Pets / animals">Pets / animals</option>
              <option value="Physical infrastructure / Utilities">Physical infrastructure / Utilities</option>
              <option value="Real Estate / Housing">Real Estate / Housing</option>
              <option value="Robotics / drones">Robotics / drones</option>
              <option value="SaaS">SaaS</option>
              <option value="Sales / Operations / Customer Service">Sales / Operations / Customer Service</option>
              <option value="Science / deep tech">Science / deep tech</option>
              <option value="SMB SaaS">SMB SaaS</option>
              <option value="Social media / Networking">Social media / Networking</option>
              <option value="Space Tech">Space Tech</option>
              <option value="Supply Chain: Logistics / Shipping / Delivery">Supply Chain: Logistics / Shipping / Delivery</option>
              <option value="Travel / Hospitality">Travel / Hospitality</option>
              <option value="Vertical Saas">Vertical Saas</option>
              <option value="Other">Other</option>
            </select>
            <div v-if="formData.industry === 'FinTech'" class="input-field">
              <label for="fintechType">Please specify:</label>
              <select id="fintechType" v-model="formData.fintech_type">
                <option value="B2B FinTech">B2B FinTech</option>
                <option value="B2C FinTech">B2C FinTech</option>
              </select>
            </div>
            <div class="button-container">
              <button class="button" @click="nextStep">Next</button>
              <p class="enter-text">press Enter ↵</p>
            </div>
          </div>
          <div v-if="currentStep === 13">
        <div class="header-container">
          <p class="step-indicator">i.</p>
          <h2>What is the primary product your company is providing?*</h2>
        </div>
        <select class="input-field" v-model="formData.product" required>
            <option value="Software - Service (SaaS)">Software - Service (SaaS)</option>
            <option value="Software - Marketplace / Network">Software - Marketplace / Network</option>
            <option value="Software - AI/ML">Software - AI/ML</option>
            <option value="Software - Dev Tools">Software - Dev Tools</option>
            <option value="Software - Infrastructure (API, cloud, etc.)">Software - Infrastructure (API, cloud, etc.)</option>
            <option value="Software - Other">Software - Other</option>
            <option value="Hardware">Hardware</option>
            <option value="Physical Goods">Physical Goods</option>
            <option value="Services">Services</option>
            <option value="Digital Goods / Content">Digital Goods / Content</option>
            <option value="Experiences">Experiences</option>
            <option value="Other">Other</option>
            <option value="Software - AI/ML, Hardware">Software - AI/ML, Hardware</option>
            <option value="Software - AI/ML, Software - Infrastructure (API, cloud, etc.)">Software - AI/ML, Software - Infrastructure (API, cloud, etc.)</option>
            <option value="Software - Marketplace / Network, Software - Service (SaaS)">Software - Marketplace / Network, Software - Service (SaaS)</option>
            <option value="Physical Goods, Digital Goods / Content">Physical Goods, Digital Goods / Content</option>
            <option value="Software - Infrastructure (API, cloud, etc.), Software - Marketplace / Network">Software - Infrastructure (API, cloud, etc.), Software - Marketplace / Network</option>
            <option value="Software - Marketplace / Network, Digital Goods / Content">Software - Marketplace / Network, Digital Goods / Content</option>
            <option value="Software - Marketplace / Network, Services">Software - Marketplace / Network, Services</option>
            <option value="Software - Marketplace / Network, Software - Service (SaaS), Software - Dev Tools">Software - Marketplace / Network, Software - Service (SaaS), Software - Dev Tools</option>
            <option value="Software - Service (SaaS), Software - Infrastructure (API, cloud, etc.), Hardware">Software - Service (SaaS), Software - Infrastructure (API, cloud, etc.), Hardware</option>
            <option value="Services, Physical Goods, Experiences, Digital Goods / Content">Services, Physical Goods, Experiences, Digital Goods / Content</option>
            <option value="Software - Service (SaaS), Software - Marketplace / Network, Software - AI/ML">Software - Service (SaaS), Software - Marketplace / Network, Software - AI/ML</option>
            <option value="Software - Other, Services">Software - Other, Services</option>
            <option value="Services, Other, Software - Infrastructure (API, cloud, etc.)">Services, Other, Software - Infrastructure (API, cloud, etc.)</option>
            <option value="Experiences, Software - Marketplace / Network">Experiences, Software - Marketplace / Network</option>
            <option value="Other, Software - Service (SaaS)">Other, Software - Service (SaaS)</option>
        </select>
        <div class="button-container">
          <button class="button" @click="nextStep">Next</button>
          <p class="enter-text">press Enter ↵</p>
        </div>
      </div>
      <div v-if="currentStep === 14">
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
      <div v-if="currentStep === 15">
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
      <div v-if="currentStep === 16">
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
      <div v-if="currentStep === 17">
        <div class="header-container">
          <p class="step-indicator">i.</p>
          <h2>Where is your company headquartered?*</h2>
        </div>
        <select class="input-field" v-model="formData.headquartered" required>
          <option value="US">US</option>
          <option value="Canada">Canada</option>
          <option value="Mexico">Mexico</option>
          <option value="Asia - East">Asia - East</option>
          <option value="Asia - India / Pakistan">Asia - India / Pakistan</option>
          <option value="Asia - Southeast Asia">Asia - Southeast Asia</option>
          <option value="Europe">Europe</option>
          <option value="Latin America">Latin America</option>
          <option value="Middle East">Middle East</option>
          <option value="Africa">Africa</option>
          <option value="Other">Other</option>
        </select>
        <div class="button-container">
          <button class="button" @click="nextStep">Next</button>
          <p class="enter-text">press Enter ↵</p>
        </div>
      </div>
      <div v-if="currentStep === 18">
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
      <div v-if="currentStep === 19">
        <div class="header-container">
          <p class="step-indicator">k.</p>
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
      <transition name="fade" mode="out-in">
      <div v-if="titleText" key="titleText" class="fixed-title">{{ titleText }}</div>
    </transition>
        <div :key="currentStep">
      <div v-if="currentStep === 20">
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
      <div v-if="currentStep === 21">
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
      <div v-if="currentStep === 22">
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
      <div v-if="currentStep === 23">
        <div class="header-container">
          <p class="step-indicator">i.</p>
          <h2>Approximately how much revenue is your company earning per month (in USD)?*</h2>
        </div>
        <select class="input-field" v-model="formData.earning_amount" required>
          <option value="< 1000">< 1000</option>
          <option value="1000 - 9,999">1000 - 9,999</option>
          <option value="10,000 - 49,999">10,000 - 49,999</option>
          <option value="50k - 99k">50k - 99k</option>
          <option value="> 100k">> 100k</option>
          <option value="100-4,999">100 - 4,999</option>
          <option value="1-99">1 - 99</option>
          <option value="5,000-10,000">5,000 - 10,000</option>
        </select>
        <div class="button-container">
          <button class="button" @click="nextStep">Next</button>
          <p class="enter-text">press Enter ↵</p>
        </div>
      </div>
      <div v-if="currentStep === 24">
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
      <div v-if="currentStep === 25">
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
      <div v-if="currentStep === 26">
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
      <div v-if="currentStep === 27">
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
    <div v-if="currentStep === 28">
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
    <div v-if="currentStep === 29">
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
      <div v-if="currentStep === 30">
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
      <div v-if="currentStep === 31">
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
      <div v-if="currentStep === 32">
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
      <div v-if="currentStep === 33">
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
      <div v-if="currentStep === 34">
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
    <div v-if="currentStep === 35">
        <div class="header-container">
          <p class="step-indicator">h.</p>
          <h2>Vision</h2>
        </div>
        <input class="input-field" type="url" placeholder="Vision" v-model="formData.vision" />
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
        one_line_description: '',
        company_description: '',
        pitch_description: '',
        date_founded: '',
        product_status: '',
        industry: '',
        product: '',
        company_website: '',
        pitch_deck: '',
        pitch_deck_file: null,
        headquartered: '',
        specific_location: '',
        legal_structure: [],
        raising_round: '',
        beyond_series_a_round: '',
        earning_amount: '',
        raising_amount: '',
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
      if (this.currentStep < 35) {
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
  },
  computed: {
  titleText() {
    if (this.currentStep >= 28 && this.currentStep <= 35) {
      return '4 → Tell us more about you and your team';
    } else if (this.currentStep >= 21 && this.currentStep <= 26) {
      return '3 → Tell us more about your financing';
    } else if (this.currentStep >= 6 && this.currentStep <= 19) {
      return '2 → Tell us more about your company';
    } else if (this.currentStep >= 2 && this.currentStep <= 4) {
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
