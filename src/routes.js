import Startpage from "@/components/Pages/Startpage";
import Carpage from "@/components/Pages/Carpage";
import Seasonpage from "@/components/Pages/Seasonpage";

const routes = [
  {path: "/", component: Startpage},
  {path: "/carpage", component: Carpage},
  {path: "/seasonpage", component: Seasonpage},
];

export default routes;
