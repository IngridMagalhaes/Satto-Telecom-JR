function temHabilidade(skills){
  var resul = skills.indexOf("Javascript");
  if(resul == -1){
      console.log("false")
      return false
  }else{
      console.log("true")
      return true
  }
}
var skills =["Javascript", "ReactJS", "React Native"];
temHabilidade(skills);