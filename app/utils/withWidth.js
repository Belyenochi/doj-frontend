import React, { Component } from 'react';
import EventListener from 'react-event-listener';
import _ from 'lodash';

/**
 * A decorator for listening width of screen
 *
 * @param options
 * @returns a function to generate Component
 *
 * Such as: @withWidth({
 *   widths: ...
 *   resizeInterval: ...
 * })
 * Class RealComponent extends Component {
 *   ...
 * }
 *
 */
export default function withWidth(options = {}) {
  const {
    /**
     * The 'widths' is a set of [key, value],
     * both of key and value should be incremental.
     * The key means the width level of screen,
     * and the value means the width size of screen.
     *
     * Such as:
     * widths = {
     *   1: 768,
     *   2: 992,
     *   3: 1200,
     * }
     */
    widths,
    resizeInterval = 1000 / 60,
  } = options;

  return (RealComponent) => {
    return class WithWidth extends Component {
      state = {
        /**
         * 0, as the default value,
         * means the lowest width level.
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
        clearTimeout(this.timer);
      }

      handleResize = () => {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.updateWidth();
        }, resizeInterval);
      };

      updateWidth() {
        // current screen width
        const innerWidth = window.innerWidth;

        /**
         * The 'width' will be the highest level
         * that current screen width meets (not less than).
         */
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