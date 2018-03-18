import React, { Component } from 'react';
import BelongingItems from './belonging-items/belonging-items';
import circles from '../../../../assets/images/belonging/blue-circles.png';
import location from '../../../../assets/images/belonging/location.png';
import pageTitle from '../../../../assets/images/belonging/page-title.png';

import familyImage from '../../../../assets/images/belonging/family-info.png';


class Belonging extends Component {

  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      image: null,
      imageVisable: false
    }

    this.insertModal = this.insertModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.setImage = this.setImage.bind(this);
  }

  componentDidMount() {
    this.props.activateButtons();
  }

  insertModal(event) {
    this.setState({
      modal: true,
      image: event.target.id
    });
    setTimeout(() => {
      this.setState({
        imageVisable: true
      })
    }, 100);
  }

  closeModal() {
    this.setState({
      imageVisable: false
    })
    setTimeout(() => {
      this.setState({
        modal: false,
        imageVisable: false
      });
    }, 1000);
  }

  setImage(activeCategory) {
    this.setState({
      image: activeCategory
    });
  }

  render() {

    let classes = this.props.data.classes;
    let imageClasses = this.state.imageVisable ? 'visible' : '';

    return (
      <div className="user">
        <img src={circles} className='blue-circle'/>
        <img src={location} className='location' />
        <img src={pageTitle} className='page-title' />


        {
          this.state.modal &&
          <div className="modal" onClick={this.closeModal}>
            {
              this.state.image === 'Family' && <img src={familyImage} className={imageClasses} />
            }
          </div>

        }


        <div className={`display-container display-${this.props.data.name}`}>
          {
            this.props.data.items.map((item, index) => {
              return (
                <BelongingItems
                  category={item}
                  colorClass={classes}
                  key={index}
                  insertModal={this.insertModal}
                  setImage={this.setImage}
                />
              )
            })
          }
        </div>

      </div>
    )
  }

}

export default Belonging;

