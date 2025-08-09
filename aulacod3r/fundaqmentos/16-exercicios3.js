let bill100 = 0
let bill50 = 0
let bill10 = 0
let bill5 = 0
let bill1 = 0

function showBills() {

    if(bill100 > 0) {
        console.log(`${bill100} bills 100`)
    }

    if(bill50 > 0) {
        console.log(`${bill50} bills 50`)
    }

    if(bill10 > 0) {
        console.log(`${bill10} bills 10`)
    }

    if(bill5 > 0) {
        console.log(`${bill5} bills 5`)
    }

    if(bill1 > 0) {
        console.log(`${bill1} bills 1`)
    }

}

function calculateWithdraw (value) {

    bill100 = 0
    bill50 = 0
    bill10 = 0
    bill5 = 0
    bill1 = 0

    let remaining = value

    while (remaining > 0) {
        bill = withdraw (remaining)
        remaining -= bill 
        
        

        switch (bill) {
            case 100:
                bill100++
                break
            case 50:
                bill50++
                break
            case 10:
                bill10++
                break
            case 5:
                bill5++
                break
            case 1:
                bill1++
                break
            default:
                break
        }
    }



}

function withdraw(remaining) {

    if (remaining >= 100) {
        return 100
    } else if (remaining >= 50) {
        return 50
    } else if (remaining >= 10) {
        return 10
    } else if (remaining >= 5) {
        return 5
    } else if (remaining >= 1) {
        return 1
    }

}



calculateWithdraw(167)

showBills()
