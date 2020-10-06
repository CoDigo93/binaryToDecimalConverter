function Convert(){
document.querySelector('input').addEventListener('change', function(event){
    var value = event.target.value;
    var parsedValue = parseInt(value, 2)
    var tag = document.getElementById('converted')
    
    tag.textContent = 'decimal value:' + parsedValue;
    document.querySelector('input').value = ''
    
    
})

}

