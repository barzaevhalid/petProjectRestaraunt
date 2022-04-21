import React, {useEffect, useRef} from 'react';
import {logDOM} from "@testing-library/react";

const AddBurgerForm = ({addBurger}) => {

    const nameRef = useRef()
    const priceRef = useRef()
    const statusRef = useRef()
    const descRef = useRef()
    const imageRef = useRef()



    const createBurger = (e) => {
        e.preventDefault()

        const burger = {
            name: nameRef.current.value,
            price: +priceRef.current.value || 0,
            status: statusRef.current.value,
            desc: descRef.current.value,
            image: imageRef.current.value,
        }
        addBurger(burger);
        e.currentTarget.reset()

    };
    return (
        <form className='burger-edit' onSubmit={createBurger}>
            <input type="text" name='name' placeholder='Name' autoComplete='off' ref={nameRef}/>
            <input type="text" name='price' placeholder='Price' autoComplete='off' ref={priceRef}/>
            <select name="status" className='status' ref={statusRef}>
                <option value="available">Доступно</option>
                <option value="unavailable">Убрать из меню</option>
            </select>
            <textarea name='desc' placeholder='Name' ref={descRef}/>
            <input type="text" name='image' placeholder='Image' autoComplete='off' ref={imageRef}/>
        <button type='submit'>Добавить в Меню</button>
        </form>
    );
};

export default AddBurgerForm;
