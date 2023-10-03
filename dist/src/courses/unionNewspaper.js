"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnionPublisher = void 0;
class Publisher {
    constructor() {
        this.subscribers = [];
    }
    addSubscriber(Subscriber) {
        this.subscribers.push(Subscriber);
    }
    writeNews(news) {
        this.subscribers.forEach((s) => {
            s.sendNews(news);
        });
    }
}
// Singleton
exports.UnionPublisher = new Publisher();
// class UnionSubscriber implements Subscriber{
//     name: string;
//     constructor(name: string){
//         this.name = name;
//     }
//     sendNews(news: string): void {
//         console.log(`${this.name} received ${news}`)
//     }
// }
// const publisher = new Publisher();
// publisher.addSubscriber(new UnionSubscriber("Jacques"));
// publisher.addSubscriber(new UnionSubscriber("john"));
// publisher.writeNews("Bonjour aux syndiqués");
//# sourceMappingURL=unionNewspaper.js.map