// Filename: pathpublic.spec.js  
// Timestamp: 2016.04.03-15:24:10 (last modified)
// Author(s): bumblehead <chris@bumblehead.com>

var pathpublic = require('../index.js');

describe("pathpublic.getOnPathStrFirstDirStr", function () {
  it("should return 'static.domain.com' from 'https://static.domain.com/app'", function () {  
    var pathStr = 'https://static.domain.com/app';
    var result = pathpublic.getOnPathStrFirstDirStr(pathStr);

    expect( result ).toBe( 'static.domain.com' );
  });

  it("should return 'static.domain.com' from 'static.domain.com/app'", function () {  
    var pathStr = 'static.domain.com/app';
    var result = pathpublic.getOnPathStrFirstDirStr(pathStr);

    expect( result ).toBe( 'static.domain.com' );
  });

  it("should return 'app' from '/app/css'", function () {  
    var pathStr = '/app/css';
    var result = pathpublic.getOnPathStrFirstDirStr(pathStr);

    expect( result ).toBe( 'app' );
  });

  it("should return '.' from './app/css'", function () {  
    var pathStr = './app/css';
    var result = pathpublic.getOnPathStrFirstDirStr(pathStr);

    expect( result ).toBe( '.' );
  });

  it("should return '..' from '../app/css'", function () {  
    var pathStr = '../app/css';
    var result = pathpublic.getOnPathStrFirstDirStr(pathStr);

    expect( result ).toBe( '..' );
  });

  it("should return 'app' from 'app/css'", function () {  
    var pathStr = 'app/css';
    var result = pathpublic.getOnPathStrFirstDirStr(pathStr);

    expect( result ).toBe( 'app' );
  });

});


describe("pathpublic.get", function () {
  var result, resultExpected;

  it("should return a relative public path", function () {
    resultExpected = 'css/main.css';
    result = pathpublic.get(
      '/home/bumblehead/app/css/main.css',
      'css/'
    );

    expect( result ).toBe( resultExpected );
  });

  it("should return a relative public path", function () {
    resultExpected = 'css/main.css';
    result = pathpublic.get(
      'goodcss/home/bumblehead/app/css/main.css',
      'css/'
    );

    expect( result ).toBe( resultExpected );
  });

  it("should return a relative public path", function () {
    resultExpected = '/css/main.css';
    result = pathpublic.get(
      'goodcss/home/bumblehead/app/css/main.css',
      '/css'
    );

    expect( result ).toBe( resultExpected );
  });

  it("should return a posix relative public", function () {
    resultExpected = './css/main.css';
    result = pathpublic.get(
      '/home/bumblehead/app/css/main.css',
      './css/'
    );

    expect( result ).toBe( resultExpected );
  });

  it("should return a relative public path", function () {
    resultExpected = 'temp/root/css/main.css';
    result = pathpublic.get(
      '/home/bumblehead/app/css/main.css',
      'temp/root/css/'
    );

    expect( result ).toBe( resultExpected );
  });

  it("should return a relative public path", function () {
    resultExpected = 'temp/root/css/main.css';
    result = pathpublic.get(
      '/home/bumblehead/app/script-collection/css/main.css',
      'temp/root/css/'
    );

    expect( result ).toBe( resultExpected );
  });

  it("should return a relative public path", function () {
    resultExpected = 'script-collection/app/css/main.css';
    result = pathpublic.get(
      '/home/bumblehead/app/css/main.css',
      'script-collection/app/css/'
    );

    expect( result ).toBe( resultExpected );
  });

  it("should return a full public path", function () {
    resultExpected = 'https://static.mydomain.com/chupo/app/css/main.css';
    result = pathpublic.get(
      '/home/bumblehead/app/css/main.css',
      'https://static.mydomain.com/chupo/app/css/'
    );

    expect( result ).toBe( resultExpected );
  });

  it("should return a full public path", function () {
    resultExpected = 'https://static.mydomain.com/app/css/main.css';
    result = pathpublic.get(
      '/home/bumblehead/app/css/main.css',
      'https://static.mydomain.com/app/css/'
    );

    expect( result ).toBe( resultExpected );
  });

  it("should return a full public path", function () {
    resultExpected = 'https://static.mydomain.com/app/css/main.css';
    result = pathpublic.get(
      './bumblehead/app/css/main.css',
      'https://static.mydomain.com/app/css/'
    );

    expect( result ).toBe( resultExpected );
  });

  it("should return a full public path", function () {
    resultExpected = 'https://static.mydomain.com/app/css/main.css';
    result = pathpublic.get(
      'bumblehead/app/css/main.css',
      'https://static.mydomain.com/app/css/'
    );

    expect( result ).toBe( resultExpected );
  });

  it("should return filename and path as `/filname` if public path is `/`", function () {
    resultExpected = '/main.css';
    result = pathpublic.get(
      'bumblehead/app/css/main.css',
      '/'
    );

    expect( result ).toBe( resultExpected );
  });

  it("should return filename and path as `/filname` if public path is `/`", function () {
    resultExpected = './main.css';
    result = pathpublic.get(
      'bumblehead/app/css/main.css',
      './'
    );

    expect( result ).toBe( resultExpected );
  });    

  it("should return same filename if publicpath is first part of the path", function () {
    resultExpected = '/comments/PkBigBeastModal.mustache';
    result = pathpublic.get(
      '/comments/PkBigBeastModal.mustache', // outputpath
      '/comments' // publicpath
    );

    expect( result ).toBe( resultExpected );
  });


  // should preserve `.` in `./comments`
  it("should return filename and path as `./comments/PkBigBeastModal.mustache` if public path is `./comments`", function () {
    resultExpected = './comments/PkBigBeastModal.mustache';
    result = pathpublic.get(
      './comments/PkBigBeastModal.mustache', // outputpath
      './comments' // publicpath
    );

    expect( result ).toBe( resultExpected );
  });


});
