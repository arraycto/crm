import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// components
import Counter from 'components/Counter'

// action
import { getData, increment, decrement, incrementAsync, decrementAsync } from 'action'

@connect(
    state => ({
        value: state.counter,
        data: state.data
    }),
    dispatch => ({
        onIncrement() {
            dispatch(increment())
        },
        onDecrement() {
            dispatch(decrement())
        },
        onIncrementAsync() {
            dispatch(incrementAsync())
        },
        onDecrementAsync() {
            dispatch(decrementAsync())
        },
        getData() {
            dispatch(getData())
        }
    })
)
class HelloWorld extends PureComponent {
    render() {
        const {
            data,
            value,
            getData,
            onIncrement,
            onDecrement,
            onIncrementAsync,
            onDecrementAsync,
        } = this.props

        return (
            <div>
                <h1>Hello World!</h1>
                <Link to="/react">
                    <button>jump react</button>
                </Link>
                <Counter
                    value={value}
                    onIncrement={onIncrement}
                    onDecrement={onDecrement}
                    onIncrementAsync={onIncrementAsync}
                    onDecrementAsync={onDecrementAsync}
                    getData={getData}
                />
                {
                    data.map(item => (
                        <p key={item.id}>
                            {item.text}
                        </p>
                    ))
                }
            </div>
        )
    }
}

HelloWorld.propTypes = {
    data: PropTypes.any,
    value: PropTypes.number,
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func,
    onIncrementAsync: PropTypes.func,
    onDecrementAsync: PropTypes.func,
    getData: PropTypes.func,
}

export default HelloWorld