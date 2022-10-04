import React from 'react';
import {useRouter} from "next/router";
import {TPost} from "../../redux/reducer";
import {useTypedSelector} from "../../hooks/hooks";

function PostsInfo() {
    const posts = useTypedSelector((state) => state.posts)
    const router = useRouter()

    return (
        <div className={'flex gap-10 flex-col lg:flex-row lg:flex-wrap m-5 w-full'}>
            {
                posts?.map((elem: TPost) => (
                    <div className={'lg:w-1/3 overflow-hidden relative'} key={elem.id}>
                        <div
                            onClick={() => router.push(`/posts/${elem.id}`)}
                            style={{ backgroundImage: `url(${elem.image})`}}
                            className={'h-[300px] bg-cover bg-no-repeat rounded cursor-pointer ease-in duration-200 hover:scale-110 '}
                        />
                            <div className={'bg-neutral-900 w-fit text-white p-3 rounded-tr-lg text-lg absolute bottom-0'}>
                                <div>{elem.title}</div>
                            </div>
                    </div>
            ) )}
        </div>
    );
}

export default PostsInfo;