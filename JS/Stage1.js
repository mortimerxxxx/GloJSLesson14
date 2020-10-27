'use strict';

let setInput = document.querySelector('input');

class DomElement {
    constructor(selector, height, width, bg, fontSize){
        this.selector = selector;
        this.height  = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.cssText = `
            height: ${this.height}px;
            width: ${this.width}px;
            background: ${this.bg};
            font-size: ${this.fontSize}px;
        `;
    }
    createDiv() {

        let newDiv = document.createElement('div');
        document.body.append(newDiv);
        
        newDiv.style.cssText = this.cssText;
        newDiv.textContent = this.cssText;

        if(this.selector[0] === '.'){
            newDiv.classList.add(this.selector);
        }else if(this.selector[1] === '#'){
            newDiv.setAtribute(this.selector);
        }

        newDiv.textContent = "Твоя собака съела моего кота!";
    }

}

let secondDom = new DomElement('.div',500, 500, 'red', 16);

let threedDom = new DomElement('#div', 500, 300, 'blue', 16);

setInput.addEventListener('input', function(){
    if(setInput.value === '.'){
        secondDom.createDiv();
    }else if(setInput.value === '#'){
        threedDom.createDiv();
    } else if (setInput.value === '') {
        document.querySelector('div').remove();
    }
});
