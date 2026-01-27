import React from "react";
import './_footer.scss';

function Footer({company}) {
    return (
        <footer className="footer">
            <p className="footer__copyright">{company} - &copy; {(new Date).getFullYear()}</p>
        </footer>
    )
}

export default Footer;