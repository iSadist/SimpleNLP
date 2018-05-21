class Data {

    constructor() {

        this.NLPtrainingData = [
            {
                input: 'today',
                output: 0
            },
            {
                input: 'Go to the previous day',
                output: -1
            },
            {
                input: 'Go back 4 weeks',
                output: -28
            },
            {
                input: 'go back to today',
                output: 0
            },
            {
                input: 'next day',
                output: 1
            },
            {
                input: 'tomorrow',
                output: 1
            },
            {
                input: 'previous week',
                output: -7
            },
            {
                input: '2 weeks ago',
                output: -14
            },
            {
                input: 'two weeks ago',
                output: -14
            },
            {
                input: 'last week',
                output: -7
            },
            {
                input: 'Go to today',
                output: 0
            },
            {
                input: 'Go back two days',
                output: -2
            },
            {
                input: 'Go forward seven days',
                output: 7
            },
            {
                input: 'Give me yesterday',
                output: -1
            },
            {
                input: 'Take me to four days ago',
                output: -4
            },
            {
                input: 'Go to the next day',
                output: 1
            },
            {
                input: 'Take me back six days',
                output: -6
            },

            {
                input: 'Take me back five days',
                output: -5
            },

            {
                input: 'Take me back 3 days',
                output: -3
            },

            {
                input: 'Take me back eleven days',
                output: -11
            },

            {
                input: 'Take me back six days',
                output: -6
            },

            {
                input: 'Take me back eight days',
                output: -8
            },
            {
                input: 'Take me back ten days',
                output: -10
            },
            {
                input: 'Take me back a few days',
                output: -4
            },
            {
                input: 'Take me back one day',
                output: -1
            },
            {
                input: 'Take me back three days',
                output: -3
            },
            {
                input: 'Take me back 4 days',
                output: -4
            },
            {
                input: 'Take me back ten days',
                output: -10
            },
            {
                input: 'Take me back ten days',
                output: -10
            },
            {
                input: 'Go to yesterday',
                output: -2
            },
            {
                input: 'Go back five days',
                output: -5
            },
            {
                input: 'Go back nine days',
                output: -9
            },
            {
                input: 'Go back twelve days',
                output: -12
            },
            {
                input: 'Go to today',
                output: 0
            },
            {
                input: 'Today',
                output: 0
            },
            {
                input: 'Back to today',
                output: 0
            },
            {
                input: 'Go back two days',
                output: -2
            },
            {
                input: 'Go forward five days',
                output: 5
            },
            {
                input: 'last week',
                output: -7
            },
            {
                input: 'go back 2 weeks',
                output: -14
            },
            {
                input: 'back two weeks',
                output: -14
            },
            {
                input: 'Go back two days',
                output: -2
            },
            {
                input: 'Go forward 2 weeks',
                output: 14
            }
        ];
        console.log("Current training date: " + this.NLPtrainingData.length);

        this.stopwords = ['go', 'to', 'the', 'take', 'give', 'me', 'a'];
    }

    getTrainingData (type) {
        switch (type) {
            case 'NLP':
                return this.NLPtrainingData;
            default:
                return '';
        }
    }

    getStopWords() {
        return this.stopwords;
    }
}

export default Data;