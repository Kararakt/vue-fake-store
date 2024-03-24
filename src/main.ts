import './index.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faHeart,
  faX,
  faTrash,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

import { createApp } from 'vue';
import App from './components/App/App.vue';
import router from './router/router';

const app = createApp(App);

library.add(faHeart, faX, faTrash, faStar);

app.use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
