import React from 'react';
import PropTypes from 'prop-types';
import './style/donut-card.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import moment from 'moment';

const DonutCard = ({ donut, squareCard, onEdit, onRemove }) => {
  return (<div className={`flex-container donut-card-container ${ squareCard ? 'flex-column' : '' } clearfix`}>
    <div className='donut-img'>
      <img src='assets/donut_1.png' />
    </div>

    <div className='donut-info'>
      <div>{donut.name}</div>
      <div className='time'>{moment(donut.createdAt).format('DD.MM.YYYY')}</div>
    </div>

    <div className='flex-container flex-row'>
      <div className='price'>{donut.price} <FontAwesomeIcon icon='dollar-sign' /></div>

      {onEdit && <div className='edit'>
        <a onClick={() => onEdit(donut._id)}><FontAwesomeIcon icon='pencil-alt' /></a>
      </div>}

      {onRemove && <div className='delete'>
        <a onClick={() => onRemove(donut._id)}><FontAwesomeIcon icon='trash-alt' /></a>
      </div>}
    </div>

  </div>);
};

DonutCard.propsTypes = {
  squareCard: PropTypes.bool,
  donut: PropTypes.any,
  onEdit: PropTypes.func,
  onRemove: PropTypes.func,
};

export default DonutCard;
