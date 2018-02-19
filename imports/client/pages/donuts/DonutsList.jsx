import React from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import {Donuts} from '/imports/db';
import './style/donuts-list.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import DonutCard from '../../components/donut-card/DonutCard.jsx';
import { sortByPrice } from './helpers.js';


class DonutsList extends React.Component {
    constructor() {
        super();
        this.removeDonut = this.removeDonut.bind(this);
        this.editDonut = this.editDonut.bind(this);
    }

    isDonutOwner = (donut) => {
        return donut.userId === Meteor.userId()
    };

    editDonut = (_id) => {
        FlowRouter.go('donuts.edit', {_id: _id});
    };

    removeDonut = (_id) => {
        Meteor.call('donut.remove', _id);
    };

    renderDonutsList = (donuts, square) => {
      return donuts.map((donut) => {
        return (<div key={donut._id} className='flex-item'><DonutCard
          donut={donut}
          onEdit={this.editDonut}
          onRemove={this.removeDonut}
          squareCard={square}
          isOwner={this.isDonutOwner(donut)}
        /></div>);
      });
    };

    render() {
        const {isLoading, donuts} = this.props;

        if (isLoading) {
            return <div className='flex-container align-center'>Loading...</div>
        }

        // Top 3 donuts sorted by price
        const topDonuts = donuts.sort(sortByPrice).slice(0, 3);

        return (
          <div className='flex-container'>
            <div className='donuts-lists-container'>
              <div className='btn-holder'>
                <button
                  type='button'
                  className='btn btn-pink'
                  onClick={() => FlowRouter.go('donuts.create')}
                >
                  {'Create a donut'} <FontAwesomeIcon icon='plus-circle' />
                </button>
              </div>

              {this.renderDonutsList(donuts)}

              <div className='flex-container flex-row flex-wrap'>
                {this.renderDonutsList(topDonuts, true)}
              </div>
            </div>
          </div>
        )
    }
}

export default withTracker(() => {
    const handle = Meteor.subscribe('donuts');

    return {
        isLoading: !handle.ready(),
        donuts: Donuts.find().fetch()
    }
})(DonutsList);

