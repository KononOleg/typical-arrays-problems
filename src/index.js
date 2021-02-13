
exports.min = function min (array) {
    if(array.length==0 || array == undefined)
    {
      return 0;
    }
    else 
    {
      var minimal = array[0];
      for(var i = 0; i < array.length; i++)
      {
        if (array[i] < minimal) 
        {
          minimal = array[i];
        } 
    }
    return minimal;
  }
}

exports.max = function max (array) {
  if(array.length==0 || array == undefined)
    {
      return 0;
    }
    else 
    {
      var maximal = array[0];
      for(var i = 0; i < array.length; i++)
      {
        if (array[i] > maximal)
        {
          maximal = array[i];
        } 
      } 
    return maximal;
  }
}

exports.avg = function avg (array) {

      if(array.length==0 || array == undefined)
      {
        return 0;
      }
      else 
      {
        var sum=0;
        for(var i=0;i<array.length;i++)
        {
            sum+=array[i];
        }
        return sum/array.length;
      }
}
