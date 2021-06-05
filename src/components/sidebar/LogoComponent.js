import React from 'react';
import { Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import { Link } from 'react-router-dom';

// import Logo from '../../assets/icon-logo';

const styles = StyleSheet.create({
  
    title: {
        
        fontSize: 25,
        lineHeight: '24px',
        letterSpacing: '0.4px',    
        color:'white'
    }
});

function LogoComponent() {
    return (
        <Row  horizontal="center" vertical="center" >
            <Link to='/' style={{textDecoration:'none'}}>
            <div style={{display:'flex', alignItems:'center'}}>
        <img src="https://launchbox.finance/images/logo.svg" alt="" style={{ height:"100px", width:'100px'}}/>
            <p className={css(styles.title)}>Launch<b>BOX</b></p></div></Link>
        </Row>
    );
}

export default LogoComponent;
