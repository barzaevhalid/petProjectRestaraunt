import restaurants from "../sample-restaurants";
import {useState} from "react";
import {useNavigate} from   'react-router-dom'
const Landing = (props) => {
    const [display, setDisplay] = useState(false)
    const [title, setTitle] = useState('')
    const [url, setUlr] = useState('')
    const nav = useNavigate()

    const showList = () => {
        setDisplay(prev => !prev)

    }
    const replaceTitle = (item) => {
        const {title , url} = item

        setDisplay(false)
        setTitle(title)
        setUlr(url)
    }
    const goToRestaurant = () => {
        nav(`/restaurant/${url}`)
    }

    return (
        <div className='restaurant_select'>
            <div className="restaurant_select_top">
                <div
                    className="restaurant_select_top-header font-effect-outline"
                    onClick={showList}
                >
                    {title ? title : "Выбери ресторан"}
                </div>
                <div className="arrow_picker">
                    <div className="arrow_picker-up"></div>
                    <div className="arrow_picker-down"></div>
                </div>
            </div>
            {display &&
                <div className='restaurant_select_bottom'>
                    <ul>
                        {restaurants.map(item => {

                            return <li key={item.id}
                            onClick={() => replaceTitle(item)}>
                                {item.title}
                            </li>
                        })}
                    </ul>
                </div>
            }
            {title && display === false ?  <button onClick={goToRestaurant}>Перейти в ресторан</button> : null}

        </div>
    );
};

export default Landing;
