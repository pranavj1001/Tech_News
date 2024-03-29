import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import NewsItem from './NewsItem';

class NewsList extends Component {

  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(this.props.news);
  }

  renderRow(news) {
    return <NewsItem news={news} />;
  }

  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }

}

const mapStateToProps = state => {
  return { news: state.news };
};

// connect is like our windoe to the redux from react
export default connect(mapStateToProps)(NewsList);
