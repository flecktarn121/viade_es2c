import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../Home.css';

class Footer extends React.Component {
    render() {
        return(
            <footer className="page-footer font-small Nav pt-4">

                <div className="text-center">
                    <p>
                        Project delevoped by ES2C Arquisoft Team
                    </p>
                </div>

                <div className="footer-copyright text-center py-3">© 2020 Copyright
                </div>

            </footer>
        );
    }
}

export default Footer;