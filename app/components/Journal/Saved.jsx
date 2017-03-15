import React, {Component} from 'react';
import SpeechRecognition from 'react-speech-recognition'

import Filter from './Filter';
import AllPosts from './AllPosts';

const Saved = ({onChangeFilterText, filterText, //props from Filter
                onStartPostEdit, onDeletePost, posts, filterText}) => { //props from AllPosts
    return (
        <div>
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
