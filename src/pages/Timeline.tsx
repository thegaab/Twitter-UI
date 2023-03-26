import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import './Timeline.css'

let newTweet = ''

export function Timeline() {
  const [newTweet, setNewTweet] = useState('')
  const [tweets, setTweets] = useState([
    'Meu primeiro tweet',
    'ai calica',
    'Deu certo'
  ])

  function createNewTweet(event: FormEvent){
    event.preventDefault()

    setTweets([newTweet, ...tweets])
    setNewTweet('')
  }
  function handleHotKeySubmit(event: KeyboardEvent){
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)){
      setTweets([newTweet, ...tweets])
      setNewTweet('')
    }
  }
  return (
    <main className="timeLine">
      <Header title="Home" />

      <form onSubmit={createNewTweet} className="new-tweet-form">
        <label htmlFor="tweet">
          <img src="https://avatars.githubusercontent.com/u/92121533?v=4" alt="Thegaab" />
          <textarea
          id="tweet"
          placeholder="What's happening?"
          value ={newTweet}
          onKeyDown={handleHotKeySubmit}
          onChange={(event) => {
            setNewTweet(event.target.value)
          }}
          />
        </label>

        <button type="submit">Tweet</button>
      </form>

      <Separator />

      {tweets.map(tweet => {
        return <Tweet key={tweet} content={tweet} />
      })}

    </main>
  )
}