function price(order) {
    //price is base price ­ quantity discount + shipping
    const basePrice = order.quantity * order.itemPrice
    return basePrice - Math.max(0, order.quantity - 500) * order.itemPrice * 0.5 + Math.min(basePrice * 0.01, 100)
}