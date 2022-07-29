function task1 () {
    const sum = (a) => (b) => a + b
    console.log(sum(3)(4))
}

function task2() {
    const makeCounter = () => {
        let counter = 0
        return () => ++counter
    }

    const counter = makeCounter()
    const counter2 = makeCounter()

    console.log(counter())
    console.log(counter())
    console.log(counter())
    console.log(counter2())
}

function task3() {
    const makeCounter = (num = 0) => {
        let counter = num
        return {
            increase:  () => ++counter,
            decrease: () => --counter,
            reset: () => {
                counter = 0
                return counter
            },
            set: (num) => {
                counter = num
                return counter
            },
        }
    }

    const counter = makeCounter(3)

    console.log(counter.counter)
    console.log(counter.increase())
    console.log(counter.increase())
    console.log(counter.decrease())
    console.log(counter.reset())
    console.log(counter.increase())
    console.log(counter.set(123))
    console.log(counter.increase())
    console.log(counter.increase())
}

function task4 () {
    function superSum(n) {
        if (n === 0) return 0;
        if (n === 1) return (num) => num;

        let allArg = [];

        function helper(...args) {
            allArg = [...allArg, ...args];
            if(allArg.length >= n) {
                allArg.length = n;
                return allArg.reduce((acc, number) => acc + number)
            } else {
                return helper;
            }
        }
        return helper;
    }


    console.log( superSum(0) )
    console.log( superSum(3)(2)(5)(3) )
    console.log( superSum(3)(2)(5,3) )
    console.log( superSum(3)(2,5,3) )
    console.log( superSum(3)(2,5)(3) )
    console.log( superSum(3)(2,5)(3,9) )
}

function task5 () {

    const subtask1 = () => {
        const sumToLoop = (num) => {
            let res = 0;
            for(let i = 0; i <= num; i++) {
                res += i
            }
            return res
        }

        const sumToRecursion = (num) => {
            let res = 0;
            if(num < 1) return res
            return num + sumToRecursion(num - 1)
        }
        const sumToArithmeticProgression = (num) => {
            return ((1 + num) / 2) * (((num - 1) / (2 - 1)) + 1)
        }


        console.log(sumToLoop(100))
        console.log(sumToRecursion(100))
        console.log(sumToArithmeticProgression(100))
    }

    const subtask2 = () => {

        const factorial = (num) => {
            if (num === 1) return num
            return num * factorial(num - 1)
        }

        console.log(factorial(5))
        console.log(factorial(4))
    }

    const subtask3 = () => {

        // const fib = (n) => {
        //     if (n < 1) return 1
        //     return fib(n - 1) + fib(n - 2)
        // }

        const fib = (n) => {
            let a = 1;
            let b = 1;
            for(let i = 3; i < n; i++) {
                let c = a + b;
                a = b;
                b = c
            }
            return b
        }

        console.log(fib(77))
    }


    const subtask4 = () => {
        let list = {
            value: 1,
            next: {
                value: 2,
                next: {
                    value: 3,
                    next: {
                        value: 4,
                        next: null
                    }
                }
            }
        };

        const printListRecursion = (list) => {
            console.log(list.value)
            if (!list.next) return
            printListRecursion(list.next)
        }

        const printListLoop = (list) => {
            let newList = list

            while(newList) {
                console.log(newList.value)
                newList = newList.next
            }
        }

        printListRecursion(list)
        printListLoop(list)
    }

    const subtask5 = () => {

        let list = {
            value: 1,
            next: {
                value: 2,
                next: {
                    value: 3,
                    next: {
                        value: 4,
                        next: null
                    }
                }
            }
        };

        const printListRecursion = (list) => {
            if (list.next) {
               printListRecursion(list.next)
            }
            console.log(list.value)
        }

        const printListLoop = (list) => {
            let newList = list

            let arr = []

            while(newList) {
                arr.push(newList.value)
                newList = newList.next
            }

            arr.reverse().forEach(elem => console.log(elem))
        }

        // printListRecursion(list)
        printListLoop(list)
    }

    // subtask1()
    // subtask2()
    // subtask3()
    // subtask4()
    // subtask5()

}

function task6() {
    let arr1 = [[5, [3, 4, [1, 2, 3]]]]

    const myFlat = (arr) => {
        let bufferArr = [...arr]

        for (let i = 0; i < bufferArr.length; i ++) {
            if(Array.isArray(bufferArr[i])) {
                bufferArr = [...bufferArr.slice(0, i), ...bufferArr[i], ...bufferArr.slice(i + 1)]
            }
        }

        return bufferArr
    }

    console.log(myFlat(arr1))
}

function task7() {
    function greeting() {
        return `My name is ${this.name}. I am ${this.age}`
    }
    const someObj = {
        name: 'Ilia',
        age: '23',
    }
    someObj.greeting = greeting
    console.log(someObj.greeting())
}

