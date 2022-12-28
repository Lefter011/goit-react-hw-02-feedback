import React, { Component } from "react";
import { FeedbackOptions } from "./FeedBackBtn/FeedbackOptions";
import { Notification } from "./Notification/Notification";
import { Section } from "./Sections/Section";
import { FeedBackStat } from "./Statistics/FeedBackStat";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  onBtnClick = stateName => {
    this.setState((prevState) => ({
      [stateName]: prevState[stateName] + 1,
    }))
  }

  countTotalFeedback = () => {
    return this.state.bad + this.state.neutral + this.state.good;
  }

  countPositiveFeedbackPercentage = () => {
    return (this.state.good / this.countTotalFeedback() * 100).toFixed(0);
  }

render() {
  const options = Object.keys(this.state);
    return<>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={this.onBtnClick} />
      </Section>

      <Section title="Statistics">
        {this.countTotalFeedback() === 0 ? <Notification message='No feedback given' /> : (
        <div>
          <FeedBackStat
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}/>
        </div>)}
      </Section>
    </>
  }
}