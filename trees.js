class node{
    constructor(val){
        this.data=val
        this.left=null
        this.right=null
        this.count=0
    }
}

class qnode{
    constructor(val){
        this.data=val
        this.next=null
    }

}

class queue {
    constructor(){
        this.length=0
        this.head=null
        this.tail=null
    }
    enqueue(val){
        let newNode=new qnode(val)
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
    dequeue(){
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
        return temp
    }
}

class tree{
    constructor(){
        this.root=null
    }
    klo(val){
        let newNode=new node(val)
        let temp=this.root
        if(!this.root){
            this.root=newNode
            return this
        }
        while(temp){
            if(temp.data===val){
                temp.count++
                return this
            }
            if(temp.data>val)
            {
                temp=temp.left
            }
            else{
                temp=temp.right
            }
        }
        temp=newNode
        return this
    }
    insert(val){
        let newNode=new node(val)
        let temp=this.root
        if(!this.root){
            this.root=newNode
            return this
        }
        while(temp){
            if(temp.data>=val)
            {
                if(temp.left===null){
                    temp.left=newNode
                    return this
                }
                else
                temp=temp.left
            }
            else{
                if(temp.right===null){
                    temp.right=newNode
                    return this
                }
                else
                temp=temp.right
            }
        }
        return this
    }
    find(val){
        let temp=this.root
        while(temp){
            if(temp.data===val){
                return true
            }
            else if(val>temp.data){
                temp=temp.right
            }
            else{
                temp=temp.left
            }
        }
        return false
    }
    bfs(){
        let q=new queue
        let val=[]
        q.enqueue(this.root)
        let temp
        while(q.head){
            temp=q.dequeue()
            temp=temp.data
            val.push(temp.data)
            if(temp.left){
                q.enqueue(temp.left)
            }
            if(temp.right){
                q.enqueue(temp.right)
            }
            
        }
        return val
    }
    
    pre(){
        let val=[]
        //console.log(temp)
        function  helper(temp){
            val.push(temp.data)
            if(temp.left){
                helper(temp.left)
            }
            if(temp.right){
                helper(temp.right)
            }
        }
        helper(this.root)
        return val
    }
    post(){
        let val=[]
        //console.log(temp)
        function  helper(temp){
            
            if(temp.left){
                helper(temp.left)
            }
            if(temp.right){
                helper(temp.right)
            }
            val.push(temp.data)
        }
        helper(this.root)
        return val
    }
    in(){
        let val=[]
        //console.log(temp)
        function  helper(temp){
            
            if(temp.left){
                helper(temp.left)
            }
            val.push(temp.data)
            if(temp.right){
                helper(temp.right)
            }            
        }
        helper(this.root)
        return val
    }
}

let t=new tree()
t.insert(10)
t.insert(6)
t.insert(15)
t.insert(3)
t.insert(8)
t.insert(20)
console.log(t)
console.log(t.bfs())
console.log(t.pre())
console.log(t.post())