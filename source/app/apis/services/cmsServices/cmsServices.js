import Constant from "../../constant";
import { mainWrapper } from "../../main";


function faq() {
    return mainWrapper.get(Constant.host + 'pages/help-support');
};


function terms() {
    return mainWrapper.get(Constant.host + 'pages/terms-condition');
};


function privacyPolicy() {
    return mainWrapper.get(Constant.host + 'pages/privacy-policy');
};


function aboutUs() {
    return mainWrapper.get(Constant.host + 'pages/content/about_us');
};


function contactUs() {
    return mainWrapper.get(Constant.host + 'pages/privacy-policy');
};


const CMSServices = {
    faq,
    terms,
    privacyPolicy,
    aboutUs,
    contactUs
};


export default CMSServices;