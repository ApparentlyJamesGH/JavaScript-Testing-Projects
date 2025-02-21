const counter = document.getElementById("cntr")
const base = document.getElementById("base")
const hourly = document.getElementById("hourly")
const hours = document.getElementById("hours")
const complex = document.getElementById("complex")
const discount = document.getElementById("discount")

const busy = document.getElementById("busy")
const Break = document.getElementById("break")
const rush = document.getElementById("rush")

async function calc(only) {
    let total = (Number(base.value) + (Number(hourly.value) * Number(hours.value))) * Number(complex.value)
    if (busy.checked) { total = total + (total * .1) }
    if (Break.checked) { total = total + (total * .15) }
    if (rush.checked) { total = total + (total * .18) }

    total = total * (100 - Number(discount.value))/100

    if (only) { return total }
    counter.innerText = `Total fee: $${total} (€${total * .95})`
}

async function calcr() {
    let total = (Number(base.value) + (Number(hourly.value) * Number(hours.value))) * Number(complex.value)
    if (busy.checked) { total = total + (total * .1) }
    if (Break.checked) { total = total + (total * .15) }
    if (rush.checked) { total = total + (total * .18) }

    total = total * (100 - Number(discount.value))/100
    total = total / .0035

    counter.innerText = `Total fee: R$${math.ceil(total)}`
}