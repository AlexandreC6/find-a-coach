import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory() ,
  routes: [
    {path: '/', redirect: '/coaches'},
    {path: '/coaches', component: null },
    {path: '/coaches/:id', component: null, children: [
      {path: '/contact', component: null} //coaches/c1/contact => contact specific coach
    ]},
    {path: '/register', component: null},
    {path: '/requests', component: null},
    {path: '/:notFound(.*)', component: null} // Eror 404
  ],
});

export default router;