function task8() {
    const counter = {
        num: 0,
        getCurrentCount() {
            return this.num
        },
        increment() {
            return ++this.num
        },
        decrement() {
            return --this.num
        },
        setCurrentCount(currentCount) {
            this.num = currentCount
            return this.num
        },
        restCurrentCount() {
            this.num = 0
            return this.num
        }
    }

    console.log(counter.increment())
    console.log(counter.increment())
    console.log(counter.increment())
    console.log(counter.decrement())
    console.log(counter.setCurrentCount(10))
    console.log(counter.increment())
    console.log(counter.increment())
    console.log(counter.restCurrentCount())

}

function task9() {
    const counter = {
        num: 0,
        getCurrentCount() {
            return this.num
        },
        increment() {
            ++this.num
            return this
        },
        decrement() {
            --this.num
            return this
        },
        setCurrentCount(currentCount) {
            this.num = currentCount
            return this
        },
        restCurrentCount() {
            this.num = 0
            return this
        }
    }

    console.log(counter.setCurrentCount(10).increment().increment().increment().decrement().getCurrentCount())

}

function task10() {
    let One = {
        name: 'One'
    };
    let Two = {
        name: 'Two',
        sayHello: function() {
            console.log(`Hello, my name is ${this.name}`)
        }
    };

   Two.sayHello.bind(One)()
}

function task11() {
    const helperObj = {
        name: 'Ilia',
        age: '23',
        changeName(name) {
            this.name = name
        },
        setAge(age) {
            this.age = age
        },
        sayHello: function() {
            console.log(`Hello, my name is ${this.name}. My age is ${this.age}`)
        }
    }

    helperObj.sayHello()

    console.log(helperObj.name)
    helperObj.changeName('petya')
    console.log(helperObj.name)

    console.log(helperObj.age)
    helperObj.setAge('33')
    console.log(helperObj.age)

    helperObj.sayHello()
}

function task12() {

    const drivers = [
        {
            name: 'Ilia',
            surname: 'Prihodko',
            car: 'Reno',
            orders: [
                100, 1, 233, 13, 32
            ]
        },
        {
            name: 'Anton',
            surname: 'Prihodko',
            car: 'Nissan',
            orders: [
                1, 1, 3, 1, 0.5
            ]
        },
        {
            name: 'sadadsada',
            surname: 'Prihod3123123ko',
            car: 'Reno',
            orders: [
                2, 1, 2, 2, 2
            ]
        },
        {
            name: 'Ilia12',
            surname: 'Prihodko3123131',
            car: 'mitsubisi',
            orders: [
                100, 3, 5, 10, 32
            ]
        },
        {
            name: 'Iliafsdf',
            surname: 'Prihsdfodko',
            car: 'Rasdasdadsaeno',
            orders: [
                312, 1, 233, 13, 32
            ]
        },
        {
            name: 'fsdf',
            surname: 'saf',
            car: 'Ren   qw  wqq o',
            orders: [
                1, 1, 1, 1, 0.5
            ]
        },
        {
            name: 'Ilidfagfea',
            surname: 'Prihgsagsdgfdsgdodko',
            car: 'gdfgsdgsdgReno',
            orders: [
                100, 1000, 233, 13, 32
            ]
        },
        {
            name: 'Ilifsda',
            surname: 'Prifshodko',
            car: 'Renaso',
            orders: [
                100, 31, 233, 13, 32
            ]
        },
        {
            name: 'Iliaffafaefwea',
            surname: 'Prifadhodko',
            car: 'Reno',
            orders: [
                100, 1, 223, 13, 32
            ]
        },
        {
            name: 'Ilasdfaia',
            surname: 'Prihfdsfsodko',
            car: 'Renofsdfafsdf',
            orders: [
                100, 1, 233, 13, 33332
            ]
        },
    ]


    console.log(drivers.sort((a, b) => {
        return a.orders.reduce((elem, acc) => (elem + acc)) / a.orders.length - b.orders.reduce((elem, acc) => (elem + acc))/ b.orders.length
    }))

    console.log(drivers.filter(elem => elem.orders.some(order => order > 4)))
}

function task13() {
    class Time {
        constructor(hours, minutes, seconds) {
            this.hours = hours
            this.minutes = minutes
            this.seconds = seconds
        }

        setHours(value) {
            if (typeof value !== 'number' && value >= 60) {
                console.log("введите правильное число");
                return;
            }
            this.hours = value;
        }
        setMinutes(value) {
            if (typeof value !== 'number' && value >= 60) {
                console.log("введите правильное число");
                return;
            }
            this.minutes = value;
        }
        setSeconds(value) {
            if (typeof value !== 'number' && value >= 60) {
                console.log("введите правильное число");
                return;
            }
            this.seconds = value;
        }


        showTime() {
            console.log(`${this.hours}:${this.minutes}:${this.seconds}`)
        }
    }

    const time = new Time(11, 22, 44)

    time.showTime()
    time.setHours(9)
    time.setSeconds(9)
    time.showTime()
}

