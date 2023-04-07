import { Link } from "react-router-dom"
import Styles from './header.module.css'


function Header(props) {
  return (
    <>
    <header>
    <div className={Styles.header}>
        <div className={Styles.logo}><p>HRnet</p></div>
        <div className={Styles.title}>Create Employee</div>
        <div className={Styles.link}>{props.linkContent}</div>
    </div>
    </header>
    </>
  )
}

export default Header