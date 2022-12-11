//3. Za pomocą klienta http połącz się z dowolną stroną i wyświetl w konsoli wynik

import {get} from 'node:http'
const response = get('ath.edu.pl')
console.log(response)