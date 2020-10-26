import Vue from "vue";
import VueRouter from "vue-router";
import Stores from "../views/Stores";

Vue.use(VueRouter);

let router = new VueRouter({
    mode: "history",
    routes: [
        {path: "/stores", component: Stores},
        {path: "*", redirect: "/stores"}
    ]
});

export default router;