function task14() {

    class Customer {
        constructor(firstName, lastName, address, billNumber) {
            this.firstName = firstName
            this.lastName = lastName
            this.address = address
            this.billNumber = billNumber
        }

        setFirstName(value) {
            if(typeof value !== 'string') return console.log('please enter string value')
            this.firstName = value
        }

        setLastName(value) {
            if(typeof value !== 'string') return console.log('please enter string value')
            this.lastName = value
        }

        setAddress(value) {
            if(typeof value !== 'string') return console.log('please enter string value')
            this.address = value
        }

        setBillNumber(value) {
            if(typeof value !== 'number') return console.log('please enter number value')
            this.billNumber = value
        }

        showInfo() {
            return `First Name is ${this.firstName}, last name is ${this.lastName}. 
                Address is ${this.address}, bill number is ${this.billNumber}`
        }
    }

    let customer1 = new Customer('Ilya', 'Prihodko', 'Krestyanskata 5', 333)
    let customer2 = new Customer('Anton', 'dfsfsfs', 'Kgdfgdfgdfgdgdgdanskata 5', 444)
    let customer3 = new Customer('Petya', 'sfsfsffff', 'faaaaa 5', 12333)

    const customers = [ customer1, customer2, customer3]

    console.log(customers.sort((a, b) => {
        if ( a.firstName < b.firstName ){
            return -1;
        }
        if ( a.firstName > b.firstName ){
            return 1;
        }
        return 0;
    }))

    const min = 331;
    const max = 500

    console.log(customers.filter((cstmr) => {
        return cstmr.billNumber > min && cstmr.billNumber < max
    }))
}

function task15() {
    class Car {
        constructor(brand, cylinders, power) {
            this.brand = brand
            this.cylinders = cylinders
            this.power = power
        }

        showInfo() {
            console.log(`Car is ${this.brand}. It has ${this.cylinders} cylinder(s). The power is ${this.power}`)
        }
    }

    class Van extends Car {
        constructor(loadCapacity, ...args) {
            super(...args);
            this.loadCapacity = loadCapacity
        }

        setBrand(brand) {
            this.brand = brand
        }

        setLoadCapacity(loadCapacity) {
            this.loadCapacity = loadCapacity
        }
    }

    const reno = new Car('reno', 4, 1000)

    reno.showInfo()

    const van = new Van(4000, 'voltswagen', 8, 1000)

    van.showInfo()
    van.setBrand('fdfdf')
    van.setLoadCapacity(10000)
    van.showInfo()
}

function task16() {
    Number.prototype.plus = function(num) {
       return this.valueOf() + num;
    };
    Number.prototype.minus = function(num) {
       return this.valueOf() - num;
    };

    let per = 2

    console.log(per.plus(3).minus(1))
}

function task17() {
    function test(divider, ...args) {
        return args.join(divider)
    }

    console.log(test('*', '1', 'b', '1c'))
}

function task18() {
    const tree = {
        valueNode: 3,
        next: [
            {
                valueNode: 1,
                next: null
            },
            {
                valueNode: 3,
                next: null
            },
            {
                valueNode: 2,
                next: null
            },
            {
                valueNode: 2,
                next: [
                    {
                        valueNode: 1,
                        next: null
                    },
                    {
                        valueNode: 5,
                        next: null
                    }
                ]
            }]
    };

    function sumRecursion(tree) {

        let sum = 0

        const helper = (tree, clb) => {
            sum += tree.valueNode
            clb(tree.next)
        }

        function recursion (tree) {
            if(Array.isArray(tree)) {
                tree.forEach((tree) => {
                    if (!tree.next) {
                        sum += tree.valueNode
                        return
                    }
                    helper(tree, recursion)
                })
            }
            else {
                if (!tree.next) return sum + tree.valueNode
                helper(tree, recursion)
            }

        }

        recursion(tree)

        console.log(sum)
    }

    sumRecursion(tree)
}

function task19() {
    function f(a, b) {
        if(b) {
            return a + b
        } else return (b) => a + b
    }

    console.log(f(2, 3))
    console.log(f(2)( 3))
}

function task20() {
    function f(num) {
        let value = num;

        return function (num) {
            if (num) {
                return f(value + num);
            } else {
                return value;
            }
        }
    }

    console.log(f(1)(2)(3)())
    console.log(f(0)(3)(1)(5)())
}

function task21() {
    let str = "())({}}{()][]["
    let str2 = "()({})[]"

    function test(str) {
        const brackets = {
            ')': '(',
            ']': '[',
            '}': '{'
        };

        const arr = [];

        for (let i = 0; i < str.length; i++) {
            if ([')', ']', '}'].indexOf(str[i]) > -1) {
                if (brackets[str[i]] !== arr.pop()) return false;
            } else {
                arr.push(str[i]);
            }
        }
        return arr.length === 0;
    }

    console.log(test(str))
    console.log(test(str2))
}

function task22() {
    function isSorted(arr) {
        const buffer = [...arr]
        return buffer.sort((a, b) => a - b).join('') === arr.join('');
    }

    console.log(isSorted([1,2,3]))
    console.log(isSorted([1,2,3,2,1]))
}

