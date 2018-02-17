import React from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import {Donuts} from '/imports/db';
import './style/donuts.css';

import DonutCard from '../../components/donut-card/DonutCard.jsx';

const sortByPrice = (donutA, donutB) => {
  if (donutA.price > donutB.price) {
    return -1;
  }

  if (donutA.price < donutB.price) {
    return 1;
  }

  return 0
};

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
        return (<DonutCard
          donut={donut}
          onEdit={this.editDonut}
          onRemove={this.removeDonut}
          squareCard={square}
          key={donut._id}
        />);
      });
    };

    render() {
        const {isLoading, donuts} = this.props;

        if (isLoading) {
            return <div>Loading...</div>
        }

        const topDonuts = donuts.sort(sortByPrice).slice(0, 3);

        console.log('topDonuts ------>', topDonuts, donuts.sort(sortByPrice))


        return (
          <div className='flex-container'>
            <div className='donuts-container clearfix'>
              {this.renderDonutsList(donuts)}

              <div className='flex-container'>
                {this.renderDonutsList(topDonuts, true)}
              </div>
              <div>
                <a href="" onClick={() => FlowRouter.go('donuts.create')}>Create a donut</a>
              </div>
            </div>
          </div>
        )
    }
}

export default withTracker(() => {
    const handle = Meteor.subscribe('donuts');

    return {
        loading: !handle.ready(),
        donuts: Donuts.find().fetch()
    }
})(DonutsList);

