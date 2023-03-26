import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import './Timeline.css'

let newTweet = ''

export function Timeline() {
  const [newTweet, setNewTweet] = useState('')
  const [tweets, setTweets] = useState([
    'Gravitational waves will bring us exquisitely accurate maps of black holes - maps of their space-time. Those maps will make it crystal clear whether or not what we`re dealing with are black holes as described by general relativity.',
    'Everything likes to live where it will age the most slowly, and gravity pulls it there',
    'Don’t trust everything I say.'
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
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Kip_Thorne_by_Christopher_Michel_copy_2022.jpg/1200px-Kip_Thorne_by_Christopher_Michel_copy_2022.jpg" alt="Kip Thorne" />
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