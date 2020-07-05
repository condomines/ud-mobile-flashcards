export function getDecks () {
    return new Promise ((res,rej) => {
        res({
        1: {
			id: '1',
          name: 'React',
          cards: [
            {
              question: 'What is React?',
              answer: 'A library for managing user interfaces'
            },
            {
              question: 'Where do you make Ajax requests in React?',
              answer: 'The componentDidMount lifecycle event'
            }
          ]
        },
        2: {
			id: '2',
            name: 'JavaScript',
            cards: [
            {
              question: 'What is a closure?',
              answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
          ]
        }
      })
    })
}


