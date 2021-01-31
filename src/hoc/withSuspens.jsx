import React from 'react';


export const WithSuspens = (Component) => {

    return (props) => {
       return <React.Suspense fallback={<div> Loading...</div>}>
            <Component{...props}/>
        </React.Suspense>
    };
}