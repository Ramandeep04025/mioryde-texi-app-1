import { useState } from "react";
import HomeScreen from "./Screen";


const Home = (props) => {
    const [show, setShow] = useState(false)

    return (
        <HomeScreen
            navigation={props.navigation}
            setShow={setShow}
            show={show}
        />
    )
}

export default Home