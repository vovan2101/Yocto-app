<template>
    <div v-if="isModalOpen" class="modal" @click="outsideClick">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <h2 class="modal-header">Investors Requiring This Field</h2>
        <ul class="form-list">
          <li v-for="form in formInfo[field]" :key="form.name"
              :class="{'status-required': form.status === 'Required', 'status-optional': form.status === 'Optional'}">
            <a :href="form.url" class="button-link-scrollable">{{ form.name }} - <span class="status-text">{{ form.status }}</span></a>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  
  <script>
  export default {
    props: {
      isModalOpen: {
        type: Boolean,
        required: true,
      },
      field: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        formInfo: {
        first_name: [
          { name: 'Precursor Ventures', status: 'Required', url: 'https://precursorvc.com/' },
          { name: 'Path Ventures', status: 'Required', url: 'https://www.path.vc/' },
          { name: '2048 Ventures', status: 'Required', url: 'https://www.2048.vc/' },
          { name: 'Boost Ventures', status: 'Required', url: 'https://www.boost.vc/' },
          { name: 'Everywhere Ventures', status: 'Required', url: 'https://everywhere.vc/' },
          { name: 'Incisive Ventures', status: 'Required', url: 'https://incisive.vc/' },
          { name: 'Hustle Fund', status: 'Required', url: 'https://www.hustlefund.vc/' },
          { name: 'Liberty Ventures', status: 'Required', url: 'https://libertyventures.xyz/' },
          { name: 'Spatial Capital', status: 'Required', url: 'https://www.spatial.capital/' },
        ],
        email: [
        { name: 'Precursor Ventures', status: 'Required', url: 'https://precursorvc.com/' },
        { name: 'Path Ventures', status: 'Required', url: 'https://www.path.vc/' },
        { name: '2048 Ventures', status: 'Required', url: 'https://www.2048.vc/' },
        { name: 'Boost Ventures', status: 'Required', url: 'https://www.boost.vc/' },
        { name: 'Everywhere Ventures', status: 'Required', url: 'https://everywhere.vc/' },
        { name: 'Incisive Ventures', status: 'Required', url: 'https://incisive.vc/' },
        { name: 'Wischoff Ventures', status: 'Optional', url: 'https://www.wischoff.com/' },
        { name: 'Hustle Fund', status: 'Required', url: 'https://www.hustlefund.vc/' },
        { name: 'Liberty Ventures', status: 'Required', url: 'https://libertyventures.xyz/' },
        { name: 'Spatial Capital', status: 'Required', url: 'https://www.spatial.capital/' },
      ],
      phone_number: [
        { name: 'Liberty Ventures', status: 'Required', url: 'https://libertyventures.xyz/' },
      ],
      relationship: [
        { name: 'Precursor Ventures', status: 'Required', url: 'https://precursorvc.com/' },
      ],
      working_full_time: [
        { name: 'Hustle Fund', status: 'Required', url: 'https://www.hustlefund.vc/' },
      ],
      company_name: [
        { name: 'Precursor Ventures', status: 'Required', url: 'https://precursorvc.com/' },
        { name: 'Path Ventures', status: 'Required', url: 'https://www.path.vc/' },
        { name: '2048 Ventures', status: 'Required', url: 'https://www.2048.vc/' },
        { name: 'Everywhere Ventures', status: 'Required', url: 'https://everywhere.vc/' },
        { name: 'Incisive Ventures', status: 'Required', url: 'https://incisive.vc/' },
        { name: 'Wischoff Ventures', status: 'Optional', url: 'https://www.wischoff.com/' },
        { name: 'Hustle Fund', status: 'Required', url: 'https://www.hustlefund.vc/' },
        { name: 'Liberty Ventures', status: 'Required', url: 'https://libertyventures.xyz/' },
        { name: 'Spatial Capital', status: 'Required', url: 'https://www.spatial.capital/' },
      ],
      one_line_description: [
        { name: 'Path Ventures', status: 'Required', url: 'https://www.path.vc/' },
        { name: 'Liberty Ventures', status: 'Required', url: 'https://libertyventures.xyz/' },
        { name: 'Spatial Capital', status: 'Required', url: 'https://www.spatial.capital/' },
      ],
      company_description: [
        { name: 'Precursor Ventures', status: 'Required', url: 'https://precursorvc.com/' },
        { name: '2048 Ventures', status: 'Required', url: 'https://www.2048.vc/' },
        { name: 'Boost Ventures', status: 'Required', url: 'https://www.boost.vc/' },
        { name: 'Hustle Fund', status: 'Required', url: 'https://www.hustlefund.vc/' },
      ],
      company_solution: [
        { name: 'Incisive Ventures', status: 'Optional', url: 'https://incisive.vc/' },
        { name: 'Hustle Fund', status: 'Required', url: 'https://www.hustlefund.vc/' },
      ],
      pitch_description: [
        { name: 'Incisive Ventures', status: 'Required', url: 'https://incisive.vc/' },
      ],
      target_customer: [
        { name: 'Hustle Fund', status: 'Required', url: 'https://www.hustlefund.vc/' },
      ],
      customer_acquisition: [
        { name: 'Hustle Fund', status: 'Required', url: 'https://www.hustlefund.vc/' },
      ],
      date_founded: [
        { name: '2048 Ventures', status: 'Required', url: 'https://www.2048.vc/' },
      ],
      product_status: [
        { name: 'Incisive Ventures', status: 'Required', url: 'https://incisive.vc/' },
        { name: 'Hustle Fund', status: 'Required', url: 'https://www.hustlefund.vc/' },
      ],
      active_customers: [
        { name: 'Hustle Fund', status: 'Required', url: 'https://www.hustlefund.vc/' },
      ],
      how_many_users: [
        { name: 'Hustle Fund', status: 'Required', url: 'https://www.hustlefund.vc/' },
      ],
      industry: [
        { name: 'Precursor Ventures', status: 'Required', url: 'https://precursorvc.com/' },
        { name: 'Path Ventures', status: 'Required', url: 'https://www.path.vc/' },
        { name: '2048 Ventures', status: 'Required', url: 'https://www.2048.vc/' },
        { name: 'Incisive Ventures', status: 'Required', url: 'https://incisive.vc/' },
        { name: 'Wischoff Ventures', status: 'Optional', url: 'https://www.wischoff.com/' },
        { name: 'Hustle Fund', status: 'Required', url: 'https://www.hustlefund.vc/' },
      ],
      liberty_ventures_industry: [
        { name: 'Liberty Ventures', status: 'Required', url: 'https://libertyventures.xyz/' },
      ],
      product: [
        { name: 'Incisive Ventures', status: 'Required', url: 'https://incisive.vc/' },
        { name: 'Hustle Fund', status: 'Required', url: 'https://www.hustlefund.vc/' },
      ],
      business_model: [
        { name: 'Hustle Fund', status: 'Required', url: 'https://www.hustlefund.vc/' },
      ],
      company_website: [
        { name: 'Precursor Ventures', status: 'Required', url: 'https://precursorvc.com/' },
        { name: 'Path Ventures', status: 'Required', url: 'https://www.path.vc/' },
        { name: '2048 Ventures', status: 'Required', url: 'https://www.2048.vc/' },
        { name: 'Everywhere Ventures', status: 'Optional', url: 'https://everywhere.vc/' },
        { name: 'Incisive Ventures', status: 'Required', url: 'https://incisive.vc/' },
        { name: 'Hustle Fund', status: 'Optional', url: 'https://www.hustlefund.vc/' },
      ],
      pitch_deck: [
        { name: 'Precursor Ventures', status: 'Required', url: 'https://precursorvc.com/' },
        { name: 'Path Ventures', status: 'Required', url: 'https://www.path.vc/' },
        { name: '2048 Ventures', status: 'Required', url: 'https://www.2048.vc/' },
        { name: 'Boost Ventures', status: 'Optional', url: 'https://www.boost.vc/' },
        { name: 'Everywhere Ventures', status: 'Required', url: 'https://everywhere.vc/' },
        { name: 'Incisive Ventures', status: 'Required', url: 'https://incisive.vc/' },
        { name: 'Hustle Fund', status: 'Optional', url: 'https://www.hustlefund.vc/' },
        { name: 'Spatial Capital', status: 'Optional', url: 'https://www.spatial.capital/' },
      ],
      pitch_deck_file: [
        { name: 'Wischoff Ventures', status: 'Optional', url: 'https://www.wischoff.com/' },
        { name: 'Hustle Fund', status: 'Optional', url: 'https://www.hustlefund.vc/' },
        { name: 'Liberty Ventures', status: 'Required', url: 'https://libertyventures.xyz/' },
        { name: 'Spatial Capital', status: 'Optional', url: 'https://www.spatial.capital/' },
      ],
      headquartered: [
        { name: 'Precursor Ventures', status: 'Required', url: 'https://precursorvc.com/' },
        { name: 'Incisive Ventures', status: 'Required', url: 'https://incisive.vc/' },
        { name: 'Wischoff Ventures', status: 'Optional', url: 'https://www.wischoff.com/' },
        { name: 'Hustle Fund', status: 'Required', url: 'https://www.hustlefund.vc/' },
      ],
      customers_based: [
        { name: 'Hustle Fund', status: 'Required', url: 'https://www.hustlefund.vc/' },
      ],
      specific_location: [
        { name: 'Precursor Ventures', status: 'Required', url: 'https://precursorvc.com/' },
        { name: '2048 Ventures', status: 'Required', url: 'https://www.2048.vc/' },
        { name: 'Boost Ventures', status: 'Required', url: 'https://www.boost.vc/' },
        { name: 'Everywhere Ventures', status: 'Required', url: 'https://everywhere.vc/' },
      ],
      legal_structure: [
        { name: 'Precursor Ventures', status: 'Required', url: 'https://precursorvc.com/' },
      ],
      raising_round: [
        { name: 'Precursor Ventures', status: 'Required', url: 'https://precursorvc.com/' },
        { name: 'Incisive Ventures', status: 'Required', url: 'https://incisive.vc/' },
        { name: 'Wischoff Ventures', status: 'Optional', url: 'https://www.wischoff.com/' },
        { name: 'Hustle Fund', status: 'Required', url: 'https://www.hustlefund.vc/' },
      ],
      raising_amount: [
        { name: 'Precursor Ventures', status: 'Required', url: 'https://precursorvc.com/' },
        { name: '2048 Ventures', status: 'Required', url: 'https://www.2048.vc/' },
        { name: 'Incisive Ventures', status: 'Required', url: 'https://incisive.vc/' },
        { name: 'Spatial Capital', status: 'Optional', url: 'https://www.spatial.capital/' },
      ],
      earning_revenue: [
        { name: 'Hustle Fund', status: 'Required', url: 'https://www.hustlefund.vc/' },
      ],
      earning_amount: [
        { name: 'Incisive Ventures', status: 'Optional', url: 'https://incisive.vc/' },
        { name: 'Hustle Fund', status: 'Required', url: 'https://www.hustlefund.vc/' },
      ],
      source_of_revenue: [
        { name: 'Hustle Fund', status: 'Required', url: 'https://www.hustlefund.vc/' },
      ],
      pre_money_valuation: [
        { name: 'Precursor Ventures', status: 'Optional', url: 'https://precursorvc.com/' },
      ],
      post_money_valuation: [
        { name: 'Incisive Ventures', status: 'Required', url: 'https://incisive.vc/' },
        { name: 'Hustle Fund', status: 'Required', url: 'https://www.hustlefund.vc/' },
      ],
      capital_to_raise: [
        { name: 'Ventures 2048', status: 'Required', url: 'https://www.2048.vc/' },
        { name: 'Incisive Ventures', status: 'Required', url: 'https://incisive.vc/' },
        { name: 'Hustle Fund', status: 'Required', url: 'https://www.hustlefund.vc/' },
      ],
      prev_experience: [
        { name: 'Incisive Ventures', status: 'Required', url: 'https://incisive.vc/' },
      ],
      team_description: [
        { name: 'Boost Ventures', status: 'Required', url: 'https://www.boost.vc/' },
      ],
      company_linkedin: [
        { name: 'Spatial Capital', status: 'Optional', url: 'https://www.spatial.capital/' },
      ],
      ceo_linkedin: [
        { name: 'Path Ventures', status: 'Required', url: 'https://www.path.vc/' },
        { name: 'Ventures 2048', status: 'Required', url: 'https://www.2048.vc/' },
        { name: 'Boost Ventures', status: 'Required', url: 'https://www.boost.vc/' },
        { name: 'Incisive Ventures', status: 'Required', url: 'https://incisive.vc/' },
        { name: 'Wischoff Ventures', status: 'Optional', url: 'https://www.wischoff.com/' },
        { name: 'Liberty Ventures', status: 'Required', url: 'https://libertyventures.xyz/' },
        { name: 'Everywhere Ventures', status: 'Optional', url: 'https://everywhere.vc/' },
      ],
      linkedin_profiles: [
        { name: 'Ventures 2048', status: 'Optional', url: 'https://www.2048.vc/' },
        { name: 'Boost Ventures', status: 'Required', url: 'https://www.boost.vc/' },
        { name: 'Incisive Ventures', status: 'Required', url: 'https://incisive.vc/' },
        { name: 'Wischoff Ventures', status: 'Optional', url: 'https://www.wischoff.com/' },
        { name: 'Liberty Ventures', status: 'Required', url: 'https://libertyventures.xyz/' },
        { name: 'Everywhere Ventures', status: 'Optional', url: 'https://everywhere.vc/' },
      ],
      founder_video_url: [
        { name: 'Path Ventures', status: 'Optional', url: 'https://www.path.vc/' },
        { name: '2048 Ventures', status: 'Required', url: 'https://www.2048.vc/' },
        { name: 'Boost Ventures', status: 'Required', url: 'https://www.boost.vc/' },
      ],
      team_video_upload: [
        { name: 'Boost Ventures', status: 'Required', url: 'https://www.boost.vc/' },
      ],
      vision: [
        { name: '2048 Ventures', status: 'Required', url: 'https://www.2048.vc/' },
      ],
      pitching_live: [
        { name: 'Hustle Fund', status: 'Optional', url: 'https://www.hustlefund.vc/' },
      ],
      share_submission: [
        { name: 'Incisive Ventures', status: 'Required', url: 'https://incisive.vc/' },
        { name: 'Hustle Fund', status: 'Optional', url: 'https://www.hustlefund.vc/' },
      ],
      investors_participating: [
        { name: 'Incisive Ventures', status: 'Optional', url: 'https://incisive.vc/' },
        { name: 'Hustle Fund', status: 'Optional', url: 'https://www.hustlefund.vc/' },
      ],
      want_us_to_know: [
        { name: 'Hustle Fund', status: 'Optional', url: 'https://www.hustlefund.vc/' },
        { name: 'Incisive Ventures', status: 'Optional', url: 'https://incisive.vc/' },
      ],
      value_of_team: [
        { name: 'Liberty Ventures', status: 'Required', url: 'https://libertyventures.xyz/' },

      ],
      },
      };
    },
    methods: {
      closeModal() {
        this.$emit('close');
      },
      outsideClick(event) {
        if (event.target.classList.contains('modal')) {
          this.closeModal();
        }
      },
    },
  };
  </script>
  
  <style scoped>

