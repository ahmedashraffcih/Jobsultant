import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import EmployerHome from "../views/EmployerHome.vue";
import Blogs from "../views/Blogs.vue";
import Jobs from "../views/Jobs.vue";
import Login from "../views/Authentication/Login.vue";
import Register from "../views/Authentication/Register.vue";
import confirmation from "../views/Authentication/confirmation.vue";
import Account_Settings from "../views/User/Account_Settings.vue";
import MyCV from "../views/User/My_CV.vue";
import BuildCV from "../views/User/Build_CV.vue";
import Recommended from "../views/User/Recommended.vue";
import JobApps from "../views/User/Job_Applications.vue";
import Emp_Register from "../views/Employer/Emp_Register.vue";
import Emp_Profile from "../views/Employer/Emp_Profile.vue";
import Emp_Edit_Profile from "../views/Employer/Emp_Edit_Profile.vue"
import Emp_Add_Job from "../views/Employer/Emp_Add_Job.vue"
import Emp_Manage_Jobs from "../views/Employer/Emp_Manage_Jobs.vue"
import Emp_View_Candidates from "../views/Employer/Emp_View_Candidates.vue"
import Emp_View_Shortlisted from "../views/Employer/Emp_View_Shortlisted.vue"

import { TokenService } from "../services/storage.service";
//The vue router defines all of the routes for the application, and contains a function that runs before each route change to prevent unauthenticated users from accessing restricted routes.

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      public: true, // Allow access to even if not logged in
    },
  },
  {
    
    path: "/EmployerHome",
    name: "EmployerHome",
    component: EmployerHome,
    meta: {
      public: true, // Allow access to even if not logged in
    },
  },
  {
    path: "/blogs",
    name: "Blogs",
    component: Blogs,
    meta: {
      public: true, // Allow access to even if not logged in
    },
  },
  {
    path: "/jobs",
    name: "Jobs",
    component: Jobs,
  },
  {
    path: "/Authentication/Login",
    name: "Login",
    component: function () {
      return import("../views/Authentication/Login.vue");
    },
    meta: {
      public: true, // Allow access to even if not logged in
      onlyWhenLoggedOut: true,
    },
  },
  {
    path: "/Authentication/Register",
    name: "Register",
    component: function () {
      return import('../views/Authentication/Register.vue')

    },
    meta: {
      public: true,  // Allow access to even if not logged in
      onlyWhenLoggedOut: true
    }
  },
  {
    path: "/Authentication/confirmation",
    name: "confirmation",
    component: confirmation
  },
  {
    path: "/User/Account_Settings",
    name: "Account_Settings",
    component: Account_Settings,
  },
  {
    path: "/User/My_CV",
    name: "My_CV",
    component: MyCV,
  },
  {
    path: "/User/Build_CV",
    name: "Build_CV",
    component: BuildCV,
  },
  {
    path: "/User/Recommended",
    name: "Recommended",
    component: Recommended,
  },
  {
    path: "/User/Job_Applications",
    name: "Job_Applications",
    component: JobApps,
  },
  {
    path: "/Employer/Emp_Register",
    name: "Emp_Register",
    component: function () {
      return import("../views/Employer/Emp_Register.vue");
    },
    meta: {
      public: true, // Allow access to even if not logged in
    },
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
  },
  {
    path: "/Employer/Emp_Add_Job",
    name: "Emp_Add_Job",
    component: Emp_Add_Job
  },
  {
    path: "/Employer/Emp_Manage_Jobs",
    name: "Emp_Manage_Jobs",
    component: Emp_Manage_Jobs
  },
  {
    path: "/Employer/Emp_View_Candidates",
    name: "Emp_View_Candidates",
    component: Emp_View_Candidates
  },
  {
    path: "/Employer/Emp_View_Shortlisted",
    name: "Emp_View_Shortlisted",
    component: Emp_View_Shortlisted
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const isPublic = to.matched.some(record => record.meta.public)
  const onlyWhenLoggedOut = to.matched.some(record => record.meta.onlyWhenLoggedOut)
  const loggedIn = !!TokenService.getToken();
  // const isVerified = !!

  if (!isPublic && !loggedIn) {
    if (to.fullPath == "/Authentication/Register") 
    {
      return next({
        path: '/Authentication/Register'
      });
    } 
    else 
    {
      return next({
        path: '/Authentication/login',
        query: { redirect: to.fullPath }  // Store the full path to redirect the user to after login
      });
    }
    //console.log(to.fullPath)

  }

  // Do not allow user to visit login page or register page if they are logged in
  if (loggedIn && onlyWhenLoggedOut) {
    return next('/')
  }

  next();
})

export default router;
