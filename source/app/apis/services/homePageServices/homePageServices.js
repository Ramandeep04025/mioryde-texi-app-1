import Constant from "../../constant";
import { mainWrapper } from "../../main";


function getHomePageDetails() {
    return mainWrapper.get(Constant.host + 'pages/home-page');
};

function getMostViewCars() {
    return mainWrapper.get(Constant.host + 'pages/most-views-car');
};

const HomePageServices = {
    getHomePageDetails,
    getMostViewCars
};


export default HomePageServices;