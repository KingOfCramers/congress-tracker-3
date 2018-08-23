import React from "react";

class TweetForm extends React.Component {
  state = {
    handle: "",
    error: "",
  }

  onSubmit = (e) => {
    if(!this.state.handle){
      e.preventDefault();
      this.setState(() => ({
        error: "Please add a handle.",
      }));
    } else {
      e.preventDefault();
      this.setState(() => ({
        error: ""
      }));
      this.props.onSubmit({
        handle: this.state.handle
      });
    }
  }
  onHandleChange = (e) => {
    const handle = e.target.value;
    this.setState(() => ({ handle }));
  }

  render(){
    return (
      <div>
        <form onSubmit={this.onSubmit} >
          <input type="text"
            value={this.state.handle}
            onChange={this.onHandleChange}
            placeholder="add handle..."
            id="handleSubmit"
          />
          <button>Add Handle</button>
        </form>
        {this.state.error && <p>{this.state.error}</p>}
      </div>
    );
  }
};

export default TweetForm;