import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

class NewsItem extends Component {
  render() {
    return (
      <CardSection>
        <Text>{this.props.news.title}</Text>
      </CardSection>
    );
  }
}

export default NewsItem;
