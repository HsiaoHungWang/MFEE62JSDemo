const checkEmpty = item =>{
   let isValid = true;
   item = item.trim();
    if(item === "" || item.length === 0){
       isValid = false;
    }

   return isValid;
}

const checkMailFormat = mail => {
      //做甚麼事 驗證電子郵件格式是否正確  @@、@ => 0  @wang.ispn.com.tw @ => 最後位置
      //email 中有沒有 @  indexOf('@') => -1
      //email 中有沒有 .  indexOf('.') => -1
      let isValid = true;
      if(mail.indexOf('@') === -1){
         isValid = false;
      };

      return isValid;
}