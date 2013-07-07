var path = require('path');

var pathpublic = ((typeof module === 'object') ? module : {}).exports = (function (objobjwalk) {

  return {
    // last dir on public path should be discoverable in outputDir
    // should err out if basename is a file name and not a directory
    // 
    // fullpath = '/home/scr/go/blah.js'
    // basepath = './scr'
    // return === './scr/go/blah.js'

    // publicpath(publicRoot).getFromPath(filepath)
    // pathpublic.yield(filepath, publicpath)  
    yield : function(filepath, publicRoot) {
      var outputpath, olddirpathArr, oldDirArr, newDirPath, singleDir, x, isPath, len,
          publicRootDir, initialPathRe = /^\.?\/?/;

      outputpath = path.normalize(filepath);
      outputpath = ((outputpath[0] === '/') ? '' : '/') + outputpath;

      if (!publicRoot) return outputpath;

      publicRootDir = publicRoot.match(initialPathRe);
      publicRootDir = publicRootDir[0] || '';
      
      publicRoot = publicRoot.replace(initialPathRe, '');

      olddirpathArr = publicRoot.replace(/[\/]/gi, '<@>').split('<@>');
      oldDirArr = outputpath.replace(/[\/]/gi, '<@>').split('<@>'),
      newDirPath = '';
      singleDir = olddirpathArr[0] || olddirpathArr[1] || '';

      for (x = oldDirArr.length; x--;) {
        newDirPath = path.join(oldDirArr[x], newDirPath);
        if (oldDirArr[x] === singleDir) break;
      }
      // don't use path.join() which will remove relative paths
      return publicRootDir + newDirPath;  
    }
  };

}());