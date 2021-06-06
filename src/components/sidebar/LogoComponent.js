import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Link } from 'react-router-dom';

// import Logo from '../../assets/icon-logo';

const styles = StyleSheet.create({
  
    title: {
        
        fontSize: 25,
        
        color:'white'
    }
});

function LogoComponent() {
    return (
        <div>
            <Link to='/' style={{textDecoration:'none'}}>
            <div style={{display:'flex', alignItems:'center'}}>
        <img src="https://launchbox.finance/images/logo.svg" alt="" style={{ height:"100px", width:'90px', overflow:'hidden'}}/>
            <p className={css(styles.title)}>Launch<b>BOX</b></p></div></Link>
        </div>
    );
}

export default LogoComponent;
