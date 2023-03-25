import React from 'react'
import ReactDOM from 'react-dom/client'
import {Bell, Envelope, BookmarkSimple, Ticket, House, Hash, User, DotsThreeCircle, Sparkle} from 'phosphor-react'

import './global.css';

import twitterLogo from './assets/logo-twitter.svg';
import { Tweet } from './components/Tweet';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="layout">
      <aside className="sidebar">
        <img className="logo" src={twitterLogo} alt="logo" />

        <nav className="main-navigation">
          <a className="active" href="">
            <House weight="fill"/>
            Home
          </a>
          <a href="">
            <Hash/>
            Explore
          </a>
          <a href="">
            <Bell/>
            Notifications</a>
          <a href="">
            <Envelope/>
            Messages</a>
          <a href="">
            <BookmarkSimple/>
            Bookmarks</a>
          <a href="">
            <Ticket/>
            Twitter Blue</a>
          <a href="">
            <User/>
            Profile</a>
          <a href="">
            <DotsThreeCircle/>
            More</a>
        </nav>

        <button className="new-tweet" type="button">
          Tweet
        </button>
      </aside>

      <div className="content">
        <main className="timeLine">
          <div className="timeLine-header">
            Home
            <Sparkle/>
          </div>

          <form className="new-tweet-form">
            <label htmlFor="tweet">
              <img src="https://avatars.githubusercontent.com/u/92121533?v=4" alt="Thegaab" />
              <textarea id="tweet" placeholder="What's happening?"/>
            </label>

            <button type="submit">Tweet</button>
          </form>
          <div className="separator"/>
          <Tweet/>
          <Tweet/>
          <Tweet/>
          <Tweet/>
        </main>
      </div>
    </div>
  </React.StrictMode>,
)
