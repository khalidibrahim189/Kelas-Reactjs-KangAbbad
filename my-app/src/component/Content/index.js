import React from 'react'
import PropTypes from 'prop-types'

import DetailSurah from './DetailSurah'
import Loading from '../Loading'
import ListSurah from './ListSurah'

const Content = (props) => {
    return (
        <div>
            {
                (props.dataSurah.length && !props.infoSurah)
                ? <ListSurah dataSurah={props.dataSurah} />
                : props.infoSurah && (
                <DetailSurah infoSurah={props.infoSurah} />
                )
            }


            <Loading isLoading={props.isFetch} />
        </div>
    )
}

Content.defaultProps = {
    judulSurah: 'Surah dalam alquran',
    dataAyat: [
        {
            teks: 'Ini ayat 1'
        },
        {
            teks: 'Ini ayat 2'
        }
    ]
}


Content.propTypes = {
    judulSurah:PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
    ]),
    dayaAyat: PropTypes.array
}
export default Content