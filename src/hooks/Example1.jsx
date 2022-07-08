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
            
        </div>
    );
}

export default Example1;
