Cognito.ready("MyModule", ["dependency1", "dependency2"], function() {
	// dependency1 and dependency2 have already been executed
	// our modules are coupled via assumptions
});