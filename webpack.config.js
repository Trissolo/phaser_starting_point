const path = require('path');
const webpack = require('webpack');
/*
var definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'false'))
});*/

module.exports = {

  /**
   * Minimal build setup.
   * Create your app bundle.
   */

  entry: './src/index.js',
/*
	entry: {
	app: ['babel-loader',
      path.resolve(__dirname, 'public/assets/scripts/bundle.js')]
	},*/

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public', 'assets', 'scripts')
  },

  /**
   * Minimal development setup.
   * Serves files in ./public folder.
   * Refresh browser automatically when your bundle changes.
   */

  devServer: {
		publicPath: '/assets/scripts/',
		contentBase: path.join(__dirname, 'public'),
		port: 8000,
		open: true
  },

	/**
	*
	* TEST babel
	* 
	*/
	module: {
		rules: [
		  {
		    test: /\.js$/,
		    //exclude: /(node_modules|bower_components)/,
				exclude:path.resolve("./node_modules"),
				include: path.join(__dirname, "src"),///assets/scripts"),
				//include: path.resolve("./public/assets/scripts"),
		    use: {
		      loader: 'babel-loader',
		      options: {
		        presets: ['env']
		      }
		    }
		  }
		]
	},

	/**
	*
	* Plugins
	*
	*/
	plugins: [
		//definePlugin
	new webpack.optimize.UglifyJsPlugin({
      drop_console: true,
      passes: 2,
      ecma: 6,
      minimize: true,
      mangle: {
      toplevel: true,
      builtins: true
      },
      output: {
      	beautify: false,
        comments: false
      }
    })
	]

};

