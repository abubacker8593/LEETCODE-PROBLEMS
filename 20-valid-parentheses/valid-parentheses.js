/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    let arropen = []
     let y = true;
let valid = true
    for(let i =0;i<s.length;i++){
        if(s[i]=="("||s[i]=="{"||s[i]=="["){
            arropen.push(s[i])
        }

        if(s[i]==")"||s[i]=="}"||s[i]=="]"){
            let x = arropen.pop()
           y = x+s[i] == "()" || x+s[i] == "{}" || x+s[i] =="[]" ? true : false
           console.log(x+s[i])
        }  
        if(!y){
            valid = false
            break;

        }
        
    }
    if(arropen.length!=0){
        valid = false
    }

    return valid
};