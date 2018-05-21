import React, { Component } from 'react';
import * as tf from '@tensorflow/tfjs';
import _ from 'underscore';

class NeuralNetwork extends Component {
    constructor () {
        super();
        this.model = null;
    }

    RNN() {
        // RNN - Recurring Neural Network
        // For bitcoin prediction perhabs?
    }    

    FeedForwardNetwork(xValues, yValues) {
        const inputLength = xValues[0].length;
        const inputSize = xValues.length;
        xValues = _.flatten(xValues);

        const model = tf.sequential({
            layers: [tf.layers.dense({units: 1, inputShape: [inputLength], activation: 'linear'}) ,
            tf.layers.dense({units: 5, activation: 'tanh'}),
            tf.layers.dense({units: 1, activation: 'linear'})]
        });
        model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});
        
        const trainingInput = tf.tensor2d(xValues, [inputSize, inputLength]);
        const trainingOutput = tf.tensor2d(yValues, [yValues.length, 1]);

        model.fit(trainingInput, trainingOutput).then(() => {
            console.log('Model has been successfully compiled and trained!');
        })

        this.model = model;
    }

    classify(input) {
        input = _.flatten(input);
        return this.model.predict(tf.tensor2d(input, [1,input.length]));
    }
    
}

export default NeuralNetwork;