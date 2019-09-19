import React from 'react';
import FriendRequestItemContainer from './friend_request_item_container';

export default class FriendRequests extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      requests: []
    }
  }

  componentDidMount() {
    this.setState({ requests: this.props.requests })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.requests.length != this.props.requests.length) {
      this.setState({ requests: this.props.requests });
    }
  }

  componentWillUnmount() {
    this.setState({ requests: [] })
  }

  render() {
    return (
      <ul className="request-content">
        <section>Friend Requests</section>
        {this.state.requests.map(request => <FriendRequestItemContainer 
                                                key={request.id}
                                                requestId={request.id} 
                                                user={this.props.users[request.senderId]}
                                                />)}
      </ul>
    )
  }

}



