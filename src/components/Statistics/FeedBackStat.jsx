import PropTypes from 'prop-types';

export const FeedBackStat = ({ good, bad, neutral, total, positivePercentage }) => {
    return <>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive feedback: {positivePercentage || '0'}%</p>
    </>
}

FeedBackStat.propTypes = {
    good: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.string.isRequired,
}