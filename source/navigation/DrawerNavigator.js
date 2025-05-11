import { createDrawerNavigator } from "@react-navigation/drawer";
import { colors } from "../assets/styles/Colors";
import { DrawerContent } from "./drawerContent";
// import BottomTabs from "./BottomTabsNavigator";
// import Dashboard from "../app/view/commanScreens/Dashboard";
// import { HeaderComponet } from "../app/components/header/Header";
// import SupportHelp from "../app/view/pages/supportHelp";
// import { Images } from "../assets/styles/Images";
import Home from "../app/view/home";
import EditProfile from "../app/view/editProfile";
// import HelpCenter from "../app/view/pages/helpCenter";
// import OpenTicket from "../app/view/pages/openTicket";
// import Faq from "../app/view/pages/faq's";
// import LeadsDetail from "../app/view/commanScreens/leads/leadsDetail";
// import LeadsListing from "../app/view/commanScreens/leads/leadsListing";
// import AllInvoices from "../app/view/commanScreens/billing/allIvoice";
// import BillingPage from "../app/view/commanScreens/billing/billingPage";
// import InvoiceDetail from "../app/view/commanScreens/billing/invoiceDetail";
// import VechicleListing from "../app/view/sellerScreens/myVehicles/myVehicleListing";
// import MyCarListing from "../app/view/dealerScreens/myCarListing";
// import PostCarSeller from "../app/view/sellerScreens/PostCarScreens";
// import CreditDetails from "../app/view/commanScreens/creditScreens/creditDetails";
// import PaymentDetails from "../app/view/commanScreens/creditScreens/paymentDetails";
// import UserListing from "../app/view/dealerScreens/userList";
// import PostCarDealer from "../app/view/dealerScreens/PostCarScreens";
// import SellerProfile from "../app/view/sellerScreens/profile";
// import DealerProfile from "../app/view/dealerScreens/profile";
// import SuccessFullScreen from "../app/view/commanScreens/successFullScreen";
// import ChangePassword from "../app/view/auth/changePassword";
// import PromotedHistory from "../app/view/commanScreens/promotedHistory";
// import AboutUs from "../app/view/pages/aboutUs";
// import PrivacyPolicy from "../app/view/pages/privacy";
// import Terms from "../app/view/pages/terms";
// import Contact from "../app/view/pages/contactUs/contact";
// import LeadsNotifications from './../app/view/commanScreens/leadsNotfications/index';
// import OpenTicketNotifications from './../app/view/commanScreens/OpenTicketsNotfications/index';
// import DealerMembership from "../app/view/dealerScreens/DealerMembership";
// import LeadsInformation from "../app/view/commanScreens/leads/leadsInformation";
// import PlandDetails from "../app/view/commanScreens/creditScreens/planDetail";


const Drawer = createDrawerNavigator();

