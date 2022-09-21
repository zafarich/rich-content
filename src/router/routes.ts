export default [
  {
    path: "/:pathMatch(.*)*",
    meta: { title: "Error" },
    component: (): any => import("@/pages/PError.vue"),
  },
  {
    path: "/",
    meta: { title: "Home" },
    component: (): any => import("@/pages/PIndex.vue"),
  },
];
