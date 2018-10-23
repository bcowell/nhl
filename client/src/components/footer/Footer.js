import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component {

    scrollToTop = () => {
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

        if (top > 0) {
            window.scrollTo(0, top - 15)
            setTimeout(this.scrollToTop, 10)
        }
    }

    render() {
        return (
            <div>
            Footer
            </div>
        )
    }
}

export default Footer;