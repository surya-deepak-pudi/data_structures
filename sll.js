class node{
    constructor(val){
        this.data=val
        this.next=null
    }

}

class list {
    constructor(){
        this.length=0
        this.head=null
        this.tail=null
    }
    push(val){
        let newNode=new node(val)
        if(!this.length)
        {
            this.head=newNode
        }
        else{
            this.tail.next=newNode
        }       
        this.tail=newNode
        this.length++
    }
    pop(){
        if(!this.length){
            return undefined
        }
        let t=this.head
        let pre=null
        while(t.next){
            if(!t.next.next){
                t.next=null
                pre=t
                break
            }
            t=t.next
        }
        // console.log(t)
        let popped=this.tail
        console.log(pre)
        this.tail=pre
        this.length--
        if(!this.length)
        {
            this.head=null
            this.tail=null
        }
        return popped.data
    }
    shift(){
        let temp=this.head
        if(!this.length){
            return undefined
        }
        this.length--
        if(!temp.next)
        {
            this.tail=null
        }
        this.head=temp.next
        return temp.data
    }
    unshift(val){
        let newNode=new node(val)
        if(!this.head){
            this.tail=newNode     //this.tail=this.head
        }
        else{
            newNode.next=this.head
        }
        this.head=newNode
        this.length++
    }
    get(val){
        if(val<0 || val>=this.length)
        return null
        let temp=this.head
        let i=0
        while(i!==val){
            temp=temp.next
            i++
        }
        return temp
    }
    set(val,data){
        if(val<0 || val>=this.length)
        return false
        let temp=this.head
        let i=0
        while(i!==val){
            temp=temp.next
            i++
        }
        temp.data=data
        return true
    }
    insert(val,data){
        if(val<0 || val>this.length)
        return false
        let newNode=new node(data)
        let temp=this.head
        this.length++
        if(val===0)
        this.unshift(data)
        else if(val===this.length)
        this.push
        else
       { 
        temp=this.get(val-1)
        let nexto=temp.next
        temp.next=newNode
        newNode.next=nexto
        }
        return true
    }
    remove(val){
        if(val<0 || val>=this.length)
        return false
        if(val===0)
        this.shift()
        else if(val===this.length)
        this.pop()
        else{
            let temp=this.get(val-1)
            temp.next=temp.next.next
            this.length--
        }
        return true
    }
    reverse(){
        let current=null   
        let temp1=this.head  
        let temp2           
        this.tail=this.head
        while(temp1){
            temp2=current
            current=temp1
            temp1=current.next
            current.next=temp2
        }
        this.head=current
    }
}
let n= new list()
n.push(24)
n.push(42)
n.push(67)
n.push(78)
n.push(11)
// n.set(4,6)


// console.log(n.get(0))
// console.log(n.get(4))
// console.log(n.get(5))
// console.log(n.get(-22))
n.reverse()
console.log(n)
// n.remove(5)
// console.log(n)
