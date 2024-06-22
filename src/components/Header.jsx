import logo from '../assets/investment-calculator-logo.png';

export default function Header(){
    const heading = 'Investment Calculator'
    return <header id='header'>
        <img src={logo} alt={heading}/>
        <h1>{heading}</h1>
    </header>
}