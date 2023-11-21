import visa from './img/visa.png'
import masterCard from './img/mastercardIcon.png'

const CreditCard = ({
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color
}) => {
    const cardo = {
        backgroundColor: bgColor,
        color: color,
        padding: '40px'
    }

    let month = 0
    if (expirationMonth < 10) {
        month = "0" + expirationMonth;
    } else {
        month = expirationMonth
    }
    let imagen = ""

    let year = 0
    year = expirationYear.toString().slice(2)

    switch (type) {
        case "Visa":
            imagen = <img src={visa} alt="Visa" width="80" height="60" />
            break;
        case "Master Card":
            imagen = <img src={masterCard} alt="Mastercard" width="80" height="60" />
            break
    }



    return (
        <div className='credi' style={cardo}>
            <p className='poch'>{imagen}</p>
            <span>{number}</span>
            <p>Bank name:{bank}     Type:{type}</p>
            <p className='poch'>     Expires: {month}/{year}  </p>
            <p className='poch'>{owner}</p>

        </div >
    )
}

export default CreditCard