import React, {useState, useRef, useEffect} from 'react';

const Example2 = () => {

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const myRef = useRef();

    function addCount1 (){
        setCount1(count1 +1);
    }

    function addCount2 (){
        setCount2(count2 +1);
    }
// useEffect
    /* Case 1 */
    // useEffect(()=>{
    //     console.log('Elementos');
    //     console.log(myRef);
    // });

    /* CASE 2  */
    // useEffect(()=> {
    //     console.log('Cambios en el COunt 1');
    //     console.log(myRef);
    // }, [count1]
    // );

    /* CASE 3  */
    useEffect(()=> {
        console.log('Cambios en el COunt 1 || Count 2');
        console.log(myRef);
    }, [count1, count2]
    );    

    return (
        <div>
            <h1> Example of useState(), useRef() y useEffect() </h1>
            <h3>Count 1: {count1} </h3>
            <h3>Count 2: {count2} </h3>

            <h4 ref={myRef}>
                Example of Reference
            </h4>

            <div>
                <button onClick={addCount1} > Add Count 1 </button>
                <button onClick={addCount2} > Add Count 2 </button>
            </div>

        </div>
    );
}

export default Example2;
