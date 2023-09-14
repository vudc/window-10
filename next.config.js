const isProd = process.env.NODE_ENV === 'production'

// const prefixPath = isProd ? '/window-10' : ''
const prefixPath = ''

module.exports = {
    basePath: prefixPath,
    assetPrefix: prefixPath ,

    env: {
        assetPath: prefixPath
    }
}
