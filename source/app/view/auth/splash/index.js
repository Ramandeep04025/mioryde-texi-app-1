import React, { useEffect } from 'react';
import SplashScreen from './splash';
import { isObjectEmpty } from '../../../../helpers/General';
import { connect } from 'react-redux';
// import CardController from '../../../apis/controllers/cardController';

const Splash = (props) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      getinit();
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);


  const getinit = async () => {
    if (props && isObjectEmpty(props.user)) {
      // await CardController.stripeInfo();
      // props.navigation.reset({
      //   index: 0,
      //   routes: [{ name: 'AppStack' }],
      // });
    }
    else {
      props.navigation.reset({
        index: 0,
        routes: [{ name: 'intro' }],
      });
    }
  };

  return (
    <>
      <SplashScreen />
    </>
  )
}
const mapStateToProps = state => ({
  user: state.UserReducer.user,
});
export default connect(mapStateToProps)(Splash)