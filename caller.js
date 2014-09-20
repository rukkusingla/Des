var UserDetails = require('./UserDetails.js');
var Mapper = require('./MapperDetails.js');
var Category = require('./CategoryNew.js');

function getEntireDetails(username,password,callback)
{
	UserDetails.UserDetails(username,password,function(userId){
	     	if(userId.length > 1 && userId.length < 1){
			console.log("The username and password is incorrect");
		}
		Mapper.MapperDetails(userId[0].User_id,function(catId){
			var catArray=new Array();
			var count=0;
			for(var item in catId){
				catArray[count]=catId[item].Category_id;
				count++;
			}
			Category.CategoeryDetails(catArray,function(catDetails){
				callback(catDetails);
			});
		});
	});
}


module.exports.getEntireDetails=getEntireDetails;