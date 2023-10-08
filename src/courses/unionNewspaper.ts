// Observer
export interface Subscriber {
  sendNews(news: string): void;
}

class Publisher {
  subscribers: Subscriber[];

  constructor() {
    this.subscribers = [];
  }

  addSubscriber(Subscriber: Subscriber) {
    this.subscribers.push(Subscriber);
  }

  writeNews(news: string) {
    this.subscribers.forEach((s) => {
      s.sendNews(news);
    });
  }
}

// Singleton
export const UnionPublisher = new Publisher();

class UnionSubscriber implements Subscriber {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sendNews(news: string): void {
    console.log(`${this.name} received ${news}`);
  }
}

const publisher = new Publisher();

publisher.addSubscriber(new UnionSubscriber("Jacques"));
publisher.addSubscriber(new UnionSubscriber("john"));

publisher.writeNews("Bonjour aux syndiqués");
