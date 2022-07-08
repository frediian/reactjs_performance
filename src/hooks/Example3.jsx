import React, {useState, useContext} from 'react';

const myContext = React.createContext(null);

const Component1 = () => {
    const state = useContext(myContext);
    
    return (
        <div>
            <h1>The token is:  {state.token} </h1>

            <Component2 />
        </div>
    );
}

const Component2 = () => {
    const state = useContext(myContext);

    return (
        <div>
            <h2>
                The Session is: {state.session}
            </h2>
        </div>
    );
}


export default function Example3(){
    const startState = {
        token: '1234',
        session: 1
    }

    const[sessionData, setSessionData] = useState(startState);

    function changeSession(){
        setSessionData(
            {
                token: 'ju23b',
                session: sessionData.session + 1
            }
        );
    }

    return (
        <myContext.Provider value={sessionData} >
            {/* Read All Data of SessionData */}
            <Component1 />
            <button onClick={changeSession} > Change Data Session </button>
        </myContext.Provider>
    )
};
