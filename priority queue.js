class node{
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
        let newNode=new node(val,pri)
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
        this.heap.pop()
        console.log(this.heap)
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
        return this.heap
    }
}

let p=new priorityQueue()
p.enqueue(11,5)
p.enqueue(8,4)
p.enqueue(4,3)
p.enqueue(7,2)
p.enqueue(9,1)
p.enqueue(3,6)
p.enqueue(1,7)
p.enqueue(2,8)
console.log(p)
p.dequeue()