import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

class NewsItem extends Component {
  render() {
    const { titleStyle } = styles;

    return (
      <CardSection>
        <Text style={titleStyle}>
          {this.props.news.title}
        </Text>
      </CardSection>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default NewsItem;
