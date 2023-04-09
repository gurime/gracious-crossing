import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import Head from 'next/head';
import React, { useState } from 'react';



const MortageCalculator = () => {

const [loanAmount, setLoanAmount] = useState('');
const [interestRate, setInterestRate] = useState('');
const [loanTerm, setLoanTerm] = useState('');
const [downPayment, setDownPayment] = useState('');
const [result, setResult] = useState('');

function calculateMortgagePayment() {
const monthlyInterestRate = parseFloat(interestRate) / 1200;
const numPayments = parseInt(loanTerm) * 12;
const principal = parseFloat(loanAmount.replace('$', '')) - parseFloat(downPayment.replace('$', ''));
const monthlyPayment = (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numPayments)) / (Math.pow(1 + monthlyInterestRate, numPayments) - 1);
return monthlyPayment.toFixed(2);
}

function handleLoanAmountChange(event) {
const value = event.target.value;
const numericValue = value.replace(/\D/g, '');
const formattedValue = '$' + numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
setLoanAmount(formattedValue);
}
  
function handleDownPaymentChange(event) {
const value = event.target.value;
const numericValue = value.replace(/\D/g, '');
const formattedValue = '$' + numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
setDownPayment(formattedValue);
}
  

function handleInterestRateChange(event) {
const value = event.target.value;
if (value && !value.endsWith('%')) {
setInterestRate(value + '%');
}
}
      
    
function handleSubmit(event) {
event.preventDefault();
const monthlyPayment = calculateMortgagePayment();
setResult(`Monthly Payment: $${monthlyPayment}`);
}   
return (
<>
<Head>
<title>Gracious Crossing | Mortage Calculator</title>
<meta name="description" content="Generated by create next app" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="icon" href="/favicon.ico" />
</Head>
<Navbar/>
<div className="mortage-hero">
<h1>Get Your Dream Home Today</h1>
<p>Find the perfect mortgage for you with our easy-to-use calculator and expert advice.</p>
<form className="mortage-form" onSubmit={handleSubmit}>
<label htmlFor="loan-amount">Loan Amount:</label>
<input type="text" id="loan-amount" name="loan-amount" value={loanAmount} onChange={handleLoanAmountChange} required />
<label htmlFor="interest-rate">Interest Rate (%):</label>
<input type="text" id="interest-rate" name="interest-rate" value={interestRate} onChange={handleInterestRateChange} required />
<label htmlFor="loan-term">Loan Term (years):</label>
<input type="text" id="loan-term" name="loan-term" value={loanTerm} onChange={(event) => setLoanTerm(event.target.value)} required />
<label htmlFor="down-payment">Down Payment:</label>
<input type="text" id="down-payment" name="down-payment" value={downPayment} onChange={handleDownPaymentChange} required />
<button type="submit">Calculate Your Mortgage</button>
</form>
<p>{result}</p>
</div>
<Footer/>
</>
)
}

export default MortageCalculator