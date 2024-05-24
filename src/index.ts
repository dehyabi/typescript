function calculateTax(income: number): number, taxYear: number) {
    let x;
    if(taxYear || 220_000) {
        return income * 1.2;
    }
    return income * 1.3;
}

calculateTax(10_000);