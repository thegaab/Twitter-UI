import { PaperPlaneRight } from "phosphor-react"
import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import './Status.css'

export function Status(){
    const [newAnswer, setNewAnswer] = useState('')
    const [answers, setAnswers] = useState( [
      'Did someone cut their internet? lol',
      'Dr. Sheldon Cooper and Dr. amy farrah fowler?',
      'Any comments? Refutation? </3'
    ])
  
    function createNewAnswer(event: FormEvent){
      event.preventDefault()
  
      setAnswers([newAnswer, ...answers])
      setNewAnswer('')
    }
    function handleHotKeySubmit(event: KeyboardEvent){
      if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)){
        setAnswers([newAnswer, ...answers])
        setNewAnswer('')
      }
    }

  return(
    <main className="status">
      <Header title="Tweet" />

      <Tweet content="Gravitational waves will bring us exquisitely accurate maps of black holes - maps of their space-time.
        Those maps will make it crystal clear whether or not what we're dealing with are black holes as described
        by general relativity."/>
      <Separator />
      <form onSubmit={createNewAnswer} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Kip_Thorne_by_Christopher_Michel_copy_2022.jpg/1200px-Kip_Thorne_by_Christopher_Michel_copy_2022.jpg" alt="Kip Thorne" />
          <textarea
          id="tweet"
          placeholder="Tweet your answer"
          value={newAnswer}
          onKeyDown={handleHotKeySubmit}
          onChange={(event)=>{
            setNewAnswer(event.target.value)
          }}
          />
        </label>

        <button type="submit">
          <PaperPlaneRight/>
          <span>
            Asnwer
          </span>
        </button>
      </form>

      

      {answers.map(answer => {
        return <Tweet key={answer} content={answer} />
      })}
    </main>
  )
}