.status-required .status-text {
  color: rgb(218, 177, 101);
}

.status-optional .status-text {
  color: rgb(255, 255, 255);
}


  .modal {
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }
  
  .modal-content {
    background-color: #282828;
    margin: 15% auto;
    padding: 20px;
    border: 2px solid #888;
    width: 80%;
    max-width: 600px;
    color: #fff;
    border-radius: 8px;
    position: relative;
    overflow: hidden;
  }
  
  .close {
    color: #fff;
    float: right;
    font-size: 28px;
    font-weight: bold;
    transition: color 0.3s ease;
  }
  
  .close:hover,
  .close:focus {
    color: #707070;
    text-decoration: none;
    cursor: pointer;
  }
  
  .modal-header {
    color: #ff538c;
    font-size: 35px;
    font-style: normal;
    font-weight: 600;
    text-shadow: 1px 1px 0 #000, 2px 2px 0 #000000, 3px 3px 0 #000000;
    text-align: center;
    margin-bottom: 15px;
  }
  
  .form-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
    max-height: 300px;
    overflow-y: auto;
  }
  
  .form-list li {
    padding: 6px 0;
    border-bottom: 1px solid #444;
  }
  
  .form-list li:last-child {
    border-bottom: none;
  }
  
  .button-link-scrollable {
    display: block;
    color: rgb(255, 255, 255);
    text-decoration: none;
    font-weight: 600;
    padding: 10px;
    transition: background-color 0.3s ease;
    text-decoration: underline; /* Добавляем подчеркивание */
  }
  
  .button-link-scrollable:hover {
    background-color: #444;
  }
  </style>
  