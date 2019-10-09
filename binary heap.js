class binaryHeap{
    constructor(){
        this.heap=[]
    }
    parent(index){
        return Math.floor((index-1)/2)
    }
    insert(val){
        this.heap.push(val)
        let ind=this.heap.length-1
        let parent=this.parent(ind)
        while(this.heap[ind]>this.heap[parent]){
            let temp=this.heap[ind]
            this.heap[ind]=this.heap[parent]
            this.heap[parent]=temp
            ind=parent
            parent=this.parent(ind)
        } 
        return this      
    }
    remove(){
        let t=this.heap[this.heap.length-1]
        this.heap[this.heap.length-1]=this.heap[0]
        this.heap[0]=t
        this.heap.pop()
        console.log(this.heap)
        let parent=0,child1=1,child2=2
        while(this.heap[parent]<this.heap[child1] || this.heap[parent]<this.heap[child2]){
            let child
            this.heap[child1]>this.heap[child2]?child=child1:child=child2
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

let b=new binaryHeap()
b.insert(7)
b.insert(6)
b.insert(3)
b.insert(8)
b.insert(2)
b.insert(4)
b.insert(1)
b.insert(9)
b.insert(11)
b.insert(12)
console.log(b)
b.remove()
console.log(b)