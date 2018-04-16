import { CacheMemory } from './chache-memory.service';
import { Subscription } from 'rxjs';
export declare class SubscribersService extends CacheMemory<Subscription> {
    desc: string;
    constructor();
    private unsubscribe(key);
    addSub(key: string, subscribtion: Subscription): this;
    destory(key: string): void;
}
