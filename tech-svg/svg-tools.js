function svgLink(originLink, file) {
	return `<a href="${originLink}" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/RajaRakoto/github-docs/master/tech-svg/${file}" alt="${file.slice(
		0,
		file.length - 4,
	)}" width="40" height="40"/> </a> `;
}

const svgList = [
	'arch.svg',
	'grunt.svg',
	'json.svg',
	'netlify.svg',
	'npm.svg',
	'vscode.svg',
];

originLinkList = [
	'https://archlinux.fr/',
	'https://gruntjs.com/',
	'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/JSON',
	'https://www.netlify.com/',
	'https://www.npmjs.com/',
	'https://code.visualstudio.com/',
];

let i = 0;
const result = svgList.map(e => svgLink(originLinkList[i++], e));

result.forEach(r=>console.log(r))