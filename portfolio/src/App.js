import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from './assets/profile.png'

class App extends Component {
    state = { displayBio: false };


    toggleDisplayBio = () => {
        // The way that it should be done, because setState is aSync
        this.setState(prevState => ({ displayBio: !prevState.displayBio }));
    }

    render() {
        console.log("State changed to", this.state.displayBio);
        const bio = this.state.displayBio ? (
            <div>
                <p>I live in Platteville, and code most days.</p>
                <p>My favorite language is Swift, but I think React.js is awesome!</p>
                <p>Besides coding, I also love reptiles and 3D Printing.</p>
                <button onClick={this.toggleDisplayBio}>Show Less</button>
            </div>
        ) : (
            <div>
                <button onClick={this.toggleDisplayBio}>Read more</button>
            </div>
        );
        


        return (
            <div>
                <img src={profile} alt='profile' className="profile" />
                <h1>Hello!</h1>
                <p>My name is Tyler. I'm a Computer Science Student.</p>
                <p>I'm always looking forward to work on meaningful projects.</p>
                {bio}
                <hr />
                <Projects />
                <SocialProfiles />
            </div>
        )
    }
}

export default App;
