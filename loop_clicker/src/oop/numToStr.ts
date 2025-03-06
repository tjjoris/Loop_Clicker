export default function numToStr(num: number): string {
    let report: string = "";
    let decimalIndicator : string = "";
    let numOnlyStr: string = num.toString();
    if (num >= 1000000000000) {
        num = (num / 1000000000000);
        decimalIndicator = " trillion";
        numOnlyStr = num.toFixed(2);
    } else 
    if (num >= 1000000000) {
        num = (num / 1000000000);
        decimalIndicator = "billion";
        numOnlyStr = num.toFixed(2);
    } else
    if (num >= 1000000) {
        num = (num / 1000000);
        decimalIndicator = " million";
        numOnlyStr = num.toFixed(2);
    } else 
    if (num >= 1000) {
        numOnlyStr = Math.floor(num).toString();
    }
    else {
        numOnlyStr = num.toFixed(2);
    }
    report = numOnlyStr + decimalIndicator;
    // report = num.toString();
    return report;
}