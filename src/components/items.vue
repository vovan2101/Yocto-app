<template>
    <div class="items-items" v-bind:class="rootClassName">
      <div data-role="accordion-container" class="items-element accordion">
        <div class="items-content">
          <span class="items-header">{{ header }}</span>
          <span data-role="accordion-content" class="items-description">
            {{ description }}
          </span>
        </div>
        <div class="items-icon-container">
          <svg
            viewBox="0 0 1024 1024"
            data-role="accordion-icon-closed"
            class="items-icon"
          >
            <path
              d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
            ></path></svg
          ><svg
            viewBox="0 0 1024 1024"
            data-role="accordion-icon-open"
            class="items-icon02"
          >
            <path
              d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
            ></path>
          </svg>
        </div>
      </div>
      <div data-role="accordion-container" class="items-element1 accordion">
        <div class="items-content1">
          <span class="items-header1">{{ header1 }}</span>
          <span data-role="accordion-content" class="items-description1">
            {{ description1 }}
          </span>
        </div>
        <div class="items-icon-container1">
          <svg
            viewBox="0 0 1024 1024"
            data-role="accordion-icon-closed"
            class="items-icon04"
          >
            <path
              d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
            ></path></svg
          ><svg
            viewBox="0 0 1024 1024"
            data-role="accordion-icon-open"
            class="items-icon06"
          >
            <path
              d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
            ></path>
          </svg>
        </div>
      </div>
      <div data-role="accordion-container" class="items-element2 accordion">
        <div class="items-content2">
          <span class="items-header2">{{ header2 }}</span>
          <span data-role="accordion-content" class="items-description2">
            {{ description2 }}
          </span>
        </div>
        <div class="items-icon-container2">
          <svg
            viewBox="0 0 1024 1024"
            data-role="accordion-icon-closed"
            class="items-icon08"
          >
            <path
              d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
            ></path></svg
          ><svg
            viewBox="0 0 1024 1024"
            data-role="accordion-icon-open"
            class="items-icon10"
          >
            <path
              d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Items',
    props: {
      description: {
        type: String,
        default:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      },
      description1: {
        type: String,
        default:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      },
      description2: {
        type: String,
        default:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      },
      header: {
        type: String,
        default: 'Esse cillum dolore eu fugiat nulla pariatur.',
      },
      header1: {
        type: String,
        default: 'Esse cillum dolore eu fugiat nulla pariatur.',
      },
      rootClassName: String,
      header2: {
        type: String,
        default: 'Esse cillum dolore eu fugiat nulla pariatur.',
      },
    },
  }
  </script>
  
  <style scoped>
  .items-items {
    width: 100%;
    display: flex;
    position: relative;
    align-items: flex-start;
    flex-direction: column;
  }
  .items-element {
    align-items: flex-start;
  }
  .items-content {
    gap: var(--dl-space-space-oneandhalfunits);
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
  .items-header {
    font-size: 24px;
  }
  .items-description {
    font-size: 18px;
    max-width: 800px;
    line-height: 27px;
  }
  .items-icon-container {
    position: relative;
    padding-top: var(--dl-space-space-halfunit);
  }
  .items-icon {
    fill: #ffffff;
    width: 16px;
    height: 16px;
    display: none;
  }
  .items-icon02 {
    fill: #ffffff;
    width: 16px;
    height: 16px;
  }
  .items-element1 {
    align-items: flex-start;
  }
  .items-content1 {
    gap: var(--dl-space-space-oneandhalfunits);
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
  .items-header1 {
    font-size: 24px;
  }
  .items-description1 {
    font-size: 18px;
    max-width: 800px;
    line-height: 27px;
  }
  .items-icon-container1 {
    padding-top: var(--dl-space-space-halfunit);
  }
  .items-icon04 {
    fill: #ffffff;
    width: 16px;
    height: 16px;
    display: none;
  }
  .items-icon06 {
    fill: #ffffff;
    width: 16px;
    height: 16px;
  }
  .items-element2 {
    align-items: flex-start;
  }
  .items-content2 {
    gap: var(--dl-space-space-oneandhalfunits);
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
  .items-header2 {
    font-size: 24px;
  }
  .items-description2 {
    font-size: 18px;
    max-width: 800px;
    line-height: 27px;
  }
  .items-icon-container2 {
    padding-top: var(--dl-space-space-halfunit);
  }
  .items-icon08 {
    fill: #ffffff;
    width: 16px;
    height: 16px;
    display: none;
  }
  .items-icon10 {
    fill: #ffffff;
    width: 16px;
    height: 16px;
  }
  @media(max-width: 767px) {
    .items-element1 {
      align-items: flex-start;
    }
  }
  @media(max-width: 479px) {
    .items-header {
      font-size: 16px;
    }
    .items-description {
      font-size: 14px;
      line-height: 21px;
    }
    .items-header1 {
      font-size: 16px;
    }
    .items-description1 {
      font-size: 14px;
      line-height: 21px;
    }
    .items-header2 {
      font-size: 16px;
    }
    .items-description2 {
      font-size: 14px;
      line-height: 21px;
    }
  }
  </style>
  