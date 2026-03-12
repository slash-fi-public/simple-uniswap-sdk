export var FeeAmount;
(function (FeeAmount) {
    FeeAmount[FeeAmount["ONE_HUNDRED"] = 100] = "ONE_HUNDRED";
    FeeAmount[FeeAmount["LOW"] = 500] = "LOW";
    FeeAmount[FeeAmount["ONE_THOUSAND"] = 1000] = "ONE_THOUSAND";
    FeeAmount[FeeAmount["MEDIUM"] = 3000] = "MEDIUM";
    FeeAmount[FeeAmount["FIVE_THOUSAND"] = 5000] = "FIVE_THOUSAND";
    FeeAmount[FeeAmount["HIGH"] = 10000] = "HIGH";
})(FeeAmount || (FeeAmount = {}));
export var feeToPercent = function (feeAmount) {
    console.log('feeAmount', feeAmount);
    switch (feeAmount) {
        case FeeAmount.ONE_HUNDRED:
            return 0.0001;
        case FeeAmount.LOW:
            return 0.0005;
        case FeeAmount.ONE_THOUSAND:
            return 0.001;
        case FeeAmount.MEDIUM:
            return 0.003;
        case FeeAmount.FIVE_THOUSAND:
            return 0.005;
        case FeeAmount.HIGH:
            return 0.01;
    }
};
export var percentToFeeAmount = function (percent) {
    switch (percent) {
        case 0.0001:
            return FeeAmount.ONE_HUNDRED;
        case 0.0005:
            return FeeAmount.LOW;
        case 0.001:
            return FeeAmount.ONE_THOUSAND;
        case 0.003:
            return FeeAmount.MEDIUM;
        case 0.005:
            return FeeAmount.FIVE_THOUSAND;
        case 0.01:
            return FeeAmount.HIGH;
        default:
            return FeeAmount.MEDIUM;
    }
};
