import * as React from 'react';
import './styles.scss';
import {Divider} from "../Divider";
import {Button, Input} from "antd";

export function Prefooter() {
    return (
        <div className='prefooter'>
            <img className={'first-img'} src="https://g-axon.com/wp-content/themes/twentysixteen-child/images/newsletter-left-img.png" alt="paper plane"/>
            <div className='content'>
                <Divider />
                <h2>Be the first to get product updates freebies and more</h2>
                <Input.Group compact className={'input-group'}>
                    <Input className={'input'}  placeholder={'Email Adress'} />
                    <Button className={'btn'} type="primary">Subscribe</Button>
                </Input.Group>
            </div>
            <img className={'sec-img'} src=' https://g-axon.com/wp-content/themes/twentysixteen-child/images/newsletter-right-img.png' alt="newsletter"/>
        </div>
    );
};