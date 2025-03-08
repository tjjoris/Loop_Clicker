export default function numToStr(num: number): string {
    let report: string = "";
    let decimalIndicator : string = "";
    let numOnlyStr: string = num.toString();
    if (num >= 1000000000000) {
        num = (num / 1000000000000);
        decimalIndicator = " trillion";
        numOnlyStr = addCommaReturnStr(num);
    } else 
    if (num >= 1000000000) {
        num = (num / 1000000000);
        decimalIndicator = "billion";
        numOnlyStr =  addCommaReturnStr(num);
    } else
    if (num >= 1000000) {
        num = (num / 1000000);
        decimalIndicator = " million";
        numOnlyStr =  addCommaReturnStr(num);
    } 
    //  else 
    // if (num >= 1000) {
    //     numOnlyStr =  addCommaReturnStr(num);
    // }
    else {
        numOnlyStr =  addCommaReturnStr(num);
    }
    report = numOnlyStr + decimalIndicator;
    // report = num.toString();
    return report;

    function addCommaReturnStr(numBefore: number): string {
        let numThousandths: number[] = [numBefore];
        let thousandthsReport : string = "";
        if (num >= 1000) {
            numThousandths[0] = num % (1000 * Math.floor(num / 1000)) ; //the hundredths decimals.
            numThousandths[1] = (num - numThousandths[0]) / 1000; //the thousandths decimals.
            let hundredthsStr: string = numThousandths[0].toString();//convert the hundredths to a string.
            if (numThousandths[0] < 10) {
                hundredthsStr = "00" + hundredthsStr;
            } else if (numThousandths[0] < 100) {
                hundredthsStr = "0" + hundredthsStr;
            }
            thousandthsReport = numThousandths[1] + "," + hundredthsStr;
        } else if (num < 100) 
         {
            if (num % 1 == 0) {                
                thousandthsReport = num.toString();
            }
            else
            if (num % 1.1 == 0) {
                thousandthsReport = num.toFixed(1);
            }
            else {
                thousandthsReport = num.toFixed(2);
            } 
            // else {
            //     thousandthsReport = num.toString();
            // }
        } else {
            thousandthsReport = Math.floor(num).toString();
        }
        return thousandthsReport;
    }
}