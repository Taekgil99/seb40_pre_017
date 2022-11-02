import React, {useState, useEffect} from 'react'
import QuestionList from '../components/js/questionPage/QuestionList'
import { Link } from 'react-router-dom'
import './QuestionPage.scss'
import Pagination from '../components/js/questionPage/Pagination';
import Aside from '../components/js/aside/Aside';
import Category from '../components/js/category/Category';
import axios from 'axios';

export default function QuestionPage({ filterData, changeFilterData}) {

  const [items, seItems] = useState(null);;

  useEffect(()=>{
    let params = {
      "tab" : filterData
    };

    axios.get('/questions', {
      params : params,
      headers: {
        "ngrok-skip-browser-warning": "69420"
      }
    })
    .then(res => {
      console.log(res)
      seItems(res.data)
    })
    .catch(err => {
      console.error(err)
    })
  }, [filterData])


  //questionList Count
  let count = 0;
  if(items){
    count = items.length;
  }

  return (
    <div className='questionPageWrap'>
      <div className='questionPageNavbar'>
        <Category />
      </div>
      <div className='questionPage'>
        <div className='headAddWrap'>
          <h1>All Questions</h1>
          <Link to={'/add'}>
            <button>Ask Question</button>
          </Link>
        </div>
        <div className='countFilterWrap'>
          <span>{count} question</span>
          <div className='filterBtns'>
            <button className={'' + (filterData === "newest" && "active")} onClick={changeFilterData} name='newest'>Newest</button>
            <button className={'' + (filterData === "vote" && "active")} onClick={changeFilterData} name='vote'>Vote</button>
            <button className={'' + (filterData === "unanswered" && "active")} onClick={changeFilterData} name='unanswered'>Unanswered</button>
          </div>
        </div>
        <QuestionList items={items}/>
        <Pagination/>
      </div>
      <div className='questionPageAside'>
        <Aside />
      </div>
    </div>
    
  )
}
