function wildCard(str) {
    var list = [];
    var wild = [];
  
    if (str.match(/\?/)) wild.push(str);
  
    while (wild.length) {
      var wildStr = wild.pop();
  
      for (var i = 0; i < 2; i++) {
        var aux = wildStr.replace(/\?/, i);
        if (aux.match(/\?/)) 
          wild.push(aux);
        else list.push(aux);
      }
    }
    console.log(list)
    
    return list;
  }
  
  wildCard('10?1??');
