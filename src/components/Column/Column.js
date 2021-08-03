import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Creator from '../Creator/Creator';
import {settings} from '../../data/dataStore.js';

class Column extends React.Component {
  
  constructor(props) {
    super(props);
    this.addCard = this.addCard.bind(this);
  }

  state = {
    cards: this.props.cards || [],
  }

  static propTypes = {
    title: PropTypes.node.isRequired,
    cards: PropTypes.array,
  }

  addCard(title){
    this.setState(state => (
      {
        cards: [
          ...state.cards,
          {
            key: state.cards.length ? state.cards[state.cards.length-1].key+1 : 0,
            title,
          },
        ],
      }
    ));
  }

  render() {
    return(
      <section className={styles.component}>
        <h3 className={styles.title}>{this.props.title}</h3>
        <div>
          {this.state.cards.map(({key, ...cardProps}) => (
            <Card key={key} {...cardProps} />
          ))}
        </div>
        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={this.addCard} />
        </div>
      </section>
    );
  }
}

export default Column;