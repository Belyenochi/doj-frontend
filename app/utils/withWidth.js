import React, { Component } from 'react';
import EventListener from 'react-event-listener';
import _ from 'lodash';

// A decorator for listening width of screen
export default function withWidth(options = {}) {
  const {
    widths,
    resizeInterval = 1000 / 60,
  } = options;

  return (RealComponent) => {
    return class WithWidth extends Component {
      state = {
        /**
         * 0, as the default value,
         * means the smallest width.
         */
        width: 0,
      };

      componentWillMount() {
        // Make sure that we are in a browser environment.
        if (typeof window !== 'undefined') {
          this.updateWidth();
        }
      }

      componentWillUnmount() {
        clearTimeout(this.deferTimer);
      }

      handleResize = () => {
        clearTimeout(this.deferTimer);
        this.deferTimer = setTimeout(() => {
          this.updateWidth();
        }, resizeInterval);
      };

      updateWidth() {
        const innerWidth = window.innerWidth;

        let width = _.reduce(widths, (result, value, key) => {
          if (innerWidth >= value) return Number(key);
          return result;
        }, 0);

        if (width !== this.state.width) {
          this.setState({
            width: width,
          });
        }
      }

      render() {
        return (
          <EventListener
            target={window}
            onResize={this.handleResize}
          >
            <RealComponent
              screenWidth={this.state.width}
              {...this.props}
            />
          </EventListener>
        );
      }
    };
  };
}