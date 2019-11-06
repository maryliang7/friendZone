import React from 'react';
import { Link, Redirect } from 'react-router-dom';


export default class UserEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.user.id,
      first_name: this.props.user.firstName,
      last_name: this.props.user.lastName,
      email: this.props.user.email,
      education: this.props.user.education,
      location: this.props.user.location,
      birth_date: this.props.user.birthDate,
      gender: this.props.user.gender,
      about_me: this.props.user.aboutMe,
      work: this.props.user.work,
      hometown: this.props.user.hometown,
      languages: this.props.user.languages,
      profilepic: null,
      coverpic: null,
      loading: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      if ((type === "first_name" || type === "last_name") && (e.target.value.length === 0 || e.target.value === " ")) {

      } else {
        this.setState({ [type]: e.target.value })
      }
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    this.setState({ loading: true })

    const formData = new FormData();

    formData.append('user[first_name]', this.state.first_name);
    formData.append('user[last_name]', this.state.last_name);
    formData.append('user[email]', this.state.email);
    formData.append('user[education]', this.state.education);
    formData.append('user[location]', this.state.location);
    formData.append('user[birth_date]', this.state.birth_date);
    formData.append('user[about_me]', this.state.about_me);
    formData.append('user[work]', this.state.work);
    formData.append('user[hometown]', this.state.hometown);
    formData.append('user[languages]', this.state.languages);
    if (this.state.profilepic) {
      formData.append('user[profilepic]', this.state.profilepic);
    }
    if (this.state.coverpic) {
      formData.append('user[coverpic]', this.state.coverpic);
    }

    this.props.updateUser(formData, this.state.id).then((x) => {
      this.setState({ loading: false })
      this.props.history.push(`/users/${x.user.id}/about`);
    });

  }

  handlePP(e){
    this.setState({ profilepic: e.currentTarget.files[0] })
  }

  handleCP(e){
    this.setState({ coverpic: e.currentTarget.files[0] })
  }

  render() {
    let loading;

    if (this.state.loading) {
      loading = <i className="fas fa-spin fa-spinner"></i>
    }

    return(
      <div className="user-page">
        <div className="user-content">
          <div className="cover-photo">
            <img src={this.props.user.coverPicUrl} />
            <p className="profile-name">{this.props.user.firstName} {this.props.user.lastName}</p>
          </div>
          <div className="profile-pic">
            <img src={this.props.user.profilePicUrl} />
          </div>
          <div className="profile-nav">
            <ul>
              <Link to={`/users/${this.props.user.id}`}><li className="user-nav-first">Timeline</li></Link>
              <li id="current-tab">About</li>
              <Link to={`/users/${this.props.user.id}/friends`}><li>Friends</li></Link>
              <Link to={`/users/${this.props.user.id}/photos`}><li>Photos</li></Link>
            </ul>
          </div>
          <section className="profile-content">
            <div className="user-about">
              <p>About</p>
              <div className="about-bottom-edit">
                <ul className="tab-header-edit">
                  <li className="active">Edit Profile</li>
                </ul>
                <div className="tab-content">
                  <form className="edit-profile-form" onSubmit={this.handleSubmit}>
                    <div>
                      <section>Profile Picture:</section>
                      <input type="file"
                        id="change-profpic"
                        accept=".jpg, .jpeg, .png"
                        onChange={this.handlePP.bind(this)}
                      />
                    </div>
                    <div>
                      <section>Cover Picture:</section>
                      <input type="file"
                        id="change-covpic"
                        accept=".jpg, .jpeg, .png"
                        onChange={this.handleCP.bind(this)}
                      />
                    </div>
                    <div>
                      <section>First Name:</section>
                      <input type="text" value={this.state.first_name} placeholder={this.state.first_name} onChange={this.handleInput("first_name")} />
                    </div>
                    <div>
                      <section>Last Name:</section>
                      <input type="text" value={this.state.last_name} placeholder={this.state.last_name} onChange={this.handleInput("last_name")} />
                    </div>
                    <div>
                      <section>Email:</section>
                      <input type="text" value={this.state.email} disabled />
                    </div>
                    <div>
                      <section>Birthday:</section>
                      <input type="date" value={this.state.birth_date || ""} onChange={this.handleInput("birth_date")} />
                    </div>
                    <div>
                      <section>Education:</section>
                      <input type="text" value={this.state.education || ""} placeholder="e.g. App Academy" onChange={this.handleInput("education")} />
                    </div>
                    <div>
                      <section>Work:</section>
                      <input type="text" value={this.state.work || ""} placeholder="e.g. Software Engineer at LinkedIn" onChange={this.handleInput("work")} />
                    </div>
                    <div>
                      <section>About Me:</section>
                      <textarea value={this.state.about_me || ""} placeholder={`Tell others about yourself!`} onChange={this.handleInput("about_me")} />
                    </div>
                    <div>
                      <section>Current Location:</section>
                      <input type="text" value={this.state.location || ""} placeholder="e.g. San Francisco, CA" onChange={this.handleInput("location")} />
                    </div>
                    <div>
                      <section>Hometown:</section>
                      <input type="text" value={this.state.hometown || ""} placeholder="Where are you from?" onChange={this.handleInput("hometown")} />
                    </div>
                    <div>
                      <section>Languages:</section>
                      <input type="text" value={this.state.languages || ""} placeholder="e.g. English, Chinese, Spanish" onChange={this.handleInput("languages")} />
                    </div>
                    <input type="submit" value="Update Profile"/> {loading}
                  </form>
                </div>

              </div>
            </div>
          </section>

        </div>
      </div>
    )
  }
} 