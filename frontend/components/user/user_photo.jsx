import React from 'react';
import { Link } from 'react-router-dom';
import FriendButtonContainer from '../button/friend_button_container';


export default class UserPhoto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: null,
      loading: false
    }
  }
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId)
  }

  handleFiles(e) {
    this.setState({ photos: e.currentTarget.files }, () => {
      const { photos } = this.state;
      const formData = new FormData();

      for (let i = 0; i < photos.length; i++) {
        formData.append('user[photos][]', photos[i]);
      }
  
      this.props.updateUser(formData, this.props.currentUser.id)
    })


  }

  render() {
    const coverButtons = (this.props.user === this.props.currentUser) ? (
      <div>
        <Link to={`/users/${this.props.currentUser.id}/edit`}><button className="edit-prof-button"><i className="fas fa-user-edit"></i> Update Profile</button></Link>
      </div>
    ) : (
        <div>
          <FriendButtonContainer />
          <button className="message-button"><i className="far fa-envelope"></i>Message</button>
        </div>
      )
    let addPhotos;

    if (this.props.user === this.props.currentUser) {
      addPhotos = (
        <label htmlFor="add-photos" className="user-add-photos">Add Photos <i className="fas fa-plus"></i>
          <input type="file"
            id="add-photos"
            multiple
            accept=".jpg, .jpeg, .png"
            onChange={this.handleFiles.bind(this)}
          />
        </label>
      )
    }


    let photos = this.props.user.photoUrls;

    return (
      <div className="user-page">
        <div className="user-content">
          <div className="cover-photo">
            <img src={this.props.user.coverPicUrl} />
            <p className="profile-name">{this.props.user.firstName} {this.props.user.lastName}</p>
            {coverButtons}
          </div>
          <div className="profile-pic">
            <img src={this.props.user.profilePicUrl} />
          </div>
          <div className="profile-nav">
            <ul>
              <Link to={`/users/${this.props.user.id}`}><li className="user-nav-first">Timeline</li></Link>
              <Link to={`/users/${this.props.user.id}/about`}><li>About</li></Link>
              <Link to={`/users/${this.props.user.id}/friends`}><li>Friends</li></Link>
              <li id="current-tab">Photos</li>
            </ul>
          </div>
          <section className="profile-content">
            <div className="user-photo">
              <p><img src="https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/oa3eD-HhoPn.png"/>
                Photos
                {addPhotos}
              </p>
              <div className="photo-bottom">
                {photos.map((photo, idx) => <div key={idx} className="photo-preview"><img src={photo} /> </div>)}
                {/* <div className="photo-left"></div>
                <div className="photo-right"></div> */}
              </div>
            </div>

          </section>

        </div>
      </div>
    )
  }
}

UserPhoto.defaultProps = {
  user: {}
};