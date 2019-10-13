class qnode{
    constructor(val,pri){
        this.data=val
        this.priority=pri
    }
}

class priorityQueue{
    constructor(){
        this.heap=[]
    }
    parent(index){
        return Math.floor((index-1)/2)
    }
    enqueue(val,pri){
        let newNode=new qnode(val,pri)
        this.heap.push(newNode)
        let ind=this.heap.length-1
        let parent=this.parent(ind)
        while((ind>=0 && parent>=0)&&(this.heap[ind].priority<this.heap[parent].priority)){
            let temp=this.heap[ind]
            this.heap[ind]=this.heap[parent]
            this.heap[parent]=temp
            ind=parent
            parent=this.parent(ind)
        } 
        return this      
    }
    dequeue(){
        let t=this.heap[this.heap.length-1]
        this.heap[this.heap.length-1]=this.heap[0]
        this.heap[0]=t
        let popped=this.heap.pop()
        let parent=0,child1=1,child2=2
        while(parent<this.heap.length-1 && child1<this.heap.length-1 &&child2<this.heap.length-1 &&(this.heap[parent].priority>this.heap[child1].priority || this.heap[parent].priority>this.heap[child2].priority)){
            let child
            this.heap[child1].priority<this.heap[child2].priority?child=child1:child=child2
            t=this.heap[parent]
            this.heap[parent]=this.heap[child]
            this.heap[child]=t
            parent=child
            child1=(2*parent)+1
            child2=(2*parent)+2
            console.log(this.heap)
        }
        return popped
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
    addEdge(v1,v2,weight){
        if(!this.list[v1]){
            this.addVertex(v1)
        }
        if(!this.list[v2]){
            this.addVertex(v2)
        }
        this.list[v1].push({vertex:v2,weight})
        this.list[v2].push({vertex:v1,weight})
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
    dijkstra(start,end){
        let visited={}
        let distances={}
        let q=new priorityQueue()
        let previous={}
        for(let vertex in this.list){
            if(vertex===start){
                distances[vertex]=0
                q.enqueue(vertex,0)
            }
            else{
                distances[vertex]=Infinity
                q.enqueue(vertex,Infinity)
            }
            previous[vertex]=null
        }
        while(q.heap.length){
            let node=q.dequeue()
            console.log(node)
            if(node.data===end){
                let result=[]
                let n=node.data
                while(n!==null){
                    result.push(n)
                    n=previous[n]
                }
                result.reverse()
                return result
            }
            else{
                let neighbours=this.list[node.data]
                for(let i in neighbours){
                    let neighbour=neighbours[i]
                    let distance=neighbour.weight+distances[node.data]
                    if(distance<distances[neighbour.vertex]){
                        distances[neighbour.vertex]=distance
                        previous[neighbour.vertex]=node.data
                        q.enqueue(neighbour.vertex,distance)
                    }
                }
            }
        }
    }
}

let g=new graph
g.addEdge("a","b",4)
g.addEdge("a","c",2)
g.addEdge("b","e",3)
g.addEdge("c","d",2)
g.addEdge("d","e",3)
g.addEdge("d","f",1)
g.addEdge("f","c",4)
g.addEdge("f","e",1)
g.dijkstra("a","e")