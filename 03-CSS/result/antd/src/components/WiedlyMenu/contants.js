import {Menu} from "antd";
import * as React from "react";

export const menu = (
    <Menu
        items={[
            {
                key: '1',
                label: (
                    <a className={'link'} href={'https://jumbo.g-axon.com/'}>
                        Live demos
                    </a>
                ),
            },
            {
                key: '2',
                label: (
                    <a className={'link'} href={'https://g-axon.com/wieldy-ant-design-react-redux-admin-template/'}>
                        What you will get
                    </a>
                ),
            },
            {
                key: '3',
                label: (
                    <a className={'link'}href={'https://g-axon.com/drift-angular/'}>
                        Widgets and metrics
                    </a>
                ),
            },
            {
                key: '4',
                label: (
                    <a className={'link'}href={'https://g-axon.com/drift-angular/'}>
                        In Built app
                    </a>
                ),
            },
            {
                key: '5',
                label: (
                    <a className={'link'}href={'https://g-axon.com/drift-angular/'}>
                        Key features
                    </a>
                ),
            },
        ]}
    />
);

export const menuMobile = (
    <Menu
        items={[
            {
                key: '1',
                label: (
                    <a className={'link'} href={'https://jumbo.g-axon.com/'}>
                        Live demos
                    </a>
                ),
            },
            {
                key: '2',
                label: (
                    <a className={'link'} href={'https://g-axon.com/wieldy-ant-design-react-redux-admin-template/'}>
                        What you will get
                    </a>
                ),
            },
            {
                key: '3',
                label: (
                    <a className={'link'}href={'https://g-axon.com/drift-angular/'}>
                        Widgets and metrics
                    </a>
                ),
            },
            {
                key: '4',
                label: (
                    <a className={'link'}href={'https://g-axon.com/drift-angular/'}>
                        In Built app
                    </a>
                ),
            },
            {
                key: '5',
                label: (
                    <a className={'link'}href={'https://g-axon.com/drift-angular/'}>
                        Key features
                    </a>
                ),
            },
            {
                key: '6',
                label: (
                    <a className={'link'}href={'https://g-axon.com/drift-angular/'}>
                        Overview
                    </a>
                ),
            },
            {
                key: '7',
                label: (
                    <a className={'link'}href={'https://g-axon.com/drift-angular/'}>
                        Try Demo
                    </a>
                ),
            },
        ]}
    />
);