const dataMonthly = [
    {
        "max": 300,
        "min": 150,
    },
    {
        "max": 400,
        "min": 200,
    },
    {
        "max": 350,
        "min": 175,
    },
    {
        "max": 500,
        "min": 250,
    },
    {
        "max": 300,
        "min": 150,
    },
    {
        "max": 450,
        "min": 225,
    },
    {
        "max": 500,
        "min": 250,
    },
    {
        "max": 500,
        "min": 250,
    },
    {
        "max": 650,
        "min": 375,
    },
    {
        "max": 500,
        "min": 300,
    },
    {
        "max": 700,
        "min": 350,
    },
    {
        "max": 450,
        "min": 225,
    },
    {
        "max": 300,
        "min": 200,
    },
]
const dataYearly = [
    {
        "max": 250,
        "min": 125,
    },
    {
        "max": 350,
        "min": 175,
    },
    {
        "max": 320,
        "min": 160,
    },
    {
        "max": 400,
        "min": 200,
    },
    {
        "max": 550,
        "min": 275,
    },
    {
        "max": 450,
        "min": 225,
    },
    {
        "max": 600,
        "min": 375,
    },
    {
        "max": 400,
        "min": 300,
    },
    {
        "max": 500,
        "min": 350,
    },
    {
        "max": 650,
        "min": 225,
    },
    {
        "max": 450,
        "min": 300,
    },
]
export const CHART_STATE = {
    MONTHLY: 'MONTHLY',
    YEARLY: 'YEARLY'
}
export const resultState = {
    [CHART_STATE.MONTHLY]: dataMonthly,
    [CHART_STATE.YEARLY]: dataYearly
}