import Vue from 'vue'
import App from './App.vue'
import router from './router'
import LottieVuePlayer from '@lottiefiles/vue-lottie-player'

Vue.use(LottieVuePlayer)
Vue.config.productionTip = false
Vue.config.devtools = false;

if (process.env.NODE_ENV === 'production') {
  // Отключение обработки ошибок и предупреждений в продакшене
  Vue.config.errorHandler = function (err, vm, info) {
    // Подавляем ошибки, чтобы они не отображались в UI
    console.error('Suppressed error:', err);
  };
  
  Vue.config.warnHandler = function (msg, vm, trace) {
    // Подавляем предупреждения
    console.warn('Suppressed warning:', msg);
  };
}

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
