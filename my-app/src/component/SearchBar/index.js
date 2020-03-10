import React, { Component } from 'react'



class SearchBar extends Component {
    render (){
        return (
            <div className='search'>
                <div className='search__container'>
                <input 
                    type='text'
                    placeholder='Cari Surah'
                    name='input-surah'
                    value={this.props.surah}
                    onChange={this.props.onHandleInput}
                    className='search__input-box'
                 />
                 
                 {this.props.surah && this.props.searchedSurah.length
                  ? (
                    <div className='search__suggest__container'>
                        <ul>
                            {this.props.searchedSurah.map((item, index) =>{
                                return (
                                    <ol key={index}>
                                        <button onClick={() => this.props.getSurahQuran(item.nomor)} className='search__suggest__btn'>
                                            Q.S {item.nama.toUpperCase()}
                                        </button>
                                    </ol>
                                )
                            })}
                        </ul>
                    </div>
                  )
                  : null
                }
            </div>

            <button 
            className='search__button'
            onClick={()=> this.props.buttonClickBack()}
            >
                HOME
            </button>

            </div>

        )
    }
}

export default SearchBar