
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Portfolio from "../pages/Portfolio/Portfolio";
import Team from "../pages/Team/Team";
import Skill from "../pages/Skill/Skill";
import Clients from "../pages/Clients/Clients";
import Pricing from "../pages/Pricing/Pricing";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";
import Root from "../pages/Root.JSX";

const ROUTES = [
    {
        path: "",
        element: <Root/>,
        children: [

            {
                path: "/home",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/services",
                element: <Services />,
            },
            {
                path: "/portfolio",
                element: <Portfolio />,
            },
            {
                path: "/team",
                element: <Team />,
            },
            {
                path: "/skill",
                element: <Skill />,
            },
            {
                path: "/clients",
                element: <Clients />,
            },
            {
                path: "/pricing",
                element: <Pricing />,
            },
            {
                path: "/blog",
                element: <Blog />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
        ]
    }

];
export default ROUTES;

