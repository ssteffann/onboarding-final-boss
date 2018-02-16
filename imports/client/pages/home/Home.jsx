import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style/home.css';

import InfoCard from '../../components/info-card/InfoCard.jsx';
import Banner from '../../components/banner/Banner.jsx';

const infos = [
  {
    title: 'The standard Lorem Ipsum passage, used since the 1500s',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    title: 'Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
  },
  {
    title: '1914 translation by H. Rackham',
    text: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, '
  },
];

const bannerInfo = {
  title: 'Best donut in the city!',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
};

class Home extends Component {
  render() {
    return (
      <main>
        <div className='home-banner'>
          <Banner
            imgUrl='assets/home_bg.png'
            title={bannerInfo.title}
            text={bannerInfo.text}
          />
        </div>
        <div className='flex-container align-stretch home-info-container'>
          {infos.map((item, index) => (<InfoCard title={item.title} text={item.text} key={index} />))}
        </div>
      </main>
    )
  }
}

Home.propTypes = {};
Home.defaultProps = {};

export default Home;
