import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import LogoComponent from './LogoComponent';
import MenuItemComponent from './MenuItemComponent';
import IconTickets from '../../assets/icon-tickets.js';
import IconOverview from '../../assets/icon-overview.js';
import IconBurger from '../../assets/icon-burger';
import { Link } from 'react-router-dom';

const styles = StyleSheet.create({
    root:{
        backgroundPosition:'fixed',
        position:'fixed'
    },
    burgerIcon: {
        cursor: 'pointer',
        position: 'absolute',
        left: 24,
        top: 34,
        backgroundColor:'gray'
    },
    container: {
        backgroundColor: '#363740',
        width: 255,
        paddingTop: 0,
        height: 900
    },
    containerMobile: {
        transition: 'left 0.5s, right 0.5s',
        position: 'absolute',
        width: 230,
        height: '100%',
        zIndex: 901
    },
    mainContainer: {
        height: '100%',
        minHeight: '100vh'
    },
    mainContainerMobile: {
        position: 'absolute',
        width: '100vw',
        minWidth: '100%',
        top: 0,
        left: 0
    },
    menuItemList: {
        marginTop: 10
    },
    outsideLayer: {
        position: 'fixed',
        width: '100vw',
        minWidth: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,.50)',
        zIndex: 900
    },
    separator: {
        borderTop: '1px solid #DFE0EB',
        marginTop: 16,
        marginBottom: 16,
        opacity: 0.06
    },
    hide: {
        left: -255
    },
    show: {
        left: 0
    }
});

class SidebarComponent extends React.Component {
    state = { expanded: false };

    onItemClicked = (item) => {
        this.setState({ expanded: false });
        return this.props.onChange(item);
    }

    isMobile = () => window.innerWidth <= 768;

    toggleMenu = () => this.setState(prevState => ({ expanded: !prevState.expanded }));

    renderBurger = () => {
        return <div onClick={this.toggleMenu} className={css(styles.burgerIcon)}>
            <IconBurger />
        </div>
    }

    render() {
        const { expanded } = this.state;
        const isMobile = this.isMobile();
        return (
            <div  className={css(styles.root)}>
                <Row className={css(styles.mainContainer)} breakpoints={{ 768: css(styles.mainContainerMobile) }}>
                    {(isMobile && !expanded) && this.renderBurger()}
                    <Column className={css(styles.container)} breakpoints={{ 768: css(styles.containerMobile, expanded ? styles.show : styles.hide) }}>
                        <LogoComponent />
                        <Column className={css(styles.menuItemList)}>
                            <Column className={css(styles.menuItemList)}>
                                <Link to='/page2' style={{textDecoration:'none', fontStyle:'none',}}>
                                <MenuItemComponent
                                    title="Dashboard" icon={IconTickets}
                                    onClick={() => this.onItemClicked('')}
                                    active={this.props.selectedItem === 'Dashboard'}
                                /></Link>
                                <Link to='/' style={{textDecoration:'none', fontStyle:'none',}}>
                                <MenuItemComponent
                                    title="Shop" icon={IconOverview}
                                    
                                    active={this.props.selectedItem === "Shop"}
                                /></Link>
                            </Column>
                        </Column>
                    </Column>
                    {isMobile && expanded && <div className={css(styles.outsideLayer)} onClick={this.toggleMenu}></div>}
                </Row>
            </div>
        );
    };
}

export default SidebarComponent;

