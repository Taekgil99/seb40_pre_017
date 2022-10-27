import React from 'react'
import '../../css/questionPage/Question.scss'
import { Link } from 'react-router-dom'

export default function Question({item}) {
  //content 글자수 제한
  let contentTextLimit = item.question.content.slice(0,197)
  if(contentTextLimit.length >= 196){
    contentTextLimit = contentTextLimit + '...'
  }

  return (
    <div className='questionBox'>
      <div className='question_sideBox'>
        <p>{item.question.votes} vote</p>
        <p>{item.question.answer_count} answers</p>
        <p>{item.question.view_count} views</p>
      </div>
      <div className='question_mainBox'>
        <Link to={`/${item.question.questionId}`}>
          <h2>{item.question.title}</h2>
        </Link>
        <p>{contentTextLimit}</p>
        <div className='question_bottomBox'>
          <div className='tags'>
            {
              item.tags && item.tags.map(tag => (
                <div className='tag'>
                  {tag}
                </div>
              ))
            }
          </div>
        </div>
        
      </div>
      <div className='questionList_profile'>
            <img className='pic' src={item.member.profile_image} alt='profile'/>
            <p>{item.member.userName}</p>
            <p>createdtime ago</p>
        </div>
    </div>
  )
}
