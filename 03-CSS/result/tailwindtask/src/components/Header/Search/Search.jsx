import React, {useState} from 'react';
import {ReactComponent as SearchLogo} from '../../../assets/images/search.svg'
import {ReactComponent as CycleLogo} from '../../../assets/images/cycle.svg'
import {ReactComponent as PageLogo} from '../../../assets/images/blankpage.svg'
import {recentMock} from "./searchMock";

function Search() {

    const [isModal, setIsModal] = useState(false)
    const [searchValue, setSearchValue] = useState('')

    const findInfo = (e) => {
        e.preventDefault()
        console.log('find ' + searchValue)
    }

    const openLink = (link) => {
        console.log(link)
        setIsModal(false)
    }
    const SearchResults = () => {
        const {recentSearches, recentPages} = recentMock

        if (!recentSearches?.length && !recentPages?.length) {
            return <div>There are no any searches</div>
        }

        return (
            <>
                {recentSearches?.length &&
                    <div>
                        <div className={'p-4 text-slate-500 text-sm'}>RECENT SEARCHES</div>
                        {recentSearches.map((elem) => {
                            return (
                                <div
                                    key={elem.key}
                                    className='text-base flex ml-2 mr-2 rounded p-2 items-center hover:bg-violet-500 hover:text-white cursor-pointer'
                                    onClick={() => openLink(elem.link)}
                                >
                                    <CycleLogo className={'w-[20px] '}/>
                                    <span className={'ml-2'}>{elem.content}</span>
                                </div>
                            )
                        })}
                    </div>
                }
                {recentPages?.length &&
                    <div>
                        <div className={'p-4 text-slate-500 text-sm'}>RECENT PAGES</div>
                        {recentPages.map((elem) => {
                            return (
                                <div
                                    className='text-base flex ml-2 mr-2 rounded p-2 items-center hover:bg-violet-500 hover:text-white cursor-pointer'
                                    key={elem.key}
                                    onClick={() => openLink(elem.link)}
                                >
                                   <PageLogo className={'w-[20px]'}/>
                                   <span className={'ml-2'}>{elem.content}</span>
                                </div>
                            )
                        })}
                    </div>
                }
            </>
        )
    }

    return (
        <div>
            <button onClick={() => setIsModal(true)} className={'bg-slate-100 rounded-full w-[32px] h-[32px] flex items-center justify-center' }>
                <SearchLogo className={'w-[16px] text-center '}/>
            </button>

            {isModal &&
                <div className="flex justify-center h-screen bg-slate-900/[.4] fixed w-screen z-[999] inset-0 " onClick={() => setIsModal(false)}>
                    <div className={' flex flex-col rounded sm:w-1/2 w-[90%] min-h-[500px] h-fit mt-[10%] bg-white'} onClick={(e) => e.stopPropagation()}>
                        <form onSubmit={findInfo} className={'p-4 flex items-center'}>
                            <button className={'p-1.5'} type={'submit'} >
                                <SearchLogo className={'w-[16px] text-center  '}/>
                            </button>
                            <input
                                onChange={(e) => setSearchValue(e.target.value)}
                                value={searchValue}
                                className={'outline-none text-slate-500'}
                                type={'text'}
                                placeholder={'Search Anything...'}
                            />
                        </form>
                        <div className="h-[1px] bg-slate-200"/>
                        {SearchResults()}
                    </div>
                </div>
            }
        </div>
    );
}

export default Search;