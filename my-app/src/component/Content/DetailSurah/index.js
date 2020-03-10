import React from 'react'
import PropTypes from 'prop-types'

const DetailSurah = (props) => {
    return (
            <div className="content">
                <h2>
                    {props.infoSurah.surat.nama}
                </h2>

             <ol>
                {props.infoSurah.ayat.data.ar.map((item, index) => (
                    <li key={index}>
                      {item.teks}
                    </li>
                ))}
             </ol> 
        </div>
    )   
}


DetailSurah.defaultProps = {
    judulSurah: 'Surah dalam quran',
    infoSurah: {
        ayat: {
            data: {
                ar: [
                    {
                        teks: 'Ini ayat 1'
                    },
                    {
                        teks: 'Ini ayat 2'
                    }
                ]
            }
        }
    }
}

DetailSurah.propTypes = {
    infoSurah: PropTypes.object
}

export default DetailSurah