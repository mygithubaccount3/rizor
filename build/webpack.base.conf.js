const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const imagemin = require('imagemin-webpack-plugin').default;
const purgeCSS = require('purgecss-webpack-plugin');
const glob = require('glob');
const autoprefixer = require('autoprefixer');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const NunjucksWebpackPlugin = require('nunjucks-webpack-plugin');

const PATHS = {
    src: path.join(__dirname, '../src'),
    dist: path.join(__dirname, '../dist'),
    assets: 'assets/'
};

module.exports = {
    // BASE config
    externals: {
        paths: PATHS
    },
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: `${PATHS.assets}js/[name].js`,
        path: PATHS.dist,
        publicPath: '/'
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
                options: {
                    presets: ['@babel/preset-env']
                }
            }, {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '../img/[name].[ext]'
                }
            }, {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [autoprefixer()],
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: true }
                    }
                ]
            }, {
                test: /\.css$/,
                use: [
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    }
                ]
            }, {
                test: /\.njk|nunjucks/,
                use: ['html-withimg-loader', {
                    loader: 'nunjucks-webpack-loader',
                    options : {
                        alias: {
                            layouts: path.resolve(__dirname, '../src/njk')
                        },
                        tags: {
                            blockStart: '@{%',
                            blockEnd: '%}',
                            variableStart: '@{{',
                            variableEnd: '}}',
                            commentStart: '{#',
                            commentEnd: '#}'
                        }
                    }
                }]
            }]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: `${PATHS.assets}css/[name].css`
        }),
        new CopyWebpackPlugin([
            { from: `${PATHS.src}/img`, to: `${PATHS.assets}img` },
            { from: `${PATHS.src}/video`, to: `${PATHS.assets}video` },
        ]),
        new imagemin({
            pngquant: ({quality: 75})
        }),
        new purgeCSS({
            paths: glob.sync(`${PATHS.src}/**/*`,  { nodir: true }),
        }),
        new NunjucksWebpackPlugin({
            templates: [
                {
                    from: `${PATHS.src}/njk/index.njk`,
                    to: `index.html`
                }
            ]
        })
    ]
};
