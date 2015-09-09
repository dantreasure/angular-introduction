var app = angular.module("app", []);

app.controller("main-ctrl", ["$scope", function($scope){
	$scope.friends = [
		{
			name: "Rick",
			id: 1,
			age: null,
			status: "alive",
			bio: "Richard 'Rick' Sanchez is the co-eponymous main character and leading protagonist of the show. He is a genius scientist whose alcoholism and reckless, sociopathic behavior are a source of concern for his daughter's family over the safety of their son, Morty."
		},
		{
			name: "Morty",
			id: 2,
			age: 14,
			status: "alive",
			bio: "Mortimer 'Morty' Smith Sr. is one of the two eponymous main protagonists in Rick and Morty. He is the grandson of Rick and is often forced to tag along on his various misadventures. Morty attends Harry Herpson High School along with his sister, Summer."
		}
	];

	$scope.delete = function(id){
		$scope.friends.forEach(function(friend, idx){
			if(friend.id === id){
				$scope.friends.splice(idx, 1)
			}
		})
	};
}]);
