class node{
    constructor(val){
        this.data=val
        this.next=null
    }

}

class stack {
    constructor(){
        this.length=0
        this.head=null
        this.tail=null
    }
    pop(){
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
    push(val){
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
        return temp.data
    }
}


class graph{
    constructor(){
        this.list={}
    }
    addVertex(vertex){
        if(!this.list[vertex])
        this.list[vertex]=[]
        else
        console.log("vertex exist")
        return this
    }
    addEdge(v1,v2){
        if(!this.list[v1]){
            this.addVertex(v1)
        }
        if(!this.list[v2]){
            this.addVertex(v2)
        }
        this.list[v1].push(v2)
        this.list[v2].push(v1)
        return this
    }
    removeEdge(v1,v2){
        this.list[v1].splice(this.list[v1].indexOf(v2),1)
        this.list[v2].splice(this.list[v2].indexOf(v1),1)
        return this
    }
    removeVertex(v1){
        while(this.list[v1].length){
            this.removeEdge(v1,this.list[v1][0])
        }
        delete this.list[v1]
        return this
    }
    dfs(v){
        let visited=[]
        let k=this.list
        function helper(v){
            visited.push(v)
            let arr=k[v]
            for(let i of arr){
                if(visited.indexOf(i)===-1)
                helper(i)
            }
        }
        helper(v)
        return visited
    }
    dfsrIter(v){
        let result=[]
        let visited={}
        let yet=new stack
        let x=v
        while(x){
            result.push(x)
            visited[x]=true
            let k=this.list[x]
            for(let i of k){
                if(!visited[i]){
                    visited[i]=true
                    yet.push(i)
                }
            }
            x=yet.pop()
        }
        return result
    }
   bfs(v){
        let result=[]
        let visited={}
        let yet=new queue
        let x=v
        while(x){
            result.push(x)
            visited[x]=true
            let k=this.list[x]
            for(let i of k){
                if(!visited[i]){
                    visited[i]=true
                    yet.enqueue(i)
                }
            }
            x=yet.dequeue()
        }
        return result
   }
}

let g=new graph

g.addEdge("a","b")
g.addEdge("a","c")
g.addEdge("b","d")
g.addEdge("d","e")
g.addEdge("c","e")
g.addEdge("f","d")
g.addEdge("f","e")
console.log( g.dfs("a"))
// console.log("i")
console.log(g.dfsIter("a"))
console.log(g.bfs("a"))