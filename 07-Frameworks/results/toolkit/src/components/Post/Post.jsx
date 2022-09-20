import React from 'react';

function Post({data: {title, body}, openModal}) {
    return (
        <div className="group flex flex-col p-6 border-solid border-2 border-red-500 rounded-lg mt-1.5 w-1/2
            hover:bg-red-500 hover:cursor-pointer"
            onClick={() => {openModal(body)}}
        >
            <div className='group-hover:text-white text-lg mb-2 text-red-600'>{title}</div>
        </div>
    );
}

export default Post;