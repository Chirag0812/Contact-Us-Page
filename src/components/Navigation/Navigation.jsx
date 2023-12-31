import styles from "./Navigation.module.css";
// import imgg from './abc.png'
//  let imgg= require('../../images/abc.png')
const Navigation = () => {
  return (
    <nav className={`${styles.navigation} container`}>
      <div>
        {/* <img src={imgg} alt="logo" width="60px" height="70px" /> */}
        <img src="abc.png" alt="logo" width="60px" height="70px" />
      </div>

      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;
