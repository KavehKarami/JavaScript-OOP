function HtmlElement() {
    this.click = ()=>{
        console.log('click');
    }
}
HtmlElement.prototype.focus = ()=>{console.log('focus');};
function HtmlSelectElement(items = []) {
    this.items = items;
    this.addItem = function(item){this.items.push(item)};
    this.removeItem = (item)=>{this.items.splice(this.items.indexOf(item),1)};
    this.render = () =>{
        return`<select>
${items.map(item=>`<option>${item}</option>`).join('')} 
</select>`
    }
}

//inja nemitoonim az Object.create(HtmlElement.prototype) estefade konim age estefade konim method click() barnemigarde
//fekr konam choon own prototype hast methode click()
HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

function HtmlImgTag(src) {
    this.src = src;
    this.render = ()=>{
        return `<img src="${src}" />`
    }
}
HtmlImgTag.prototype = new HtmlElement();
HtmlImgTag.prototype.constructor = HtmlImgTag;

const arr = [new HtmlSelectElement([1,2,3,4,5]),new HtmlImgTag("asdad")];
for (let val of arr)
    console.log(val.render());
