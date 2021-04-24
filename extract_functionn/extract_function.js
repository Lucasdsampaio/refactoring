function printOwing(invoice) {
    printBanner()
    let outstanding = calculateOutstanding(invoice)
    recordDueDate(invoice)
    printDetails(invoice, outstanding)
}

function calculateOutstanding(invoice) {
    let outstanding = 0
    for (const o of invoice.orders) {
        outstanding += o.amount
    }
    return outstanding
}

function recordDueDate(invoice) {
    const today = Clock.today
    invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDat)
}

function printDetails() {
    console.log(`name: ${invoice.customer}`)
    console.log(`amount: ${outstanding}`)
    console.log(`due: ${invoice.dueDate.toLocaleDateString()}`)
}

function printBanner() {
    console.log("***********************");
    console.log("**** Customer Owes ****");
    console.log("***********************");
}