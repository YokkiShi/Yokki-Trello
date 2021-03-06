// @flow
import * as React from "react";
import Textarea from "react-textarea-autosize";
import { connect } from "react-redux";

type Props = {
  list: {
    title: string,
  },
    cards: Array<{ title: string, id: string }>
};

type State = {
  cardComposerIsOpen: boolean,
  newCardText: string
};

class List extends React.Component<Props, State> {
  constructor() {
    super();
    this.state = {
      cardComposerIsOpen: false,
      newCardText: ""
    };
  }

  openCardComposer = () => this.setState({ cardComposerIsOpen: true });
  handleCardComposerChange = (event: { target: { value: string } }): void => {
    this.setState({ newCardText: event.target.value });
  };

  handleSubmitCard = event => {
    event.preventDefault();
    const {newCardText} = this.state;
    const {list, dispatch} = this.props;
    dispatch({
      type: "ADD_CARD",
      payload: {cardTitle: newCardText, cardId: "card1", listId: list.id}
    });
    this.setState({newCardText: ""});
  }

  render = () => {
    const { cards, list } = this.props;
    const { cardComposerIsOpen, newCardText } = this.state;
    return (
      <div className="list">
        <div className="list-title">{list.title}</div>

        {cards.map(card => (
          <div key={card.id} className="card-title">
            {card.title}
          </div>
        ))}

        {cardComposerIsOpen ? (
          <form onSubmit ={this.handleSubmitCard}>
            <textarea
            useCacheForDOMMeasurements
            minRows={3}
            onChange={this.handleCardComposeChange}
            value={newCardText}
            />
            <input type="submit" value="Add" />
          </form>
        ) : (
          <button
            onClick={this.openCardComposer}
            className="open-composer-button"
          >
            Add a card...
          </button>
        )}
      </div>
    );
  };
}

const mapStateToProps = (state, ownProps) => {
  return{
    cards: ownProps.list.cards.map(cardID => state.cards[cardID])

  };
};
export default connect(mapStateToProps)(List);
