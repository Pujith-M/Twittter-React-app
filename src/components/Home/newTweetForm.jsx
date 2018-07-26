import React, {Component} from 'react';

class NewTweetForm extends Component {
  handleNewTweetChange = (newTweet) => {
    this.setState({newTweet: newTweet.target.value});
    console.log(newTweet.target.value)
  };
  createNewTweet = () => {
    if (this.state.newTweet.length) {
      this.props.newTweeetHandler(this.state.newTweet);
      this.setState({newTweet: ""});
      return;
    }
    alert("Tweeets cannot be empty");
  };

  constructor(props) {
    super(props);
    this.state = {
      newTweet: "",
    }
  }

  render() {
    return (
      <article className="media box">
        <figure className="media-left is-hidden-mobile">
          <img style={{borderRadius: '50%'}} src={this.props.user.image} alt="" className="image is-64x64"
               name="tweet"/>
        </figure>
        <div className="media-content">
          <textarea
            className="textarea is-info"
            placeholder="Tweeet about it!"
            required="true"
            value={this.state.newTweet}
            onChange={this.handleNewTweetChange}
          />
          <button
            style={{marginTop: '10px'}}
            className="button is-info"
            onClick={this.createNewTweet}
          >Tweeet
          </button>
        </div>
      </article>
    );
  }
}

export default NewTweetForm;
