//6. (na 5) pobierz dane o pogodzie i wyświetl we własnej aplikacji

import get from 'axios'

get('https://danepubliczne.imgw.pl/api/data/synop/station/bielskobiala')
    .then((res:any) => {
        const data = res.data
        console.log(`Nazwa stacji: ${res.data.stacja}`)
        console.log(`Data pomiaru: ${res.data.data_pomiaru}`)
        console.log(`Temperatura: ${res.data.temperatura}`)
        console.log(`Cisnienie: ${res.data.cisnienie}`)
        }
    )
    .catch(err => console.log('Blad'))