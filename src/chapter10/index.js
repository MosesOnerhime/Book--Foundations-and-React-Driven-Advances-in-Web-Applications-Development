import log, {appName, dummyFunction, weatherTag} from './tools'; 
// log("Welcome to Chapter 10! The application name is \'" + appName + "\'. There is a function that returns \'" + dummyFunction() + "\'.");

//Output Tagged template 
log(weatherTag`The temperature is ${25} degrees centigrade. The day is `);