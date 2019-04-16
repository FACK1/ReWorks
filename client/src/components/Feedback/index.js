import React, { Component } from 'react';
import axios from 'axios';
import Title from '../Shared/Title';
import Header from '../Shared/Header';
import GButton from '../Shared/GreenButton';
import Button from '../Shared/Button';
import Footer from '../Shared/Footer';
import Checkbox from '../Shared/Checkbox';
import Spinner from '../Shared/Spinner';

import {
  ThanksText, CheckboxContainer, BottomContainer, Para,
} from './feedback.style';

class Feedback extends Component {
  state = {
    options: [
      { text: 'Donate to charity', checked: false },
      { text: 'Sell on eBay', checked: false },
      { text: 'Sell on another marketplace', checked: false },
      { text: 'Swap for something else', checked: false },
      { text: 'Repair / Refurbish / Upcycle ', checked: false },
      { text: 'Upload to instagram', checked: false },
    ],
    prevFeedback: [],
    currentFeedback: [],
    loading: true,
    feedbackFlag: false,
  };

  componentDidMount() {
    axios.get('/checkcookie')
      .then(({ data: { cookie } }) => {
        if (!cookie) {
          const { history } = this.props;
          history.push('/');
        }
      }).catch(() => {
        const { history } = this.props;
        history.push('/error');
      });
    axios
      .get('/get-feedback')
      .then(({ data }) => {
        if (data.success) {
          const { feedback } = data;
          if (typeof feedback !== 'undefined') {
            this.setState({ prevFeedback: feedback });
            this.updateOptions(feedback);
            this.setState({ feedbackFlag: true });
          }
          this.setState({ loading: false });
        }
      }).catch(() => {
        const { history } = this.props;
        history.push('/error');
      });
  }

  updateOptions = (feedbacks) => {
    const { options } = this.state;
    feedbacks.map((feedback) => {
      options.map((option, i) => {
        if (feedback === option.text) {
          options[i].checked = true;
        }
      });
    });
    this.setState({ options });
  };

  handleCheckboxChange = (event) => {
    const { options } = this.state;
    let counter = 0;
    options.map((option, i) => {
      if (option.text === event.target.name) {
        options[i] = { text: event.target.name, checked: event.target.checked };
        this.setState({ options });
      }
    });

    options.map((option) => {
      if (option.checked) {
        this.setState({ feedbackFlag: true });
        counter += 1;
      }
    });

    if (counter === 0) {
      this.setState({ feedbackFlag: false });
    }
  };

  checkChange = (prev, current) => {
    if (prev.length !== current.length) {
      return true;
    }
    if (prev.length === 0 && current.length === 0) {
      return false;
    }

    const sortedPrev = prev.sort();
    const sortedCurrent = current.sort();
    sortedPrev.map((prevObject, i) => {
      if (prevObject !== sortedCurrent[i]) {
        return true;
      }
    });
    return false;
  };

  updateCurrentFeedback = () => {
    const { options, currentFeedback } = this.state;
    options.map((option) => {
      if (option.checked) {
        currentFeedback.push(option.text);
      }
    });
    this.setState({ currentFeedback });
  };

  updateAirtableFeedback = () => {
    this.updateCurrentFeedback();
    const { prevFeedback, currentFeedback } = this.state;
    const changed = this.checkChange(prevFeedback, currentFeedback);
    const { history } = this.props;

    if (changed) {
      axios
        .put('/add-feedback', { feedback: currentFeedback })
        .then(({ data }) => {
          if (data.success) {
            history.push('/item-list');
          }
        }).catch(() => {
          history.push('/error');
        });
    }
    history.push('/item-list');
  };

  render() {
    const { options, loading, feedbackFlag } = this.state;

    return (
      <React.Fragment>
        <Title {...this.props} />
        <Header title="What do you want to do with your items?" />
        <Para>Future releases of the app will add new features. We welcome your feedback.</Para>
        {!loading && (
          <CheckboxContainer>
            {options.map((option, i) => (
              <Checkbox
                key={`${i}abc`}
                name={option.text}
                checked={option.checked}
                onChange={this.handleCheckboxChange}
              />
            ))}
          </CheckboxContainer>
        )}
        {loading && <Spinner />}
        <BottomContainer>
          {feedbackFlag && (
            <ThanksText>
              Thanks for your commitment to a more sustainable world!
              <span role="img"> 🎉</span>
            </ThanksText>
          )}
          <Button />
          <GButton title="SAVE" onClick={this.updateAirtableFeedback} />
          <Footer />
        </BottomContainer>
      </React.Fragment>
    );
  }
}

export default Feedback;
