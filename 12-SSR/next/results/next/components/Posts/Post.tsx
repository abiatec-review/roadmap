import React from 'react';
import {useRouter} from "next/router";
import {useTypedSelector} from "../../hooks/hooks";
import Image from "next/image";

function Post() {
    const onePost = useTypedSelector((state) => state.onePost)
    const router = useRouter()
    return (
        <div className={'w-full flex items-center justify-center'}>
            {onePost && <div className={'flex flex-col w-full lg:w-1/2 text-center'}>
                <div className={'lg:text-3xl  m-3'}>{onePost.body}</div>
                <Image width={500} height={500} src={onePost.image} className={'h-[500px] object-cover  m-3'} alt={'image with city'}/>
                <div className={'lg:text-3xl m-3'}>{onePost.footer}</div>
                <Image width={500} height={500} src={onePost.imageBody} className={'h-[500px] object-cover  m-3'} alt={'image with cat'}/>
                <button className={'p-2 hover:bg-blue-300 bg-blue-200 m-3 rounded-2xl text-white text-xl'} onClick={() => router.back()}>Go back</button>
            </div>
            }
        </div>
    );
}

export default Post;