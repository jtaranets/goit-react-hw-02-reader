import React, { Component } from 'react';
import Controls from './controls/controls';
import Counter from './counter/Counter';
import Publication from './publication/Publication';
import styles from './reader.module.css';
import publications from '../publications.json';

export default class Reader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
    };
  }

  handleClick = e => {
    const { activePage } = this.state;
    const btnName = e.target.name;
    if (btnName === 'Вперед') {
      if (activePage < publications.length) {
        this.setState(state => ({ activePage: state.activePage + 1 }));
      }
    } else if (activePage > 1) {
      this.setState(state => ({ activePage: state.activePage - 1 }));
    }
  };

  render() {
    const { activePage } = this.state;
    return (
      <div className={styles.reader}>
        <Controls
          onClick={this.handleClick}
          currentPage={activePage}
          length={publications.length}
        />
        <Counter currentValue={activePage} total={publications.length} />
        <Publication article={publications[activePage - 1]} />
      </div>
    );
  }
}
