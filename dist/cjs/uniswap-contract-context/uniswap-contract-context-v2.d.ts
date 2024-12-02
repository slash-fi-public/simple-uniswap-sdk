import { JsonFragment } from '@ethersproject/abi';
import { IRouterMethods } from "../factories/router/models/route-methods";
export declare class UniswapContractContextV2 {
    /**
     * The uniswap router address
     */
    static routerAddress: string;
    /**
     * The uniswap factory address
     */
    static factoryAddress: string;
    /**
     * The uniswap pair address
     */
    static pairAddress: string;
    /**
     * Uniswap v2 router
     */
    static routerAbi: JsonFragment[];
    /**
     * Uniswap v2 factory
     */
    static factoryAbi: JsonFragment[];
    /**
     * Uniswap v2 pair
     */
    static pairAbi: JsonFragment[];
    /**
     * Router Methods
     */
    static routerMethods: IRouterMethods;
}