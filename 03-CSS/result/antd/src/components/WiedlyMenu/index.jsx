import * as React from 'react';
import {Button, Dropdown} from "antd";
import { CaretDownOutlined } from '@ant-design/icons'

import {menu, menuMobile} from "./contants";

import './styles.scss';

export function WiedlyMenu() {
    return (
        <div className='wiedly-menu'>
            <img src={'https://g-axon.com/wp-content/uploads/2019/11/wieldy-header-logo.png'} alt='gAxon logotype'/>
            <div className='menu-block'>
                <div className='menu-item selected'>Overview</div>
                <div className='menu-item'>Try Demo</div>
                <div className='menu-item'>
                    <Dropdown overlay={menu}>
                        <span>Features <CaretDownOutlined/></span>
                    </Dropdown>
                </div>
                <div className='menu-item'>Docs</div>
                <div className='menu-item'>GitHub Repo</div>
                <div className='menu-item'>Support</div>
            </div>
            <div className='price-block'>
                <div className="price">$24.00</div>
                <Button type={'primary'} className={'btn'} size={'large'}>Buy now</Button>
                <div className={'mobile-block'}>
                    <Dropdown overlay={menuMobile} trigger={['click']}>
                        <div className={'btn-mobile'}>Overview <CaretDownOutlined/></div>
                    </Dropdown>
                </div>
            </div>
        </div>
    );
};