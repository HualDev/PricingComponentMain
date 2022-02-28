let prices=[
    {
        pageViews:'10k',
        monthlyCost:8,
        leftPercentage:0
    },
    {
        pageViews:'50k',
        monthlyCost:12,
        leftPercentage:25
    },
    {
        pageViews:'100k',
        monthlyCost:16,
        leftPercentage:50,
    },
    {
        pageViews:'500k',
        monthlyCost:24,
        leftPercentage:75
    },
    {
        pageViews:'1M',
        monthlyCost:36,
        leftPercentage:100
    }
]

let range
let pageViews
let price
let frecuency =document.getElementById('frecuency')
let planType = document.getElementById('planType')
let left

document.getElementById('range').addEventListener('input',monthly)

function monthly(){
    range = document.getElementById('range')
    pageViews = document.getElementById('pageViews')
    price = document.getElementById('price')
    left= getComputedStyle(document.documentElement).getPropertyValue('--left')

    if(range.value==1){
        pageViews.textContent='10K pageviews'
        left=0
        price.textContent='$8'
        document.getElementById('range').style.setProperty('--left',left)
    }
    else if(range.value==2){
        pageViews.textContent='50k pageviews'
        left=25
        price.textContent='$12'
        document.getElementById('range').style.setProperty('--left',left)
    }
    else if(range.value==3){
        pageViews.textContent='100k pageviews'
        left=50
        price.textContent='$16'
        document.getElementById('range').style.setProperty('--left',left) 
    }

    else if(range.value==4){
        pageViews.textContent='500k pageviews'
        left=75
        price.textContent='$24'
        document.getElementById('range').style.setProperty('--left',left)
    }
    else{
        pageViews.textContent='1M pageviews'
        left=100
        price.textContent='$36'
        document.getElementById('range').style.setProperty('--left',left)
    }

}

