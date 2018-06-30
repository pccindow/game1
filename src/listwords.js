import React from 'react';
import axios from 'axios';

// 1 afficher les mots en sortie standard
// 2 afficher les mots avec un index
// random un élément du tableau
// Dans le 1er niveau, je dois afficher 5 toutes les 60 secondes
const url = 'https://api.datamuse.com/words?ml=chicken&sp=*';

export default class ListWords extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      words: [],
    };
  }

  componentDidMount() {
    axios.get(url)
      .then(res => {
        const words = res.data;
        this.setState({ words })
    })
  }

  render() {
    const wordArray = this.state.words.map((word, index) => word.word);
    //console.log(wordArray);
    let item1 = wordArray[Math.floor(Math.random()* wordArray.length)];
    let item2 = wordArray[Math.floor(Math.random()* wordArray.length)];
    let item3 = wordArray[Math.floor(Math.random()* wordArray.length)];
    let item4 = wordArray[Math.floor(Math.random()* wordArray.length)];
    let item5 = wordArray[Math.floor(Math.random()* wordArray.length)];
    return (
      <div>
        <li style={{ color: 'red' }}>{item1}</li>
        <li style={{ color: 'red' }}>{item2}</li>
        <li style={{ color: 'red' }}>{item3}</li>
        <li style={{ color: 'red' }}>{item4}</li>
        <li style={{ color: 'red' }}>{item5}</li>
      </div>
      )
  }
}

