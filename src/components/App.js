import Header from "./Header";
import Order from "./Order";
import MenuAdmin from "./MenuAdmin";
import Burger from "./Burger";
import sampleBurgers from  '../sample-burgers'

import {useState} from "react";



const App = () => {
    const [burgers, setBurgers] = useState({})

    const [order,setOrder] = useState({})

    const addBurger = (burger) => {
    const burg = {...burgers}
        burg[`burger${Date.now()}`] = burger
        setBurgers(burg)
    }

    const loadSampleBurgers = () => {
        setBurgers(sampleBurgers)

    }
    return (
        <div className='burger-paradise'>
            <div className="menu">
                <Header title='Very Hot Burger' amount={10}/>
                <ul>
                    {Object.keys(burgers).map(key => {
                        return <Burger
                            key={key}
                            index={key}
                            details={burgers[key]}/>
                    })}
                </ul>
            </div>
              <Order/>
            <MenuAdmin addBurger={addBurger} loadSampleBurgers={loadSampleBurgers}/>
        </div>
    );
};

export default App;
