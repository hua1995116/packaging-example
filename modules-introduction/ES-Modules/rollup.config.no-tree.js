export default {
	input: 'main.js',
	output: {
		file: 'dist/bundle-no-tree-shaking.js',
		format: 'esm', // immediately-invoked function expression — suitable for <script> tags
    },
    treeshake: false
};

