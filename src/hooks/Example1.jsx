import React from 'react';

const Example1 = () => {

    const startValue = 0;

    const startPerson = {
        name : 'Fredii',
        email : 'fredii@goshop.ec'
    }

    const [count, setCount] = React.useState(startValue);
    const [person, setPersona] = React.useState(startPerson);

    function addCount (){
        setCount(count +1);
    }

    function changePerson(){
        setPersona({
            name: 'Pedro',
            email: 'pedro@eltraidor.com'
        });
    }


    return (
        <div>
            <h1> Example of Hook useState() </h1>
            <h3>Count : {count}</h3>
            <h3>Datos de la persona </h3>
            <h4>Nombre: {person.name} </h4>
            <h4>Email: {person.email} </h4>
            <div>
                <button onClick={addCount} > Add Count </button>
                <button onClick={changePerson} > Change Person </button>
            </div>
        </div>
    );
}

export default Example1;
