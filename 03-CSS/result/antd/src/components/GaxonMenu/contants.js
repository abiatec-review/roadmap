import {Menu} from "antd";
import * as React from "react";

export const menu = (
    <Menu
        items={[
            {
                key: '1',
                label: (
                    <a className={'link'} href={'https://jumbo.g-axon.com/'}>
                        Jumbo
                    </a>
                ),
            },
            {
                key: '2',
                label: (
                    <a className={'link'} href={'https://g-axon.com/wieldy-ant-design-react-redux-admin-template/'}>
                        Wieldy
                    </a>
                ),
            },
            {
                key: '3',
                label: (
                    <a className={'link'}href={'https://g-axon.com/drift-angular/'}>
                        Drift Angular
                    </a>
                ),
            },
        ]}
    />
);