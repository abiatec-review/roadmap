import * as React from 'react';
import {Button} from "antd";

import './styles.scss';

export function Header() {
    return (
        <div className='header'>
            <img src={'https://public-assets.envato-static.com/assets/logos/envato_market-a5ace93f8482e885ae008eb481b9451d379599dfed24868e52b6b2d66f5cf633.svg'} alt="envanto market"/>
            <Button className='btn' type='primary'>Buy now</Button>
        </div>
    );
};