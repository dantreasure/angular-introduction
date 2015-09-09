var app = angular.module("app", []);

app.controller("main-ctrl", ["$scope", function($scope){
	$scope.characters = [
		{
			name: "Rick",
			id: 1,
			age: null,
			avatar: "http://vignette4.wikia.nocookie.net/rickandmorty/images/d/dd/Rick.png/revision/latest?cb=20131230003659",
			status: "alive",
			bio: "Richard 'Rick' Sanchez is the co-eponymous main character and leading protagonist of the show."
		},
		{
			name: "Morty",
			id: 2,
			age: 14,
			avatar: "http://vignette1.wikia.nocookie.net/rickandmorty/images/3/36/Morty_Interested_S1E11.JPG/revision/latest/scale-to-width-down/250?cb=20150908101833",
			status: "alive",
			bio: "Mortimer 'Morty' Smith Sr. is one of the two eponymous main protagonists in Rick and Morty."
		}
	];

	$scope.delete = function(id){
		$scope.characters.forEach(function(friend, idx){
			if(friend.id === id){
				$scope.characters.splice(idx, 1)
			}
		})
	};
}]);
