angular.module('App', [])
.service('benifitiaryService', function($http) { 
  var benifitiary = []; //Private Variable
  return {
       GetBenifitiary: function(){ 
            // return $http.get("api/benifitiary.json").then(function(response){
            //     benifitiary = response;
            //     return benifitiary;
            // });
            
            return $http.get("http://myremitter.azurewebsites.net/RestServiceImpl.svc/AllRemitter").then(function(response){
                benifitiary = response;
                return benifitiary;
            });
            
        },
        GetBenifitiaryDetail: function(BenifitiaryId){
            for(i=0;i<benifitiary.length;i++){
                if(benifitiary[i].id == BenifitiaryId){
                    return benifitiary[i];
                }
            }
        }
    }
 });

