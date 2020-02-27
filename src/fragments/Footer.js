import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../Home.css';
import '@inrupt/solid-style-guide'

class Footer extends React.Component {
    render() {
        return(
            <footer className="solid-footer footer">
                <section className="solid-footer__content">
                    <div className="solid-footer__content--copyright">
                        <ul>
                            <li>© inrupt Inc.</li>
                            <li>Build V<span className="build-value">0.1.1</span></li>
                        </ul>
                    </div>

                    <div className="solid-footer__content--links">
                        <ul>
                            <li><a href=""></a>
                            </li>
                            <li><a href=""></a>
                            </li>
                        </ul>
                    </div>
                </section>
            </footer>
        );
    }
}

export default Footer;