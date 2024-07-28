<template>
  <div class="survey-container">
    <div class="survey-content">
      <div v-if="currentQuestionIndex < questions.length">
        <p>{{ questions[currentQuestionIndex] }}</p>
        <input v-model="currentAnswer" @keyup.enter="nextQuestion" />
        <button @click="nextQuestion">Next</button>
      </div>
      <div v-else>
        <h2>Survey Completed</h2>
        <p>Thank you for your responses. We will process your information.</p>
        <button @click="initiateAuthorization" v-if="!isAuthorized">Submit</button>
        <p v-else>Submitting your survey...</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questions: [
        'What is your name?',
        'What is your company name?',
        'What industry is your company in?'
      ],
      currentQuestionIndex: 0,
      currentAnswer: '',
      answers: [],
      isAuthorized: false,
    };
  },
  methods: {
    nextQuestion() {
      if (this.currentAnswer.trim()) {
        this.answers.push(this.currentAnswer);
        this.currentAnswer = '';
        this.currentQuestionIndex++;
      }
    },
    initiateAuthorization() {
      // Сохраняем ответы в localStorage для последующего использования
      localStorage.setItem('survey_answers', JSON.stringify(this.answers));
      window.location.href = 'http://localhost:3001/authorize';
    },
    async handleAuthorizationCallback() {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code');
      if (code) {
        try {
          await this.$http.post('http://localhost:3001/oauth2/callback', { code });
          this.isAuthorized = true;
          this.submitSurvey(); // Отправка данных формы после успешной авторизации
        } catch (error) {
          console.error('Error handling authorization callback:', error);
        }
      }
    },
    async submitSurvey() {
      const savedAnswers = JSON.parse(localStorage.getItem('survey_answers'));
      if (savedAnswers) {
        try {
          await this.$http.post('http://localhost:3001/survey', {
            answers: savedAnswers,
          });
          alert('Survey submitted successfully!');
          localStorage.removeItem('survey_answers'); // Удаляем ответы после успешной отправки
        } catch (error) {
          console.error('Error submitting survey:', error);
          alert('There was an error submitting the survey.');
        }
      }
    },
  },
  mounted() {
    this.handleAuthorizationCallback();
  },
};
</script>

<style scoped>
.survey-container {
  width: 100%;
  display: flex;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  background-color: #27272D;
  color: #fff;
}

.survey-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  margin-top: 20px;
}

.survey-content input {
  padding: 10px;
  border: 1px solid #555;
  border-radius: 5px;
  background-color: #333;
  color: #fff;
  margin-bottom: 10px;
}

.survey-content button {
  padding: 10px;
  border: none;
  border-radius: 5px;
  background: #007bff;
  color: #fff;
  cursor: pointer;
}

.survey-content button:hover {
  background: #0056b3;
}
</style>
