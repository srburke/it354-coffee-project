import React from 'react'
import '../styles/account.css';
import SignUp from './SignUp';

const Account = () => {

    // const [showAccount, setAccount] = useState(true);
    function handle(e) {
        e.preventDefault();
    }

    return (
        <div className="d-flex align-items-center justify-content-center account-drawer closeBtn" id="account-drawer">

            <div className="w-100 h-100" style={{ maxWidth: "350px" }}>
                <button onClick={(e) => {
                    this.handle(e)
                }}
                    className="closeBtn"> <i className="bi bi-x-lg"></i></button>
                <SignUp />
            </div>

        </div>

    )
}



export default Account