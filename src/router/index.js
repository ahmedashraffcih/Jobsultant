import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Login from "../views/Details/Login.vue";
import Register from "../views/Details/Register.vue";
import Account_Settings from "../views/User/Account_Settings.vue";
import MyCV from "../views/User/My_CV.vue";
import BuildCV from "../views/User/Build_CV.vue";
import Emp_Register from "../views/Employer/Emp_Register.vue";
import Emp_Profile from "../views/Employer/Emp_Profile.vue";
import Emp_Edit_Profile from "../views/Employer/Emp_Edit_Profile.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/Details/Login",
    name: "Login",
    component: Login
  },
  {
    path: "/Details/Register",
    name: "Register",
    component: Register
  },
  {
    path: "/User/Account_Settings",
    name: "Account_Settings",
    component: Account_Settings
  },
  {
    path: "/User/My_CV",
    name: "My_CV",
    component: MyCV
  },
  {
    path: "/User/Build_CV",
    name: "Build_CV",
    component: BuildCV
  },
  {
    path: "/Employer/Emp_Register",
    name: "Emp_Register",
    component: Emp_Register
  },
  {
    path: "/Employer/Emp_Profile",
    name: "Emp_Profile",
    component: Emp_Profile
  },
  {
    path: "/Employer/Emp_Edit_Profile",
    name: "Emp_Edit_Profile",
    component: Emp_Edit_Profile
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
