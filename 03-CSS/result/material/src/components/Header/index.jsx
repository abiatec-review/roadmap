import {Button} from "@mui/material";
import './style.scss'

export const Header = () => {
    return (
        <header className='header-block'>
            <img src={'https://public-assets.envato-static.com/assets/logos/envato_market-a5ace93f8482e885ae008eb481b9451d379599dfed24868e52b6b2d66f5cf633.svg'}  alt='envato market' />
            <Button className={'btn'}  variant="contained">Buy now</Button>
        </header>
    );
};