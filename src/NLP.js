import React, { Component } from 'react';
import stemmer from 'stemmer';
import _ from 'underscore';
import $ from 'jquery';
import neural from './NeuralNetwork.js';
import Data from './Data.js';
import StopWords from 'stopwords';

class NLP extends Component {

    constructor() {
        super();
        this.wordbase = [];
        this.documents = [];

        var data = new Data();
        this.stopwords = data.getStopWords();
        const trainingData = data.getTrainingData('NLP');
        this.neural = new neural();
        this.train(trainingData);
    }

    tokenize(string) {
        var tokens = [];
        tokens = string.split(" ");
        tokens = _.map(tokens, function (token) {
            var cleanToken = token.replace('!', '');
            cleanToken = cleanToken.replace('?', '');
            cleanToken = cleanToken.replace('.', '');
            cleanToken = cleanToken.replace(',', '');
            cleanToken = cleanToken.replace('-', '');
            cleanToken = cleanToken.replace('/', '');
            cleanToken = cleanToken.toLowerCase();
            cleanToken = stemmer(cleanToken);
            return cleanToken;
        });

        tokens = _.difference(tokens, this.stopwords);
        return tokens;
    }

    stem(word) {
        return stemmer(word);
    }

    combine(wordstems) { // And remove duplicates
        this.wordbase = _.union(this.wordbase, wordstems);
    }

    featurize(tokens) {
        var Array = [];
        
        for(var i = 0; i<this.wordbase.length - 1; i++) {
            var currentWord = this.wordbase[i];
            if(tokens.find(function(token) {
                return token === currentWord;
            })) {
                Array.push(1);
            } else {
                Array.push(0);
            }
        }

        return Array; 
    }

    train(data) {
        var xValues = [];
        var yValues = [];

        // Combine all tokens to the wordbase
        _.forEach(data, function (document) {
            var tokens = this.tokenize(document.input);
            this.combine(tokens);
        }.bind(this));

        // Featurize inputs
        _.forEach(data, function (data) {
            var tokens = this.tokenize(data.input);
            var featureArray = this.featurize(tokens);

            xValues.push(featureArray);
            yValues.push(data.output);
        }.bind(this));

        this.neural.FeedForwardNetwork(xValues, yValues);
    }

    classify(input) {
        var output = this.neural.classify(input);
        console.log(input);
        
        return output;
    }
    
    onPredictButtonPressed() {
        $('.NLP-message').text("");
        var input = $('.NLP-input').val();
        input = this.tokenize(input);
        input = this.featurize(input);
        const result = this.classify(input);
        $('.NLP-message').text(result.get());
    }

    render() {
        return (
            <div className='NLP'>
                <input class="NLP-input" type='text' placeholder='Input'></input>
                <button type='button' onClick={this.onPredictButtonPressed.bind(this)}>Predict</button>
                <label>[</label>
                <label class="NLP-message"></label>
                <label>]</label>
            </div>
        );
    }
}

export default NLP;