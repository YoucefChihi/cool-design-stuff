import React, { Component } from 'react'
import classnames from 'classnames'

let navItems = [
  {title: 'video', icon: <i className="material-icons">music_video</i>},
  {title: 'music', icon: <i className="material-icons">music_note</i>},
  {title: 'wallpaper', icon: <i className="material-icons">wallpaper</i>},
  {title: 'photo', icon: <i className="material-icons">insert_photo</i>},
  {title: 'game', icon: <i className="material-icons">videogame_asset</i>},
]

export default class Home extends Component {

  state = {current: 0}

  render() {
    return(
      <div>
        <div className="btn"
          onClick={()=>{this.props.z(!this.props.x)}}
        >
          {this.props.x+''}
        </div>

        <div className={classnames({
          "bottom-navigation": true,
          [`color-${this.state.current}`]: true
        })}>
          {navItems.map((itm,idx)=>(
            <div 
              className={classnames({
                "item": true,
                "active": this.state.current === idx
              })}
              key={idx}
              onClick={()=>{
                this.setState({current: idx})
              }}
            >
              <div className="icon">{itm.icon}</div>
              <div className="title">{itm.title}</div>
            </div>
          ))}
        </div>
      </div>
    )
  }

}
