export declare enum FeeAmount {
    ONE_HUNDRED = 100,
    LOW = 500,
    ONE_THOUSAND = 1000,
    MEDIUM = 3000,
    FIVE_THOUSAND = 5000,
    HIGH = 10000
}
export declare const feeToPercent: (feeAmount: FeeAmount) => 0.0001 | 0.0005 | 0.001 | 0.003 | 0.005 | 0.01;
export declare const percentToFeeAmount: (percent: number) => FeeAmount;
