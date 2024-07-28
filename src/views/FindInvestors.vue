<template>
  <div class="find-investors-container">
    <header class="home-header">
      <header data-thq="thq-navbar" class="home-navbar">
        <router-link to="/" class="home-logo">Yocto</router-link>
        <div data-thq="thq-navbar-nav" data-role="Nav" class="home-desktop-menu">
          <nav data-thq="thq-navbar-nav-links" data-role="Nav" class="home-nav">
            <router-link to="/" class="home-button button-clean button">Home</router-link>
            <button class="home-button2 button-clean button">About</button>
            <button class="home-button3 button-clean button">Pricing</button>
            <button class="home-button4 button-clean button">Blog</button>
            <router-link to="/find-investors" class="home-button5 button-clean button">Find Investors</router-link>
          </nav>
        </div>
        <div data-thq="thq-navbar-btn-group" class="home-btn-group">
          <div class="home-socials">
            <button class="social button">
              <img alt="image" src="/Icons/twitter.svg" class="home-image" />
            </button>
            <button class="social button">
              <img alt="image" src="/Icons/discord.svg" class="home-image01" />
            </button>
          </div>
          <button class="button">Get Investments Now</button>
        </div>
        <div data-thq="thq-burger-menu" class="home-burger-menu">
          <button class="button home-button5">
            <svg viewBox="0 0 1024 1024" class="home-icon">
              <path
                d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
              ></path>
            </svg>
          </button>
        </div>
        <div data-thq="thq-mobile-menu" class="home-mobile-menu">
          <div data-thq="thq-mobile-menu-nav" data-role="Nav" class="home-nav1">
            <div class="home-container1">
              <router-link to="/" class="home-logo1">Yocto</router-link>
              <div data-thq="thq-close-menu" class="home-menu-close">
                <svg viewBox="0 0 1024 1024" class="home-icon02">
                  <path
                    d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                  ></path>
                </svg>
              </div>
            </div>
            <nav
              data-thq="thq-mobile-menu-nav-links"
              data-role="Nav"
              class="home-nav2"
            >
              <router-link to="/" class="home-text">Home</router-link>
              <span class="home-text02">About</span>
              <span class="home-text03">Pricing</span>
              <span class="home-text04">Blog</span>
              <router-link to="/find-investors" class="home-text05">Find Investors</router-link>
            </nav>
            <div class="home-container2">
              <button class="home-login button">Login</button>
              <button class="button">Register</button>
            </div>
          </div>
          <div class="home-icon-group">
            <svg viewBox="0 0 950.8571428571428 1024" class="home-icon04">
              <path
                d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
              ></path></svg
            ><svg viewBox="0 0 877.7142857142857 1024" class="home-icon06">
              <path
                d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
              ></path></svg
            ><svg viewBox="0 0 602.2582857142856 1024" class="home-icon08">
              <path
                d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
              ></path>
            </svg>
          </div>
        </div>
      </header>
    </header>
    <div class="find-investors-main-content">
      <div class="find-investors-search-bar">
        <input v-model="searchQuery" placeholder="Enter investor name" @keyup.enter="searchInvestors" />
        <button @click="searchInvestors">Search</button>
      </div>
      <div class="find-investors-container-inner">
        <div class="find-investors-filter-group">
          <select v-model="selectedAuthor">
            <option disabled value="">Filter by Author</option>
            <option v-for="author in authors" :key="author">{{ author }}</option>
          </select>
          <select v-model="selectedCategory">
            <option disabled value="">Filter by Category</option>
            <option v-for="category in categories" :key="category">{{ category }}</option>
          </select>
        </div>
        <div class="find-investors-tags">
          <button v-for="tag in tags" :key="tag" @click="toggleTag(tag)" :class="{ active: selectedTags.includes(tag) }">
            {{ tag }}
          </button>
        </div>
        <div class="find-investors-nav-buttons">
          <button>Filter</button>
          <button>Filter</button>
          <button>Filter</button>
        </div>
      </div>
      <div class="find-investors-output">
        <div v-if="investor">
          <div class="find-investors-info">
            <pre>{{ investor }}</pre>
          </div>
        </div>
        <div class="searching" v-else-if="searching">
          <p>Searching...</p>
        </div>
        <div v-else-if="searchPerformed">
          <p>No investor information found.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {

  data() {
    return {
      searchQuery: '',
      selectedAuthor: '',
      selectedCategory: '',
      selectedTags: [],
      authors: ['Author 1', 'Author 2', 'Author 3'], // Replace with your data
      categories: ['Category 1', 'Category 2', 'Category 3'], // Replace with your data
      tags: ['Filter', 'Filter', 'Filter', 'Filter', 'Filter', 'Filter', 'Filter'],
      investor: '',
      searching: false,
      searchPerformed: false
    };
  },
  methods: {
    async searchInvestors() {
      this.searching = true;
      this.searchPerformed = true;
      this.investor = '';
      console.log('Searching for:', this.searchQuery);

      try {
        const response = await axios.get(`http://localhost:3001/investors?name=${this.searchQuery}`);
        console.log('Response data:', response.data);
        this.investor = JSON.stringify(response.data, null, 2); // Форматируем JSON для красивого отображения
        console.log('Investor:', this.investor);
      } catch (error) {
        console.error("There was an error fetching the investor info:", error);
      } finally {
        this.searching = false;
      }
    },
    toggleTag(tag) {
      const index = this.selectedTags.indexOf(tag);
      if (index > -1) {
        this.selectedTags.splice(index, 1);
      } else {
        this.selectedTags.push(tag);
      }
    }
  }
};
</script>

