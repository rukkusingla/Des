var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var MapperSchema=new Schema({
	Category_id:String,
	Map_id:String,
	User_id:String
});

var user=mongoose.model('Mapper',MapperSchema,'Mapper');

function MapperDetails(User_id,callback)
{
	user.find({"User_id":User_id},{_id:0,"Category_id":1},function(err,mappers)	{
		if(err) {
			console.log(err);
			return;
		} else {
			callback(mappers);
		}
	});
}

module.exports.MapperDetails = MapperDetails;