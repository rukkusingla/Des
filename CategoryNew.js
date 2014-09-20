var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var CategorySchema=new Schema ({
	Category_id:String,
	Category_name:String,
	Category_des:String,
	Category_img_url:String,
	Category_redirected_url:String,
	Category_height:Number
});

var category=mongoose.model('Category',CategorySchema,'Categories');

function CategoeryDetails(myArray,callback)
{
        	category.find({"Category_id":{$in:myArray}},{_id:0},function(err,categories){
		if(err) {
			console.log(err);
			return;
		} else {
                               callback(categories);
		}
	});
}

module.exports.CategoeryDetails = CategoeryDetails;