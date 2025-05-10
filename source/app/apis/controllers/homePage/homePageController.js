import { Toaster } from "../../../../helpers/toaster";
import HomePageServices from "../../services/homePageServices/homePageServices";


const getHomePage = async () => {
    let response = await HomePageServices.getHomePageDetails()
    if (response && response.status) {
        return response;
    } else {
        new Toaster().error(response.message);
        return null;
    }
};

const getMostViewCarsList = async () => {
    let response = await HomePageServices.getMostViewCars()
    if (response && response.status) {
        return response;
    } else {
        new Toaster().error(response.message);
        return null;
    }
};

const HomePageController = {
    getHomePage,
    getMostViewCarsList
};

export default HomePageController;
