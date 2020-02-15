export default {
	input: 'main.js',
	output: {
		file: 'dist/bundle-tree-shaking.js',
		format: 'esm', // immediately-invoked function expression — suitable for <script> tags
    }
};

