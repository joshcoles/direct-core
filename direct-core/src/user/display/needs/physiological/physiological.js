import React, { Component } from 'react';
import PhysiologicalItems from './physiological-items/physiological-items';
import timeStamp from '../../../../assets/images/physiological/time.png';
import pageTitle from '../../../../assets/images/physiological/page-title.png';

import waterImage from '../../../../assets/images/physiological/water-intake.png';
import foodImage from '../../../../assets/images/physiological/food-intake.png';
import reproductionImage from '../../../../assets/images/physiological/reproduction.png';
import airImage from '../../../../assets/images/physiological/air.png';
import sleepImage from '../../../../assets/images/physiological/sleep.png';


class Physiological extends Component {

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
        <img src={timeStamp} className='timestamp'/>
        <img src={pageTitle} className='page-title' />
        
          {
          this.state.modal && 
          <div className="modal" onClick={this.closeModal}>
            {
              this.state.image === 'Reproduction' && <img src={foodImage} className={imageClasses}/>
            }
            {
              this.state.image === 'Water' && <img src={waterImage} className={imageClasses}/>
            }          
            {
              this.state.image === 'Food' && <img src={reproductionImage} className={imageClasses}/>
            }
            {
              this.state.image === 'Sleep' && <img src={sleepImage} className={imageClasses}/>
            }
            {
              this.state.image === 'Air' && <img src={airImage} className={imageClasses} />
            }
          </div>
        
          }
            <div className={`display-container display-${this.props.data.name}`}>
            {
              this.props.data.items.map((item, index) => {
                return (
                  <PhysiologicalItems
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

export default Physiological;

