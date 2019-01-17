const postcss = require( 'postcss' )
const parser = require( 'postcss-selector-parser' )

module.exports = postcss.plugin( 'postcss-transform-tag', function ( ) {
  return function ( root, result ) {
    const ignoreTags = [
      'page'
    ]

    root.each( function rewrite( node ) {
      if ( !node.selector ) {
        if (
          node.type === 'atrule' &&
          ( node.name === 'media' || node.name === 'supports' )
        ) {
          node.each( rewrite )
        }

        return
      }

      node.selector = parser( selectors => {
        selectors.walkTags( tag => {
          if ( isChildOfPseudo( tag ) ) {
            return
          }

          // ignore orignial
          if ( !~ignoreTags.indexOf( tag.value ) ) {
            tag.value = `._${tag.value}`
          }
        } )
      } ).processSync( node.selector )
    } )

    function isChildOfPseudo( tag ) {
      let flag = false
      let target = tag.parent

      while ( target ) {
        if ( target.type === 'pseudo' ) {
          flag = true
          break
        }
        target = target.parent
      }

      return flag
    }
  }
} )
