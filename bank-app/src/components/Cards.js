import React from 'react'

const Cards = ({ readAccount }) => {
    console.log(readAccount)
    const [customerName, setCustomerName] = useState('');
    const [customerNumber, setCustomerNumber] = useState('');
    const [customerType, setCustomereType] = useState('');
    function handelSubment(event){
        event.preventDefault();
    }

    return (
        <div>

            {
                readAccount.map((customer) => (
                    <div>

                        <p>{customer.customerName}</p>
                        <p>{customer.accountNumber}</p>
                        <p>{customer.accountType}</p>

                    </div>
                ))
            }


            <form action="">
                <label for="fname"> add customerName </label>/
                <input type="text" id="fname" name="fname" value={customerName} onChange={} />
                <br></br>
                <label for="lname"> add accountNumber </label>
                <input type="text" id="lname" name="lname" value={customerNumber} onChange={} />
                <br></br>
                <label for="lname"> add accountType </label>
                <input type="text" id="lname" name="lname" value={customerType} onChange={} />
                <br></br>
                <input type="submit" value="Submit" onSubmit={} />
            </form>

        </div>
    )
}

export default Cards