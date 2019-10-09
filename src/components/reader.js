import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Controls from './controls/controls';
import Counter from './counter/Counter';
import Publication from './publication/Publication';
import styles from './reader.module.css';

export default class Reader extends Component {
  static propTypes = {
    publications: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
    };
  }

  handleClickPrevious = () => {
    this.setState(prevState =>
      prevState.activePage > 1
        ? { activePage: prevState.activePage - 1 }
        : { activePage: prevState.activePage },
    );
  };

  handleClickNext = () => {
    const { publications } = this.props;
    this.setState(prevState =>
      prevState.activePage < publications.length
        ? { activePage: prevState.activePage + 1 }
        : { activePage: prevState.activePage },
    );
  };

  render() {
    const { activePage } = this.state;
    const { publications } = this.props;
    return (
      <div className={styles.reader}>
        <Controls
          onClickLeft={this.handleClickPrevious}
          onClickRight={this.handleClickNext}
          currentPage={activePage}
          length={publications.length}
        />
        <Counter currentValue={activePage} total={publications.length} />
        <Publication article={publications[activePage - 1]} />
      </div>
    );
  }
}
