import React from 'react';
import PropTypes from 'prop-types';
import './style/donut-card.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import moment from 'moment';

const DonutCard = ({ donut, squareCard, onEdit, onRemove, isOwner }) => {
  return (<div className={`flex-container donut-card-container ${ squareCard ? 'square-card' : '' }`}>
    <div className='donut-img'>
      <img src={donut.image || 'assets/donut_1.png'} />
    </div>

    <div className='donut-info'>
      <div>{donut.name}</div>
      <div className='time'>{moment(donut.createdAt).format('DD.MM.YYYY')}</div>
    </div>

    <div className='flex-container flex-row'>
      {!donut.isComestible &&
        <a href='' className='delete' title={'Not comestible!'}>
          <FontAwesomeIcon icon='hand-paper' />
        </a>
      }
      <div className='price'>{donut.price} <FontAwesomeIcon icon='dollar-sign' size={'sm'} /></div>

      {isOwner && <div>
        <a className='edit' href='' onClick={() => onEdit(donut._id)}>
          <FontAwesomeIcon icon='pencil-alt' />
        </a>

        <a href='' className='delete' onClick={() => onRemove(donut._id)}>
          <FontAwesomeIcon icon='trash-alt' />
        </a>
      </div>
      }
    </div>

  </div>);
};

DonutCard.propsTypes = {
  squareCard: PropTypes.bool,
  isOwner: PropTypes.bool,
  donut: PropTypes.any,
  onEdit: PropTypes.func,
  onRemove: PropTypes.func,
};

DonutCard.defaultProps= {
  onEdit() {},
  onRemove() {},
};

export default DonutCard;
