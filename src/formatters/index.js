import getStylish from "./stylish.js";

const getFormatName = (formatName) => {
	if (formatName === undefined) {
		return 'stylish';
	}
    return formatName;
};

export default function makeFormat (tree, formatName) {
	const format = getFormatName(formatName);
	if (format === 'stylish') {
		const result = getStylish(tree);
		return result;
	}
}