import * as React from 'react';
import {
    FacebookFilled,
    InstagramOutlined,
    LinkedinOutlined,
    QuestionCircleOutlined,
    TwitterOutlined
} from "@ant-design/icons";

import './styles.scss';

export function Footer() {
    return (
        <footer className='footer'>
            <div className='logo'>
                <img src="https://g-axon.com/wp-content/themes/twentysixteen-child/images/logo-footer.png" alt='gaxon logotype'/>
                <div>
                    <QuestionCircleOutlined  className={'svg'}/>
                    <span>
                        <a
                            href="https://preview.themeforest.net/item/wieldy-react-redux-ant-design-admin-template/full_screen_preview/22719616?_ga=2.51911081.1616364837.1656341266-1213331814.1645626464"
                            target="_blank"
                        >
                            Raise Ticket
                        </a>
                    </span>
                </div>
            </div>
            <div className={'info-block'}>
                <div className={'info'}>
                    <div className={'header-info'}>Our products</div>
                    <div className='divider'></div>
                    <div>
                        <a rel="noreferrer" href="https://g-axon.com/wieldy-ant-design-react-redux-admin-template/" target="_blank">Wiedly</a>
                    </div>
                    <div>
                        <a rel="noreferrer" href="https://g-axon.com/drift-angular/" target="_blank">Drift Angular</a>
                    </div>
                </div>
                <div className={'info'}>
                    <div className={'header-info'}>Important Links</div>
                    <div className='divider'></div>
                    <div>
                        <a rel="noreferrer" href="https://g-axon.com/about-us/" target="_blank">About Us</a>
                    </div>
                    <div>
                        <a rel="noreferrer" href="https://g-axon.com/support/" target="_blank">Support</a>
                    </div>
                    <div>
                        <a rel="noreferrer" href="https://g-axon.com/contact-us/" target="_blank">Contact Us</a>
                    </div>

                </div>
                <div className={'info'}>
                    <div className={'header-info'}>Our Offices</div>
                    <div className='divider'></div>
                    <span>6 Carriage Hill Drive, Far Hills
                        USA, NJ 07931
                    </span>
                    <span>488, Ward No 1, Bikaner (Raj.)
                        India, 334004
                    </span>
                </div>
            </div>
            <div className='divider'></div>
            <div className={'links'}>
                <span>© 2021 G-axon Tech Pvt. Ltd.</span>
                <div >
                    <a rel="noreferrer" href="https://www.facebook.com/Gaxon.Tech/" target="_blank">
                        <FacebookFilled />
                    </a>
                    <a rel="noreferrer" href="https://twitter.com/g_axonTech" target="_blank">
                        <TwitterOutlined />
                    </a>
                    <a rel="noreferrer" href="https://www.linkedin.com/company/g-axon/about/" target="_blank">
                        <LinkedinOutlined />
                    </a>
                    <a rel="noreferrer" href="https://www.instagram.com/g_axonTech/" target="_blank">
                        <InstagramOutlined />
                    </a>
                </div>
            </div>
        </footer>
    );
};