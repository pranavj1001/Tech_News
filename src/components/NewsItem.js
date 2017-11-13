import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class NewsItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { news, expanded } = this.props;
    const { textStyle } = styles;
    if (expanded) {
      return (
        <CardSection>
          <Text style={textStyle}>
            {news.description}
          </Text>
        </CardSection>
      );
    }
  }

  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.news;

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectNews(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
  textStyle: {
    flex: 1,
    paddingLeft: 13,
    paddingRight: 13
  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedNewsId === ownProps.news.id;
  return { expanded };
};

export default connect(mapStateToProps, actions)(NewsItem);
