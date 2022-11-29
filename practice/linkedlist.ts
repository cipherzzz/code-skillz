interface MyNode {
    value: any;
    next: MyNode | null;
}

interface LinkedList {
    head: MyNode | null;
    add: (value: any) => void;
    remove: (value: any) => void;
    find: (value: any) => MyNode | null;
    print: () => void;
}

const createNode = (value: any): MyNode => {
    return {
        value,
        next: null,
    };
}

const createLinkedList = (): LinkedList => {
    // return {
    //     head: null,
    //     add: function(value: any) {
    //         const node = createNode(value);
    //         if (this.head === null) {
    //             this.head = node;
    //             return;
    //         }
    //         let current = this.head;
    //         while (current.next) {
    //             current = current.next;
    //         }
    //         current.next = node;
    //     },
    //     remove: function(value: any) {
    //         if (this.head === null) {
    //             return;
    //         }
    //         if (this.head.value === value) {
    //             this.head = this.head.next;
    //             return;
    //         }
    //         let current = this.head;
    //         while (current.next) {
    //             if (current.next.value === value) {
    //                 current.next = current.next.next;
    //                 return;
    //             }
    //             current = current.next;
    //         }
    //     },
    //     find: function(value: any) {
    //         if (this.head === null) {
    //             return null;
    //         }
    //         let current = this.head;
    //         while (current) {
    //             if (current.value === value) {
    //                 return current;
    //             }
    //             current = current.next;
    //         }
    //         return null;
    //     },
    //     print: function() {
    //         const values = [];
    //         let current = this.head;
    //         while (current) {
    //             values.push(current.value);
    //             current = current.next;
    //         } 
    //         return values.join(' => ');
    //     },
    // };

    let head: MyNode | null = null;

    const add = (value: any): void => {

        // create a standalone node
        const node = createNode(value);

        //check if LL is empty
        if (head === null) {
            head = node;
            return;
        }

        // add to end of LL otherwise
        let current = head

        // get last node
        while (current.next) {
            current = current.next
        }

        // add node to end of LL
        current.next = node
    }
    const print = (): void => {
        const values: any[] = [];
        let current = head;
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        console.log(values.join(' => '));
    }




    return {
        head: null,
        add: (value: any) => {console.log(value)},
        remove: (value: any) => {console.log(value)},
        find: (value: any) => {return createNode('')},
        print,
    }
}

const list = createLinkedList();
list.add(1);
list.print();