<style scoped>

.searching {
  color: white;
}

.find-investors-container {
  width: 100%;
  display: flex;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  background-color: #27272D;
}

.find-investors-main-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  margin-top: 20px;
}

.find-investors-search-bar {
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 15px;
}

.find-investors-search-bar input {
  flex: 1;
  padding: 10px;
  border: 1px solid #555;
  border-radius: 5px;
  background-color: #333;
  color: #fff;
}

.find-investors-search-bar button {
  margin-left: 10px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background: #007bff;
  color: #fff;
  cursor: pointer;
}

.find-investors-search-bar button:hover {
  background: #0056b3;
}

.find-investors-container-inner {
  width: 100%;
  background: #333;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}

.find-investors-filter-group {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}

.find-investors-filter-group select {
  width: 48%;
  padding: 10px;
  border: 1px solid #555;
  border-radius: 5px;
  background-color: #444;
  color: #fff;
}

.find-investors-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 15px;
}

.find-investors-tags button {
  padding: 8px 12px;
  border: 1px solid #555;
  border-radius: 5px;
  background: #444;
  color: #fff;
  cursor: pointer;
}

.find-investors-tags button.active {
  background: #007bff;
  color: #fff;
}

.find-investors-tags button:hover {
  background: #555;
}

.find-investors-nav-buttons {
  display: flex;
  justify-content: space-between;
}

.find-investors-nav-buttons button {
  flex: 1;
  margin: 0 5px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background: #007bff;
  color: #fff;
  cursor: pointer;
}

.find-investors-nav-buttons button:hover {
  background: #0056b3;
}

.find-investors-output {
  width: 100%;
  margin-top: 20px;
}

.find-investors-info {
  background: #444;
  border: 1px solid #555;
  border-radius: 5px;
  padding: 10px;
  max-height: 400px;
  overflow-y: auto;
  width: 100%;
}

.find-investors-info pre {
  white-space: pre-wrap;
  word-wrap: break-word;
  margin: 0;
  color: #fff;
}

@media (max-width: 991px) {
  .find-investors-main-content {
    width: 80%;
  }

  .find-investors-filter-group select {
    width: 100%;
    margin-bottom: 10px;
  }

  .find-investors-filter-group {
    flex-direction: column;
  }
}

@media (max-width: 767px) {
  .find-investors-main-content {
    width: 100%;
    padding: 0 10px;
  }

  .find-investors-search-bar input,
  .find-investors-search-bar button {
    width: 100%;
    margin-bottom: 10px;
  }

  .find-investors-search-bar {
    flex-direction: column;
  }

  .find-investors-filter-group select {
    width: 100%;
  }

  .find-investors-nav-buttons button {
    width: 100%;
    margin: 5px 0;
  }

  .find-investors-nav-buttons {
    flex-direction: column;
  }
}

