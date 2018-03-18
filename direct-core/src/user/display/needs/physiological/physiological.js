import React, { Component } from 'react';
import PhysiologicalItems from './physiological-items/physiological-items';
import waterImage from '../../../../assets/images/physiological/water-intake.png';
import timeStamp from '../../../../assets/images/physiological/time.png';
import pageTitle from '../../../../assets/images/physiological/page-title.png';


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
  }

  closeModal() {
    this.setState({
      modal: false,
      imageVisable: false
    });
  }

  setImage(activeCategory) {
    this.setState({
      image: activeCategory
    });
  }

  render() {
      let classes = this.props.data.classes;
    
      return (
        <div className="user">
        <img src={timeStamp} className='timestamp'/>
        <img src={pageTitle} className='page-title' />
        
          {
          this.state.modal && 
          <div className="modal" onClick={this.closeModal}>
            {
              this.state.image === 'Reproduction' && <img src={waterImage} />
            }
            {
              this.state.image === 'Sleep' && <img src={waterImage} />
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

