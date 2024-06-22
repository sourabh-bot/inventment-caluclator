import { useState } from "react"

export default function UserInput({ userInput, handleChange}) {


    return <section id="user-input">
        <div className="input-group">
            <p><label>Initial Investment</label><input type="number" value={userInput.initialInvestment} name="initialInvestment" onChange={handleChange} /></p>
            <p><label>Annual Investment</label><input type="number" value={userInput.annualInvestment} name="annualInvestment" onChange={handleChange} /></p>
        </div>
        <div className="input-group">
            <p><label>Expected Return</label><input type="number" value={userInput.expectedReturn} name="expectedReturn" onChange={handleChange} /></p>
            <p><label>Duration </label><input type="number" value={userInput.duration} name="duration" onChange={handleChange} /></p>
        </div>
    </section>
}