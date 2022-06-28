import { StorageStrategies } from '../constants/strategy';
export declare class DecoratorBuilder {
    static buildSyncStrategyDecorator(strategyName: string | StorageStrategies, prototype: any, propName: string, key?: string, defaultValue?: any): void;
}
