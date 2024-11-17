export function calculateInterest(principal: number, rate: number): number {
    if (principal <= 0 || rate <= 0)
    {
        throw new Error("Principal or rate cannot be zero or negative");
    }
    else
    {
    const interest = principal * rate;
     
    return Math.round(interest * 100) / 100;  

    }
  }