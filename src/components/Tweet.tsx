import './Tweet.css';
import {ChatCircle} from 'phosphor-react'

export function Tweet() {
  return(
    <a href="#" className="tweet">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Kip_Thorne_by_Christopher_Michel_copy_2022.jpg/1200px-Kip_Thorne_by_Christopher_Michel_copy_2022.jpg" alt="Kip Thorne" />
      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Kip Thorne</strong>
          <span>@kipthorne</span>
        </div>
        <p>
        Gravitational waves will bring us exquisitely accurate maps of black holes - maps of their space-time.
        Those maps will make it crystal clear whether or not what we're dealing with are black holes as described
        by general relativity.
        </p>

        <div className="tweet-content-footer">
          <button type="button">
            <ChatCircle/>
          </button>
        </div>
      </div>
    </a>
  )
}