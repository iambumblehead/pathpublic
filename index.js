var pathpublic = ((typeof module === 'object') ? module : {}).exports = {

  getOnPathStrFirstDirStr : function (path) {
    var initialPathRe = /(?:https?:\/\/|\/)?([^\/]*)/,
        match, dirStr = ''; 

    if (typeof path === 'string') {
      match = path.match(initialPathRe);      
      if (match) {
        dirStr = match[1];
      }
    }

    return dirStr;
  },

  // filepath: '/home/scr/app/go/blah.js'
  // publicRoot: 'static.domain.com/app/'
  // returns 'static.domain.com/app/go/blah.js'
  get : function (filepath, publicRoot) {
    var rDir, rDirPath, rIndex, fIndex;

    // 'bumblehead/app/css/main.css'.replace(/.*\//, '') === 'main.css'
    if (publicRoot === '/') {
      return filepath.replace(/.*\//, '/');
    }

    return (function getFilepathMatch (publicRootSub) {
      if (typeof publicRootSub === 'string') {
        rDir = pathpublic.getOnPathStrFirstDirStr(publicRootSub);   


        if (rDir) {
          // avoid matching goodcss when searching for "/css" on "goodcss/ho/css/main.css". 
          // escape directory separatorss.

          rIndex = publicRootSub.indexOf(rDir);
          rDirPath = publicRootSub.substring(rIndex);
          rDirPath = rDirPath.replace(/\//g, '\/');

          // match the path beginning with any word char
          rDirPath = new RegExp('\(?:\\W\)' + rDirPath + '|^' + rDirPath);

          fIndex = filepath.search(rDirPath);

          if (fIndex === 0 || ++fIndex) {
            rIndex = publicRoot.indexOf(rDir);


            rDir = publicRoot.substring(0, rIndex);
            rDirPath = filepath.substring(fIndex);

            // do not join paths to form 'rDir//rDirPath'
            // do not use node's path.join. normalizes paths that should not be
            if (rDir.match(/^[^\/]/) || rDirPath.match(/^[^\/]/)) {
              rDirPath = rDir + rDirPath;              
            }

          } else {
            publicRootSub = publicRootSub.substring(rIndex + rDir.length);
            rDirPath = getFilepathMatch(publicRootSub);
          }
        }
      }
      return rDirPath;
    }(publicRoot));
  }
};
