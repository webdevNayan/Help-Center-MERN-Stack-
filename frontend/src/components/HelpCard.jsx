// HelpCard.js
import React from 'react';
import PropTypes from 'prop-types';
import HelpCardScss from './HelpCard.module.scss'; // Adjust import if needed

const HelpCard = ({ title, description, onClick }) => {
  return (
    <div className={HelpCardScss.help_card} onClick={onClick}>
      <h2>{title}</h2>
      <hr/>
      <p>{description}</p>
    </div>
  );
};

HelpCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default HelpCard;
