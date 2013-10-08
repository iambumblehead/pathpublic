var pathpublic = ((typeof module === 'object') ? module : {}).exports = {

  getOnPathStrFirstDirStr : function (path) {
    var initialPathRe = /(?:https?:\/\/|\.?\/)?([^\/]*)/,
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

    return (function getFilepathMatch (publicRootSub) {
      if (typeof publicRootSub === 'string') {
        rDir = pathpublic.getOnPathStrFirstDirStr(publicRootSub);        

        if (rDir) {
          rIndex = publicRootSub.indexOf(rDir);
          rDirPath = publicRootSub.substring(rIndex);

          // avoid matching goodcss on when searching for "/css" on
          // "goodcss/ho/css/main.css". escape path chars.
          fIndex = filepath.search(new RegExp('\(?:[\\W]\)' + rDirPath.replace(/\//g, '\/')));

          if (++fIndex) {
            rIndex = publicRoot.indexOf(rDir);
            rDir = publicRoot.substring(0, rIndex);
            rDirPath = filepath.substring(fIndex);
            // do not use node's path.join. normalizes paths that should not be
            rDirPath = rDir + rDirPath;
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
