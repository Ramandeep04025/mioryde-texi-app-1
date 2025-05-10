import { Toaster } from "../../../../helpers/toaster";
import CMSServices from "../../services/cmsServices/cmsServices";


const faq = async () => {
    let response = await CMSServices.faq()
    if (response && response.status) {
        return response;
    } else {
        new Toaster().error(response.message);
        return null;
    }
};


const terms = async () => {
    let response = await CMSServices.terms()
    if (response && response.status) {
        return response;
    } else {
        new Toaster().error(response.message);
        return null;
    }
};


const privacyPolicy = async () => {
    let response = await CMSServices.privacyPolicy()
    if (response && response.status) {
        return response;
    } else {
        new Toaster().error(response.message);
        return null;
    }
};


const aboutUs = async () => {
    let response = await CMSServices.aboutUs()
    if (response && response.status) {
        return response;
    } else {
        new Toaster().error(response.message);
        return null;
    }
};


const contactUs = async () => {
    let response = await CMSServices.contactUs()
    if (response && response.status) {
        return response;
    } else {
        new Toaster().error(response.message);
        return null;
    }
};


const CMSController = {
    faq,
    terms,
    privacyPolicy,
    aboutUs,
    contactUs
};

export default CMSController;
