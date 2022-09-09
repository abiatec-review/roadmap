import {useState} from "react";
import {CaretRightOutlined, DownloadOutlined, StarFilled} from "@ant-design/icons";
import {Button, Modal} from "antd";

import './styles.scss';

export function VideoBlock() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div className='video-block'>
            <div className='info-block'>
                <h2>Wieldy: Ant Design and React Admin Template</h2>
                <span>Wieldy is a complete React admin template & starter-kit that follows Ant Design
                    Concept and implements Ant Design framework to develop a react app.</span>
                <img src={'https://g-axon.com/wp-content/uploads/2020/05/tech-logos.png'} alt="logotype react redux and other tech"/>
                <div className='price'>
                    <span className={'price-num'}>
                        <sup>$</sup>24
                    </span>
                    <div className={'stars'}>
                        <StarFilled color={'red'}/>
                        <StarFilled />
                        <StarFilled />
                        <StarFilled />
                        <StarFilled />
                    </div>
                    <span className={'review'}>25+ Reviews</span>
                    <div className='downloads'>
                        <DownloadOutlined className={'svg'} />
                        <span>1200+ downloads</span>
                    </div>
                </div>
                <div className='buttons'>
                    <Button className={'first-btn'} size={'large'} type={'primary'}>Buy now</Button>
                    <Button className={'second-btn'}>Demo</Button>
                    <Button className={'third-btn'}>Docs</Button>
                </div>
            </div>
            <div className='video'>
                <div className='dots'>
                    <div className="site-dots-list">
                        <div className='first'></div>
                        <div className='second'></div>
                        <div className='third'></div>
                    </div>
                </div>
                <img src={'https://g-axon.com/wp-content/uploads/2019/11/Banner_screen-1.png'} alt={'screen of test app'}/>
                <div className='play' onClick={showModal}>
                    <CaretRightOutlined />
                    <span>Intro</span>
                </div>
            </div>
            <Modal destroyOnClose={true} width={630} centered={true} className={'modal'} footer={null}  open={isModalOpen}  onCancel={handleCancel}>
                <iframe width="95%" height="315" src="https://www.youtube.com/embed/VsrtKNMIJsU"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
            </Modal>
        </div>
    );
};