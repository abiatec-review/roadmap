import {useState} from "react";
import {Area, CartesianGrid, AreaChart, Tooltip, XAxis, ResponsiveContainer} from "recharts";
import {Button, Card, CardActions, CardContent} from "@mui/material";

import './style.scss'
import {data} from "./constants";

const state = [
    190, 200, 300,400
]
export const OrdersChart = () => {
    const CustomToolTip = ({payload}) => {
        return (
            <div className={'tooltip'}>
                <div>ORDERS</div>
                <div>{payload[0]?.payload?.orders} USD</div>
            </div>
        )
    }

    return (
        <div className='order-charts'>
            <Card sx={{ minWidth: 275 }} className={'card'}>
                <CardContent>
                    <ResponsiveContainer width={'100%'} height={192}>
                        <AreaChart
                            data={data}
                            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                        >
                            <CartesianGrid horizontal={false} vertical={false} strokeDasharray="3 3" />
                            <Tooltip content={CustomToolTip} />
                            <Area type="monotone" dataKey={'orders'} stroke="#3ea117" fillOpacity={0.1} fill="#3ea117" />
                        </AreaChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>
        </div>
    );
};