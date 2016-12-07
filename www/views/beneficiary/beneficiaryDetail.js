angular.module('App').controller('BeneficiaryDetailCtrl', function ($stateParams,benifitiaryService,$scope) {
	var beneficiaryId = $stateParams.id;
    $scope.beneficiaryDetail = benifitiaryService.GetBenifitiaryDetail(beneficiaryId);
  
});


