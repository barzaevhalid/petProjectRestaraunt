import React from 'react';
import AddBurgerForm from "./AddBurgerForm";
const MenuAdmin = ({addBurger,loadSampleBurgers}) => {
    return (
        <div className='menu-admin'>
            <h2>Управление Меню</h2>

            <AddBurgerForm addBurger={addBurger}/>

            <button onClick={loadSampleBurgers}>Загрузить бургеры</button>
        </div>
    );
};

export default MenuAdmin;
