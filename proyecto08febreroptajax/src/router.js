import {createRouter, createWebHashHistory } from "vue-router";

const routes =[
  {name: 'Home', path: "/", component: () => import('./components/HelloWorld.vue'), props:true },
  {name: 'Area', path: "/area", component: ()=>import('./components/CompControlTextarea.vue')  },
  {name: 'ControlSelect', path: "/cselect", component: ()=>import('./components/ControlSelect.vue')  },
  {name: 'MultipleSelect', path: "/mselect", component: ()=>import('./components/MultipleSelect.vue')  },
  {name: 'ControlCheckBox', path: "/checkbox", component: ()=>import('./components/ControlCheckBox.vue')  },
];

const history = createWebHashHistory();

const router = createRouter({
  history,
  routes,
})

export default router;
