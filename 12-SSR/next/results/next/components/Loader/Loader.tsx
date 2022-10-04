import React from 'react';

const Loader = () => {
    return (
        <div className={'flex w-full h-screen items-center justify-center'}>
            <div className="lds-spinner w-1/3">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>

    );
};

export default Loader;