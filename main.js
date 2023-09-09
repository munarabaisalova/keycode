let insert = document.getElementById('insert')
document.addEventListener('keydown',(e)=>{
    insert.innerHTML =`<div class="key">${e.key}
    <small>keyBoard</small></div>
    
    <div class="key">${e.keyCode}<small>keyCode</small></div>
    
    <div class="key">${e.timeStamp} <small>timeStamp</small></div>
    <div class="key">${e.ctrlKey} <small>ctrlKey</small></div>
    <div class="key">${e.altKey} <small>altKEY</small></div>
    
    <div class="key">${e.DOM_KEY_LOCATION_STANDARD} <small>DOM_KEY_LOCATION_STANDARD</small></div>
    <div class="key">${e.DOM_KEY_LOCATION_RIGHT} <small>DOM_KEY_LOCATION_RIGHT</small></div>
    <div class="key">${e.DOM_KEY_LOCATION_NUMPAD} <small>DOM_KEY_LOCATION_NUMRAD</small></div>
    <div class="key">${e.DOM_KEY_LOCATION_LEFT} <small>DOM_KEY_LOCATION_LEFT</small></div>

    
   
    `
})