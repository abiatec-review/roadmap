import React from 'react';
import {ReactComponent as ExLogo} from "../../../assets/images/exclamation.svg";
import DropDown from "../../DropDown/DropDown";
import {instructionsMock} from "./InstructionsMock";

function Instructions() {
    const btn = () => {
        return (
            <div className={'mr-2 bg-slate-100 rounded-full w-[32px] h-[32px] flex items-center justify-center'} >
                <ExLogo className={'w-[16px] h-[16px] text-center '}/>
            </div>
        )
    }
    const openLink = (link, clb) => {
        console.log(link)
        clb(false)
    }

    const menu = (clb) => {
        return (
            <div className={'min-w-[190px] flex flex-col  z-[999] bg-white  ease-out absolute  border border-slate-200 h-fit whitespace-nowrap max-w-[210px] top-[40px] right-0'}>
                <div className={'p-4 text-slate-500 text-sm'}>NEED HELP?</div>
                {instructionsMock.map((elem) => {
                    return (
                        <div className='text-[14px] p-2 font-normal text-base flex text-violet-500 ml-2 rounded items-center fill-violet-500 hover:text-violet-600 cursor-pointer whitespace-normal'
                             key={elem.id}
                             onClick={() => openLink(elem.link, clb)}
                        >
                            {elem.icon}
                            <span className={'ml-3'}>{elem.text}</span>
                        </div>
                    )
                })}
            </div>
        )
    }

    return (
        <div>
            <DropDown openButton={btn()} menu={menu}/>
        </div>
    );
}

export default Instructions;