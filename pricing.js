let range
let pageViews
let price
let frecuency
let planType = document.getElementById('planType')
let left

document.getElementById('range').addEventListener('input',calculate)



function calculate(){
    range = document.getElementById('range')
    pageViews = document.getElementById('pageViews')
    price = document.getElementById('price')
    left= getComputedStyle(document.documentElement).getPropertyValue('--left') 
    frecuency =document.getElementById('frecuency')
    
    if(range.value==1){
        if(planType.checked){
            price=8*12*0.75
            document.getElementById('price').textContent='$'+price
            pageViews.textContent='10k pageviews'
            frecuency='/ year'
            document.getElementById('frecuency').textContent=frecuency
                      
        }else
        pageViews.textContent='10K pageviews'
        left=0
        price.textContent='$8'
        document.getElementById('range').style.setProperty('--left',left)
        frecuency.textContent='/ month'        
    }
    else if(range.value==2){
        if(planType.checked){
            price=12*12*0.75
            document.getElementById('price').textContent='$'+price 
            pageViews.textContent='50k pageviews'
            frecuency='/ year'
            document.getElementById('frecuency').textContent=frecuency           
        }else
        pageViews.textContent='50k pageviews'
        left=25
        price.textContent='$12'
        document.getElementById('range').style.setProperty('--left',left)
        frecuency='/ month'
        document.getElementById('frecuency').textContent=frecuency
    }
    else if(range.value==3){
        if(planType.checked){
            price=16*12*0.75
            document.getElementById('price').textContent='$'+price 
            pageViews.textContent='100k pageviews'
            frecuency='/ year'
            document.getElementById('frecuency').textContent=frecuency           
        }else
        pageViews.textContent='100k pageviews'
        left=50
        price.textContent='$16'
        document.getElementById('range').style.setProperty('--left',left)
        frecuency.textContent='/ month' 
    }

    else if(range.value==4){
        if(planType.checked){
            price=24*12*0.75
            document.getElementById('price').textContent='$'+price 
            pageViews.textContent='500k pageviews'
            frecuency='/ year'
            document.getElementById('frecuency').textContent=frecuency           
        }else
        pageViews.textContent='500k pageviews'
        left=75
        price.textContent='$24'
        document.getElementById('range').style.setProperty('--left',left)
        frecuency.textContent='/ month'
    }
    else{
        if(planType.checked){
            price=36*12*0.75
            document.getElementById('price').textContent='$'+price 
            pageViews.textContent='1M pageviews'
            frecuency='/ year'
            document.getElementById('frecuency').textContent=frecuency           
        }else
        pageViews.textContent='1M pageviews'
        left=100
        price.textContent='$36'
        document.getElementById('range').style.setProperty('--left',left)
        frecuency.textContent='/ month'
    }
}

