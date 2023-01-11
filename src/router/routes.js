// Import Pages components
import HomePage from "../views/HomePage.vue";
import ResumePage from "../views/ResumePage.vue";
import WorksPage from "../views/WorksPage.vue";
import ContactsPage from "../views/ContactsPage.vue";

// Define the Routes
const routes = [
  { path: "/portfolio", component: HomePage, name: "home"},
  { path: "/portfolio/resume", component: ResumePage, name: "resume"},
  { path: "/portfolio/works", component: WorksPage, name: "works"},
  { path: "/portfolio/contacts", component: ContactsPage, name: "contacts"},
]
export default routes