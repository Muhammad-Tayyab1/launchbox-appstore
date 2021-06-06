import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import ProductDetails from './components/ProductDetails';
import ProductsListing from './components/ProductsListing';
import data from './data';
import HeaderComponent from './components/HeaderComponent';
import SidebarComponent from './components/sidebar/SidebarComponent';
import { Column } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import './App.css';
import Page2 from './components/sidebar/Page2';

const styles = StyleSheet.create({
  container: {
      height: '100%',
      minHeight: '100vh',
      display:'flex',
      justifyContent:'space-around'
  },
  content: {
      marginTop: 54
  },
  mainBlock: {
     
      padding: 30
  }
});
class App extends React.Component {

  state = { selectedItem: '' };

  componentDidMount() {
      window.addEventListener('resize', this.resize);
  }

  componentWillUnmount() {
      window.removeEventListener('resize', this.resize);
  }

  resize = () => this.forceUpdate();
  render() {
    const { selectedItem } = this.state;
  return (
    
      <div className={css(styles.container)}>
     <div>
      <SidebarComponent selectedItem={selectedItem} onChange={(selectedItem) => this.setState({ selectedItem })}  />
      </div><div className="main"><Column flexGrow={1} className={css(styles.mainBlock)}>
      <HeaderComponent title={selectedItem}/>
      
      <Routes>     
          <Route path='/' element={<ProductsListing data={data} />} />
          <Route path=':productId' element={<ProductDetails data={data} />} />
        
        <Route path='/page2' element={<Page2 />} />
        <Route path='*' element={<NotFound />} />
      </Routes></Column></div></div>
   
  );
}
}
export default App;
