const API = 'https://youtube-v31.p.rapidapi.com/captions?part=snippet&videoId=M7FIvfx5J10';

const options = {
	method: 'GET',
	headers: {
		'X-CACHEBYPASS': 'results?search_query=canal+de++videos+de+platzi+',
		'X-RapidAPI-Key': '0441561bc2msh5d1dc245f9bae2dp139c9cjsn55fba85baccb',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

/*try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}*/
//vamos a crear la funcion con async /await para llamar la API como debe ser//
//tiene un primer llamado con const reposnse, await fetch (urlAPI,options)las opciones que nos entrega rapiAPI (const options)// 
//un segundo llamado para transformar la información con const data y await response.json()
async function fetchData(urlApi){
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}
//ahora debemos crear una funcion que se invoca asi misma(funcionanonima), para desencadenar la lectura de los codigos creados//
/*(async()=>{

})();*/ 
//con lo anterior tenemos la sentencia que va a  permitir automaticamente cuando esta cargando este archivo archivo ejecutar la función//

(async() => {
	try{
		const videos = await fetchData(API);
		let view =`
		${videos.tems.map(video =>`
		<div class="group relative">
          <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
          </div>
          <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
              <span aria-hidden="true" class="absolute inset-0"></span>
             ${video.snippet.title}
            </h3>
          </div>
        </div>
		`).slice(0,4).join()}
		
		`;
	} catch {

	}

})();