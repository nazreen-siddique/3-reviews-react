import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const[index,setIndex]=useState(0);
  const{name,job,image,text}=people[index];
  const checkIndex = (number)=>{
      if(number>people.length){
        return 0;
      }
      if(number < 0){
        return people.length-1;
      }
      return number;
  }
      
const prevButton = ()=>{
  setIndex((index)=>{
    let newIndex= index-1;
    return checkIndex(newIndex);
  })
}
const NextButton = ()=>{
setIndex((index) => {
  let newIndex = index - 1;
  return checkIndex(newIndex);
});
}
const randomButton =()=>{
    let newIndex = Math.floor(Math.random()*people.length)
    console.log(newIndex);
    if(newIndex===index){
    newIndex=index + 1;
  }
  setIndex(checkIndex(newIndex))
}

  return (
    <>
      <article className="review container">
        <div className="img-container">
          <img src={image} alt={name} className="person-img"></img>
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="button-container">
          <button className="prev-btn" onClick={prevButton}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={NextButton}>
            <FaChevronRight />
          </button>
        </div>
        <button className="random-btn" onClick={randomButton}>
          surprise me
        </button>
      </article>
    </>
  );
  };
export default Review;
