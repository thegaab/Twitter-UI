import './Tweet.css';
import { Link } from 'react-router-dom';
import {ArrowsClockwise, ChatCircle, Heart} from 'phosphor-react'

interface TweetProps{
  content: string
}

export function Tweet(props: TweetProps) {
  return(
    <Link to="/status" className="tweet">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Kip_Thorne_by_Christopher_Michel_copy_2022.jpg/1200px-Kip_Thorne_by_Christopher_Michel_copy_2022.jpg" alt="Kip Thorne" />
      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Kip Thorne</strong>
          <span>@kipthorne</span>
        </div>
        <p>{props.content}</p>

        <div className="tweet-content-footer">
          <button type="button">
            <ChatCircle/>
            29
          </button>

          <button type="button">
            <ArrowsClockwise/>
            16
          </button>

          <button type="button">
            <Heart/>
            32
          </button>
        </div>
      </div>
    </Link>
  )
}