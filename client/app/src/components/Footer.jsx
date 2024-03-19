import { Link } from "react-router-dom";

const Footer = () =>{

    return(
        <footer className="footer">
        <div className="footer-text">
          <p>Copyright &copy; 2024 by Jose Figueredo | All Rights Reserved.</p>
        </div>
        <div className="footer-iconTop">

          <Link
          to="/"
          onClick={()=>{
            window.scrollTo(0,0);
          }}
          >
          <i className="bx bx-up-arrow-alt"></i>
          </Link>
        </div>
      </footer>
    )
}

export default Footer;