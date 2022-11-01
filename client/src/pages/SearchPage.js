import React, {useState, useEffect} from 'react'
import QuestionList from '../components/js/questionPage/QuestionList'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './searchPage.scss'
import Pagination from '../components/js/questionPage/Pagination';
import Aside from '../components/js/aside/Aside';
import Category from '../components/js/category/Category';
import axios from 'axios';


export default function SearchPage({inputData, filterData, changeFilterData}) {
  const navigate = useNavigate();

  const [items, seItems] = useState(null);;

  useEffect(()=>{
    let param = {
      "q" : inputData,
      "tab" : filterData
    };

    axios.get('http://localhost:3001/items', {
      param : param
    })
    .then(res => {
      seItems(res.data)
    })
    .catch(err => {
      console.error(err)
    })
  }, [inputData, filterData])



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
            <button onClick={changeFilterData} name='newest'>Newest</button>
            <button onClick={changeFilterData} name='vote'>Vote</button>
            <button onClick={changeFilterData} name='unanswered'>Unanswered</button>
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
