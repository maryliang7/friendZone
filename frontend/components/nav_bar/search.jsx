import React from 'react';
import { debounce } from 'lodash.debounce';
import { fetchAllUsers } from '../../util/session_api_util';
import { Link } from 'react-router-dom';

export default class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: "",
      results: []
    }
    this.handleInput = this.handleInput.bind(this);
    this.clearText = this.clearText.bind(this);
  }

  handleInput(e) {

    if (e.target.value === '') {
      this.setState( { results: [] })
      return;
    }

    // _.debounce(() => {
    //   this.setState({ search: e.target.value })
    //   this.props.fetchAllUsers(e.target.value)
    //   this.setState({ results : this.props.searchResults })
    // }, 150, e.target.value)

    this.setState({ search: e.target.value })
    fetchAllUsers(e.target.value).then(users => this.setState({ results: Object.values(users) }))
  }

  clickResult(id) {
    this.setState({ search: "", results: [] })
    this.props.fetchUser(id)
  }

  clearText(e) {
    e.target.value = "";
    setTimeout(() => {
      this.setState({ results: []})
    }, 200)
  }

  render() {
    return (
      <div className="search-bar">
        <input type="text" placeholder="Search" onBlur={this.clearText} onChange={this.handleInput} />
        <ul className="search-results">
          {this.state.results.map(user => <Link to={`/users/${user.id}`} key={user.id}>
                                            <li className="s-users" 
                                              key={user.id}
                                              onClick={() => this.clickResult(user.id)}>
                                              {user.firstName} {user.lastName}
                                            </li>
                                          </Link>)}
        </ul>
      </div>
    )
  }
}