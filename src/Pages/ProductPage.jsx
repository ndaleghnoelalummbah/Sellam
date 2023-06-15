import React from 'react'
import { useState } from 'react'
import garri from '../resource/garri.png'
import egusi from '../resource/egusi.jpg'
import yam from '../resource/yams.jpg'
import ImageSlider from '../Component/imageSlider'
import SelectDropDown from '../Component/SelectDropDown'
import InfiniteScroll from 'react-infinite-scroll-component'
import Menu from '../Component/Menu'
import selectItems from '../Component/datastore'

const ProductCarts = (props) => {
  return(
      <div className='cartContainer scroll'>
              <img src={props.food} alt='garri' />
          <div className='textContainer scrollItem'>
          <span style={{fontSize:'1.2em',fontWeight:'bold ',marginBottom:'2em'}}>Calabar Garri</span><br/>
              <span style={{fontSize:'1em',fontWeight:'bold ', marginTop:'0.2em'}}>2,000 XAF</span>
              
          </div> 

      </div>
  )
}

const InfiniteProductScroll =() =>{
  return(
    <div>
  <InfiniteScroll 
    
    dataLength={6}
    // next={fetchData}
    hasMore={true}
    loader={<p>Loading .....</p>}
    endMessage={<p>No more data to load</p>}
    >
      <h1 style={{fontSize:'2em', marginTop:'2em', marginLeft:'0.4em'}}>All Products</h1>
      <ul style={{marginTop:'em'}}>
        <ProductCarts food={garri}/>
        <ProductCarts food={egusi}/>
        <ProductCarts food={yam}/>
        <ProductCarts food={yam}/>
        <ProductCarts food={garri}/>
        <ProductCarts food={egusi}/>
      </ul>

    </InfiniteScroll>
    {/* {error && <p>Error:{error.message}</p>} */}
    </div>
   
  )
}

const ProductPage = () => {
  return (
    <div >
        <Menu/>
        <SelectDropDown selectItems={selectItems}/> 
        <ImageSlider/>
        <InfiniteProductScroll/>
       
    </div>
  )
}

export default ProductPage