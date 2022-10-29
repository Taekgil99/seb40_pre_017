import React from 'react'
import AnswerList from '../components/js/answer/AnswerList'
import QuestionDetail from '../components/js/question/QuestionDetail'
import { useParams } from 'react-router-dom'
import './DetailPage.scss'
import { Link } from 'react-router-dom'
import AddContent from '../components/js/addContent/AddContent'

export default function DetailPage({items}) {
  //오류! 새로고침시 useParams가 안불러짐
  //AnswerList sorted by 만들어야함
  //AddContent 마크다운 추가

  //id 파라미터 가져오기
  let params  = useParams();
  
  //params로 questionData 가져오기
  let item = items.filter(item => (
    item.question.questionId === Number(params.id)
  ))[0]

  return (
    <div className='detailPageWrap'>
      <div className='detailPageNavbar'>Navbar</div>
      <div className='detailPage'>
        <div className='detailHeadWrap'>
          <div className='detailTitleWrap'>
            <h1>{item.question.title}</h1>
            <Link to={'/add'}>
              <button>Ask Question</button>
            </Link>
          </div>

          <div className='detailDateWrap'>
            <p>Asked</p>
            <p className='detailDateValue'>{item.question.createdAt}</p>
            <p>Modefied</p>
            <p className='detailDateValue'>{item.question.modifiedAt}</p>
            <p>Viewed</p>
            <p className='detailDateValue'>{item.question.viewCount} times</p>
          </div>
        </div>
        <div className='detailBodyWrap'>
          <div className='detailContentWrap'>
          <QuestionDetail item={item} id={params.id}/>
          <AnswerList item={item}/>
          <h1 className='yourAnswer'>Your Answer</h1>
          <AddContent />
          <button className='postAnswerBtn'>Post Your Answer</button>
          </div>
          <div className='detailPageAside'>aside</div>
        </div>
      </div>
    </div>
  )
}
