import IntroScreen from './intro';
import { useState, useEffect } from 'react'
import { useIsFocused } from '@react-navigation/native';


const Intro = (props) => {
    // const isFocused = useIsFocused()
    // const [introData, setIntroData] = useState({})

    // useEffect(() => {
    //     if (isFocused) {
    //         getData()
    //     }
    // }, [isFocused]);

    // const getData = async () => {
    //     let response = await ContentController.intro()
    //     if (response && response.status) {
    //         setIntroData(response.content)
    //     }
    //     else {
    //         setIntroData({})
    //     }
    // };

    return (
        <IntroScreen
            navigation={props.navigation}
            // introData={introData}
        />
    )
};

export default Intro