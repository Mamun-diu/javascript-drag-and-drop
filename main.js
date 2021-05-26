const numberBoxes = document.getElementsByClassName('numberBox');
const whiteBoxes = document.getElementsByClassName('whiteBox');
const numberCommons = document.getElementsByClassName('numberCommon');
const numberOne = document.querySelector('.numberOne');
const numberTwo = document.querySelector('.numberTwo');
const numberThree = document.querySelector('.numberThree');
const numberEqual = document.querySelector('.numberEqual');
const numberPlus = document.querySelector('.numberPlus');
const winner = document.querySelector('.win');

var check = null;
var exist = null;
var checkClass = null;
var array = [numberOne, numberTwo, numberThree, numberEqual, numberPlus]
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}
shuffle(array);
for (const numberBox of numberBoxes) {
    numberBox.style.display = "none";
}
for (let i = 0; i < array.length; i++) {
    numberCommons[i].append(array[i])
    
}
for (let i = 0; i < array.length; i++) {
    numberBoxes[i].style.display = "block"; 
    
}




    numberOne.addEventListener('dragstart',function(){
        check = "1";    
        console.log('drag start');
        
    });
    numberOne.addEventListener('touchstart',function(e){
        e.preventDefault();
        check = "1";  
        console.log('Touch start');
          
    });
    numberOne.addEventListener('dragend',function(){
        console.log('Drag End');
        
    })
    numberTwo.addEventListener('dragstart',function(){
        check = "2";   
    });
    numberTwo.addEventListener('touchstart',function(){
        check = "2";   
    });
    numberThree.addEventListener('dragstart',function(){
        check = "3";   
    });
    numberPlus.addEventListener('dragstart',function(){
        check = "plus";   
    });
    numberEqual.addEventListener('dragstart',function(){
        check = "equal";   
    });

var swapStart = null;
for (const whiteBox of whiteBoxes) {
    whiteBox.addEventListener('dragstart',function(){
        swapStart = this;
        
        
        
    })
    whiteBox.addEventListener('dragover',function(e){
        e.preventDefault();
        this.classList.add('dashed')
        
    })
    whiteBox.addEventListener('dragenter',function(e){
    })
    whiteBox.addEventListener('dragleave',function(e){
        this.classList.remove('dashed')
    })
    
    whiteBox.addEventListener('drop',function(e){
        whiteBox.classList.remove('dashed');
        
        
        for (const numberBox of numberBoxes) {
            if(this.contains(numberBox)){
                exist = true;
                checkClass = this.getElementsByClassName('numberBox')[0];
                // console.log(checkClass);
                
                
                break;
            }else{
                exist = false;
                
            }
        }
        if(exist == false){
            if(check == "1"){
                this.append(numberOne)
            }else if(check == "2" ){
                this.append(numberTwo)
            }else if(check == "3"){
                this.append(numberThree)
            }else if(check == "plus"){
                this.append(numberPlus)
            }else if(check == "equal"){
                this.append(numberEqual);
            }
            
        }else{
            if(check == "1"){
                this.append(numberOne)
            }else if(check == "2" ){
                this.append(numberTwo)
            }else if(check == "3"){
                this.append(numberThree)
            }else if(check == "plus"){
                this.append(numberPlus)
            }else if(check == "equal"){
                this.append(numberEqual);
            }
            swapStart.append(checkClass);
        }
        

        if(whiteBoxes[0].contains(numberOne) && whiteBoxes[1].contains(numberPlus) && whiteBoxes[2].contains(numberTwo) && whiteBoxes[3].contains(numberEqual) && whiteBoxes[4].contains(numberThree)){
            console.log('You are win');
            
            winner.style.display = "flex";
        }else if(whiteBoxes[4].contains(numberOne) && whiteBoxes[3].contains(numberPlus) && whiteBoxes[2].contains(numberTwo) && whiteBoxes[1].contains(numberEqual) && whiteBoxes[0].contains(numberThree)){
            console.log('You are win agin');
            winner.style.display = "flex";
            
        }
        
    })
    for (const numberCommon of numberCommons) {
        numberCommon.addEventListener('dragstart',function(){
            swapStart = this;
        })
        numberCommon.addEventListener('dragover',function(e){
            e.preventDefault();
        })
        numberCommon.addEventListener('dragenter',function(e){
            this.classList.add('dashed');
        })
        numberCommon.addEventListener('dragleave',function(e){
            this.classList.remove('dashed');
        })
        numberCommon.addEventListener('drop',function(){
            for (const numberBox of numberBoxes) {
                if(this.contains(numberBox)){
                    exist = true;
                    checkClass = this.getElementsByClassName('numberBox')[0];
                    // console.log(checkClass);
                    
                    
                    break;
                }else{
                    exist = false;
                    
                }
            }
            if(exist == false){
                if(check == "1"){
                    this.append(numberOne)
                }else if(check == "2" ){
                    this.append(numberTwo)
                }else if(check == "3"){
                    this.append(numberThree)
                }else if(check == "plus"){
                    this.append(numberPlus)
                }else if(check == "equal"){
                    this.append(numberEqual);
                }
                
            }else{
                if(check == "1"){
                    this.append(numberOne)
                }else if(check == "2" ){
                    this.append(numberTwo)
                }else if(check == "3"){
                    this.append(numberThree)
                }else if(check == "plus"){
                    this.append(numberPlus)
                }else if(check == "equal"){
                    this.append(numberEqual);
                }
                swapStart.append(checkClass);
            }
        })
    }
}

