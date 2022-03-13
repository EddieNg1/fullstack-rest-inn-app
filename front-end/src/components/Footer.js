import React from 'react';

const Footer = () => {
  return (
    <footer className="fixed-bottom bg-light ">
        <div className="container text-center text-md-left">
            <div className="row">
                <div className="col-md-4 mx-auto">
                    <h5 className="mt-2 mb-1">Seneca Resources</h5>

                    <ul className="list-unstyled">
                        <li>
                            <a href="https://web322.ca/" target="_blank" className="text-decoration-none">WEB322</a>
                        </li>
                        <li>
                            <a href="https://web422.ca/" target="_blank" className="text-decoration-none">WEB422</a>
                        </li>
                    </ul>

                </div>
                <div className="col-md-4 mx-auto">
                    <h5 className=" mt-2 mb-1">Other Resort Sources</h5>

                    <ul className="list-unstyled">
                        <li>
                            <a href="https://www.airbnb.ca/" target="_blank" className="text-decoration-none">airbnb</a>
                        </li>
                        <li>
                            <a href="https://www.expedia.ca/" target="_blank" className="text-decoration-none">expedia</a>
                        </li>
                    </ul>

                </div>
                <div className="col-md-4 mx-auto">
                    <h5 className=" mt-2 mb-1">Hotels</h5>

                    <ul className="list-unstyled">
                        <li>
                            <a href="https://www.trivago.ca/" target="_blank" className="text-decoration-none">trivago</a>
                        </li>
                        <li>
                            <a href="https://www.booking.com/" target="_blank" className="text-decoration-none">booking.com</a>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
        <div class="footer-copyright text-center py-1">
        <a href="https://www.flaticon.com/free-icons/vacations" target="_blank" className="text-decoration-none" title="vacations icons">Vacation icon created by Freepik - Flaticon</a>
        </div>
    </footer>
    );
};

export default Footer;