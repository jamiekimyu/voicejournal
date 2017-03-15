import React, {PropTypes,Component} from 'react';
import SpeechRecognition from 'react-speech-recognition'

import JournalInput from './JournalInput';
import AllPosts from './AllPosts';
import Filter from './Filter';
//import Dictaphone from '../VoiceRecognition';

const NEWPOST = -1;

const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool
}

class Journal extends Component {

  constructor(props) {
    super(props);

    const initialState = {
      posts: [],
      inputText: '',
      filterText: '',
      editPostIndex: NEWPOST,
      //transcript: ''
    }
		this.state = initialState;

    this.onChangePostText = this.onChangePostText.bind(this);
    this.onChangeFilterText = this.onChangeFilterText.bind(this);
    this.onSavePost = this.onSavePost.bind(this);
    this.onStartPostEdit = this.onStartPostEdit.bind(this);
    this.onCancelEdit = this.onCancelEdit.bind(this);
    this.onDeletePost = this.onDeletePost.bind(this);
   
  }

  componentWillMount() {
    if (localStorage.posts !== undefined) {
      this.setState({posts: JSON.parse(localStorage.posts)});
    }
  }

  onChangePostText(event) {
    console.log('22222',event.target.value)
    this.setState({inputText: event.target.value});
  }

  onChangeFilterText(event) {
    this.setState({filterText: event.target.value});
  }

  onSavePost() {
    console.log('33333333', this.state.inputText)

    // Either save a new post
    if (this.state.editPostIndex === NEWPOST) {
      const newPost = {
        text: this.state.inputText,
        date: new Date().toLocaleString(),
      };
      this.state.posts = this.state.posts.concat(newPost);
    } else {
      // or edit an existing one
      this.state.posts[this.state.editPostIndex].text = this.state.inputText;
    }

    this.persistPosts();
    this.setState({
      posts: this.state.posts,
      inputText: '',
      editPostIndex: NEWPOST,
    });

    this.props.resetTranscript();
  }

  onStartPostEdit(editPostIndex) {
    this.setState({
      editPostIndex,
      inputText: this.state.posts[editPostIndex].text,
    });
  }

  onCancelEdit() {
    this.setState({editPostIndex: NEWPOST, inputText: ''});
  }

  onDeletePost(editPostIndex) {
    this.state.posts.splice(editPostIndex, 1);
    this.setState({
      posts: this.state.posts,
      editPostIndex: NEWPOST,
      inputText: '',
    });

    this.persistPosts();
  }

  persistPosts() {
    localStorage.posts = JSON.stringify(this.state.posts);
  }

  // componentWillReceiveProps(nextProps) {
  //   if(nextProps.transcript !== this.props.transcript){
  //     console.log(nextProps)
  //     this.setState({inputValue: nextProps.transcript})
  //   }
  // }
  componentDidUpdate(prevProps){
      if(prevProps.transcript !== this.props.transcript){
        console.log(prevProps)
        this.setState({inputText: this.props.transcript})
        //this.setState({inputText: this.state.inputText.concat(this.props.transcript + ' ')})
        
    }
    // if(prevProps.transcript !== this.props.transcript){
    //     this.props.resetTranscript()
    // }
  }

  render() {
     const { transcript, resetTranscript, browserSupportsSpeechRecognition } = this.props
 
      if (!browserSupportsSpeechRecognition) {
        return null
      }
  
    return (
      <div className="container">

        <h3>Speak, and You Will Be Heard</h3>

        <JournalInput
          onSavePost={this.onSavePost}
          onChangePostText={this.onChangePostText}
          onCancelEdit={this.onCancelEdit}
          inputText={this.state.inputText}
          editing={this.state.editPostIndex !== NEWPOST} 
          transcript={transcript}
        />
        
        <br/>
        {/*<Saved />*/}
        <Filter
          onChangeFilterText={this.onChangeFilterText}
          filterText={this.state.filterText}
        />

        <br/>

        <AllPosts
          onStartPostEdit={this.onStartPostEdit}
          onDeletePost={this.onDeletePost}
          posts={this.state.posts}
          filterText={this.state.filterText}
        />

      </div>
    );
  }

}

Journal.propTypes = propTypes
export default SpeechRecognition(Journal)


