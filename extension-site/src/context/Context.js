import React from 'react';
import { ThemeContext } from './themes';

const contexts = {
}

const Context = {
    Provider: ({ children, value }) => Object.values(contexts).reduce(
        (tree, ctx) => (
            <ctx.Provider value={value}>{tree}</ctx.Provider>
        ), children
    ),
    Consumer: ({ children }) => Object.entries(contexts).reduce(
        (tree, [key, ctx]) => values => (
            <ctx.Consumer>
                {consumerValue => tree({
                    ...values,
                    [key]: consumerValue
                })}
            </ctx.Consumer>
        ), value => (Array.isArray(children) ? children[0] : children)(value)
    )()
}

export default Context;