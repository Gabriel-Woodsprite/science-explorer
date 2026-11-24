const fichas = [
	{
		id: "desc-001",
		nombre: "Descubrimiento de la penicilina",
		anio: "1928",
		area: "Medicina",
		tipo: "Descubrimiento",
		descripcion:
			"Alexander Fleming descubrió que un hongo del género Penicillium producía una sustancia capaz de impedir el crecimiento de determinadas bacterias.",
		importancia:
			"Este descubrimiento permitió el desarrollo de los antibióticos modernos y revolucionó el tratamiento de las infecciones bacterianas.",
		cientifico: ["Alexander Fleming"],
		imagen: "img/penicilina.jpg",
		fuente: "https://www.nobelprize.org/prizes/medicine/1945/summary/",
	},
	{
		id: "desc-002",
		nombre: "Descubrimiento de la estructura del ADN",
		anio: "1953",
		area: "Biología",
		tipo: "Descubrimiento",
		descripcion:
			"James Watson y Francis Crick propusieron el modelo de doble hélice del ADN, apoyándose en evidencias experimentales y en los trabajos de Rosalind Franklin y Maurice Wilkins.",
		importancia:
			"Permitió comprender cómo se almacena y transmite la información genética, impulsando el desarrollo de la genética y la biología molecular.",
		cientifico: [
			"James Watson",
			"Francis Crick",
			"Rosalind Franklin",
			"Maurice Wilkins",
		],
		imagen: "img/estructura-adn.jpg",
		fuente: "https://www.nobelprize.org/prizes/medicine/1962/summary/",
	},
	{
		id: "desc-003",
		nombre: "Descubrimiento de la radiactividad natural",
		anio: "1896",
		area: "Física",
		tipo: "Descubrimiento",
		descripcion:
			"Henri Becquerel descubrió que las sales de uranio emitían radiación espontáneamente, incluso sin exposición previa a la luz solar.",
		importancia:
			"Abrió un nuevo campo de investigación en física y permitió posteriores avances en el estudio de la estructura atómica y la radiactividad.",
		cientifico: ["Henri Becquerel"],
		imagen: "img/radiactividad.jpg",
		fuente: "https://www.nobelprize.org/prizes/physics/1903/summary/",
	},
];

const cientificos = [
	{
		id: "cient-001",
		nombre: "Ada Lovelance",
		tipoPerfil: "PERSONA",
		paisInstitucion: "Reino Unido",
		periodo: "1815-1852",
		disciplinaPrincipal: "Matemáticas y computación",
		biografia:
			"Ada Lovelace (Augusta Ada Byron, 1815–1852) fue una matemática británica que recibió formación privada y estudió matemáticas en una época en que ese tipo de educación era inusual para las mujeres. Conoció a Charles Babbage en 1833 y se interesó por su diseño de la Máquina Analítica, una máquina programable que no llegó a construirse durante su vida. En 1843 tradujo un artículo de Luigi Menabrea sobre el proyecto y añadió notas propias, más extensas que el texto original. Una nota describía una secuencia de operaciones para calcular números de Bernoulli. Su trabajo se desarrolló en colaboración con Babbage y el alcance de sus aportaciones es materia de debate histórico.",
		aportaciones:
			"1. Publicó una secuencia de operaciones para calcular números de Bernoulli con la Máquina Analítica.\n2. Explicó que una máquina de este tipo podría manipular símbolos además de cantidades, como patrones musicales, si estos se expresaban formalmente.\n3. Tradujo el artículo de Menabrea y añadió notas sustanciales, contribuyendo al debate temprano sobre computación programable.",
		descubrimientosRelacionados: ["desc-001"],
		img: "img/ada-lovelace.jpg",
		fuenteURL: "https://www.computerhistory.org/babbage/adalovelace",
	},
	{
		id: "cient-002",
		nombre: "Alan Mathison Turing",
		tipoPerfil: "PERSONA",
		paisInstitucion: "Reino Unido",
		periodo: "1912-1954",
		disciplinaPrincipal: "Matemáticas, lógica y computación",
		biografia:
			"Alan Mathison Turing (1912–1954) fue un matemático y lógico británico que contribuyó a los fundamentos teóricos de la computación. Estudió en King’s College, Cambridge, donde obtuvo una beca en 1935, y continuó su formación en Princeton. En su trabajo sobre números computables describió un modelo abstracto de cálculo que hoy se conoce como máquina de Turing y que permite estudiar qué procesos pueden ejecutarse mediante instrucciones precisas. Durante la Segunda Guerra Mundial formó parte del trabajo británico de criptoanálisis en Bletchley Park. En 1950 publicó “Computing Machinery and Intelligence”, donde examinó la pregunta de si las máquinas pueden pensar y propuso el juego de imitación como vía de discusión. Su obra abarcó lógica, computabilidad e inteligencia artificial temprana.",
		aportaciones:
			"1. Formalizó un modelo abstracto para estudiar computabilidad, hoy conocido como máquina de Turing.\n2. Participó en el trabajo colectivo de criptoanálisis en Bletchley Park durante la Segunda Guerra Mundial.\n3. Propuso el juego de imitación en su artículo de 1950 para discutir cómo evaluar la pregunta “¿pueden pensar las máquinas?”.",
		descubrimientosRelacionados: ["desc-002", "desc-003"],
		img: "img/alan-turing.jpg",
		fuenteURL: "https://turingarchive.kings.cam.ac.uk/about-alan-turing",
	},
];
const hitos = [
	{
		id: "hito-001",
		anio: "",
		descubrientoId: "desc-00",
		ficha: "",
	},
	{
		id: "hito-002",
		anio: "",
		descubrientoId: "desc-00",
		ficha: "",
	},
	{
		id: "hito-003",
		anio: "1",
		descubrientoId: "desc-00",
		ficha: "",
	},
];
const preguntas = {};

function renderFicha() {
	const contenedor = document.querySelector(".--contenedor-fichas");

	fichas.forEach(e => {
		const ficha = document.createElement("DIV");
		for (const [key, value] of Object.entries(e)) {
			if (key !== "id") {
				const p = document.createElement("P");
				p.classList.add(key);
				p.textContent = value;
				ficha.appendChild(p);
			}
		}
		contenedor.appendChild(ficha);
	});

	console.log(contenedor);
}
const hola = {
	hola: 1,
	hola3: 2,
};

function renderCientifico() {}

function renderHito() {}

export { renderFicha, renderCientifico, renderHito };
