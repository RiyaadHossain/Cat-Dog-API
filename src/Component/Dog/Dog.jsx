import React, { useEffect, useState } from 'react';
import './Dog.css'

const Dog = () => {
    return (
        <div>
            <AllDogs></AllDogs>
        </div>
    );
};

const AllDogs = () => {
    const [dogs, setDogs] = useState([])

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(data => setDogs(data.message))
    }, [])
    console.log(dogs)
    return (<div >
        <img className='picture' src={dogs} alt="" />
    </div>)
}

export default Dog;