import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const backdropStyle = {
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  padding: 50
}

const modalStyle = {
  backgroundColor: "#fff",
  borderRadius: 5,
  border: "1px solid #eee",
  maxWidth: 500,
  minHeight: 300,
  maring: '0 auto',
  padding: 30,
  position: 'relative'
}

const modalRoot = document.getElementById("modal-root");

const footerStyle = {
  position: "absolute",
  bottom: 20
}

class Modal extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement("div");
  }
  onKeyUp = (e) => {
    // esc
    if (e.which === 27 && this.props.show) {
      this.props.onClose()
    }
  }

  componentDidMount() {
    document.addEventListener("keyup", this.onKeyUp)
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    document.removeEventListener("keyup", this.onKeyUp)
    modalRoot.removeChild(this.el);
  }

  render() {
    const modalUI = (<div style={ backdropStyle }>
      <div style={ modalStyle }>
        { this.props.children }

        <div style={ footerStyle }>
          <button onClick={ (e) => this.props.onClose() }>
            Close
          </button>
        </div>
      </div>
    </div>)

    if (!this.props.show) {
      return null;
    }

    return ReactDOM.createPortal(
      modalUI,
      this.el
    );
  }
}

export default Modal;
