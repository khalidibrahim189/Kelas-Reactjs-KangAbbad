import React, { Component } from 'react';
import axios from 'axios'
import Header from './component/Header';
import Content from './component/Content';
import SearchBar from './component/SearchBar';


class App extends Component {
  constructor () {
    super()
    this.state = {
         dataSurah: [],
         infoSurah : null,
         isFetch: false,
         surah: '',
         searchedSurah: []
    }
  }

  componentDidMount () {
      this.getDataQuran()
      
  }

  getDataQuran = () => {
    axios.get('https://api.banghasan.com/quran/format/json/surat')
    .then(response => {
      console.log('getDataQuran')
      console.log(response)
      console.log(response.data)

      this.setState({
        dataSurah: response.data.hasil
      }, () => {
        console.log('state dataSurah')
        console.log(this.state.dataSurah)
      })
    })
    .catch(error => console.log('GET DATA QURAN ERROR', error))
  }

  getSurahQuran = (numberOfSurah) => {
    this.setState({ isFetch:true }, () => {
      axios.get(`https://api.banghasan.com/quran/format/json/surat/${numberOfSurah}/ayat/1-10`)
      .then(response => {
        console.log('getSurahQuran')
        console.log(response.data.ayat.data)
  
        this.setState( 
          {
            infoSurah: response.data,
            isFetch: false,
            surah: ''
          },
          () => {
            console.log('state surah al fatiha')
            console.log(this.state.infoSurah)
          }
        )
      })
      .catch(error => console.log('GET SURAH QURAN ERROR', error))
    })
  }

  onHandleInput = (event) => {
    this.setState({
        surah: event.target.value
    }, () => {
      if (!this.state.isFetch){
        const searchedSurah = this.state.dataSurah.filter(item => {
          return item.nama.toLowerCase().indexOf(this.state.surah.toLocaleLowerCase()) > -1
        })

        this.setState({ searchedSurah }, () => {

        }) 
      }
    })
  }


  buttonClickBack=() => {
     this.setState({
      infoSurah : null,
    })
  }

  render () {

    const  { dataSurah, infoSurah, isFetch, searchedSurah, surah } =  this.state
    const  { onHandleInput, getSurahQuran,buttonClickBack } = this

    return (
      <div className='container'>
          <Header />
          <SearchBar 
              searchedSurah={searchedSurah}
              surah={surah}
              onHandleInput={onHandleInput}
              getSurahQuran={getSurahQuran}
              buttonClickBack={buttonClickBack}
          />

          <Content
              isFetch={isFetch}
              infoSurah={infoSurah}
              dataSurah={dataSurah}
          />
      </div>
    );
  }
}


export default App;
