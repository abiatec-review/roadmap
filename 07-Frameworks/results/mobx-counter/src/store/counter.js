import {makeAutoObservable} from "mobx";

class Counter {
    count = 1
    maxValue = 10
    minValue = 1

    constructor() {
        makeAutoObservable(this)
    }

    increment() {
        this.count = this.count + 1
    }

    decrement() {
        this.count = this.count - 1
    }

    setMaxValue(value) {
        this.maxValue = value
    }

    setMinValue(value) {
        this.minValue = value
    }

    setValue(value) {
        this.count = value
    }
}

export default new Counter()