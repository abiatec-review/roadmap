import {useState} from "react";
import {Area, CartesianGrid, AreaChart, Tooltip, XAxis, ResponsiveContainer} from "recharts";
import {Button, Card, CardActions, CardContent} from "@mui/material";

import {CHART_STATE, resultState} from "./constants";

import './style.scss'

export const SalesOverview = () => {
    const [chartState, setChartState] = useState(CHART_STATE.MONTHLY)
    const CustomToolTip = ({payload}) => {
        return (
            <div className={'tooltip'}>
                <div>max</div>
                <div>{payload[0]?.payload?.max} USD</div>
                <div>min</div>
                <div>{payload[0]?.payload?.min} USD</div>
            </div>
        )
    }

    return (
        <div className='sales-overview'>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <div className="header">
                        <h2>Sales overview</h2>
                        <CardActions>
                            <Button color="secondary" variant='contained' size="small" onClick={() => setChartState(CHART_STATE.MONTHLY)}>{CHART_STATE.MONTHLY}</Button>
                            <Button color="secondary" variant='contained' size="small" onClick={() => setChartState(CHART_STATE.YEARLY)}>{CHART_STATE.YEARLY}</Button>
                        </CardActions>
                    </div>
                    <ResponsiveContainer width={'100%'} height={192}>
                        <AreaChart
                            data={resultState[chartState]}
                            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                        >
                            <CartesianGrid horizontal={false} strokeDasharray="3 3" />
                            <Tooltip content={CustomToolTip} />
                            <Area type="monotone" dataKey="max" stroke="#7352C7" fillOpacity={0.1} fill="#7352C7" />
                            <Area type="monotone" dataKey="min" stroke="#F39711" fillOpacity={0.1} fill="#F39711" />
                        </AreaChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>
        </div>
    );
};