const AppDrawer = () => {
  let activeScreen = ''


  return (
    <Drawer.Navigator
      initialRouteName="home"
      backBehavior="history"
      screenOptions={({ route, navigation }) => {
        return {
          overlayColor: 'transparent',
          drawerType: 'slide',
          drawerStyle: {
            width: '75%',
          },
          drawerStyles: {
            backgroundColor: colors.brown
          },
          contentContainerStyle: {
            backgroundColor: colors.brown
          },
          sceneContainerStyle: {
            backgroundColor: colors.brown
          }
        }
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen
        name="home"
        component={Home}
        options={{
          headerShown: false
        }}
      />
      {/* <Drawer.Screen
          name="dashboard"
          component={Dashboard}
          options={{
            headerShown: false,
          }}
        /> */}
      {/* <Drawer.Screen
        name="promoted_History"
        component={PromotedHistory}
        options={{
          headerShown: false

        }}
      />
      <Drawer.Screen
        name="support_help"
        component={SupportHelp}
        options={{
          headerShown: false
        }}
      />
      <Drawer.Screen
        name="my_carListing_dealer"
        component={MyCarListing}
        options={{
          headerShown: false
        }}
      />
      <Drawer.Screen
        name="help_center"
        component={HelpCenter}
        options={{
          header: ({ navigation, route, options }) => (
            <HeaderComponet
              profile={true}
              leftIcon={'back'}
              headerImage={Images.userProfile}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="faq"
        component={Faq}
        options={{
          header: ({ navigation, route, options }) => (
            <HeaderComponet
              profile={true}
              leftIcon={'back'}
              headerImage={Images.userProfile}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="open_Ticket"
        component={OpenTicket}
        options={{
          header: ({ navigation, route, options }) => (
            <HeaderComponet
              profile={true}
              leftIcon={'back'}
              headerImage={Images.userProfile}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="leads_Listing"
        component={LeadsListing}
        options={{
          headerShown: false
        }}
      />
      <Drawer.Screen
        name="leads_Detail"
        component={LeadsDetail}
        options={{
          header: ({ navigation, route, options }) => (
            <HeaderComponet
              profile={true}
              leftIcon={'back'}
              headerImage={Images.userProfile}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="billingPage"
        component={BillingPage}
        options={{
          headerShown: false
        }}
      />
      <Drawer.Screen
        name="all_Invoices"
        component={AllInvoices}
        options={{
          header: ({ navigation, route, options }) => (
            <HeaderComponet
              profile={true}
              leftIcon={'back'}
              headerImage={Images.userProfile}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="invoice_Detail"
        component={InvoiceDetail}
        options={{
          header: ({ navigation, route, options }) => (
            <HeaderComponet
              profile={true}
              leftIcon={'back'}
              headerImage={Images.userProfile}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="post_car_seller"
        component={PostCarSeller}
        options={{
          headerShown: false
        }}
      />
      <Drawer.Screen
        name="credit_Detail"
        component={CreditDetails}
        options={{
          headerShown: false
        }}
      />
      <Drawer.Screen
        name="payment_details"
        component={PaymentDetails}
        options={{
          header: props => (
            <HeaderComponet
              leftIcon={'back'}
              profile={true}
              navigation={props.navigation}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="user_list"
        component={UserListing}
        options={{
          headerShown: false
        }}
      />
      <Drawer.Screen
        name="post_car_dealer"
        component={PostCarDealer}
        options={{
          headerShown: false
        }}
      />
      <Drawer.Screen
        name="car_listing_Seller"
        component={VechicleListing}
        options={{
          headerShown: false
        }}
      />
      <Drawer.Screen
        name="seller_profile"
        component={SellerProfile}
        options={{
          headerShown: false
        }}
      />
      <Drawer.Screen
        name="dealer_profile"
        component={DealerProfile}
        options={{
          headerShown: false
        }}
      />
      <Drawer.Screen
        name="success_full_screen"
        component={SuccessFullScreen}
        options={{
          headerShown: false
        }}
      />
      <Drawer.Screen
        name="terms"
        component={Terms}
        options={{
          headerShown: false
        }}
      />
      <Drawer.Screen
        name="about_us"
        component={AboutUs}
        options={{
          headerShown: false
        }}
      />
      <Drawer.Screen
        name="privacy_policy"
        component={PrivacyPolicy}
        options={{
          headerShown: false
        }}
      />

      <Drawer.Screen
        name="contact_us"
        component={Contact}
        options={{
          headerShown: false
        }}
      />
      <Drawer.Screen
        name="lead_notifications"
        component={LeadsNotifications}
        options={{
          headerShown: false
        }}
      />
      <Drawer.Screen
        name="open_ticket_notifications"
        component={OpenTicketNotifications}
        options={{
          headerShown: false
        }}
      />
      <Drawer.Screen
        name="dealer_membership"
        component={DealerMembership}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="leads_information"
        component={LeadsInformation}
        options={{
          header: ({ navigation, route, options }) => (
            <HeaderComponet
              profile={true}
              leftIcon={'back'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="plan_details"
        component={PlandDetails}
        options={{
          header: ({ navigation, route, options }) => (
            <HeaderComponet
              profile={true}
              leftIcon={'back'}
            />
          ),
        }}
      /> */}
    </Drawer.Navigator>
  );
};


export default AppDrawer;