import * as React from 'react';
import {Button} from "antd";
import {DesktopOutlined} from "@ant-design/icons";

import {Divider} from "../Divider";
import {Items} from "./mock";

import './styles.scss';

export function Layouts() {
    return (
        <div className='layouts'>
            <Divider />
            <h2>10 Unique Layouts</h2>
            <h4>Give your next app a unique shape and make it look outstanding.</h4>
            <div className={'wrapper'}>
                <div className={'block-layouts'}>
                    {Items.map(item => {
                        return (
                            <a key={item.id} target="_blank" rel="noreferrer" href={item.link}>
                                <div className={"layout"}>
                                    <img className={'img'} src={item.img} alt={item.header}/>
                                    <div className='hover-block'>
                                        <Button className="btn">
                                            <DesktopOutlined />
                                            Live Preview
                                        </Button>
                                    </div>
                                    <h3 className={'name'}>
                                        <div></div>
                                        {item.header}
                                    </h3>
                                </div>
                            </a>
                        )
                    })}

                    <a target="_blank" href='#' rel="noreferrer">
                        <div className={"layout"}>
                            <img className={'img'} src="https://g-axon.com/wp-content/uploads/2020/05/layout-more.jpg"/>
                            <h3 className={'name'}>
                                <div></div>
                                More to come
                            </h3>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};