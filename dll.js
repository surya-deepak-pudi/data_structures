class node{
    constructor(val){
        this.prev=null
        this.data=val
        this.next=null
    }
}

class dlist{
    constructor(){
        this.length=0
        this.head=null
        this.tail=null
    }
    push(val){
        let newNode= new node(val)
        if(this.length===0)
        {
            this.head=newNode
        }
        else{
            this.tail.next=newNode
            newNode.prev=this.tail
        }
        this.tail=newNode
        this.length++
        return true
    }
    pop(){
        if(this.length===0){
            return undefined
        }
        let popped=this.tail
        if(this.length===1){
           this.head=null
           this.tail=null
        }
        else{
            this.tail=popped.prev
            this.tail.next=null
            popped.prev=null
        }
        this.length--
      
        return popped
    }
    shift(){
        if(!this.length){
           return undefined 
        }
        let popped=this.head
        if(this.length===1)
        {
           this.head=null
           this.tail=null
        }
        else{
            this.head=popped.next
            this.head.prev=null
            this.popped.next=null
        }
        this.length--
        return popped
    }
    unshift(val){
        if(!this.length){
            this.push(val)
        }
        else{
            let newNode=new node(val)
            newNode.next=this.head
            this.head.prev=newNode
            this.head=newNode
            this.length++
        }
        return this
    }
    get(index){
        if(index<0 || index>=this.length){
            return undefined
        }
        if(index<this.length/2){
            let temp=this.head
            let i=0
            while(i!==index){
                temp=temp.next
                i++
            }
            return temp
        }
        let temp=this.tail
        let i=this.length-1
        while(i!==index){
            temp=temp.prev
            i--
        }
        return temp
    }
    set(index,data){
        let temp=this.get(index)
        if(temp){
        temp.data=data
        return true
        }
        else{
            return false
        }
    }
    insert(index,data){
        if(index===0){
            this.unshift(data)
        }
        else if(index===this.length){
            this.push(data)
        }
        else{
            if(index<0 || index>this.length){
                return false
            }
            else{
                let temp=this.get(index-1)
                let newNode=new node(data)
                newNode.prev=temp
                newNode.next=temp.next
                temp.next=newNode
                this.length++
            }
        }
        return this
    }
    remove(index){
        if(index<0 || index>this.length){
            return false
        }
        if(index===0){
            this.shift()
        }
        else if(index===this.length-1){
            this.pop()
        }
        else{
            let temp=this.get(index)
            let prev=temp.prev
            prev.next=temp.next
            let next=temp.next
            next.prev=prev
            this.length--
            return true
        }
    }
    reverse(){
      
    }
}

let n=new dlist

n.push(1)
n.push(2)
n.push(3)
n.push(4)
n.push(5)
n.reverse()
console.log(n)