.home-container {
  width: 100%;
  display: flex;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  background-color: #27272D;
}
.home-header {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.home-navbar {
  width: 100%;
  display: flex;
  position: relative;
  max-width: 1440px;
  align-items: center;
  padding-top: var(--dl-space-space-threeunits);
  padding-left: var(--dl-space-space-fiveunits);
  padding-right: var(--dl-space-space-fiveunits);
  padding-bottom: var(--dl-space-space-threeunits);
  justify-content: space-between;
}
.home-logo {
  color: rgb(255, 255, 255);
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
}
.home-desktop-menu {
  display: flex;
}
.home-nav {
  gap: var(--dl-space-space-twounits);
  flex: 0 0 auto;
  color: #ffffff;
  display: flex;
  align-items: center;
  flex-direction: row;
}
.home-button {
  color: rgb(255, 255, 255);
}
.home-button1 {
  color: rgb(255, 255, 255);
}
.home-button2 {
  color: rgb(255, 255, 255);
}
.home-button3 {
  color: rgb(255, 255, 255);
}
.home-button4 {
  color: rgb(255, 255, 255);
}

.home-button5 {
  color: rgb(255, 255, 255);
}
.home-btn-group {
  gap: var(--dl-space-space-fourunits);
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.home-socials {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.home-image {
  width: 100px;
  object-fit: cover;
}
.home-image01 {
  width: 100px;
  object-fit: cover;
}
.home-burger-menu {
  display: none;
  align-items: center;
  justify-content: center;
}
.home-icon {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.home-mobile-menu {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  display: flex;
  padding: 32px;
  z-index: 100;
  position: fixed;
  transform: translateX(100%);
  transition: 0.5s;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
}
.home-nav1 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.home-container1 {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  justify-content: space-between;
}
.home-logo1 {
  color: rgb(255, 255, 255);
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
}
.home-menu-close {
  display: flex;
  align-items: center;
  justify-content: center;
}
.home-icon02 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.home-nav2 {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.home-text {
  margin-bottom: var(--dl-space-space-unit);
}
.home-text01 {
  margin-bottom: var(--dl-space-space-unit);
}
.home-text02 {
  margin-bottom: var(--dl-space-space-unit);
}
.home-text03 {
  margin-bottom: var(--dl-space-space-unit);
}
.home-text04 {
  margin-bottom: var(--dl-space-space-unit);
}
.home-text05 {
  margin-bottom: var(--dl-space-space-unit);
}
.home-container2 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
}
.home-login {
  margin-right: var(--dl-space-space-twounits);
}
.home-icon-group {
  display: flex;
}
.home-icon04 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.home-icon06 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.home-icon08 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}


@media(max-width: 991px) {
  .home-desktop-menu {
    display: none;
  }
  .home-btn-group {
    display: none;
  }
  .home-burger-menu {
    display: flex;
  }
  .home-button5 {
    display: flex;
    padding: var(--dl-space-space-unit);
    flex-direction: row;
  }
  .home-logo1 {
    color: #000000;
  }
  .home-row {
    flex-direction: column;
  }
  .home-card {
    width: 100%;
  }
  .home-card01 {
    width: 100%;
  }
  .home-row1 {
    flex-direction: column;
  }
  .home-main3 {
    grid-template-columns: repeat(2, 1fr);
  }
  .home-project {
    padding-left: var(--dl-space-space-oneandhalfunits);
    padding-right: var(--dl-space-space-oneandhalfunits);
    padding-bottom: var(--dl-space-space-sixunits);
  }
  .home-understand {
    align-items: center;
    flex-direction: column;
  }
  .home-mining {
    flex-direction: column-reverse;
  }
  .home-heading09 {
    padding-left: var(--dl-space-space-oneandhalfunits);
    padding-right: var(--dl-space-space-oneandhalfunits);
  }
  .home-caption16 {
    text-align: center;
  }
  .home-get-yours {
    height: auto;
    align-items: center;
    flex-direction: column;
  }
  .home-row2 {
    gap: var(--dl-space-space-threeunits);
    width: 100%;
    height: 555px;
    align-items: center;
    justify-content: center;
  }
  .home-column {
    flex: 1;
    align-items: flex-start;
  }
  .home-card11 {
    width: 100%;
    aspect-ratio: 0.85;
    justify-content: center;
  }
  .home-column1 {
    flex: 1;
    align-items: flex-end;
  }
  .home-card12 {
    width: 100%;
    aspect-ratio: 0.85;
  }
  .home-column2 {
    width: 100%;
  }
}
@media(max-width: 767px) {
  .home-navbar {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .home-hero {
    padding-top: var(--dl-space-space-threeunits);
    padding-left: var(--dl-space-space-oneandhalfunits);
    padding-right: var(--dl-space-space-oneandhalfunits);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .home-heading {
    gap: var(--dl-space-space-unit);
  }
  .home-header01 {
    font-size: 36px;
    max-width: 70%;
    line-height: 43px;
  }
  .home-caption {
    font-size: 16px;
    line-height: 24px;
  }
  .home-description {
    gap: var(--dl-space-space-threeunits);
    padding-bottom: 0px;
  }
  .home-description01 {
    gap: var(--dl-space-space-threeunits);
    padding-left: var(--dl-space-space-oneandhalfunits);
    padding-right: var(--dl-space-space-oneandhalfunits);
  }
  .home-content {
    gap: var(--dl-space-space-unit);
  }
  .home-paragraph {
    font-size: 20px;
    line-height: 30px;
  }
  .home-paragraph1 {
    font-size: 20px;
    line-height: 30px;
  }
  .home-cards {
    padding-top: var(--dl-space-space-threeunits);
    padding-left: var(--dl-space-space-oneandhalfunits);
    padding-right: var(--dl-space-space-oneandhalfunits);
    padding-bottom: var(--dl-space-space-fourunits);
  }
  .home-card {
    gap: var(--dl-space-space-oneandhalfunits);
    padding-top: var(--dl-space-space-threeunits);
    padding-left: var(--dl-space-space-oneandhalfunits);
    padding-right: var(--dl-space-space-oneandhalfunits);
    padding-bottom: var(--dl-space-space-threeunits);
  }
  .home-main {
    gap: var(--dl-space-space-oneandhalfunits);
  }
  .home-header02 {
    font-size: 24px;
  }
  .home-description02 {
    font-size: 14px;
    line-height: 21px;
  }
  .home-card01 {
    gap: var(--dl-space-space-oneandhalfunits);
    padding-top: var(--dl-space-space-threeunits);
    padding-left: var(--dl-space-space-oneandhalfunits);
    padding-right: var(--dl-space-space-oneandhalfunits);
    padding-bottom: var(--dl-space-space-threeunits);
  }
  .home-main1 {
    gap: var(--dl-space-space-oneandhalfunits);
  }
  .home-header03 {
    font-size: 24px;
  }
  .home-description03 {
    font-size: 14px;
    line-height: 21px;
  }
  .home-card02 {
    gap: var(--dl-space-space-oneandhalfunits);
    padding-top: var(--dl-space-space-threeunits);
    padding-left: var(--dl-space-space-oneandhalfunits);
    padding-right: var(--dl-space-space-oneandhalfunits);
    padding-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .home-row1 {
    gap: var(--dl-space-space-twounits);
  }
  .home-main2 {
    gap: var(--dl-space-space-oneandhalfunits);
  }
  .home-header04 {
    font-size: 24px;
  }
  .home-description04 {
    font-size: 14px;
    line-height: 21px;
  }
  .home-collection {
    gap: var(--dl-space-space-fourunits);
    padding-left: var(--dl-space-space-oneandhalfunits);
    padding-right: var(--dl-space-space-oneandhalfunits);
  }
  .home-content04 {
    gap: var(--dl-space-space-oneandhalfunits);
  }
  .home-heading01 {
    gap: var(--dl-space-space-unit);
  }
  .home-header05 {
    font-size: 32px;
    letter-spacing: 0;
  }
  .home-header06 {
    font-size: 14px;
    line-height: 21px;
  }
  .home-image06 {
    padding-left: 0px;
    padding-right: 0px;
  }
  .home-image08 {
    padding-left: 0px;
    padding-right: 0px;
  }
  .home-image10 {
    padding-left: 0px;
    padding-right: 0px;
  }
  .home-image12 {
    padding-left: 0px;
    padding-right: 0px;
  }
  .home-image14 {
    padding-left: 0px;
    padding-right: 0px;
  }
  .home-image16 {
    padding-left: 0px;
    padding-right: 0px;
  }
  .home-image18 {
    padding-left: 0px;
    padding-right: 0px;
  }
  .home-image20 {
    padding-left: 0px;
    padding-right: 0px;
  }
  .home-view2 {
    display: none;
  }
  .home-project {
    gap: var(--dl-space-space-threeunits);
    padding-left: var(--dl-space-space-oneandhalfunits);
    padding-right: var(--dl-space-space-oneandhalfunits);
    padding-bottom: var(--dl-space-space-sixunits);
  }
  .home-understand {
    gap: var(--dl-space-space-oneandhalfunits);
  }
  .home-content13 {
    gap: var(--dl-space-space-oneandhalfunits);
  }
  .home-heading02 {
    gap: var(--dl-space-space-unit);
  }
  .home-header07 {
    font-size: 32px;
    letter-spacing: 0;
  }
  .home-header08 {
    font-size: 14px;
    line-height: 21px;
  }
  .home-view3 {
    margin-top: var(--dl-space-space-unit);
  }
  .home-image23 {
    width: 100%;
  }
  .home-mining {
    gap: var(--dl-space-space-fourunits);
  }
  .home-image24 {
    width: 100%;
  }
  .home-content14 {
    gap: var(--dl-space-space-oneandhalfunits);
  }
  .home-heading03 {
    gap: var(--dl-space-space-unit);
  }
  .home-header09 {
    font-size: 32px;
    letter-spacing: 0;
  }
  .home-header10 {
    font-size: 14px;
    line-height: 21px;
  }
  .home-view4 {
    margin-top: var(--dl-space-space-unit);
  }
  .home-roadmap {
    padding-left: var(--dl-space-space-oneandhalfunits);
    padding-right: var(--dl-space-space-oneandhalfunits);
    padding-bottom: var(--dl-space-space-fourunits);
  }
  .home-heading04 {
    gap: var(--dl-space-space-unit);
  }
  .home-header11 {
    font-size: 36px;
    line-height: 43px;
  }
  .home-header12 {
    width: 80%;
    font-size: 16px;
    line-height: 24px;
  }
  .home-list {
    gap: var(--dl-space-space-threeunits);
    padding-top: 0px;
    padding-left: var(--dl-space-space-unit);
    padding-bottom: 0px;
  }
  .home-heading05 {
    gap: var(--dl-space-space-unit);
  }
  .home-header13 {
    font-size: 32px;
  }
  .home-header14 {
    font-size: 14px;
    line-height: 21px;
  }
  .home-button6 {
    margin-top: 0px;
  }
  .home-heading06 {
    gap: var(--dl-space-space-unit);
  }
  .home-header15 {
    font-size: 32px;
  }
  .home-header16 {
    font-size: 14px;
    line-height: 21px;
  }
  .home-heading07 {
    gap: var(--dl-space-space-unit);
  }
  .home-header17 {
    font-size: 32px;
  }
  .home-header18 {
    font-size: 14px;
    line-height: 21px;
  }
  .home-heading08 {
    gap: var(--dl-space-space-oneandhalfunits);
  }
  .home-header19 {
    font-size: 32px;
  }
  .home-header20 {
    font-size: 14px;
    line-height: 21px;
  }
  .home-header21 {
    font-size: 14px;
    line-height: 21px;
  }
  .home-header22 {
    font-size: 14px;
    line-height: 21px;
  }
  .home-image28 {
    width: 17px;
  }
  .home-header23 {
    font-size: 14px;
    line-height: 21px;
  }
  .home-join-us {
    padding-left: var(--dl-space-space-oneandhalfunits);
    padding-right: var(--dl-space-space-oneandhalfunits);
    padding-bottom: var(--dl-space-space-fourunits);
  }
  .home-content15 {
    padding-top: var(--dl-space-space-threeunits);
  }
  .home-main4 {
    gap: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-oneandhalfunits);
    padding-right: var(--dl-space-space-oneandhalfunits);
  }
  .home-heading09 {
    gap: var(--dl-space-space-unit);
  }
  .home-header24 {
    font-size: 36px;
    line-height: 43px;
  }
  .home-caption16 {
    font-size: 16px;
    line-height: 24px;
  }
  .home-image29 {
    width: 150%;
  }
  .home-faq {
    gap: var(--dl-space-space-threeunits);
    padding-left: var(--dl-space-space-oneandhalfunits);
    padding-right: var(--dl-space-space-oneandhalfunits);
    padding-bottom: var(--dl-space-space-fourunits);
  }
  .home-header25 {
    font-size: 36px;
    line-height: 43px;
  }
  .home-element {
    align-items: flex-start;
    padding-top: var(--dl-space-space-oneandhalfunits);
    padding-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .home-header26 {
    font-size: 16px;
  }
  .home-description05 {
    font-size: 14px;
    line-height: 21px;
  }
  .home-element1 {
    align-items: flex-start;
    padding-top: var(--dl-space-space-oneandhalfunits);
    padding-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .home-header27 {
    font-size: 16px;
  }
  .home-description06 {
    font-size: 14px;
    line-height: 21px;
  }
  .home-element2 {
    align-items: flex-start;
    padding-top: var(--dl-space-space-oneandhalfunits);
    padding-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .home-header28 {
    font-size: 16px;
  }
  .home-description07 {
    font-size: 14px;
    line-height: 21px;
  }
  .home-element3 {
    align-items: flex-start;
    padding-top: var(--dl-space-space-oneandhalfunits);
    padding-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .home-header29 {
    font-size: 16px;
  }
  .home-description08 {
    font-size: 14px;
    line-height: 21px;
  }
  .home-element4 {
    align-items: flex-start;
    padding-top: var(--dl-space-space-oneandhalfunits);
    padding-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .home-header30 {
    font-size: 16px;
  }
  .home-description09 {
    font-size: 14px;
    line-height: 21px;
  }
  .home-get-yours {
    gap: var(--dl-space-space-oneandhalfunits);
    padding-left: var(--dl-space-space-oneandhalfunits);
    padding-right: var(--dl-space-space-oneandhalfunits);
  }
  .home-row2 {
    gap: var(--dl-space-space-oneandhalfunits);
    height: 555px;
  }
  .home-card11 {
    padding: var(--dl-space-space-unit);
  }
  .home-image30 {
    width: 100%;
  }
  .home-card12 {
    padding: var(--dl-space-space-unit);
  }
  .home-image31 {
    width: 100%;
  }
  .home-card13 {
    gap: var(--dl-space-space-threeunits);
    align-items: center;
    padding-top: var(--dl-space-space-threeunits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-threeunits);
  }
  .home-content21 {
    align-items: center;
  }
  .home-header31 {
    font-size: 32px;
    text-align: center;
  }
  .home-description10 {
    font-size: 14px;
    text-align: center;
    line-height: 21px;
  }
  .home-button7 {
    margin-top: 0px;
  }
  .home-footer {
    gap: var(--dl-space-space-oneandhalfunits);
    padding-top: var(--dl-space-space-fourunits);
    padding-left: var(--dl-space-space-oneandhalfunits);
    padding-right: var(--dl-space-space-oneandhalfunits);
  }
  .home-main5 {
    gap: var(--dl-space-space-threeunits);
    flex-direction: column;
    justify-content: flex-start;
  }
  .home-heading10 {
    gap: var(--dl-space-space-unit);
  }
  .home-logo2 {
    font-size: 20px;
    line-height: 24px;
  }
  .home-caption17 {
    width: 80%;
    font-size: 12px;
    line-height: 18px;
  }
  .home-socials1 {
    display: none;
  }
  .home-links1 {
    gap: var(--dl-space-space-fourunits);
    width: 100%;
    justify-content: flex-start;
  }
  .home-list1 {
    gap: var(--dl-space-space-oneandhalfunits);
  }
  .home-list2 {
    gap: var(--dl-space-space-oneandhalfunits);
  }
  .home-socials2 {
    display: flex;
  }
}
@media(max-width: 479px) {
  .home-navbar {
    padding: var(--dl-space-space-unit);
  }
  .home-mobile-menu {
    padding: 16px;
  }
  .home-main3 {
    grid-template-columns: repeat(1, 1fr);
  }
  .home-image29 {
    width: 200%;
  }
  .home-header26 {
    font-size: 16px;
  }
  .home-description05 {
    font-size: 14px;
    line-height: 21px;
  }
  .home-header27 {
    font-size: 16px;
  }
  .home-description06 {
    font-size: 14px;
    line-height: 21px;
  }
  .home-header28 {
    font-size: 16px;
  }
  .home-description07 {
    font-size: 14px;
    line-height: 21px;
  }
  .home-header29 {
    font-size: 16px;
  }
  .home-description08 {
    font-size: 14px;
    line-height: 21px;
  }
  .home-header30 {
    font-size: 16px;
  }
  .home-description09 {
    font-size: 14px;
    line-height: 21px;
  }
  .home-row2 {
    height: 350px;
  }
}

</style>
