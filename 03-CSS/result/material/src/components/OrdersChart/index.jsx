import {Area, CartesianGrid, AreaChart, Tooltip, ResponsiveContainer} from "recharts";
import {Card, CardContent} from "@mui/material";
import {data} from "./constants";
import './style.scss'

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
            <Card sx={{ minWidth: 275, height: 110 }} className={'card'}>
                <div className="header">
                    <h2>Orders</h2>
                    <div>293</div>
                </div>
                <CardContent>
                    <ResponsiveContainer width={'100%'} height={65}>
                        <AreaChart
                            height={65}
                            data={data}
                            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
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