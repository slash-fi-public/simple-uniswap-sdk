export declare enum FeeAmount {
    LOW = 500,
    MEDIUM = 3000,
    FIVE_THOUSAND = 5000,
    HIGH = 10000
}
export declare const feeToPercent: (feeAmount: FeeAmount) => 0.0005 | 0.003 | 0.005 | 0.01;
export declare const percentToFeeAmount: (percent: number) => FeeAmount;