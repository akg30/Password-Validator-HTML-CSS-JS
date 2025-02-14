$("#checkPassword").click(function(){

    let count_special=0;
    let count_number=0;
    let count_upper=0;
    let count_lower=0;
    let password_char=false;
    let password_length=false;
    let number_count=false;
    let upper_char=false;
    let lower_char=false;

    if(password_length==false){
        if($("#userPassword").val().length>6){
                $('#lengthGreaterThanSix').prop("checked",true);
                password_length=true;
            }
        else{
            // window.alert('Password Length Should Be Greater Than Six')
        }
    }
    if(password_char==false){
        for(let i of $("#userPassword").val()){
            if(i=='!' || i=='@' || i=='#' || i=='$' || i=='&'){
                count_special+=1
            }
        }
        if(count_special>=1){
            $('#containOneSpecialCharacter').prop("checked",true);
            password_char=true;
        }
        else{
            // window.alert(`Password Should Contain One Special Character Like ('!','@','#','$','&')`);
        }
     }
    if(number_count==false){
        for(let i of $("#userPassword").val()){
            if(i=='1' || i=='2' || i=='3' || i=='4' || i=='5' || i=='6' || i=='7' || i=='8' || i=='9' || i=='10'){
                count_number+=1
            }
        }
        if(count_number>=2){
            $('#containTwoNumbers').prop("checked",true);
            number_count=true;
        }
        else{
            // window.alert(`Password Should Contain Two Numbers`);
        }
     }
     if(upper_char==false){
        for(let i of $("#userPassword").val()){
            var charCode=i.charCodeAt(0);
            if(charCode>=65 && charCode<=90){
                count_upper+=1
            }
        }
        if(count_upper>=1){
            $('#containUpperCaseCharacter').prop("checked",true);
            upper_char=true;
        }
        else{
            // window.alert(`Password Should Contain Upper Case Character`);
        }
    }
    if(lower_char==false){
        for(let i of $("#userPassword").val()){
            var charCode=i.charCodeAt(0);
            if(charCode>=97 && charCode<=122){
                count_lower+=1
            }
        }
        if(count_lower>=1){
            $('#containLowerCaseCharacter').prop("checked",true);
            lower_char=true;
        }
        else{
            // window.alert(`Password Should Contain Lower Case Character`);
        }
    }
})