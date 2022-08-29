class Statck<T = number>{
    private data: T[] = [];
    push(item: T): void {
        this.data.push(item)
    }
    pop(): T {
        return this.data.pop();
    }
}

let asdasdas: Statck = new Statck();
//let asdasdas = new Statck<string>();
asdasdas.push(2);