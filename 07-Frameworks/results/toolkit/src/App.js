import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";

import {fetchPosts} from "./store/reducers/actionCreator";

import Loader from "./components/Loader";
import Post from "./components/Post/Post";
import Modal from "./components/Modal/Modal";

function App() {
  const {error, isLoading, posts} = useSelector(state => state.postsReducer)
  const dispatch = useDispatch()

    const [isModal, setIsModal] = useState(false)
    const [description, setDescription] = useState('')
    useEffect(() => {
      dispatch(fetchPosts())
    }, [])

    const closeModal = () => {
      setIsModal(false)
    }

    const openModal = (info) => {
        setIsModal(true)
        setDescription(info)
    }
    return (

      <div>
        {isLoading && <Loader/>}
        {error && <span>{error}</span>}
        <div className='flex items-center justify-center flex-col'>
          {posts.length ? posts.map(elem => {
            return <Post data={elem} key={elem.id} openModal={openModal}/>
          }) : null}
        </div>

        <Modal isModal={isModal} closeModal={closeModal}>
            <div onClick={(e) => e.stopPropagation()} className='border-solid border-2 border-red-500 rounded-lg w-3/5 h-[300px] bg-white mt-[200px]'>
                <div className='text-3xl text-red-600 p-5'>{description}</div>
            </div>
        </Modal>
      </div>
  );
}

export default App;
