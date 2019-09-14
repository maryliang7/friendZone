import React from 'react';

class Sidebar extends React.Component {
  render() {
    const selected = this.props.selectedPane;
    const headers = this.props.panes.map((pane, index) => {
      const title = pane.title;
      const section = index === selected? 'active' : '';

      return (
        <li key={index} className={section} onClick={() => {
          this.props.onTabChosen(index)}
          }>
            {title}{' '}
        </li>
      );
    });

    return (
      <ul className="tab-header">
        {headers}
      </ul>
    )
  }
}

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPane: 0
    };
    this.selectTab = this.selectTab.bind(this);
  }

  selectTab(num) {
    this.setState({ selectedPane: num });
  }

  outputContent(pane) {
    if (pane.title === 'Overview') {
      return(
      <div className="a-overview">
        <div><i class="fas fa-briefcase"></i> Work<span> {pane.content.work} Software Engineer at Amazon</span></div>
        <div><i class="fas fa-graduation-cap"></i> Studied at<span> {pane.content.education}</span></div>
        <div><i class="fas fa-home"></i> Lives in<span> {pane.content.location}</span></div>
      </div>
      )
    } else if (pane.title === 'Work and Education') {
      return(
        <div className="a-wande">
          <section><span>Work</span><div className="a-sub-content">{pane.content.work}Software Engineer</div></section>
          <section><span>Education</span><div className="a-sub-content">{pane.content.education}App Academy</div></section>
        </div>
      )
    } else if (pane.title === 'Places They Lived') {
      return (
        <div className="a-wande">
          <section><span>Current City</span><div className="a-sub-content">{pane.content.location}San Francisco</div></section>
          <section><span>Hometown</span><div className="a-sub-content">{pane.content.hometown}San Diego</div></section>
        </div>
      )
    } else if (pane.title === 'Contact and Basic Info') {
      return (
        <div className="a-contact">
          <div>
            <section className="a-title">Contact Information</section>
            <div className="a-outer-div"><span>Email</span><div className="a-sub-content">{pane.content.email}</div></div>
          </div>
          <div>
            <section className="a-title">Basic Information</section>
            <div className="a-outer-div"><span>Birthday</span><div className="a-sub-content">{pane.content.birthDate}</div></div>
            <div className="a-outer-div"><span>Gender</span><div className="a-sub-content">{pane.content.gender}</div></div>
            <div className="a-outer-div"><span>Languages</span><div className="a-sub-content">{pane.content.languages}</div></div>

          </div>
        </div>
      )
    }
  }

  render() {
    const pane = this.props.aboutPane[this.state.selectedPane];
    return (
      <div>
        <div className='tabs'>
          <Sidebar selectedPane={this.state.selectedPane} onTabChosen={this.selectTab} panes={this.props.aboutPane}>

          </Sidebar>
          <br></br>
          <div className='tab-content'>
            <article>
              {this.outputContent(pane)}
            </article>
          </div>
        </div>
      </div>
    )
  }
}